/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;

const { RichText } = wp.editor;


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
				text,
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

		const setText = (
			<RichText
				tagName="span"
				placeholder={ __( 'Type Text', 'fox-blocks-web-components' ) }
				keepPlaceholderOnFocus
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
			/>
		);

		return (
			<foxland-dynamic>
				<h2 slot="title">{ setTitle }</h2>
				<p slot="text">{ setText }</p>
			</foxland-dynamic>
		);
	}
}

registerBlockType( name, {
	title: __( 'Dynamic Web Component', 'fox-blocks-web-components' ),
	description: __( 'Test web components.', 'fox-blocks-web-components' ),
	icon,
	keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'components', 'fox-blocks-web-components' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit: FoxBlocksWebComponents,
	save( { attributes } ) {

		const {
			title,
			text
		} = attributes;

		return (
			<foxland-dynamic>
				<h2 slot="title"><RichText.Content value={ title } /></h2>
				<p slot="text"><RichText.Content value={ text } /></p>
			</foxland-dynamic>
		);
	},
} );
