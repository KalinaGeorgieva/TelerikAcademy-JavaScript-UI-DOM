module.exports = function() {
    return function(element, contents) {
        var el, i,
            frag = document.createDocumentFragment(),
            div = document.createElement('div');

        if (typeof element === 'string') {
            el = document.getElementById(element);
        } else if (element instanceof HTMLElement) {
            el = element;
        } else {
            throw new Error();
        }

        for (i = 0, len = contents.length; i < len; i += 1) {
            if (typeof contents[i] !== 'string' && typeof contents[i] !== 'number') {
                throw new Error();
            }
        }

        el.innerHTML = '';

        for (i = 0, len = contents.length; i < len; i += 1) {
            div.innerHTML = contents[i];
            frag.appendChild(div.cloneNode(true));
        }

        el.appendChild(frag);
    };
};