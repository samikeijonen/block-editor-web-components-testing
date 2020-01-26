/**
 * Internal dependencies
 */
import FoxlandStatic from './web-components/static-component';
import FoxlandDynamic from './web-components/dynamic-component';
import Cover from './web-components/cover';
//import './web-components/cover';

customElements.define( 'foxland-static', FoxlandStatic );
customElements.define( 'foxland-dynamic', FoxlandDynamic );
customElements.define( 'cover-l', Cover );

