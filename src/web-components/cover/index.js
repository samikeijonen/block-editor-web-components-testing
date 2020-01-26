/**
 * @module cover-l
 * @description
 * A custom element for covering a block-level element horizontally,
 * with a max-width value representing the typographic measure
 * @property {string} centered=h2 A simple selector such an element or class selector, representing the centered (main) element in the cover
 * @property {string} space=var(--s1) The minimum space between and around all of the child elements
 * @property {string} minHeight=40rem The minimum height for the **Cover**
 * @property {boolean} noPad=false Whether the spacing is also applied as padding to the container element
 */
class Cover extends HTMLElement {
	constructor() {
	  super();

	  this.render = () => {
		this.i = `Cover-${[this.centered, this.space, this.minHeight, this.noPad].join('')}`;
		this.dataset.i = this.i;
		let styleEl = document.createElement('style');
		styleEl.id = this.i;
		styleEl.innerHTML = `
		cover-l {
			display: flex;
			flex-direction: column;
			position: relative;
		}

		.cover-l-bg,
		.editor-styles-wrapper .cover-l-bg {
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

		[data-i="${this.i}"] {
			min-height: ${this.minHeight};
			padding: ${!this.noPad ? this.space : '0'};
		}

		[data-i="${this.i}"] > * {
			margin-top: ${this.space};
			margin-bottom: ${this.space};
		}

		[data-i="${this.i}"] > :first-child:not(${this.centered}) {
			margin-top: 0;
		}

		[data-i="${this.i}"] > :last-child:not(${this.centered}) {
			margin-bottom: 0;
		}

		[data-i="${this.i}"] > ${this.centered},
		.editor-styles-wrapper [data-i="${this.i}"] > * {
			margin-top: auto;
			margin-bottom: auto;
		}

		.centered,
		.editor-styles-wrapper .centered {
			background-color: rgba(255, 255, 255, 0.5);
			margin-left: auto;
			margin-right: auto;
			max-width: 30rem;
			padding: 1.5rem;
			position: relative;
			text-align: center;
			z-index: 10;
		}
		`.replace(/\s\s+/g, ' ').trim();
		document.head.appendChild(styleEl);
	  }
	}

	get centered() {
	  return this.getAttribute('centered') || 'h2';
	}

	set centered(val) {
	  return this.setAttribute('centered', val);
	}

	get space() {
	  return this.getAttribute('space') || 'var(--s1)';
	}

	set space(val) {
	  return this.setAttribute('space', val);
	}

	get minHeight() {
	  return this.getAttribute('minHeight') || '40rem';
	}

	set minHeight(val) {
	  return this.setAttribute('minHeight', val);
	}

	get noPad() {
	  return this.hasAttribute('noPad');
	}

	set noPad(val) {
	  if (val) {
		return this.setAttribute('noPad', '');
	  } else {
		return this.removeAttribute('noPad');
	  }
	}

	static get observedAttributes() {
	  return ['centered', 'space', 'minHeight', 'noPad'];
	}

	connectedCallback() {
	  this.render();
	}

	attributeChangedCallback( name, oldValue, newValue ) {
		console.log(`We have ${name} changed to ${newValue}, old value was ${oldValue}` );
		this.render();
	}
}

export default Cover;
