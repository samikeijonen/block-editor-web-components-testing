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

const settings = {
	title: __( 'Dynamic Web Component', 'fox-blocks-web-components' ),
	description: __( 'Test web components.', 'fox-blocks-web-components' ),
	icon,
	keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'components', 'fox-blocks-web-components' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit,
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
};

// Export the name and the settings.
export { name, settings };
