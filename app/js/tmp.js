$(function () {
    //渲染首页企业新闻
    $.ajax({
        type : "get",
        url : "json/detail_news.json",
        data : "",
        dataType : "json",
        error : function(request) {
            console.log("请求失败！");
        },
        success : function(data){
            var temp0 = data.list[0];
            var temp1 = data.list[1];
            var temp2 = data.list[2];
            $(
                '<div class="left">' +
                '<a href="news/detail_news.html?&id=' + temp0.id + '">' +
                '<img src="news/' + temp0.image + '" width="240" height="215">' +
                '</a>' +
                '</div>' +
                '<div class="right">' +
                '<div class="top">' +
                '<div class="time">' +
                '<span class="size34">' + temp0.news.time.split("-")[2] + '</span>' +
                '<span class="line12">-</span>' +
                '<span class="size14">' + temp0.news.time.split("-")[0] + '</span>' +
                '<span class="size14">-' + temp0.news.time.split("-")[1] + '</span>' +
                '</div>' +
                '<div class="info">' +
                '<div class="name">' +
                '<a href="news/detail_news.html?&id=' + temp0.id + '">' + temp0.news.title + '</a>' +
                '</div>' +
                '<div class="word">' + temp0.news.content.replace(/<img[^>]+>/gi,'') + '</div>' +
                '</div>' +
                '</div>' +
                '<div class="bott">' +
                '<div class="rela">' +
                '<a href="news/detail_news.html?&id=' + temp1.id + '">' +
                '<span class="name">' + temp1.news.title + '</span>' +
                '<span class="dot"></span>' +
                '<span class="time">' + temp1.news.time.slice(0,7) + '</span>' +
                '</a>' +
                '</div>' +
                '<div class="rela">' +
                '<a href="news/detail_news.html?&id=' + temp2.id + '">' +
                '<span class="name">' + temp2.news.title + '</span>' +
                '<span class="dot"></span>' +
                '<span class="time">' + temp2.news.time.slice(0,7) + '</span>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>'
            ).appendTo($(".news_content"));
        }
    });

    //美易融点击事件
    $(".plate>a:eq(0)").on("click",function () {
        $.cookie('a', 0, { path: '/' }); // 存储 cookie
    });
    $(".plate>a:eq(1)").on("click",function () {
        $.cookie('a', 4, { path: '/' }); // 存储 cookie
    });
});
