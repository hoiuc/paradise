function removeHtmlTag(a, b) { 
    var s = a.split("<"); 
    for (var i = 0; i < s.length; i++) { 
        if (s[i].indexOf(">") != -1) { 
            s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length) 
        } 
    } 
    s = s.join(""); 
    s = s.substring(0, b - 1); 
    return s
} 


function recent(json) {document.write(''); for (var i = 0; i < numposts; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t;var posturl;if (i == json.feed.entry.length) break;
	for (var k = 0; k < entry.link.length;k++){
if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href;break;}}var thumburl;try {thumburl=entry.media.url;}catch (error)
{
s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
thumburl=d;} else thumburl='https://lh3.googleusercontent.com/-hIAh7racMkY/VzymApguzOI/AAAAAAAACd8/jXUDJJCicVc8zaKeSMIatEGjTjnMdBuWACCo/s512/nothumb.jpg';

}

var postdate = entry.published.$t;var cdyear = postdate.substring(0,4);var cdmonth = postdate.substring(5,7);var cdday = postdate.substring(8,10);var monthnames = new Array();monthnames[1] = "Tháng 1";monthnames[2] = "Tháng 2";monthnames[3] = "Tháng 3";monthnames[4] = "Tháng 4";monthnames[5] = "Tháng 5";monthnames[6] = "Tháng 6";monthnames[7] = "Tháng 7";monthnames[8] = "Tháng 8";monthnames[9] = "Tháng 9";monthnames[10] = "Tháng 10";monthnames[11] = "Tháng 11";monthnames[12] = "Tháng 12";document.write('');

  if (i%2==0) 
    {
document.write('<li style="border-bottom: 1px dotted #ADADB2;padding: 5px 5px 5px 10px; list-style: none;background: rgb(241, 247, 250);">');
    }else
document.write('<li style="border-bottom: 1px dotted #ADADB2;padding: 5px 5px 5px 10px; list-style: none;">');
if(showpostthumbnails==true) 
document.write('<a href="'+posturl+'"><img class="thumbnail" src="'+thumburl+'" title="'+posttitle+'" alt="'+posttitle+'" style="width:48px;height:48px;float:left;margin-right: 6px;"/></a>');


var towrite='';var flag=0;
document.write('<a href="'+posturl+'" style="font-size: 12px;font-weight: bold; float: left; width: 70%;">'+removeHtmlTag(posttitle,60)+'</a>');
document.write('<span class="meta"> ');

if(showpostdate==true) {towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}


if(showcommentnum==true) 
{
if (flag==1) {towrite=towrite;}
if(commenttext=='1 Comments') commenttext='1 Comment';
if(commenttext=='0 Comments') commenttext='No Comments';
commenttext = '';
towrite=towrite+commenttext;
flag=1;
;
}

document.write(towrite);
document.write('</span>');

// var label = '<span class="meta">Loại :'+entry.category[i].$t+'</span> ';
// document.write(label);




document.write('</li>');
document.write('<div class="fix"></div>');
if(displayseparator==true) 
if (i!=(numposts-1))
document.write('');
}

}

