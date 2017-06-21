# Steam Market Item Image Fetch

This module was created for use in [this app](http://linktoplaystoreeventually) to fetch the image of a steam item.

Features:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it
 * File contents are saved in the URL so you can share files


I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

### Installation

```bash
npm install --save steam-market-image-fetch
```

### Usage

```javascript
const MarketImage = require('steam-market-image-fetch');

MarketImage.getItemImage(578080, 'Red Hi-top Trainers', (response, err) => {
	if (err) {
    	//Do something with the error
    } else {
    	//Do something with the response
    }
});
```

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Stuff used to make this:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs