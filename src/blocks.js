/**
 * Internal dependencies.
 */
import { registerAllBlocks } from './blocks/utils';

/**
 * Import blocks data.
 */
import * as Cover from './blocks/cover';
import * as Dynamic from './blocks/dynamic';
import * as Static from './blocks/static';

/**
 * Register all blocks.
 */
registerAllBlocks( [
	Cover,
	Dynamic,
	Static,
] );
