/**
 * Internal dependencies
 */
import FoxlandStatic from './web-components/static-component';
import FoxlandDynamic from './web-components/dynamic-component';
//import './web-components/cover';

customElements.define( 'foxland-static', FoxlandStatic );
customElements.define( 'foxland-dynamic', FoxlandDynamic );

