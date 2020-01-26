/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;

/**
 * Internal dependencies
 */
import icon from './icon';
import metadata from './block.json';

import FoxlandCover from '../../web-components/cover';

const { name, category, attributes } = metadata;

class FoxBlocksCover extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
		} = this.props;

		return (
			<cover-l>
  				<h1>Welcome!</h1>
			</cover-l>
		);
	}
}

registerBlockType( name, {
	title: __( 'Cover Web Component', 'fox-blocks-web-components' ),
	description: __( 'Test Cover web component.', 'fox-blocks-web-components' ),
	icon,
	keywords: [ __( 'web', 'fox-blocks-web-components' ), __( 'cover', 'fox-blocks-web-components' ) ],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	category,
	edit: FoxBlocksCover,
	save( attributes ) {
		return (
			<cover-l>
  				<h1>Welcome!</h1>
			</cover-l>
		);
	},
} );
