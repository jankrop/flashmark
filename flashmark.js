import('https://cdn.jsdelivr.net/npm/marked/marked.min.js').then(() => {
    console.log('marked loaded')
    console.log(document.getElementsByTagName('markdown'))
    for (let x of document.getElementsByTagName('markdown')) {
        x.innerHTML = marked.marked(x.innerHTML.replace(/[^\S\r\n]+/g, ' '))
        x.classList.add('rendered')
    }
})