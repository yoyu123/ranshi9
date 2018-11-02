//var wxurl = "http://192.168.0.199:8888/burningstone/";
 var wxurl="http://burningstone.magic-source.com/burningstone/";
//var redirect_url = "http://192.168.0.199:8888/burningstone/wechat/login/debug";
var redirect_url="http://burningstone.magic-source.com/burningstone/wechat/login/login";

function getlike(type, name) {
	var mun = 0;
	var islike = 0;
	$.ajax({
		url : wxurl + "wechat/index/getlike",
		type : "post",
		dataType : "json",
		data : {
			type : type
		},
		success : function(res) {
			console.log(res);
//			if (res.type == 200) {
//				mun = res.object.count;
//				islike = res.object.islike;
//				if (mun > 1000) {
//					mun = (mun / 1000).toFixed(1) + "k";
//					$(".mun").html(mun);
//				} else {
//					mun = mun;
//					$(".mun").html(mun);
//				}
//			} else if (res.type == 202) {
//				window.location.href = redirect_url;
//			} else if (res.type == 203) {
//				window.location.href = wxurl + "web/login.html";
//			} else {
//				alert(res.msg);
//			}
		}
	})
	$(".likebtn").click(function() {
		if (islike == 0) {
			$.ajax({
				url : wxurl + "wechat/index/like",
				type : "post",
				dataType : "json",
				data : {
					type : type,
					name : name
				},
				success : function(res) {
					console.log(res);
					if (res.type == 200) {
						islike = 1;
						mun++;
						if (mun > 1000) {
							mun = (mun / 1000).toFixed(1) + "k";
							$(".mun").html(mun);
						} else {
							mun = mun;
							$(".mun").html(mun);
						}
					}
				}
			})
		} else if (islike == 1) {
			alert('已经点过赞了');
		}
	})
}

function initpage(type, name) {
//	pageview(type, name);
	// wxshare();
}

function pageview(type, name) {
	$.ajax({
		url : wxurl + "wechat/index/pageview",
		type : "post",
		dataType : "json",
		data : {
			type : type,
			name : name
		},
		success : function(res) {
			if (res.type == 200) {

			} else if (res.type == 202) {
				window.location.href = redirect_url;
			} else if (res.type == 203) {
				window.location.href = wxurl + "web/login.html";
			} else {
				alert(res.msg);
			}
		}
	})
}

function wxshare() {
	$.ajax({
		url : wxurl + "wechat/login/wxshare",
		type : "post",
		dataType : "json",
		data : {
			url : window.location.href
		},
		success : function(res) {
			if (res.type == 200) {
				wx.config({
					debug : false,
					appId : "wxe3a4d452dc0cb22c",
					timestamp : res.object.timestamp,
					nonceStr : res.object.nonce_str,
					signature : res.object.signature,
					jsApiList : [ 'onMenuShareTimeline',
							'onMenuShareAppMessage', 'onMenuShareQQ',
							'onMenuShareWeibo', 'onMenuShareQZone',
							'chooseImage', 'previewImage', 'uploadImage',
							'downloadImage', 'getLocation' ]
				});

				wx.ready(function() {
					fenxiangwxpy();
				})
			}
		}
	})
}

var fenxiangObj = {
	title : "艾小渝",
	desc : "艾小渝",
	link : "http://burningstone.magic-source.com/burningstone/wechat/login/login",
	imgUrl : "http://burningstone.magic-source.com/burningstone/web/img/logo.png"
}

function fenxiangwxpy() {
	// 分享给朋友
	wx.onMenuShareAppMessage({
		title : fenxiangObj.title, // 分享标题
		desc : fenxiangObj.desc, // 分享描述
		link : fenxiangObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl : fenxiangObj.imgUrl, // 分享图标
		success : function() {
			// 用户点击了分享后执行的回调函数
		}
	})
	// 分享给朋友圈
	wx.onMenuShareTimeline({
		title : fenxiangObj.title, // 分享标题
		link : fenxiangObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl : fenxiangObj.imgUrl, // 分享图标
		success : function() {
			// 用户点击了分享后执行的回调函数
		}
	})
	// 分享给QQ
	wx.onMenuShareQQ({
		title : fenxiangObj.title, // 分享标题
		desc : fenxiangObj.desc, // 分享描述
		link : fenxiangObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl : fenxiangObj.imgUrl, // 分享图标
		success : function() {
			// 用户点击了分享后执行的回调函数
		}
	})
	// 分享给QQ微博
	wx.onMenuShareWeibo({
		title : fenxiangObj.title, // 分享标题
		desc : fenxiangObj.desc, // 分享描述
		link : fenxiangObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl : fenxiangObj.imgUrl, // 分享图标
		success : function() {
			// 用户点击了分享后执行的回调函数
		}
	})
	// 分享给QQ空间
	wx.onMenuShareQZone({
		title : fenxiangObj.title, // 分享标题
		desc : fenxiangObj.desc, // 分享描述
		link : fenxiangObj.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl : fenxiangObj.imgUrl, // 分享图标
		success : function() {
			// 用户点击了分享后执行的回调函数
		}
	})
}
