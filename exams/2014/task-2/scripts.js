/* globals $ */
$.fn.gallery = function(columnsPerRow) {
    columnsPerRow = columnsPerRow || 4;

    var $gallery = this;
    var $selected = $gallery.children('.selected');

    var $galleryList = $gallery.children('.gallery-list');
    var $imageContainers = $gallery.find('.image-container');

    var $prevImage = $selected.find('#previous-image');
    var $currentImage = $selected.find('#current-image');
    var $nextImage = $selected.find('#next-image');

    // console.log($prevImage);
    // console.log($currentImage);
    // console.log($nextImage);

    $imageContainers.each(function(index, element) {
        if (index % columnsPerRow === 0) {
            $(element).addClass('clearfix');
        }
    });



    $galleryList.on('click', '.image-container', function() {
        var $this = $(this);

        var currentIndex = ($this.find('img').attr('data-info') | 0) - 1;
        $currentImage.attr('src', $this.find('img').attr('src'))
            .attr('data-info', currentIndex + 1);

        var prevIndex = currentIndex - 1;
        var $prev = $imageContainers.eq(prevIndex);
        $prevImage.attr('src', $prev.find('img').attr('src'))
            .attr('data-info', prevIndex + 1);

        var nextIndex = (currentIndex + 1) % $imageContainers.length;
        var $next = $imageContainers.eq(nextIndex);
        $nextImage.attr('src', $next.find('img').attr('src'))
            .attr('data-info', nextIndex + 1);



        $galleryList.addClass('blurred');
        $('<div />').addClass('disabled-background').appendTo($gallery);
        $selected.show();

    });

    $('#current-image').on('click', function() {
        $selected.hide();
        $galleryList.removeClass('blurred');
        $gallery.find('.disabled-background').remove();
    });


    $prevImage.on('click', function() {
        var $this = $(this);
        // console.log($this);
        var currentIndex = $this.attr('data-info') - 1;
        var prevIndex = currentIndex - 1;
        var nextIndex = (currentIndex + 1) % $imageContainers.length;

        var $current = $($imageContainers.eq(currentIndex)[0].firstElementChild);
        var $next = $($imageContainers.eq(nextIndex)[0].firstElementChild);
        var $prev = $($imageContainers.eq(prevIndex)[0].firstElementChild);

        $currentImage.attr('src', $current.attr('src'))
            .attr('data-info', currentIndex + 1);
        $nextImage.attr('src', $next.attr('src'))
            .attr('data-info', nextIndex + 1);
        $prevImage.attr('src', $prev.attr('src'))
            .attr('data-info', prevIndex + 1);


    });

    $nextImage.on('click', function() {

        var $this = $(this);
        var currentIndex = $this.attr('data-info') - 1;
        var prevIndex = currentIndex - 1;
        var nextIndex = (currentIndex + 1) % $imageContainers.length;


        var $current = $($imageContainers.eq(currentIndex)[0].firstElementChild);
        var $next = $($imageContainers.eq(nextIndex)[0].firstElementChild);
        var $prev = $($imageContainers.eq(prevIndex)[0].firstElementChild);


        $currentImage.attr('src', $current.attr('src'))
            .attr('data-info', currentIndex + 1);
        $nextImage.attr('src', $next.attr('src'))
            .attr('data-info', nextIndex + 1);
        $prevImage.attr('src', $prev.attr('src'))
            .attr('data-info', prevIndex + 1);
    });

    $gallery.addClass('gallery');
    $selected.hide();

    return this;
};