import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const { ReactiveVar, LoadingReactiveVar } = JetFormBuilderAbstract;

function SearchInput( searchNode ) {
	this.searchNode = searchNode;

	this.controller = null;
	this.search     = new ReactiveVar( '' );
	this.search.make();
	this.search.watch( this.onChangeSearch.bind( this ) );

	this.response = new ReactiveVar( false );
	this.response.make();

	this.loading = new LoadingReactiveVar();
	this.loading.make();

	this.initEventListeners();
}

SearchInput.prototype.initEventListeners = function () {
	this.searchNode.addEventListener( 'input', ( event ) => {
		this.search.current = event.target.value;
	} );
};

SearchInput.prototype.onChangeSearch = function () {
	this.abort();

	if ( 2 > this.search.current?.length ) {
		return;
	}

	const path = addQueryArgs(
		JetMapFieldsSettings.apiAutocomplete,
		{
			query: this.search.current,
		},
	);

	this.loading.start();

	apiFetch( {
		path,
		signal: this.controller.signal,
	} ).then( response => {
		this.response.current = {
			success: !!response.success,
			response,
		};
	} ).catch( error => {
		this.response.current = {
			success: false,
			response: error,
		};
	} ).finally( () => {
		this.loading.end();
	} );
};

SearchInput.prototype.abort = function () {
	this.controller?.abort?.();

	this.controller = new AbortController();
};

export default SearchInput;