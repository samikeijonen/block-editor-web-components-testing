const template = document.createElement( 'template' );
template.innerHTML = `
	<style>
		:host {
			background-color: #f8f61c;
			display: block;
			padding: 1rem;
			position: relative;
		}

		::slotted(p) {
			margin-bottom: 0;
		}

		.svg-component {
			left: -16px;
			position: absolute;
			top: -12px;
		}
	</style>
	<slot name="title"></slot>
	<slot name="text"></slot>
	<svg class="svg-component" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="23"><path d="M15.713 6.511c-2.41 0-4.376 2.057-4.376 4.591 0 2.527 1.96 4.591 4.376 4.591 2.41 0 4.375-2.057 4.375-4.591 0-2.527-1.966-4.591-4.375-4.591z"/><path d="M15.713 18.358c-3.88 0-7.04-3.253-7.04-7.256s3.16-7.255 7.04-7.255c3.879 0 7.04 3.252 7.04 7.255s-3.161 7.256-7.04 7.256zm16.085-7.961C27.63 3.709 22.015.027 16 .027 9.985.026 4.369 3.708.202 10.396c-.267.43-.267.98 0 1.41C4.37 18.495 9.985 22.178 16 22.178c6.015 0 11.624-3.683 15.798-10.37.267-.432.267-.98 0-1.411z"/></svg>
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
