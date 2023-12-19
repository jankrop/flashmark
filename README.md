# flashmark
A simple, fast, install-and-forget Markdown parser right in your HTML

## Installation
Simply paste the following code into your HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/flashmark/flashmark.min.js"></script>
```
And that's it! Easy, right? 
Now you don't have to bother with different parsers. You don't need to write a single line of JavaScript.
Just write your Markdown and Flashmark will do the rest.

And that's the perfect segue into the next section...

## Usage
Flashmark uses `<markdown>` tags to add Markdown to your HTML. Like this:
```html
<markdown>
    # Hello, world!
    I am a paragraph.
</markdown>
```
You can also embed external Markdown files using the `src` attribute:
```html
<markdown src="path/to/file.md"></markdown>
```
And that's it! Flashmark will automatically parse your Markdown and replace the `<markdown>` tag with the parsed HTML.

