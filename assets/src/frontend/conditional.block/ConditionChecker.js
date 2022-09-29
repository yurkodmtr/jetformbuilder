function ConditionChecker() {
}

/**
 * @param condition {ConditionFieldItem}
 * @param input {InputData}
 */
ConditionChecker.prototype = {
	isSupported: () => true,
	check: function ( condition, input ) {
		const current        = input.value.current;
		const conditionValue = condition.value;

		switch ( condition.operator ) {
			case 'equal':
				return current === conditionValue[ 0 ];

			case 'greater':
				return +(current) > +(conditionValue[ 0 ]);

			case 'less':
				return +(current) < +(conditionValue[ 0 ]);

			case 'between':
				if ( !Object.keys( conditionValue )?.length ) {
					return false;
				}

				return (
					conditionValue[ 0 ] <= +current &&
					+current <= conditionValue[ 1 ]
				);

			case 'one_of':
				if ( !Object.keys( conditionValue )?.length ) {
					return false;
				}

				return 0 <= conditionValue.indexOf( current );

			case 'contain':
				return 0 <= current.indexOf( conditionValue[ 0 ] );

			default:
				return false;
		}
	},
};

export default ConditionChecker;