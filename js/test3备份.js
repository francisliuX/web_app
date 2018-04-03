$(function() {
    function resize() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断当前屏幕是大屏幕还是小屏幕
        var isSmallWidth = windowWidth < 768;
        //遍历轮播图中每一项
        $(".carousel-inner>.item").each(function(i, item) {
            [html] view plain copy
            //需要将DOM对象转化为jqurey对象，才能调用jquery方法
            var $item = $(item);
            //根据屏幕宽度给轮播图中的背景图片设置为大图片或是小图片
            var imgUrl = isSmallWidth ? $item.<span style="color:#ff0000;">data</span>("img-xs") : $item.data("img-lg");
            $item.css('backgroundImage', 'url("' + imgUrl + '")');
            //当屏幕为小屏幕时，给轮播图加上图片项，使其能够进行等比例缩放
            if (isSmallWidth) {
                $item.html("<img src='" + imgUrl + "'>");
            }
            //否则清除轮播图中的图片内容，以免出现图片重叠
            else {
                $item.empty();
            }
        })
    }
//触发resize事件
    $(window).on("resize", resize)
        .trigger("resize");

//当浏览器为手机屏幕时，加上手指滑动轮播图的效果
//首先，根据手指触摸的轮播图的位置的到用户手指的起始坐标
    var $carousel=$(".carousel");
    var startClientX=0;
    var clientX=30;
    $carousel.on("touchstart",function(e){
    <span style="color:#ff0000;"> startClientX=e.originalEvent.touches[0].clientX;</span>
    })

    $carousel.on("touchmove",function(e){
        //然后的得到用户移动后的坐标
    <span style="color:#ff0000;">var targetClientX=e.originalEvent.touches[0].clientX;</span>
        //判断用户移动的距离是否超过了阈值
        var target=Math.abs(targetClientX-startClientX);
        if(target>clientX){
            //然后，根据用户移动的方向判断用户是左滑动还是右滑动，根据左右方向触发左右滑动
            $(".carousel").carousel(targetClientX-startClientX>0?"prev":"next");

        }

    })