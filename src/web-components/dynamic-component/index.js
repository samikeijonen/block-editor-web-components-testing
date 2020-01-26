const template = document.createElement( 'template' );
template.innerHTML = `
	<style>
		:host {
			display: block;
		}
	</style>
	<slot name="title"></slot>
	<slot name="text"></slot>
`;

class FoxlandDynamic extends HTMLElement {

	 // Note that to get the attributeChangedCallback() callback to fire when an attribute changes,
	 // you have to observe the attributes.
	 // This is done by specifying a static get observedAttributes() method inside custom element class.
	 // This should return  an array containing the names of the attributes you want to observe:
	static get observedAttributes() {
		return ['title', 'text'];
	}

	constructor() {
		// Always call super first in constructor.
		super();

		// The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
		this.attachShadow( { mode: 'open' } );

		this.shadowRoot.appendChild( template.content.cloneNode( true ) );
	}

	 // The connectedCallback() runs each time the element is added to the DOM.
	connectedCallback() {
		console.log( this );
	}

	attributeChangedCallback( name, oldValue, newValue ) {
		console.log(`We have ${name} changed to ${newValue}, old value was ${oldValue}` );
		//updateStyle(this);
	}
}

export default FoxlandDynamic;
