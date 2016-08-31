/* globals module, document, HTMLElement, console */
function solve(params) {
    return function(selector, isCaseSensitive) {
        var element,
            frag = document.createDocumentFragment();
        if (typeof selector === 'string') {
            element = document.querySelector(selector);
        } else if (selector instanceof HTMLElement) {
            element = selector;
        } else {
            throw new Error();
        }

        //add-controls
        isCaseSensitive = !!isCaseSensitive;
        var div = document.createElement('div');
        div.className = 'add-controls';
        var label = document.createElement('label');
        label.innerHTML = "Enter text";

        var input = document.createElement('input');
        label.appendChild(input);

        var button = document.createElement('a');
        button.className = 'button';
        button.innerHTML = 'Add';

        div.appendChild(label);
        div.appendChild(button);

        //search
        var divSearch = document.createElement('div');
        divSearch.className = 'search-controls';
        var labelSearch = document.createElement('label');
        labelSearch.innerHTML = "Search:";
        var inputSearch = document.createElement('input');

        labelSearch.appendChild(inputSearch);
        divSearch.appendChild(labelSearch);

        //result 
        var divResult = document.createElement('div');
        divResult.className = 'result-controls';
        var ul = document.createElement('ul');
        ul.className = 'items-list';
        var li = document.createElement('li');
        li.className = 'list-item';
        var listItems = document.createElement('strong');
        var buttonDel = document.createElement('a');
        buttonDel.innerHTML = 'X';
        buttonDel.className = 'button';

        li.appendChild(buttonDel);
        li.appendChild(listItems);
        divResult.appendChild(ul);

        //list-item event

        button.addEventListener('click', function() {
            var value = input.value;
            input.value = '';
            listItems.innerHTML = value;
            ul.appendChild(li.cloneNode(true));
        }, false);

        //search event
        inputSearch.addEventListener('input', function() {
            var toSearch = inputSearch.value;
            for (var i = 0, len = ul.childElementCount; i < len; i += 1) {
                if (!isCaseSensitive) {
                    toSearch = toSearch.toLowerCase();
                }
                var searchLi = document.getElementsByClassName('list-item');
                var text = searchLi[i].getElementsByTagName("strong")[0].innerHTML;
                if (!isCaseSensitive) {
                    text = text.toLowerCase();
                }
                var isFound = text.indexOf(toSearch) >= 0;

                if (!isFound) {
                    ul.children[i].style.display = 'none';
                } else {
                    ul.children[i].style.display = '';
                }
            }
        }, false);


        ul.addEventListener('click', function(ev) {
            var btn = ev.target;
            if (btn.className.indexOf('button') < 0) {
                return;
            }

            var parent = btn;
            while (parent && parent.className.indexOf('list-item') < 0) {
                console.log(parent.nodeName);
                parent = parent.parentNode;
            }

            if (!parent) {
                return;
            }

            ul.removeChild(parent);
        }, false);

        frag.appendChild(div);
        frag.appendChild(divSearch);
        frag.appendChild(divResult);

        element.appendChild(frag);
        element.className += 'items-control';

    };

};

module.exports = solve;