// public
var numposts = 10;
var showpostthumbnails = false;
var displayseparator = false;
var showcommentnum = true;
var showpostdate = true;
//---Trang chủ
var summaryConf = {
showImage: true,
imgFloat: "left",
imgWidth: 200,
imgHeight: 150,
defaultThumb:"http://3.bp.blogspot.com/-_6FZgKxlElg/VJEzJhm2wrI/AAAAAAAABI0/QeEkQtPuYXs/s1600/logo.png",
words: 50,
wordsNoImg: 100,
skip: 0,
showHome: true,
showLabel: true
};
//----Bài liên quan
var dw = '';
titles = new Array();
titlesNum = 0;
urls = new Array();
timeR = new Array();
thumb = new Array();
commentsNum = new Array();
comments = new Array();
var ry = " < h4 > Bài viết liên quan < /h4>";
rn="<h4>Không có bài viết liên quan</h4>";
rcomment = "Nhận xét";
rdisable = "Tắt Nhận xét";
commentYN = "yes";
// Chữ margin amin
$(document).ready(function(){
$("h3 a").hover(function(){
    $(this).stop().animate({"marginLeft:30px"},400);}
  ,function(){
    $(this).stop().animate({"marginLeft:0px"},400);
});
});
// Nav position fixed
  jQuery("document").ready(function($){
    
    var nav = $(".menu");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() &gt; 110) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
}); 

// Bài Liên quan

function related_results_labels(c) {
    for (var b = 0; b < c.feed.entry.length; b++) {
        var d = c.feed.entry[b];
        titles[titlesNum] = d.title.$t;
        for (var a = 0; a < d.link.length; a++) {
            if ('thr$total' in d) {
                commentsNum[titlesNum] = d.thr$total.$t + ' ' + rcomment
            } else {
                commentsNum[titlesNum] = rdisable
            };
            if (d.link[a].rel == "alternate") {
                urls[titlesNum] = d.link[a].href;
                timeR[titlesNum] = d.published.$t;
                if ('media$thumbnail' in d) {
                    thumb[titlesNum] = d.media$thumbnail.url
                } else {
                    thumb[titlesNum] = 'http://lh3.ggpht.com/--Z8SVBQZ4X8/TdDxPVMl_sI/AAAAAAAAAAA/jhAgjCpZtRQ/no-image.png'
                };
                titlesNum++;
                break
            }
        }
    }
}

function removeRelatedDuplicates() {
    var b = new Array(0);
    c = new Array(0);
    e = new Array(0);
    f = new Array(0);
    g = new Array(0);
    for (var a = 0; a < urls.length; a++) {
        if (!contains(b, urls[a])) {
            b.length += 1;
            b[b.length - 1] = urls[a];
            c.length += 1;
            c[c.length - 1] = titles[a];
            e.length += 1;
            e[e.length - 1] = timeR[a];
            f.length += 1;
            f[f.length - 1] = thumb[a];
            g.length += 1;
            g[g.length - 1] = commentsNum[a]
        }
    }
    urls = b;
    titles = c;
    timeR = e;
    thumb = f;
    commentsNum = g
}

function contains(b, d) {
    for (var c = 0; c < b.length; c++) {
        if (b[c] == d) {
            return true
        }
    }
    return false
}

function printRelatedLabels(a) {
    var y = a.indexOf('?m=0');
    if (y != -1) {
        a = a.replace(/\?m=0/g, '')
    }
    for (var b = 0; b < urls.length; b++) {
        if (urls[b] == a) {
            urls.splice(b, 1);
            titles.splice(b, 1);
            timeR.splice(b, 1);
            thumb.splice(b, 1);
            commentsNum.splice(b, 1)
        }
    }
    var c = Math.floor((titles.length - 1) * Math.random());
    var b = 0;
    if (titles.length == 0) {
        dw += rn
    } else {
        dw += ry;
        dw += '<ul>';
        while (b < titles.length && b < 20 && b < maxresults) {
            if (y != -1) {
                urls[c] = urls[c] + '?m=0'
            }
            if (commentYN == 'yes') {
                comments[c] = ' - ' + commentsNum[c]
            } else {
                comments[c] = ''
            };
            dw += '<li><img alt="' + titles[c] + '" src="' + thumb[c] + '"/><div><h3><a href="' + urls[c] + '" rel="dofollow">' + titles[c] + '</a></h3><span>' + timeR[c].substring(8, 10) + '/' + timeR[c].substring(5, 7) + '/' + timeR[c].substring(0, 4) + comments[c] + '</span></div></li><div style="clear:both"></div>';
            if (c < titles.length - 1) {
                c++
            } else {
                c = 0
            }
            b++
        }
        dw += '</ul>'
    };
    urls.splice(0, urls.length);
    titles.splice(0, titles.length);
    document.getElementById('related-posts').innerHTML = dw
};
