/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const { Component } = wp.element;
 const { MediaPlaceholder } = wp.blockEditor;
 const { InspectorControls, RichText } = wp.editor;
 const { PanelBody, TextControl } = wp.components;

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
						<TextControl
							label={ __( 'Min height', 'temenos' ) }
							help={ __( 'For example 30rem, or 80vh.', 'fox-blocks-web-components' ) }
							value={ minHeight }
							onChange={ ( value ) => setAttributes( { minHeight: value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<cover-l minHeight={ minHeight }>
					{ ! imgURL && (
						<div className="cover-l-bg">
							<MediaPlaceholder
								className=""
								onSelect={ onSelectImage }
								label={ __( 'Image background Placeholder', 'fox-blocks-web-components' ) }
							/>
						</div>
					) }

					{ imgURL && (
						<img className="cover-l-bg" src={ imgURL } alt="" />
					) }

					<h2 className="centered">{ setTitle }</h2>
				</cover-l>
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
			<cover-l minHeight={ minHeight }>
				<img className="cover-l-bg" src={ imgURL } alt="" />
				<h2 className="centered"><RichText.Content value={ title } /></h2>
			</cover-l>
		);
	 },
 } );
