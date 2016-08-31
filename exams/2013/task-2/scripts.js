// $.fn.tabs = function() {
//     var $this = this;
//     var $parentNode = this;
//     $this.addClass('tabs-container');

//     var $titles = $this.find('.tab-item-title');

//     $this.find('.tab-item-content').hide();

//     $titles.on('click', function() {
//         var $this = $(this);
//         $parentNode.find('.current').removeClass('current');
//         $this.parent().addClass('current');
//         $parentNode.find('.tab-item-content').hide();
//         $this.parent().find('.tab-item-content').show();
//     }); //.first().click();

//     $this.find('.current .tab-item-title').click();
// };


$.fn.tabs = function() {
    var $tabControl = this;
    $tabControl.addClass('tabs-container');

    $tabControl.find('.tab-item-content').hide();

    $tabControl.on('click', '.tab-item-title', function() {
        var $clickedElement = $(this);
        $tabControl.find('.tab-item-content').hide();
        $clickedElement.next().show();
        $tabControl.find('.tab-item').removeClass('current');
        $clickedElement.parent().addClass('current');
    });
};