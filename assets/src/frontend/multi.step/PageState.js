import ConditionPageStateItem from './ConditionPageStateItem';

const {
	      ReactiveVar,
	      createConditionalBlock,
      } = JetFormBuilderAbstract;

const {
	      validateInputs,
      } = JetFormBuilderFunctions;

/**
 * @property {array<InputData>|*} inputs
 * @property {MultiStepState} state
 */
function PageState( node, state ) {
	this.node      = node;
	this.index     = +node.dataset.page;
	this.state     = state;
	this.inputs    = [];
	this.canSwitch = new ReactiveVar( null );
	this.isShow    = new ReactiveVar( 1 === this.index );

	this.observeInputs();
	this.observeConditionalBlocks();

	this.canSwitch.make();
	this.isShow.make();
	this.isShow.watch( () => {
		this.isShow.current ? this.onShow() : this.onHide();
	} );

	this.addButtonsListeners();
	this.updateStateAsync().then( () => {} ).catch( () => {} );

	this.getLockState().watch( () => {
		this.canSwitch.current = !this.getLockState().current;
	} );
}

PageState.prototype.observeInputs = function () {
	for ( const node of this.node.querySelectorAll(
		'[data-jfb-sync]' ) ) {
		if (
			!this.isNodeBelongThis( node ) ||
			!node.hasOwnProperty( 'jfbSync' ) ||
			!node.jfbSync.reporting.restrictions.length
		) {
			continue;
		}

		this.inputs.push( node.jfbSync );

		node.jfbSync.watchValidity( () => this.updateState() );
	}
};
/**
 * Buttons for switching between pages are hidden conditional blocks
 * that perform their function (disable)
 * if all required fields are filled in the page.
 */
PageState.prototype.observeConditionalBlocks = function () {
	for ( const node of this.node.querySelectorAll(
		'[data-jfb-conditional]',
	) ) {
		if ( !this.isNodeBelongThis( node ) ) {
			continue;
		}
		const block = createConditionalBlock(
			node,
			this.state.getRoot(),
		);

		for ( const condition of block.list.getConditions() ) {
			if ( condition instanceof ConditionPageStateItem ) {
				block.page = this;
				this.canSwitch.watch( () => block.list.onChangeRelated() );

				break;
			}
		}
	}
};
PageState.prototype.onShow      = function () {
	this.node.classList.remove( 'jet-form-builder-page--hidden' );
};
PageState.prototype.onHide      = function () {
	this.node.classList.add( 'jet-form-builder-page--hidden' );
};
PageState.prototype.updateState = function () {
	for ( const input of this.getInputs() ) {
		if ( input.reporting.validityState.current ) {
			continue;
		}
		this.canSwitch.current = false;
		return;
	}

	this.canSwitch.current = true;
};

PageState.prototype.updateStateAsync    = async function ( silence = true ) {
	try {
		await validateInputs( this.getInputs(), silence );

		this.canSwitch.current = true;
	}
	catch ( error ) {
		this.canSwitch.current = false;
	}
};
PageState.prototype.addButtonsListeners = function () {
	const switchButtons = this.node.querySelectorAll(
		'.jet-form-builder__next-page, .jet-form-builder__prev-page',
	);

	for ( const switchButton of switchButtons ) {
		if ( !this.isNodeBelongThis( switchButton ) ) {
			continue;
		}
		const isPrev = switchButton.classList.contains(
			'jet-form-builder__prev-page',
		);

		switchButton.addEventListener(
			'click',
			() => this.changePage( isPrev ),
		);
	}
};
PageState.prototype.changePage          = async function ( isBack ) {
	if ( isBack ) {
		this.state.index.current = this.index - 1;

		return;
	}

	if ( this.getLockState().current ) {
		return;
	}

	await this.updateStateAsync( false );

	if ( !this.canSwitch.current ) {
		return;
	}

	this.state.index.current = this.index + 1;
};
PageState.prototype.isNodeBelongThis    = function ( node ) {
	const parentPage = node.closest( '.jet-form-builder-page' );

	return parentPage ? parentPage.isEqualNode( this.node ) : false;
};
/**
 * @returns {array<InputData>|*}
 */
PageState.prototype.getInputs = function () {
	return this.inputs;
};

/**
 * @return {LoadingReactiveVar}
 */
PageState.prototype.getLockState = function () {
	/**
	 * @type {Observable}
	 */
	const root = this.state.getRoot();
	const form = root?.parent?.root?.form ?? root.form;

	return form.lockState;
};

export default PageState;