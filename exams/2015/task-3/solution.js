function solve() {
    return function(selector) {
        var template = '<div class="events-calendar">' +
            '<h2 class="header">' +
            'Appointments for ' +
            '<span class="month">{{month}}</span> <span class="year">{{year}}</span>' +
            '</h2> {{#each days}}' +
            '<div class="col-date">' +
            '<div class="date">{{day}}</div>' +
            '{{#each events}}' +
            '<div class="events">' +

            '<div class="event {{importance}}" title="{{comment}}">' +
            '{{#if title}}' +
            '<div class="title">{{title}}</div>' +
            '<span class="time">at: {{time}}</span>' +
            '{{else}}' +
            '<div class="title">Free slot</div>' +
            '{{/if}}' +
            '</div>' +
            '</div>' +
            '{{/each}}' +
            '</div>' +
            '{{/each}}' +
            '</div>';
        document.getElementById(selector).innerHTML = template;
    };
}

//module.exports = solve;