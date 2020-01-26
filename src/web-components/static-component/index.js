class FoxlandStatic extends HTMLElement {
	constructor() {
		// Always call super first in constructor.
		super();

		// The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
    	// https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
		const shadow = this.attachShadow( { mode: 'open' } );

		// Styles.
		let style = document.createElement( 'style' );
		style.innerHTML = `
			:host {
				display: block;
			}
		`;

		// Content.
		let content = document.createElement( 'div' );
		content.innerHTML = `
			<h2>This is static element inside shadow DOM.</h2>
		`;

		shadow.appendChild( style );

		// Note that this lives in shadow DOM. It doesn't get global styles.
		shadow.appendChild( content );
	}

	 // The connectedCallback() runs each time the element is added to the DOM.
	connectedCallback() {
		console.log( this );
	}
}

export default FoxlandStatic;
