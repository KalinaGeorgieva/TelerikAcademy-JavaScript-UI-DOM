function createImagesPreviewer(selector, items) {
    var element;
    if (typeof selector === 'string') {
        element = document.querySelector(selector);
    } else if (selector instanceof HTMLElement) {
        element = selector;
    } else {
        throw new Error();
    }

    var frag = document.createDocumentFragment();


    var left = document.createElement('div');
    left.className += ' image-preview';
    left.style.float = 'left';
    left.style.textAlign = 'center';
    left.style.height = '300px';
    left.style.width = '300px';

    var right = document.createElement('div');
    right.style.float = 'left';
    right.style.textAlign = 'center';
    right.style.height = '300px';
    right.style.width = '250px';


    //left
    var bigImage = document.createElement('img');
    var bigTitle = document.createElement('strong');
    bigTitle.style.display = 'block';
    bigImage.src = items[0].url;
    bigImage.width = 250;
    bigTitle.innerHTML = items[0].title;


    left.appendChild(bigTitle);
    left.appendChild(bigImage);

    //right
    var input = document.createElement('input');
    var label = document.createElement('label');
    label.innerHTML = 'Filter';
    label.style.display = 'block';
    label.appendChild(input);
    right.appendChild(label);

    var container = document.createElement('div');
    container.style.height = '100%';
    container.style.overflowY = 'scroll';
    var imagesList = document.createElement('div');
    var image = document.createElement('img');
    image.width = 150;
    var title = document.createElement('strong');
    title.style.display = 'block';


    items.forEach(function(item) {
        image.src = item.url;
        title.innerHTML = item.title;
        imagesList.className += ' image-container';
        imagesList.appendChild(title);
        imagesList.appendChild(image);

        container.appendChild(imagesList.cloneNode(true));
    });

    right.appendChild(container);

    //hover
    container.addEventListener('mouseover', function(ev) {

        var target = ev.target;
        // if (target.className.indexOf('image-container') < 0 && target.tagName !== 'IMG' && target.tagName !== 'STRONG') {
        //     return;
        // }
        // if (target.className.indexOf('image-container') === 0) {
        //     target.style.backgroundColor = 'grey';
        //     return;
        // }
        // target.parentNode.style.backgroundColor = 'grey';

        //doncho
        while (target.className.indexOf('image-container') < 0) {
            target = target.parentNode;
        }
        target.style.backgroundColor = 'grey';
    });

    container.addEventListener('mouseout', function(ev) {

        var target = ev.target;
        // if (target.className.indexOf('image-container') < 0 && target.tagName !== 'IMG' && target.tagName !== 'STRONG') {
        //     return;
        // }
        // if (target.className.indexOf('image-container') === 0) {
        //     target.style.backgroundColor = '';
        //     return;
        // }
        // target.parentNode.style.backgroundColor = '';
        while (target.className.indexOf('image-container') < 0) {
            target = target.parentNode;
        }
        target.style.backgroundColor = '';

    });

    container.addEventListener('click', function(ev) {
        // debugger;
        var target = ev.target;
        // if (target.tagName !== 'IMG') {
        //     return;
        // }
        // bigImage.src = target.src;
        // var parent = target.parentNode;
        // bigTitle.innerHTML = parent.getElementsByTagName('strong')[0].outerText;

        //doncho
        while (target.className.indexOf('image-container') < 0) {
            target = target.parentNode;
        }
        var img = target.querySelector('img');
        var title = target.querySelector('strong');
        console.log(title);
        bigImage.src = img.src;
        bigTitle.innerHTML = title.innerHTML;
    });

    input.addEventListener('input', function() {
        var toSearch = input.value.toLowerCase();
        var titles = container.getElementsByTagName('strong');
        for (var i = 0, len = titles.length; i < len; i += 1) {
            var text = titles[i].innerHTML.toLowerCase();
            var isFound = text.indexOf(toSearch) >= 0;
            if (isFound) {
                titles[i].parentNode.style.display = '';
            } else {
                titles[i].parentNode.style.display = 'none';
            }
        }
    });

    frag.appendChild(left);
    frag.appendChild(right);

    element.appendChild(frag);

}