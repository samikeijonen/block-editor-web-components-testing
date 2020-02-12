/**
 * WordPress dependencies.
 */
 const { registerBlockType } = wp.blocks;

/**
 * Register block.
 *
 * @param {*} block
 */
 const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;
	registerBlockType( name, settings );
}

/**
 * Register all blocks.
 *
 * @param {array} blocks
 */
export const registerAllBlocks = ( blocks ) => {
	if ( ! blocks || ! Array.isArray( blocks ) ) {
		console.error( `registerAllBlocks expects an array. ${typeof blocks} was passed.`)
		return;
	}

	// Apply a filter to the blocks being registered.
	const filteredBlocks = wp.hooks.applyFilters( 'foxland_web_components_register_blocks', blocks );

	// Fire a waring if a block was removed, this may cause content to be affected.
	if ( blocks.length > filteredBlocks.length ) {
		console.warn( 'Blocks were removed from registration, this may adversly affect content.' )
	}

	filteredBlocks.forEach( registerBlock );
}
