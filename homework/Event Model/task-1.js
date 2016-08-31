function solve() {
    return function(selector) {
        var el, elements, targetButton, content, next;

        if (typeof selector === 'string') {
            el = document.getElementById(selector);
        } else if (selector instanceof HTMLElement) {
            el = selector;
        } else {
            throw new Error();
        }

        elements = el.childNodes;

        for (var i = 0, len = elements.length; i < len; i += 1) {
            if (elements[i].className === 'button') {
                elements[i].innerHTML = 'hide';
            }
        }

        el.addEventListener('click', function(ev) {

            targetButton = ev.target;
            next = targetButton.nextElementSibling;

            if (targetButton.className !== 'button') {
                return;
            }

            if (next.className === 'content') {
                content = next;


                while (next) {
                    if (next.className === 'button') {

                        if (content.style.display === 'none') {
                            content.style.display = '';
                            targetButton.innerHTML = 'hide';
                        } else {
                            content.style.display = 'none';
                            targetButton.innerHTML = 'show';
                        }
                        break;
                    }
                    next = next.nextElementSibling;
                }
            }

        }, false);
    };
};

//module.exports = solve;