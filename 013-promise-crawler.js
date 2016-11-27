var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';

function filterChapters(html) {
    // 解析html源码，返回信息。
    var $ = cheerio.load(html);
    $('.chapter-info').remove();
    $('.moco-btn').remove();
    var chapters = $('.chapter');
    var title = $('.course-infos .path span').text();
    //var number = parseInt($('.course-infos .js-learn-num').text().trim(), 10);
    var number = '爬虫取不到了';
   
    //待解析生成的数据结构
    var courseData = {
        title: title,
        number: number,
        videos: []
    };
    courseData.title = title;
    courseData.number = number; //爬虫取不到了
    
    chapters.each(function(item) {
        var chapter = $(this);
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

        courseData.videos.push(chapterData);
    });
    return courseData;

    /*coursesData = {
        title: title,
        number: number,
        videos: [{
            chapterTitle: '',
            videos: [{
                title: '',
                id: ''
            }]
        }]
    };*/

}


function printCourseInfo(coursesData) {

    coursesData.forEach(function(courseData) {
        console.log(courseData.number + ' 人学习过 ' + courseData.title + '\n');
    });
    coursesData.forEach(function(courseData) {
        console.log('### ' + courseData.title + '\n');
        courseData.videos.forEach(function(item) {
            console.log(item.chapterTitle + '\n');
            item.videos.forEach(function(video) {
                console.log('   [' + video.id + '] ' + video.title + '\n');
            });
        });
    });
}

//返回一个Promise对象，用Promise对象封装异步函数返回结果
function getPageAsync(url) {
    return new Promise(function(resolve, reject) {
        console.log('正在爬取 ' + url);

        http.get(url, function(res) {
            var html = '';

            res.on('data', function(data) {
                html += data;

            });

            //获取页面源码
            res.on('end', function() {
                resolve(html);
            });
        }).on('error', function(e) {
            reject(e);
            console.log('获取课程内容失败');
        });
    });
}

var fetchCourseArray = [];
var videoIds = [348, 637, 197, 134, 75, 259];

//fetchCourseArray是一个Promise对象的数组
videoIds.forEach(function(id) {
    fetchCourseArray.push(getPageAsync(baseUrl + id));
});

//能够等待全部Promise对象返回才执行then
Promise
    .all(fetchCourseArray)
    .then(function(pages) { //pages是每个课程页面的数组
        //解析每个页面，生成数据结构
        var coursesData = [];
        pages.forEach(function(html) {
            var courseData = filterChapters(html);
            coursesData.push(courseData);
        });
        coursesData.sort(function(a, b) {
            return a.number < b.number;
        });
        printCourseInfo(coursesData);
    });
