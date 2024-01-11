const {
	      __,
      } = wp.i18n;

const {
	      cloneElement,
	      Children,
	      useState,
      } = wp.element;

const {
	      Placeholder,
	      ToggleControl,
	      Flex,
	      ExternalLink,
      } = wp.components;

const {
	      useBlockProps,
      } = wp.blockEditor;

const {
	      useSelect,
	      useDispatch,
      } = wp.data;

const {
	      PatternInserterButton,
      } = JetFBComponents;

function WelcomeBlockEdit( props ) {
	const blockProps = useBlockProps();

	const elements = useSelect(
		select => select( 'jet-forms/patterns' ).getTypes().map(
			( { view: View, ...pattern } ) => <View pattern={ pattern }/>,
		),
		[],
	);

	const saveRecord = useSelect(
		select => select( 'jet-forms/patterns' ).getSetting( 'saveRecord' ),
	);

	const { updateSettings } = useDispatch( 'jet-forms/patterns' );

	return <div { ...blockProps } >
		<Placeholder
			icon={ 'admin-tools' }
			label={ __( 'Select form pattern', 'jet-form-builder' ) }
			instructions={ __(
				'You can select one of predefined layout, or build custom',
				'jet-form-builder',
			) }
		>
			<Flex direction="column" style={{ minWidth: '100%' }}>
				<hr style={{ minWidth: '100%' }}/>
				<ToggleControl
					label={ __( 'Add Save Form Record action',
						'jet-form-builder' ) }
					checked={ saveRecord }
					onChange={ saveRecord => updateSettings( {
						saveRecord,
					} ) }
				/>
			</Flex>
			<ul
				className="block-editor-block-variation-picker__variations jet-fb"
				role="list"
				aria-label={ __( 'Form patterns', 'jet-form-builder' ) }
			>
				{ Children.map(
					elements,
					cloneElement,
				) }
			</ul>
			<Flex
				className="block-editor-block-variation-picker__skip"
				justify="space-between"
			>
				<PatternInserterButton
					patternName={ 'default' }
					variant="tertiary"
					style={ { margin: 'unset' } }
				>
					{ __( 'Start from scratch', 'jet-form-builder' ) }
				</PatternInserterButton>
				<ExternalLink
					href="https://jetformbuilder.com/features/creating-a-form/"
				>
					{ __(
						'Lear more about creating forms',
						'jet-form-builder',
					) }
				</ExternalLink>
			</Flex>
		</Placeholder>
	</div>;

}

export default WelcomeBlockEdit;