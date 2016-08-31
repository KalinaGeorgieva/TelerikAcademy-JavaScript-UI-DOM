function solve() {
    return function(selector) {
        var $button, $content;

        if (typeof(selector) !== 'string' || $(selector).size() === 0) {
            throw new Error();
        }

        $button = $(".button");
        $content = $(".content");

        for (var i = 0, len = $button.length; i < len; i += 1) {
            $($button[i]).text('hide');
        }

        $(selector).on('click', function toggleElements(ev) {
                if ($(ev.target).hasClass('button')) {
                    var $target = $(ev.target);
                    var $nextElement = $target;

                    while ($nextElement) {
                        if ($nextElement.hasClass('content')) {
                            break;
                        }
                        $nextElement = $nextElement.next();
                    }

                    if ($nextElement.css('display') === 'none') {
                        $target.text('hide');
                        $nextElement.css('display', '');
                    } else {
                        $target.text('show');
                        $nextElement.css('display', 'none');
                    }
                }
            }

        );
    };
};

module.exports = solve;