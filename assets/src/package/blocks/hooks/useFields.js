import { storeName } from '../store';

const {
	      useSelect,
      } = wp.data;

/**
 * @param options {{
 * withInner: Boolean|undefined,
 * excludeCurrent: Boolean|undefined
 * currentId: String|undefined
 * }}
 * @param deps {undefined|Array}
 * @returns {Array}
 */
function useFields( options = {}, deps= undefined ) {
	return useSelect(
		select => select( storeName ).getFields( options ),
		deps,
	);
}

export default useFields;