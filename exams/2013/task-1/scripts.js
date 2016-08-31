function createCalendar(selector, data) {
    var container = document.querySelector(selector);

    var dayBox = document.createElement('div');
    var dayBoxTitle = document.createElement('strong');
    var dayBoxContent = document.createElement('div');
    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

    var selectedBox = null;

    container.style.width = (130 * 7.5) + 'px';
    dayBox.style.border = '1px solid black';
    dayBox.style.width = '130px';
    dayBox.style.height = '130px';
    dayBox.style.display = 'inline-block';
    dayBoxContent.innerHTML = '&nbsp;';

    dayBoxTitle.style.display = 'block';
    dayBoxTitle.style.background = 'grey';
    dayBoxTitle.style.borderBottom = '1px solid black';
    dayBoxTitle.style.textAlign = 'center';


    dayBoxContent.className += 'day-content';
    dayBoxTitle.className = 'day-title';


    dayBox.appendChild(dayBoxTitle);
    dayBox.appendChild(dayBoxContent);

    function createMonthBoxes() {
        var dayBoxes = [];

        for (var i = 0; i < 30; i += 1) {
            var dayOfWeek = daysOfWeek[i % daysOfWeek.length];
            dayBoxTitle.innerHTML = dayOfWeek + ' ' + (i + 1) + ' June 2014';
            dayBoxes.push(dayBox.cloneNode(true));
        }
        return dayBoxes;
    }

    function addEvents(boxes, events) {
        for (var i = 0, len = events.length; i < len; i += 1) {
            var event = events[i];
            var content = boxes[event.date - 1].querySelector('.day-content');
            content.innerHTML = event.hour + ' ' + event.title;
        }
    }


    function onBoxMouseover(ev) {
        if (selectedBox !== this) {
            this.style.background = 'gold';
        }
    }

    function onBoxMouseout(ev) {
        if (selectedBox !== this) {
            this.style.background = '';
        }
    }

    function onBoxClick(ev) {
        if (selectedBox) {
            selectedBox.style.background = '';
        }
        if (selectedBox && selectedBox === this) {
            selectedBox = null;
        } else {
            this.style.background = '#ccc';
            selectedBox = this;
        }
    }


    var boxes = createMonthBoxes();
    addEvents(boxes, events);

    var frag = document.createDocumentFragment();
    for (let i = 0, len = boxes.length; i < len; i += 1) {
        frag.appendChild(boxes[i]);
        boxes[i].addEventListener('click', onBoxClick);
        boxes[i].addEventListener('mouseover', onBoxMouseover);
        boxes[i].addEventListener('mouseout', onBoxMouseout);
    }

    container.appendChild(frag);

}