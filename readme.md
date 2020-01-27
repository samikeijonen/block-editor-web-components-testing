# Block editor and web components testing

`src` folder have JS files where the magic happens:

- `scripts.js` for importing web components to the front-end and in the block editor.
- `blocks.js` for blocks with web components.

## Summary

In short, block editor and web components work well together. At least for simple blocks that I tested.

My idea was that web component format like `<fox-component></fox-component>` could be used in the editor and in the front-end almost out of the box. I used the following examples.

## Static web component

By static I mean all the markup lives inside the web component. No attributes or anything you can change.

In this case it was just matter of outputting `<foxland-static></foxland-static>` in the editor and front-end.

Nothing fancy but works.

## Dynamic web component

By dynamic I mean that we can add text inside the web component. I tested using `slots` with `RichText` in this case.

**Edit**
```js
<foxland-dynamic>
	<h2 slot="title">{ setTitle }</h2>
	<p slot="text">{ setText }</p>
</foxland-dynamic>
```

**Save**
```js
<foxland-dynamic>
	<h2 slot="title"><RichText.Content value={ title } /></h2>
	<p slot="text"><RichText.Content value={ text } /></p>
</foxland-dynamic>
```

## Simple cover component

Simple cover component with background image and title. Additional attribute `minheight` for chanching component minimum height. This works the same way as any attribute in the editor.

```js
<cover-l minHeight={ minHeight }>
```

## Other examples

- [Web Components - Lifecycle Callbacks by Joe Snell](https://codepen.io/joesnellpdx/pen/015b9735631d8b61790300018030c943?editors=0010)
- [Web Component - list of news stories with load more](https://codepen.io/verticalgrain/pen/zYxaXOw)
