var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    // 解析html源码，返回信息。
    var $ = cheerio.load(html);
    $('.chapter-info').remove();
    $('.moco-btn').remove();
    var chapters = $('.chapter');

    var courseData = [];
    chapters.each(function(item) {
        var chapter = $(this);
        // var chapterTitle = chapter.find('strong').text().replace(/(^\s*)|(\s*$)/g, "");
        var chapterTitle = chapter.find('strong').text().trim();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };
        videos.each(function(item) {
            var video = $(this).find('a');
            var videoTitle = video.text().trim();
            var id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            });
        });

        courseData.push(chapterData);
    });
    //console.log(courseData[4].videos);
    return courseData;

    // [{
    //     chapterTitle: '',
    //     videos: [{
    //         title: '',
    //         id: ''
    //     }]
    // }]
}

function printCourseInfo(courseData) {
    courseData.forEach( function(item) {
        console.log(item.chapterTitle + '\n');
        item.videos.forEach( function(video) {
            console.log('   [' + video.id + '] ' + video.title + '\n');
        });
    });
}

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    });

    //获取页面源码
    res.on('end', function() {
        console.log(html);
        var courseData = filterChapters(html);
        //printCourseInfo(courseData);
    });
}).on('error', function() {
    console.log('获取课程内容失败');
});
