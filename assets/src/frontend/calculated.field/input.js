import { isCalculated } from './functions';

const {
	      InputData,
	      CalculatedFormula,
      } = window.JetFormBuilderAbstract;
const {
	      applyFilters,
      } = JetFormBuilderFunctions;

const {
	      applyFilters: wpFilters,
      } = wp.hooks;

function CalculatedData() {
	InputData.call( this );

	this.formula        = '';
	this.precision      = 0;
	this.sepDecimal     = '';
	this.sepThousands   = '';
	this.visibleValNode = null;
	this.valueTypeProp  = 'number';

	this.isSupported  = function ( node ) {
		return isCalculated( node );
	};
	this.setValue     = function () {
		const formula = new CalculatedFormula( this.formula, this.root );

		formula.setResult       = () => {
			this.value.current = formula.calculate();
		};
		formula.relatedCallback = ( input, filters ) => {
			const value = wpFilters(
				'jet.fb.calculated.callback',
				false,
				input,
				this,
			);

			if ( false !== value ) {
				return value;
			}

			const current = 'number' === this.valueTypeProp
			                ? input.calcValue
			                : input.value.current;

			return applyFilters( current, filters );
		};
		formula.setResult();
		this.onChange();
	};
	this.makeReactive = function () {
		InputData.prototype.makeReactive.call( this );

		// run signals
		this.value.notify();
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		const {
			      formula,
			      precision,
			      sepDecimal,
			      valueType,
		      } = node.parentElement.dataset;

		this.formula        = formula;
		this.precision      = +precision;
		this.sepDecimal     = sepDecimal;
		this.visibleValNode = node.nextElementSibling;
		this.valueTypeProp  = valueType;
	};
	this.addListeners = function () {
		// silence is golden
	};
}

CalculatedData.prototype = Object.create( InputData.prototype );

export default CalculatedData;