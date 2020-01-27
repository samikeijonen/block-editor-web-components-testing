/**
 * @module foxland-cover
 * @description
 * A custom element for covering a block-level element horizontally,
 * with a max-width value representing the typographic measure
 * @property {string} centered=h2 A simple selector such an element or class selector, representing the centered (main) element in the cover
 * @property {string} minheight=40rem The minimum height for the **Cover**
 */
class FoxlandCover extends HTMLElement {
	constructor() {
	  super();

	  this.render = () => {
		if ( ! document.getElementById( 'foxland-cover-base' ) ) {
			let styleBase = document.createElement('style');
			styleBase.id = 'foxland-cover-base';
			styleBase.innerHTML = `
			foxland-cover {
				display: flex;
				flex-direction: column;
				position: relative;
			}

			.foxland-cover-bg,
			.editor-styles-wrapper .foxland-cover-bg {
				bottom: 0;
				object-fit: cover;
				position: absolute;
				height: 100%;
				left: 0;
				right: 0;
				top: 0;
				width: 100%;
				z-index: 0;
			}

			.centered,
			.editor-styles-wrapper .centered {
				background-color: rgba(255, 255, 255, 0.5);
				margin: auto;
				max-width: 30rem;
				padding: 1.5rem;
				position: relative;
				text-align: center;
				z-index: 10;
			}
			`.replace(/\s\s+/g, ' ').trim();
			document.head.appendChild( styleBase );
		}

		this.i = `Cover-${[this.centered, this.minheight].join('')}`;
		this.dataset.i = this.i;

		// Add min-height inline styles only if it's not already added.
		if ( ! document.getElementById( this.i ) ) {
			let styleMinHeight = document.createElement('style');
			styleMinHeight.id = this.i;

			styleMinHeight.innerHTML = `
				[data-i="${this.i}"] {
					min-height: ${this.minheight};
				}
			`.replace(/\s\s+/g, ' ').trim();
			document.head.appendChild( styleMinHeight );
		}
	  }
	}

	get centered() {
		return this.getAttribute('centered') || 'h2';
	}

	set centered(val) {
		return this.setAttribute('centered', val);
	}

	get minheight() {
		return this.getAttribute('minheight') || '40rem';
	}

	set minheight(val) {
		return this.setAttribute('minheight', val);
	}

	static get observedAttributes() {
		return ['centered', 'minheight'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback( name, oldValue, newValue ) {
		console.log(`We have ${name} changed to ${newValue}, old value was ${oldValue}` );
		this.render();
	}
}

export default FoxlandCover;
