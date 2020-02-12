/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

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
			attributes,
		} = this.props;

		return (
			<foxland-static></foxland-static>
		);
	}
}

const settings = {
	title: __( 'Web Components', 'fox-blocks-web-components' ),
	description: __( 'Test web components.', 'fox-blocks-web-components' ),
	icon,
	keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'components', 'fox-blocks-web-components' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit: FoxBlocksWebComponents,
	save( attributes ) {
		return (
			<foxland-static></foxland-static>
		);
	},
};

// Export the name and the settings.
export { name, settings };
