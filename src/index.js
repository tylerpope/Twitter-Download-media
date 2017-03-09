import $ from "jquery";

require('../sass/extension.scss');

var icon = chrome.runtime.getURL("images/dl_img.svg");

const imgElem = '<img id="dl_twit_icon" style="position:absolute; top:10px; right:10px; max-width:25px; z-index:10;" src="' + icon + '" />';

// $('.Gallery-media')

$('.AdaptiveMediaOuterContainer').on('click', function(){
	$('.Gallery-content').prepend(imgElem);
});

$(document).on('click', '#dl_twit_icon', function(){
	var twitImg = $(this).parent('.Gallery-content').children('.Gallery-media').find('img').attr('src');
	var twitImgStripped = twitImg.replace(':large', '');
	var a = $("<a>")
    .attr("href", twitImgStripped)
    .attr("download", "img.png")
    .appendTo("body");

	a[0].click();

	a.remove();
});