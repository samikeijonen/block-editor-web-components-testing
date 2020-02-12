/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { RichText } = wp.editor;

const Edit = ( props ) => {
	const {
		attributes: {
			title,
			text,
		},
		setAttributes,
	} = props;

	const setTitle = (
		<RichText
			tagName="span"
			className=""
			placeholder={ __( 'Type Title', 'fox-blocks-web-components' ) }
			keepPlaceholderOnFocus
			value={ title }
			onChange={ ( value ) => setAttributes( { title: value } ) }
		/>
	);

	const setText = (
		<RichText
			tagName="span"
			placeholder={ __( 'Type Text', 'fox-blocks-web-components' ) }
			keepPlaceholderOnFocus
			value={ text }
			onChange={ ( value ) => setAttributes( { text: value } ) }
		/>
	);

	return (
		<foxland-dynamic>
			<h2 slot="title">{ setTitle }</h2>
			<p slot="text">{ setText }</p>
		</foxland-dynamic>
	);
};

export default Edit;
