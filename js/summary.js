function summary(h){
	summary.count=summary.count||0;
	summary.count++;
	var g=location.href.indexOf("/search/label/")==-1&&location.href.indexOf("/search?")==-1,c=location.href.indexOf("/search/label/")!=-1;
	if(summary.count<=summaryConf.skip){
	return
	}
	if(g&&!summaryConf.showHome){
	return
	}
	if(c&&!summaryConf.showLabel){
	return
	}
	var e=document.getElementById(h),f=e.getElementsByTagName("img"),a="";
	if(summaryConf.showImage){
		if(summaryConf.defaultThumb!="none"){
			a='<img width="'+summaryConf.imgWidth+'" height="'+summaryConf.imgHeight+'"';
			if(summaryConf.imgFloat!="no"){
				var b=' style="float:'+summaryConf.imgFloat+';margin:0 5px 5px 0;padding:0"';
				a+=b
			}
			a+=' src="'+(f.length>0?f[0].src:summaryConf.defaultThumb)+'" />'
		}
		else{
			if(f.length>0){
				a='<img width="'+summaryConf.imgWidth+'" height="'+summaryConf.imgHeight+'"';
				if(summaryConf.imgFloat!="no"){
					var b=' style="float:'+summaryConf.imgFloat+';margin:0 5px 5px 0;padding:0"';
					a+=b
				}
				a+=' src="'+f[0].src+'" />'
			}
		}
	}
	if(a!="") var d=summary.strip(e.innerHTML,summaryConf.words)
	else var d=summary.strip(e.innerHTML,summaryConf.wordsNoImg);
	e.innerHTML=a+d+"..."
}
summary.strip=function(a,b){
	return a.replace(/<.*?>/ig,"").split(/\s+/).slice(0,b-1).join(" ")
};