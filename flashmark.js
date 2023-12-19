import('https://cdn.jsdelivr.net/npm/marked/marked.min.js').then(() => {
    console.log('marked loaded')
    console.log(document.getElementsByTagName('markdown'))
    for (let x of document.getElementsByTagName('markdown')) {
        if (x.hasAttribute('src')) {
            fetch(x.getAttribute('src')).then((response) => {
                return response.text()
            }).then((text) => {
                x.innerHTML = marked.marked(text.replace(/[^\S\r\n]+/g, ' '))
                x.classList.add('rendered')
            })
        } else {
            x.innerHTML = marked.marked(x.innerHTML.replace(/[^\S\r\n]+/g, ' '))
            x.classList.add('rendered')
        }
    }
})