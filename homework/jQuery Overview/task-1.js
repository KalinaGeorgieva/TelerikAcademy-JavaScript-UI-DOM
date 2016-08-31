function solve() {
    return function(selector, count) {
        if (typeof count !== 'number' || typeof selector !== 'string') {
            throw new Error();

        }
        if (count < 1) {
            throw new Error();
        }
        var $list = $('<ul />');
        $list.addClass('items-list');
        for (var i = 0; i < count; i += 1) {
            $('<li>' + 'List item #' + i + '</li>')
                .addClass('list-item')
                .appendTo($list);
        }
        $list.appendTo(selector);

    };
};

module.exports = solve;