/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;

/**
 * Internal dependencies.
 */
import icon from './icon';
import metadata from './block.json';
import edit from './edit';

const { name, category, attributes } = metadata;

const settings =  {
	title: __( 'Cover Web Component', 'fox-blocks-web-components' ),
	description: __( 'Test Cover web component.', 'fox-blocks-web-components' ),
	icon,
	keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'components', 'fox-blocks-web-components' ), , __( 'cover', 'fox-blocks-web-components' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit,
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
}

// Export the name and the settings.
export { name, settings };
