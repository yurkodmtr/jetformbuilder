import { useSelectPostMeta } from './hooks-helper';

const { useSelect } = wp.data;

export const useRequestEvents = () => {
	return [
		...useEventsFromGateways(),
		...useEventsFromActions(),
	];
};

const useEventsFromGateways = () => {
	const gateways = useSelectPostMeta( '_jf_gateways' );
	const { scenario = 'PAY_NOW' } = gateways[ gateways?.gateway ] ?? {};

	const eventsObjects = useSelect(
		select => select( 'jet-forms/events' ).getGatewayTypes(),
	);
	const events = [];

	for ( const event of eventsObjects ) {
		const correctGateway = event.gateway ? event.gateway === gateways.gateway : true;
		const correctScenario = event.scenario ? event.scenario === scenario : true;

		if ( correctGateway && correctScenario ) {
			events.push( event.value );
		}
	}

	return [ ...new Set( events ) ];
};

export const useEventsFromActions = () => {
	const actions = useSelectPostMeta( '_jf_actions' );

	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);
	actions.splice( currentAction.index, 1 );

	const events = [];

	for ( const action of actions ) {
		const {
			[ action.type ]: current = {},
		} = action.settings;

		if ( ! current.provideEvents?.length ) {
			continue;
		}

		events.push( ...current.provideEvents );
	}

	return [ ...new Set( events ) ];
};