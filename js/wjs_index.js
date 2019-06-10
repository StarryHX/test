$(function () {
    var startX, endX
    // var carousel_inner =$(".carousel-inner")
    var carousel_inner = document.querySelector('.carousel-inner')
    // console.log(carousel_inner);

    var carousel = $('.carousel')

    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX
        // console.log(startX);
    })
    carousel_inner.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX
        // console.log(endX);
        if (endX - startX > 0) {
            carousel.carousel('prev')
        } else if (endX - startX < 0) {
            carousel.carousel('next')
        }
    })

    // 插件初始化
    $('[data-toggle="tooltip"]').tooltip()

    // 找li
    var ul = $('.wjs_product .nav-tabs')
    var lis = ul.find('li')

    var totalWidth = 0
    lis.each(function (index, value) {
        totalWidth = totalWidth + $(value).innerWidth()
    })
    ul.width(totalWidth)

    // 滑动插件
    var myScroll = new IScroll('.tabs_parent', {
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
})
