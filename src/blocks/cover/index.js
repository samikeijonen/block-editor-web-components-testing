/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const { Component } = wp.element;
 const { MediaPlaceholder } = wp.blockEditor;
 const { InspectorControls, RichText } = wp.editor;
 const { PanelBody, RadioControl } = wp.components;

 /**
  * Internal dependencies
  */
 import icon from './icon';
 import metadata from './block.json';

 const { name, category, attributes } = metadata;

 class FoxBlocksWebComponents extends Component {
	 constructor() {
		 super( ...arguments );
	 }

	render() {
		const {
			attributes: {
				title,
				imgURL,
				imgID,
				minHeight
			},
			setAttributes,
		} = this.props;

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
	}
 }

 registerBlockType( name, {
	 title: __( 'Cover Web Component', 'fox-blocks-web-components' ),
	 description: __( 'Test Cover web component.', 'fox-blocks-web-components' ),
	 icon,
	 keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'components', 'fox-blocks-web-components' ), , __( 'cover', 'fox-blocks-web-components' ) ],
	 supports: {
		 align: [ 'wide', 'full' ],
	 },
	 attributes,
	 category,
	 edit: FoxBlocksWebComponents,
	 save( { attributes } ) {
		const {
			title,
			imgURL,
			imgID,
			minHeight,
		} = attributes;

		return (
			<foxland-cover minHeight={ minHeight }>
				<img className="foxland-cover-bg" src={ imgURL } alt="" />
				<h2 className="centered"><RichText.Content value={ title } /></h2>
			</foxland-cover>
		);
	 },
 } );
