/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.blockEditor;
const { InspectorControls, RichText } = wp.editor;
const { PanelBody, RadioControl } = wp.components;

const Edit = ( props ) => {
	const {
		attributes: {
			title,
			imgURL,
			imgID,
			minHeight
		},
		setAttributes,
	} = props;

	const setTitle = (
		<RichText
			tagName="span"
			className=""
			placeholder={ __( 'Type Title', 'fox-blocks-web-components' ) }
			keepPlaceholderOnFocus
			value={ title }
			onChange={ ( value ) => setAttributes( { title: value } ) }
		/>
	);

	/**
	 * Change the image
	 * @param {*} img
	 */
	const onSelectImage = ( img ) => {
		setAttributes( {
			imgID: img.id,
			imgURL: img.url,
		} );
	};

	return (
		<>
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Cover Options', 'fox-blocks-web-components' ) } initialOpen={ true }>
					<RadioControl
						label={ __( 'Min height', 'temenos' ) }
						selected={ minHeight }
						options={ [
							{ label: '30rem', value: '30rem' },
							{ label: '40rem', value: '40rem' },
							{ label: '50rem', value: '50rem' },
							{ label: '80vh', value: '80vh' },
							{ label: '100vh', value: '100vh' },
						] }
						onChange={ ( value ) => setAttributes( { minHeight: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<foxland-cover minHeight={ minHeight }>
				{ ! imgURL && (
					<div className="foxland-cover-bg">
						<MediaPlaceholder
							className=""
							onSelect={ onSelectImage }
							label={ __( 'Image background Placeholder', 'fox-blocks-web-components' ) }
						/>
					</div>
				) }

				{ imgURL && (
					<img className="foxland-cover-bg" src={ imgURL } alt="" />
				) }

				<h2 className="centered">{ setTitle }</h2>
			</foxland-cover>
		</>
	);
};

export default Edit;
