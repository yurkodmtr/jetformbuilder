const {
	      InputData,
	      BaseSignal,
      } = JetFormBuilderAbstract;

const {
	      addAction,
	      addFilter,
      } = wp.hooks;

function CheckOutInput() {
	InputData.call( this );

	this.isSupported = function ( node ) {
		return 'checkin-checkout' === node.dataset.field;
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		jQuery( node ).on( 'change.JetFormBuilderMain', () => {
			this.value.current = node.value;
		} );
	};

	this.checkIsRequired = function () {
		const [ node ] = this.nodes;

		if ( node.required ) {
			return true;
		}

		return !!node.parentElement.querySelector(
			'.jet-abaf-field__input[required]',
		);
	};
}

function CheckOutSignal() {
	BaseSignal.call( this );

	this.isSupported = function ( node, input ) {
		return input instanceof CheckOutInput;
	};

	this.runSignal = function () {

	};
}

CheckOutInput.prototype  = Object.create( InputData.prototype );
CheckOutSignal.prototype = Object.create( BaseSignal.prototype );

addAction(
	'jet.fb.observe.before',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		const { rootNode } = observable;

		for ( const checkOutWrapper of rootNode.querySelectorAll(
			'.field-type-check-in-out',
		) ) {
			const input = checkOutWrapper.querySelector(
				'input[data-field="checkin-checkout"]',
			);

			if ( !input ) {
				continue;
			}

			input.dataset.jfbSync = 1;
		}
	},
);

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/booking-compatibility',
	function ( inputs ) {
		inputs = [ CheckOutInput, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/booking-compatibility',
	function ( signals ) {
		signals = [ CheckOutSignal, ...signals ];

		return signals;
	},
);

const relatedCheckOut = [];

addFilter(
	'jet.fb.onCalculate.part',
	'jet-form-builder/booking-compatibility',
	/**
	 * @param macroPart
	 * @param formula {CalculatedFormula}
	 * @return {*}
	 */
	function ( macroPart, formula ) {
		const matches = macroPart.match( /ADVANCED_PRICE::([\w\-]+)/ );

		if ( !matches?.length || !formula?.input ) {
			return macroPart;
		}
		const [ , fieldName ] = matches;

		const checkoutField = formula.input.root.getInput( fieldName );

		if ( !checkoutField ) {
			return 0;
		}

		const formId = formula.input.getSubmit().getFormId();

		if ( !relatedCheckOut.includes( formId + checkoutField.name ) ) {
			relatedCheckOut.push( formId + checkoutField.name );

			checkoutField.watch( () => formula.setResult() );
		}

		return macroPart.replace( /(ADVANCED_PRICE::[\w\-]+)/, '%$1%' );
	},
);
