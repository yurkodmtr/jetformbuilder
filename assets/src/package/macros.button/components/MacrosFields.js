import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import MacroFieldItem from './MacroFieldItem';
import useFields from '../../blocks/hooks/useFields';

function MacrosFields( {
	onClick = () => {},
	...props
} ) {
	const fields = useFields();

	return <MacrosFieldsTemplate
		fields={ fields }
		{ ...props }
	>
		<MacroFieldItem onClick={ onClick }/>
	</MacrosFieldsTemplate>;
}

export default MacrosFields;