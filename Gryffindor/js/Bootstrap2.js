<!DOCTYPE html>
<!-- saved from url=(0071)https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs -->
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="msvalidate.01" content="36A28D9109C077BA3E623651FC1656F4">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="fb:admins" content="19908503">
    <meta property="fb:app_id" content="112989545392380"> 
    <meta property="og:title" content="HTML Snippets for Twitter Boostrap framework : Bootsnipp.com">
    <meta property="og:type" content="website">
    <meta property="twitter:account_id" content="786331568">

  	  <meta property="og:url" content="https://bootsnipp.com/snippets/dPyz">
    <meta itemprop="name" content="Bootstrap Simple Datepicker with moment.js Example">
    <meta itemprop="description" content="Bootstrap example of Simple Datepicker with moment.js using HTML, Javascript, jQuery, and CSS. Snippet by mouse0270">
    <meta name="description" content="Bootstrap example of Simple Datepicker with moment.js using HTML, Javascript, jQuery, and CSS. Snippet by mouse0270">
    <meta name="keywords" content="Bootstrap, css, javascript, jquery, code, example, snippet,Simple Datepicker with moment.js, jquery, user interface, calendar, ">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@bootsnipp">
    <meta name="twitter:title" content="Simple Datepicker with moment.js">
    <meta name="twitter:description" content="jquery, user interface, calendar,  Bootstrap HTML CSS JS code snippet by mouse0270">
    <meta name="twitter:creator" content="@bootsnipp">
    <meta name="twitter:image:src" content="//d2d3qesrx8xj6s.cloudfront.net/img/screenshots/95a5f4553c32acb66e5be7718509627baa296ad8.jpeg ">
      <meta property="og:image" content="https://bootsnipp.com/img/logo.jpg">
    <meta property="og:site_name" content="Bootsnipp.com">

      <meta property="og:description" content="Awesome Bootstrap HTML CSS JS Snippet on Bootsnipp.com.">
      <title>Bootstrap Snippet Simple Datepicker with moment.js using HTML CSS  Bootstrap  jQuery </title>

    <link rel="shortcut icon" href="https://d2d3qesrx8xj6s.cloudfront.net/favicon.ico" type="image/x-icon">
    <link rel="icon" href="https://d2d3qesrx8xj6s.cloudfront.net/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon-precomposed" href="https://d2d3qesrx8xj6s.cloudfront.net/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="https://d2d3qesrx8xj6s.cloudfront.net/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="https://d2d3qesrx8xj6s.cloudfront.net/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="https://d2d3qesrx8xj6s.cloudfront.net/apple-touch-icon-144x144-precomposed.png">
    <link rel="alternate" type="application/rss+xml" title="Latest snippets from Bootsnipp.com" href="https://bootsnipp.com/feed.rss">

    <link rel="stylesheet" href="./Bootstrap_files/bootstrap.min.css">
    <link rel="stylesheet" href="./Bootstrap_files/font-awesome.min.css">
<!--    <link rel="stylesheet" href="//d2d3qesrx8xj6s.cloudfront.net/dist/bootsnipp.min.css?ver=872ccd9c6dce18ce6ea4d5106540f089">-->
    <link rel="stylesheet" href="./Bootstrap_files/bootsnipp.min.css">
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
    	<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.2.0/respond.js"></script>
    <![endif]-->
<script async="" src="./Bootstrap_files/fp.js.download"></script><script async="" src="./Bootstrap_files/analytics.js.download"></script><script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55581850-1', 'auto', {'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', ['danstools.com','unixtimestamp.com','url-encode-decode.com','cssfontstack.com','hexcolortool.com','htaccessredirect.net','jspretty.com','jsmini.com','jsobfuscate.com','md5hashgenerator.com','regextester.com','cleancss.com','favicon-generator.org','website-performance.org','permissions-calculator.org','conversoes.org','convertissez.fr','convertitore.net','elconvertidor.com','files-conversion.com','henkan-muryo.com','konvertirung.org','konvertor.org','tahwil.net','zhuan-huan.com','bootsnipp.com'] );
  ga('send', 'pageview');

        window.onload = function() {
/*        $('body').append('<script type="text/javascript" src="https://srv.buysellads.com/ads/CVADLKQJ.json?callback=drop_ad" async><\/script>');
        $('body').append("<style>.bsa-apiads {\
  line-height: 1.5;\
  display: inline-block;\
  float: left;\
  font-size: 12px;\
  background-color: #5A8DB6;\
  border: solid 1px #337799;\
  box-shadow: inset 0 1px hsla(0, 0%, 100%, .1);\
  box-sizing: border-box;\
  background-image: url('http://www.danstools.com/devops/img/devoops_pattern_b10.png');\
  margin: 1em 1em 0 2em;\
  border-radius: 4px;\
  text-align: center;\
  padding: .25em;\
}\
 \
.bsa-apiads a:before {\
  margin-right: 4px;\
  padding: 2px 6px;\
  border-radius: 3px;\
  background-color: #58B668;\
  color: #fff;\
  content: 'Ad';\
}\
 \
  .bsa-apiads a {\
    color: #fff;\
  }\
 \
  .bsa-apiads a:hover {\
    color: inherit;\
  }</style>");*/
        setTimeout(function() {
          var ad = document.querySelector(".bsap_ac1f95c148ce6148393fd34e69a52240");
          var promos = document.querySelectorAll(".art2ey");
	  var isblock = 0;
          for (var i = 0; i < promos.length; i++) {
                  var promo = promos[i];
          if (isblock ==1 || (ad && ad.innerHTML.replace(/\s/g, "").length == 0)) {
	    isblock = 1;
//            ad.style.cssText = 'display:block !important';
//          promo.style.cssText = 'display:none !important';
            promo.innerHTML = '<a href=\"http://shareasale.com/r.cfm?b=917234&u=1395483&m=41388&urllink=&afftrack=\"><img src=\"/img/wpe.png\" /></a><p>';
	    promo.style.display= 'inline-block';
	    promo.style.visibility= 'visible';
            promo.style.maxWidth= '';
          } else if (promo) {
            promo.innerHTML = '<center>\
<div id="art2ey2" style="background-color:#FCFCFC;width: 728px;height:90px;padding:10px;border:1px solid #cccccc;text-align:left;">\
<h5 style="margin-top:0px;margin-bottom:2px">\
<i class="fa fa-area-chart"></i> <a href="http://shareasale.com/r.cfm?b=917234&u=1395483&m=41388&urllink=&afftrack=" >Wordpress Hosting</a></h5>\
Premium managed Wordpress hosting. Use coupon wpe20off for 20% off!\
</div>\
</center>';
//            var promotwo = document.querySelector("#toppromo2");
            promo.childNodes[0].childNodes[0].style.width= '';
          }
	  }
        }, 1000);
      };
   
</script>
    <script type="text/javascript">
    var fb_param = {};
    fb_param.pixel_id = '6007046190250';
    fb_param.value = '0.00';
    (function(){
      var fpw = document.createElement('script');
      fpw.async = true;
      fpw.src = '//connect.facebook.net/en_US/fp.js';
      var ref = document.getElementsByTagName('script')[0];
      ref.parentNode.insertBefore(fpw, ref);
    })();
    </script>
    <noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/offsite_event.php?id=6007046190250&amp;value=0" /></noscript>
  <script type="text/javascript" async="" src="https://s3.buysellads.com/ac/bsa.js"></script><style type="text/css"></style><style id="ace_editor.css">.ace_editor {position: relative;overflow: hidden;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}
/*# sourceURL=ace/css/ace_editor.css */</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><script src="./Bootstrap_files/theme-clouds.js.download"></script><script src="./Bootstrap_files/mode-html.js.download"></script><script src="./Bootstrap_files/mode-javascript.js.download"></script><script src="./Bootstrap_files/mode-css.js.download"></script><style id="ace-clouds">.ace-clouds .ace_gutter {background: #ebebeb;color: #333}.ace-clouds .ace_print-margin {width: 1px;background: #e8e8e8}.ace-clouds {background-color: #FFFFFF;color: #000000}.ace-clouds .ace_cursor {color: #000000}.ace-clouds .ace_marker-layer .ace_selection {background: #BDD5FC}.ace-clouds.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-clouds .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-clouds .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-clouds .ace_marker-layer .ace_active-line {background: #FFFBD1}.ace-clouds .ace_gutter-active-line {background-color : #dcdcdc}.ace-clouds .ace_marker-layer .ace_selected-word {border: 1px solid #BDD5FC}.ace-clouds .ace_invisible {color: #BFBFBF}.ace-clouds .ace_keyword,.ace-clouds .ace_meta,.ace-clouds .ace_support.ace_constant.ace_property-value {color: #AF956F}.ace-clouds .ace_keyword.ace_operator {color: #484848}.ace-clouds .ace_keyword.ace_other.ace_unit {color: #96DC5F}.ace-clouds .ace_constant.ace_language {color: #39946A}.ace-clouds .ace_constant.ace_numeric {color: #46A609}.ace-clouds .ace_constant.ace_character.ace_entity {color: #BF78CC}.ace-clouds .ace_invalid {background-color: #FF002A}.ace-clouds .ace_fold {background-color: #AF956F;border-color: #000000}.ace-clouds .ace_storage,.ace-clouds .ace_support.ace_class,.ace-clouds .ace_support.ace_function,.ace-clouds .ace_support.ace_other,.ace-clouds .ace_support.ace_type {color: #C52727}.ace-clouds .ace_string {color: #5D90CD}.ace-clouds .ace_comment {color: #BCC8BA}.ace-clouds .ace_entity.ace_name.ace_tag,.ace-clouds .ace_entity.ace_other.ace_attribute-name {color: #606060}.ace-clouds .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y}
/*# sourceURL=ace/css/ace-clouds */</style></head>
  <body style="">
<!-- BuySellAds Ad Code -->
<script type="text/javascript">
(function(){
  var bsa = document.createElement('script');
     bsa.type = 'text/javascript';
     bsa.async = true;
     bsa.src = '//s3.buysellads.com/ac/bsa.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
})();
</script>
<!-- End BuySellAds Ad Code -->

    <nav class="navbar navbar-fixed-top navbar-bootsnipp animate" role="navigation" style="z-index: 9999999">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="animbrand">
        <a class="navbar-brand animate" href="https://bootsnipp.com/">Bootsnipp</a>
      </div>
    </div>
<!--<script src="/js/BSAcpc.js" async></script>
<div class="bsa-apiads hidden-sm hidden-xs"></div>
-->
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul class="nav navbar-nav navbar-left">
	<li>
          <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="dropdown-toggle " data-toggle="dropdown">Bootstrap <span class="caret"></span>
		<span style="font-size:.5em; position:absolute; top:3px; left:2px">For</span>
		  </a>
          <ul class="dropdown-menu" role="menu">
	    <li class="dropdown-header">CSS Frameworks</li>
            <li class="active"><a href="https://bootsnipp.com/" class="">Bootstrap</a></li>
            <li class=""><a href="https://bootsnipp.com/foundation" class="">Foundation</a></li>
            <li class=""><a href="https://bootsnipp.com/semanticui" class="">Semantic UI</a></li>
            <li class=""><a href="https://bootsnipp.com/materialize" class="">Materialize</a></li>
            <li class=""><a href="https://bootsnipp.com/purecss" class="">Pure</a></li>
            <li class=""><a href="https://bootsnipp.com/bulma" class="">Bulma</a></li>
	    <li class="dropdown-header">References</li>
            <li class=""><a href="https://bootsnipp.com/cssref" class="">CSS Reference</a></li>
<!--            <li class=""><a href="/bootstrapref" class="">Bootstrap Reference</a></li>-->
	  </ul>
	</li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="">
          <form action="https://bootsnipp.com/search" method="GET" role="search">
              <input style="width:200px;margin-top:10px;margin-right:50px" type="text" class="input-sm form-control" name="q" placeholder="Search for snippets">
          </form>
        </li>
<!--        <li class=""><a href="https://bootsnipp.com/about" class="animate">About</a></li>-->
        <li><a href="https://bootsnipp.com/user/snippets/new" class="">+New</a></li>
        <li><a href="https://bootsnipp.com/forum/bootstrap" class="">Community</a></li>
        <li>
          <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="dropdown-toggle " data-toggle="dropdown">Tools <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
<!--            <li class=""><a href="https://bootsnipp.com/blog" class="animate">Blog <span class="pull-right glyphicon glyphicon-pencil"></span></a></li>
            <li class=""><a href="https://bootsnipp.com/resources" class="animate">List of resources <span class="pull-right glyphicon glyphicon-align-justify"></span></a></li>
            <li><a href="http://getbootstrap.com" target="_blank" class="animate">Download Bootstrap <span class="pull-right glyphicon glyphicon-cloud-download"></span></a></li>
            <li class="dropdown-header">Bootstrap Templates</li>
            <li class=""><a href="https://bootsnipp.com/templates" class="animate">Browse Templates <span class="pull-right glyphicon glyphicon-shopping-cart"></span></a></li>
            <li class="dropdown-header">Builders</li>
-->
            <li class=""><a href="https://bootsnipp.com/builder" class="">Page Builder <span class="pull-right glyphicon glyphicon-modal-window"></span></a></li>
            <li class=""><a href="https://bootsnipp.com/forms" class="">Form Builder <span class="pull-right glyphicon glyphicon-tasks"></span></a></li>
            <li class=""><a href="https://bootsnipp.com/buttons" class="">Button Builder <span class="pull-right glyphicon glyphicon-edit"></span></a></li>
            <li class=""><a href="https://bootsnipp.com/iconsearch" class="">Icon Search <span class="pull-right glyphicon glyphicon-search"></span></a></li>
            <li class="dropdown-header">Dan's Tools</li>
            <li class=""><a href="http://www.cleancss.com/diff-compare-merge/" class="">Diff / Merge <span class="pull-right glyphicon glyphicon-transfer"></span></a></li>
            <li class=""><a href="http://www.hexcolortool.com/" class="">Color Picker <span class="pull-right glyphicon glyphicon-pencil"></span></a></li>
            <li class=""><a href="http://www.danstools.com/keyword-tool/" class="">Keyword Tool <span class="pull-right glyphicon glyphicon-list-alt"></span></a></li>
            <li class=""><a href="http://www.cssfontstack.com/Web-Fonts" class="">Web Fonts <span class="pull-right glyphicon glyphicon-font"></span></a></li>
            <li class=""><a href="http://www.htaccessredirect.net/" class="">.htaccess Generator <span class="pull-right glyphicon glyphicon-console"></span></a></li>
            <li class=""><a href="http://www.favicon-generator.org/" class="">Favicon Generator <span class="pull-right glyphicon glyphicon-picture"></span></a></li>
            <li class=""><a href="http://www.website-performance.org/" class="">Site Speed Test <span class="pull-right glyphicon glyphicon-dashboard"></span></a></li>

          </ul>
        </li>
        <li class="dropdown active">
          <a href="https://bootsnipp.com/snippets" class="dropdown-toggle " data-toggle="dropdown">Snippets <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li class="active"><a href="https://bootsnipp.com/snippets/featured" class="">Featured <span class="pull-right glyphicon glyphicon-star"></span></a></li>
            <li class=""><a href="https://bootsnipp.com/tags" class="">Tags  <span class="pull-right glyphicon glyphicon-tags"></span></a></li>
            <li class="dropdown-header">By Bootstrap Version</li>
                          <li><a href="https://bootsnipp.com/tags/4.1.1" class="">4.1.1</a></li>
                          <li><a href="https://bootsnipp.com/tags/4.0.0" class="">4.0.0</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.3.0" class="">3.3.0</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.2.0" class="">3.2.0</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.1.0" class="">3.1.0</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.0.3" class="">3.0.3</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.0.1" class="">3.0.1</a></li>
                          <li><a href="https://bootsnipp.com/tags/3.0.0" class="">3.0.0</a></li>
                          <li><a href="https://bootsnipp.com/tags/2.3.2" class="">2.3.2</a></li>
                      </ul>
        </li>
        
                  <li class=""><a href="https://bootsnipp.com/register" class="">Register</a></li>
          <li id="nav-login-btn" class=""><a href="https://bootsnipp.com/login" class="">Login</a></li>
        
<!--        <li class="hidden-xs"><a href="#toggle-search" class=""><span class="glyphicon glyphicon-search"></span></a></li>-->
      </ul>
    </div>
  </div>
<!--  <div class="bootsnipp-search ">
    <div class="container">
      <form action="https://bootsnipp.com/search" method="GET" role="search">
        <div class="input-group">
          <input type="text" class="form-control" name="q" placeholder="Search for snippets and hit enter">
          <span class="input-group-btn">
            <button class="btn btn-danger" type="reset"><span class="glyphicon glyphicon-remove"></span></button>
          </span>
        </div>
      </form>
    </div>
  </div>
-->
</nav>
           <div class="container" style="margin-top:10px;">
        <div class="row" itemscope="http://schema.org/Thing">
	 <div class="col-sm-12 col-md-4">
                <div class="title-bar" style="margin-bottom:0px;"> 
                    <a href="https://bootsnipp.com/mouse0270" title="Bootstrap snippets by mouse0270" class="avatar-sm-container pull-left"><img src="./Bootstrap_files/509c36a417ef03347b6ca453e712c2b2.jpeg" class="img-rounded user-avatar-sm"></a>

                    <h4 itemprop="name">"Simple Datepicker with moment.js"<br>
                    <small>Bootstrap 3.1.0 Snippet by <a href="https://bootsnipp.com/mouse0270" title="Bootstrap snippets by mouse0270" itemscope="" itemtype="http://schema.org/Person" itemprop="name">mouse0270</a></small>
                    </h4>
                    <div class="clearfix"></div>
                </div> 
                <div id="tags" itemprop="description" style="padding-top:0px; float:left;">

                    <a href="https://bootsnipp.com/tags/3.1.0"><span class="label label-primary">3.1.0</span></a>
		                            <a href="https://bootsnipp.com/tags/jquery" title="jquery"><span class="label label-primary">jQuery</span></a>
		                                                <a href="https://bootsnipp.com/tags/jquery" title="jquery"><span class="label label-primary">jquery</span></a>
                                            <a href="https://bootsnipp.com/tags/user-interface" title="user interface"><span class="label label-primary">user interface</span></a>
                                            <a href="https://bootsnipp.com/tags/calendar" title="calendar"><span class="label label-primary">calendar</span></a>
                                                                <a href="https://bootsnipp.com/tags/datepicker" title="datepicker"><span class="label label-primary">datepicker</span></a>
                                    </div> 

	 </div>
	 <div class="col-sm-12 col-md-8">
                <div style="margin-top:10px">
<center>

<script async="" src="./Bootstrap_files/f.txt"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8815422507798180" data-ad-slot="5700240528" data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


<!--<div id='div-gpt-ad-1490987047563-0'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1490987047563-0'); });
</script>
</div>
-->
</center>
</div>

	 </div>
	</div>
	<div class="row" style="margin-top: 10px;margin-bottom:10px;">
                   <div class="col-md-8">
                        <div class="btn-group">
                            <button type="button" id="show-preview" class="btn btn-info">Preview</button>
                            <button type="button" id="show-html" class="btn btn-info">HTML</button>
                                                        <button type="button" id="show-css" class="btn btn-info">CSS</button>
                                                                                    <button type="button" id="show-js" class="btn btn-info active">JS</button>
                                                    </div>

                        <div class="btn-group">
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span class="glyphicon glyphicon-cog"></span>&nbsp;
                          </button>
                          <ul class="dropdown-menu pull-right" role="menu">
                                                        <li><a href="https://bootsnipp.com/fullscreen/dPyz" target="_blank"><span class="glyphicon glyphicon-fullscreen"></span> View Full Screen</a></li>
                                                      </ul>
                        </div>
                        <div class="btn-group">
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span class="icon-code-fork"></span> Fork
                          </button>
                          <ul class="dropdown-menu pull-right" role="menu" style="max-height:300px;overflow-y:scroll">
				<li><a href="https://bootsnipp.com/fork/dPyz" id="reboot" title="Copy this snippet"><span class="icon-code-fork"></span> Fork this</a></li>
			    									    <li class="dropdown-header">Children</li>
			    				<li><a href="https://bootsnipp.com/snippets/Oozl" title="Simple Datepicker with moment.js">2018-07-17 18:52:27</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/yVp4" title="Simple Datepicker with moment.js">2018-07-17 20:37:02</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/xMKB" title="Simple Datepicker with moment.js">2018-07-14 12:20:50</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/4y9m" title="Simple Datepicker with moment.js">2018-07-14 12:19:25</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/OpGj" title="Simple Datepicker with moment.js">2018-07-17 10:25:15</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/yjZe" title="Simple Datepicker with moment.js">2018-07-17 17:20:04</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/x53N" title="Simple Datepicker with moment.js">2018-07-17 05:46:01</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/4qnB" title="Simple Datepicker with moment.js">2018-07-14 12:19:23</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/d7lB" title="Simple Datepicker with moment.js">2018-07-17 13:09:12</a></li>
			    				<li><a href="https://bootsnipp.com/snippets/4ZMB" title="Simple Datepicker with moment.js">2018-07-17 10:26:07</a></li>
			    			
			  </ul>
			</div>
<!--                        <a href="https://bootsnipp.com/fork/dPyz" id="reboot" class="btn btn-default tip" title="Copy this snippet"><span class="glyphicon glyphicon-retweet"></span> Fork this</a>-->
			<div id="action-bar" style="display: inline-block">
			    <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="btn btn-default disabled"><i class="icon-eye-open"></i> 102.6K</a>
			    <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#comments" class="btn btn-default tip" title="" data-original-title="View comments"><i class="icon-comment"></i>&nbsp;</a>
			    				<a href="https://bootsnipp.com/favorites/snippet/dPyz?url=snippets%2Ffeatured%2Fsimple-datepicker-with-momentjs" class="btn btn-default tip" title="" data-original-title="Please log in to favorite this snippet"><span class="glyphicon glyphicon-thumbs-up"></span> 198 Fav</a>
			    			</div>
                    </div>
		    <div class="col-md-4">
			    <div class="pull-right social-sharing hidden-xs" style="padding: 0px">
				<a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="btn btn-primary" onclick="window.open(
				      &#39;https://www.facebook.com/sharer/sharer.php?u=&#39;+encodeURIComponent(&#39;http://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs&#39;) +&#39;&amp;t=&#39; + encodeURIComponent(&#39;Simple Datepicker with moment.js #Bootstrap #snippet&#39;), 
				      &#39;facebook-share-dialog&#39;, 
				      &#39;width=626,height=436,top=&#39;+((screen.height - 436) / 2)+&#39;,left=&#39;+((screen.width - 626)/2 )); 
				    return false;">
				    <i class="icon-facebook"></i>
				</a>
				
				<a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="btn btn-info" onclick="window.open(
				      &#39;https://twitter.com/share?url=&#39;+encodeURIComponent(&#39;http://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs&#39;)+&#39;&amp;text=&#39;+encodeURIComponent(&#39;I shared a cool #snippet on @bootsnipp  :&#39;) + &#39;&amp;count=none/&#39;, 
				      &#39;twitter-share-dialog&#39;, 
				      &#39;width=626,height=436,top=&#39;+((screen.height - 436) / 2)+&#39;,left=&#39;+((screen.width - 626)/2 )); 
				    return false;">
				  <i class="icon-twitter"></i>
				</a>
			    </div>

		    </div>

                <div class="row visible-xs">
                    <div class="col-md-12">
                        <p>
                        </p><div class="btn-group btn-group-justified">
                            <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="btn btn-primary" onclick="window.open(
                                  &#39;https://www.facebook.com/sharer/sharer.php?u=&#39;+encodeURIComponent(&#39;http://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs&#39;) +&#39;&amp;t=&#39; + encodeURIComponent(&#39;Simple Datepicker with moment.js #Bootstrap #snippet&#39;), 
                                  &#39;facebook-share-dialog&#39;, 
                                  &#39;width=626,height=436,top=&#39;+((screen.height - 436) / 2)+&#39;,left=&#39;+((screen.width - 626)/2 )); 
                                return false;">
                                <i class="icon-facebook"></i> Post to Facebook
                            </a>
                            
                            <a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" class="btn btn-info" onclick="window.open(
                                  &#39;https://twitter.com/share?url=&#39;+encodeURIComponent(&#39;http://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs&#39;)+&#39;&amp;text=&#39;+encodeURIComponent(&#39;I shared a cool #snippet on @bootsnipp  :&#39;) + &#39;&amp;count=none/&#39;, 
                                  &#39;twitter-share-dialog&#39;, 
                                  &#39;width=626,height=436,top=&#39;+((screen.height - 436) / 2)+&#39;,left=&#39;+((screen.width - 626)/2 )); 
                                return false;">
                              <i class="icon-twitter"></i> Tweet this
                            </a>
                        </div>
                        <p></p>
                    </div>
                    
                </div>

            </div>
         
            

        </div>
        
    

    <div id="playground-container" style="overflow: hidden">
        <div id="preview-container" style="display: none;"><iframe id="snippet-preview" class="preview-iframe" src="./Bootstrap_files/dPyz.html"></iframe></div>
        <div class="container">
            <div class="row" itemscope="http://schema.org/Code">
                <div class="col-lg-12" itemprop="programmingLanguage" content="html/css/js">
    
                    <div id="editor-html" class="playground-editor ace_editor ace-clouds" style="height: 500px; display: none;" itemprop="sampleType"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 14px; width: 6.59781px; left: 51px; top: 0px;"></textarea><div class="ace_gutter"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 524px; width: 47px;"><div class="ace_gutter-cell  ace_info" style="height: 14px;">1</div><div class="ace_gutter-cell " style="height: 14px;">2</div><div class="ace_gutter-cell " style="height: 14px;">3</div><div class="ace_gutter-cell  ace_error" style="height: 14px;">4</div><div class="ace_gutter-cell " style="height: 14px;">5</div><div class="ace_gutter-cell " style="height: 14px;">6<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">7<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">8<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">9<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">10</div><div class="ace_gutter-cell " style="height: 14px;">11</div><div class="ace_gutter-cell " style="height: 14px;">12<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">13</div><div class="ace_gutter-cell " style="height: 14px;">14</div><div class="ace_gutter-cell " style="height: 14px;">15</div><div class="ace_gutter-cell " style="height: 14px;">16</div><div class="ace_gutter-cell " style="height: 14px;">17<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">18<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">19</div><div class="ace_gutter-cell " style="height: 14px;">20</div><div class="ace_gutter-cell " style="height: 14px;">21<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">22<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">23</div><div class="ace_gutter-cell " style="height: 14px;">24</div><div class="ace_gutter-cell " style="height: 14px;">25</div><div class="ace_gutter-cell " style="height: 14px;">26</div><div class="ace_gutter-cell " style="height: 14px;">27</div><div class="ace_gutter-cell " style="height: 14px;">28</div><div class="ace_gutter-cell " style="height: 14px;">29<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">30</div><div class="ace_gutter-cell " style="height: 14px;">31<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">32</div><div class="ace_gutter-cell " style="height: 14px;">33</div><div class="ace_gutter-cell " style="height: 14px;">34</div><div class="ace_gutter-cell " style="height: 14px;">35</div><div class="ace_gutter-cell " style="height: 14px;">36</div><div class="ace_gutter-cell " style="height: 14px;">37</div></div><div class="ace_gutter-active-line" style="top: 0px; height: 14px;"></div></div><div class="ace_scroller" style="left: 47px; right: 17px; bottom: 0px;"><div class="ace_content" style="margin-top: 0px; width: 1251px; height: 524px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 531.825px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:14px"><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">link</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">href</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">rel</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"stylesheet"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">id</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"bootstrap-css"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">src</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">src</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"//code.jquery.com/jquery-1.11.1.min.js"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_script ace_tag-name ace_xml">script</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_comment ace_xml">&lt;!------ Include the above in your HEAD tag ----------&gt;</span></div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"container"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"row"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"col-xs-12 show-focus-status"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"alert alert-danger"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">strong</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">Out of Focus!</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">strong</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml"> This demo does support the use of your keyboard to change dates! But since it is contained within an iframe you must first click here!</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"alert alert-success hidden"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">strong</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">In Focus!</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">strong</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml"> You can use your left and right arrow keys to change the date of the first date picker. Try it out now!</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"row"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"col-sm-4"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h2</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">By Day</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h2</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">hr</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">/&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"date-picker"</span><span class="ace_text ace_tag-whitespace ace_xml">  </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-date</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"2014/09/02"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-keyboard</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"true"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"date-container pull-left"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h4</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"weekday"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">Monday</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h4</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h2</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"date"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">Februray 4th</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h2</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h4</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"year pull-right"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">2014</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">h4</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-toggle</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"datepicker"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-type</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"subtract"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"fa fa-angle-left"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-toggle</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"datepicker"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-type</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"add"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"fa fa-angle-right"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"input-group input-datepicker"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_form ace_tag-name ace_xml">input</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">type</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"text"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"form-control"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-format</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"YYYY/MM/DD"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">placeholder</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"YYYY/MM/DD"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"input-group-btn"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_form ace_tag-name ace_xml">button</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"btn btn-default"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">type</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"button"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_text ace_xml">Go!</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_form ace_tag-name ace_xml">button</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_tag-open ace_xml">&lt;</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">data-toggle</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"calendar"</span><span class="ace_text ace_tag-whitespace ace_xml"> </span><span class="ace_entity ace_other ace_attribute-name ace_xml">class</span><span class="ace_keyword ace_operator ace_attribute-equals ace_xml">=</span><span class="ace_string ace_attribute-value ace_xml">"fa fa-calendar"</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">span</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_text ace_xml">    </span><span class="ace_meta ace_tag ace_punctuation ace_end-tag-open ace_xml">&lt;/</span><span class="ace_meta ace_tag ace_tag-name ace_xml">div</span><span class="ace_meta ace_tag ace_punctuation ace_tag-close ace_xml">&gt;</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="left: 4px; top: 0px; width: 6.59781px; height: 14px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 1526px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 47px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 1298px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
                    <div id="editor-css" class="playground-editor ace_editor ace-clouds" style="height: 500px; display: none;" itemprop="sampleType"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 14px; width: 6.59781px; left: 51px; top: 0px;"></textarea><div class="ace_gutter"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 524px; width: 47px;"><div class="ace_gutter-cell  ace_info" style="height: 14px;">1</div><div class="ace_gutter-cell  ace_info" style="height: 14px;">2</div><div class="ace_gutter-cell " style="height: 14px;">3</div><div class="ace_gutter-cell " style="height: 14px;">4<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell  ace_info" style="height: 14px;">5</div><div class="ace_gutter-cell " style="height: 14px;">6</div><div class="ace_gutter-cell  ace_info" style="height: 14px;">7<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">8</div><div class="ace_gutter-cell " style="height: 14px;">9</div><div class="ace_gutter-cell " style="height: 14px;">10</div><div class="ace_gutter-cell " style="height: 14px;">11</div><div class="ace_gutter-cell " style="height: 14px;">12<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">13</div><div class="ace_gutter-cell " style="height: 14px;">14</div><div class="ace_gutter-cell " style="height: 14px;">15</div><div class="ace_gutter-cell " style="height: 14px;">16</div><div class="ace_gutter-cell " style="height: 14px;">17</div><div class="ace_gutter-cell " style="height: 14px;">18</div><div class="ace_gutter-cell " style="height: 14px;">19</div><div class="ace_gutter-cell " style="height: 14px;">20</div><div class="ace_gutter-cell " style="height: 14px;">21</div><div class="ace_gutter-cell " style="height: 14px;">22</div><div class="ace_gutter-cell " style="height: 14px;">23<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell  ace_info" style="height: 14px;">24</div><div class="ace_gutter-cell " style="height: 14px;">25</div><div class="ace_gutter-cell  ace_info" style="height: 14px;">26<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell  ace_info" style="height: 14px;">27</div><div class="ace_gutter-cell  ace_info" style="height: 14px;">28</div><div class="ace_gutter-cell " style="height: 14px;">29</div><div class="ace_gutter-cell " style="height: 14px;">30</div><div class="ace_gutter-cell " style="height: 14px;">31</div><div class="ace_gutter-cell " style="height: 14px;">32<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">33</div><div class="ace_gutter-cell " style="height: 14px;">34</div><div class="ace_gutter-cell " style="height: 14px;">35<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">36</div><div class="ace_gutter-cell " style="height: 14px;">37</div></div><div class="ace_gutter-active-line" style="top: 0px; height: 14px;"></div></div><div class="ace_scroller" style="left: 47px; right: 17px; bottom: 0px;"><div class="ace_content" style="margin-top: 0px; width: 1251px; height: 524px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 531.825px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:14px">@<span class="ace_constant">import</span> <span class="ace_constant">url</span>(<span class="ace_constant">http</span>://<span class="ace_constant">fonts</span><span class="ace_variable">.googleapis.com</span>/<span class="ace_constant">css</span>?<span class="ace_constant">family</span>=<span class="ace_constant">Roboto</span><span class="ace_string">:400</span>,<span class="ace_constant">300</span>);</div><div class="ace_line" style="height:14px">@<span class="ace_constant">import</span> <span class="ace_constant">url</span>(<span class="ace_constant">http</span>://<span class="ace_constant">netdna</span><span class="ace_variable">.bootstrapcdn.com</span>/<span class="ace_constant">font-awesome</span>/<span class="ace_constant">4</span><span class="ace_variable">.0.3</span>/<span class="ace_constant">css</span>/<span class="ace_constant">font-awesome</span><span class="ace_variable">.css</span>);</div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_constant">body</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">padding</span>: <span class="ace_constant ace_numeric">70</span><span class="ace_keyword">px</span> <span class="ace_constant ace_numeric">0</span><span class="ace_keyword">px</span>;</div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_variable">.fa.pull-right</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">margin-left</span>: <span class="ace_constant ace_numeric">0.1</span><span class="ace_keyword">em</span>;   </div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-picker</span>,</div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-container</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">position</span>: <span class="ace_support ace_constant">relative</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">display</span>: <span class="ace_support ace_constant">inline-block</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">width</span>: <span class="ace_constant ace_numeric">100</span><span class="ace_keyword">%</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">color</span>: <span class="ace_support ace_function">rgb</span>(<span class="ace_constant ace_numeric">75</span>, <span class="ace_constant ace_numeric">77</span>, <span class="ace_constant ace_numeric">78</span>);</div><div class="ace_line" style="height:14px">    -webkit-touch-callout: <span class="ace_support ace_constant">none</span>;</div><div class="ace_line" style="height:14px">    -webkit-user-select: <span class="ace_support ace_constant">none</span>;</div><div class="ace_line" style="height:14px">    -moz-user-select: <span class="ace_support ace_constant">none</span>;</div><div class="ace_line" style="height:14px">    -ms-user-select: <span class="ace_support ace_constant">none</span>;</div><div class="ace_line" style="height:14px">    user-select: <span class="ace_support ace_constant">none</span>;</div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-container</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">padding</span>: <span class="ace_constant ace_numeric">0</span><span class="ace_keyword">px</span> <span class="ace_constant ace_numeric">40</span><span class="ace_keyword">px</span>;   </div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-picker</span> <span class="ace_constant">h2</span>, <span class="ace_variable">.date-picker</span> <span class="ace_constant">h4</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">margin</span>: <span class="ace_constant ace_numeric">0</span><span class="ace_keyword">px</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">padding</span>: <span class="ace_constant ace_numeric">0</span><span class="ace_keyword">px</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">font-family</span>: <span class="ace_string">'Roboto'</span>, <span class="ace_support ace_constant ace_fonts">sans-serif</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">font-weight</span>: <span class="ace_constant ace_numeric">200</span>;</div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-container</span> <span class="ace_variable">.date</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">text-align</span>: <span class="ace_support ace_constant">center</span>;</div><div class="ace_line" style="height:14px"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_variable">.date-picker</span> <span class="ace_constant">span</span><span class="ace_variable">.fa</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">position</span>: <span class="ace_support ace_constant">absolute</span>;</div><div class="ace_line" style="height:14px">    <span class="ace_support ace_type">font-size</span>: <span class="ace_constant ace_numeric">4</span><span class="ace_keyword">em</span>;</div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="left: 4px; top: 0px; width: 6.59781px; height: 14px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 1120px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 47px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 1298px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
                    <div id="editor-js" class="playground-editor ace_editor ace-clouds ace_focus" style="height: 500px; display: block;" itemprop="sampleType" draggable="false"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; height: 14px; width: 6.59781px; left: 0px; top: 0px;"></textarea><div class="ace_gutter"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="margin-top: 0px; height: 524px; width: 47px;"><div class="ace_gutter-cell " style="height: 14px;">1<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">2</div><div class="ace_gutter-cell " style="height: 14px;">3<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">4</div><div class="ace_gutter-cell " style="height: 14px;">5</div><div class="ace_gutter-cell " style="height: 14px;">6<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">7</div><div class="ace_gutter-cell " style="height: 14px;">8</div><div class="ace_gutter-cell " style="height: 14px;">9</div><div class="ace_gutter-cell " style="height: 14px;">10</div><div class="ace_gutter-cell " style="height: 14px;">11<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">12</div><div class="ace_gutter-cell " style="height: 14px;">13</div><div class="ace_gutter-cell " style="height: 14px;">14<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">15</div><div class="ace_gutter-cell " style="height: 14px;">16</div><div class="ace_gutter-cell " style="height: 14px;">17</div><div class="ace_gutter-cell " style="height: 14px;">18</div><div class="ace_gutter-cell " style="height: 14px;">19</div><div class="ace_gutter-cell " style="height: 14px;">20<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">21</div><div class="ace_gutter-cell " style="height: 14px;">22</div><div class="ace_gutter-cell " style="height: 14px;">23</div><div class="ace_gutter-cell " style="height: 14px;">24</div><div class="ace_gutter-cell " style="height: 14px;">25</div><div class="ace_gutter-cell " style="height: 14px;">26</div><div class="ace_gutter-cell " style="height: 14px;">27</div><div class="ace_gutter-cell " style="height: 14px;">28</div><div class="ace_gutter-cell " style="height: 14px;">29</div><div class="ace_gutter-cell " style="height: 14px;">30<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">31</div><div class="ace_gutter-cell " style="height: 14px;">32</div><div class="ace_gutter-cell " style="height: 14px;">33</div><div class="ace_gutter-cell " style="height: 14px;">34</div><div class="ace_gutter-cell " style="height: 14px;">35<span class="ace_fold-widget ace_start ace_open" style="height: 14px;"></span></div><div class="ace_gutter-cell " style="height: 14px;">36</div><div class="ace_gutter-cell " style="height: 14px;">37</div></div><div class="ace_gutter-active-line" style="top: 1022px; height: 14px;"></div></div><div class="ace_scroller" style="left: 47px; right: 17px; bottom: 0px; cursor: default;"><div class="ace_content" style="margin-top: 0px; width: 1251px; height: 524px; margin-left: 0px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 531.825px; visibility: visible;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_selection ace_br1 ace_start" style="height:14px;right:0;top:0px;left:4px;"></div><div class="ace_selection ace_br12" style="height:14px;width:0px;top:518px;left:4px;"></div><div class="ace_selection ace_br8" style="height:504px;right:0;top:14px;left:4px;"></div></div><div class="ace_layer ace_text-layer" style="padding: 0px 4px;"><div class="ace_line" style="height:14px"><span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_variable ace_language">document</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">ready</span><span class="ace_paren ace_lparen">(</span><span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"> </div><div class="ace_line" style="height:14px">    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_variable ace_language">window</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">on</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'focus'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">event</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.show-focus-status &gt; .alert-danger'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">addClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'hidden'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.show-focus-status &gt; .alert-success'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">removeClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'hidden'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px">    <span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">on</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'blur'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">event</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.show-focus-status &gt; .alert-success'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">addClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'hidden'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.show-focus-status &gt; .alert-danger'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">removeClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'hidden'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px">    <span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span>    </div><div class="ace_line" style="height:14px">    </div><div class="ace_line" style="height:14px">    <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date-picker'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">each</span><span class="ace_paren ace_lparen">(</span><span class="ace_storage ace_type">function</span> <span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_storage ace_type">var</span> <span class="ace_identifier">$datepicker</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_variable ace_language">this</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">cur_date</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'date'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">?</span> <span class="ace_identifier">moment</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'date'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_string">"YYYY/MM/DD"</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">moment</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">))</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">format</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_string">"weekday"</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.weekday'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'format'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">?</span> <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.weekday'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'format'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"dddd"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">,</span>                </div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_string">"date"</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'format'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">?</span> <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'format'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"MMMM Do"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">,</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_string">"year"</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.year'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'year'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">?</span> <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.weekday'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'format'</span><span class="ace_paren ace_rparen">)</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_string">"YYYY"</span><span class="ace_paren ace_rparen">)</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_paren ace_rparen">}</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_storage ace_type">function</span> <span class="ace_entity ace_name ace_function">updateDisplay</span><span class="ace_paren ace_lparen">(</span><span class="ace_variable ace_parameter">cur_date</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span>    </div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date-container &gt; .weekday'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">text</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">cur_date</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">format</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">format</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">weekday</span><span class="ace_paren ace_rparen">))</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date-container &gt; .date'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">text</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">cur_date</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">format</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">format</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">date</span><span class="ace_paren ace_rparen">))</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.date-container &gt; .year'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">text</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">cur_date</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">format</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">format</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">year</span><span class="ace_paren ace_rparen">))</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">data</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'date'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_identifier">cur_date</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">format</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'YYYY/MM/DD'</span><span class="ace_paren ace_rparen">))</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.input-datepicker'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">removeClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'show-input'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    </div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">updateDisplay</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">cur_date</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">on</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'click'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_string">'[data-toggle="calendar"]'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">event</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">event</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">preventDefault</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.input-datepicker'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">toggleClass</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'show-input'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span>    <span class="ace_identifier">$datepicker</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">on</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'click'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_string">'.input-datepicker &gt; .input-group-btn &gt; button'</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_storage ace_type">function</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">event</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_identifier">event</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">preventDefault</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height:14px"><span class="ace_indent-guide">    </span><span class="ace_indent-guide">    </span>    <span class="ace_storage ace_type">var</span> <span class="ace_identifier">$input</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">$</span><span class="ace_paren ace_lparen">(</span><span class="ace_variable ace_language">this</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">closest</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'.input-datepicker'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">find</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">'input'</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">,</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer"><div class="ace_cursor" style="left: 23.7934px; top: 1022px; width: 6.59781px; height: 14px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 1036px;"></div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 47px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 1298px;"></div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
                </div>
            </div>
        </div>
    </div>



    <div class="container">
		<div class="col-md-12">
                        <h2>Related: <small><a href="https://bootsnipp.com/similar/dPyz">See <!--228--> More</a></small></h2>
        <div class="row">
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
    <div class="thumbnail bootsnipp-thumb">
	    <div>
	    	<p class="pull-right view-counts hidden-md">
	    		<a href="https://bootsnipp.com/snippets/1K49r" class="tip" data-toggle="tooltip" title="" data-original-title="Viewed">5.0K <i class="icon-eye-open"></i></a> 

	    		<a href="https://bootsnipp.com/snippets/1K49r" class="tip" data-toggle="tooltip" title="" data-original-title="Favorited">0 <i class="icon-thumbs-up"></i></a> 
<!--	    		<a href="https://bootsnipp.com/tags/3.3.0"><span class="label label-info tip" data-toggle="tooltip" title="Bootstrap version">3.3.0</span></a>-->
	    	</p>
	    	<p class="lead snipp-title">
	    		<a href="https://bootsnipp.com/snippets/1K49r">Simple Datepicker with moment</a>
	    	</p>
	    </div>
            <a href="https://bootsnipp.com/snippets/1K49r">
                <img class="lazy" data-original="//d2d3qesrx8xj6s.cloudfront.net/img/screenshots/nofeat-f7e9b3da933e7410b0e037afb9f6ba8f96c15a84.jpg" width="320" height="240" alt="Simple Datepicker with moment" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
        </a>

    	<div class="caption">
    	</div>
    </div>
</div>
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
    <div class="thumbnail bootsnipp-thumb">
	    <div>
	    	<p class="pull-right view-counts hidden-md">
	    		<a href="https://bootsnipp.com/snippets/Vjj3" class="tip" data-toggle="tooltip" title="" data-original-title="Viewed">3.1K <i class="icon-eye-open"></i></a> 

	    		<a href="https://bootsnipp.com/snippets/Vjj3" class="tip" data-toggle="tooltip" title="" data-original-title="Favorited">0 <i class="icon-thumbs-up"></i></a> 
<!--	    		<a href="https://bootsnipp.com/tags/3.1.0"><span class="label label-info tip" data-toggle="tooltip" title="Bootstrap version">3.1.0</span></a>-->
	    	</p>
	    	<p class="lead snipp-title">
	    		<a href="https://bootsnipp.com/snippets/Vjj3">Simple Datepicker with moment.js</a>
	    	</p>
	    </div>
            <a href="https://bootsnipp.com/snippets/Vjj3">
                <img class="lazy" data-original="//d2d3qesrx8xj6s.cloudfront.net/img/screenshots/nofeat-46b9567edcf51b6f702f2301a6e8d07a09db59de.jpg" width="320" height="240" alt="Simple Datepicker with moment.js" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
        </a>

    	<div class="caption">
    	</div>
    </div>
</div>
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
    <div class="thumbnail bootsnipp-thumb">
	    <div>
	    	<p class="pull-right view-counts hidden-md">
	    		<a href="https://bootsnipp.com/snippets/4pBW" class="tip" data-toggle="tooltip" title="" data-original-title="Viewed">2.8K <i class="icon-eye-open"></i></a> 

	    		<a href="https://bootsnipp.com/snippets/4pBW" class="tip" data-toggle="tooltip" title="" data-original-title="Favorited">0 <i class="icon-thumbs-up"></i></a> 
<!--	    		<a href="https://bootsnipp.com/tags/3.1.0"><span class="label label-info tip" data-toggle="tooltip" title="Bootstrap version">3.1.0</span></a>-->
	    	</p>
	    	<p class="lead snipp-title">
	    		<a href="https://bootsnipp.com/snippets/4pBW">Simple Datepicker with moment.js</a>
	    	</p>
	    </div>
            <a href="https://bootsnipp.com/snippets/4pBW">
                <img class="lazy" data-original="//d2d3qesrx8xj6s.cloudfront.net/img/screenshots/nofeat-1baae740b13a3657d26d7878b688b092d4d648ff.jpg" width="320" height="240" alt="Simple Datepicker with moment.js" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
        </a>

    	<div class="caption">
    	</div>
    </div>
</div>
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
    <div class="thumbnail bootsnipp-thumb">
	    <div>
	    	<p class="pull-right view-counts hidden-md">
	    		<a href="https://bootsnipp.com/snippets/2RK5" class="tip" data-toggle="tooltip" title="" data-original-title="Viewed">2.7K <i class="icon-eye-open"></i></a> 

	    		<a href="https://bootsnipp.com/snippets/2RK5" class="tip" data-toggle="tooltip" title="" data-original-title="Favorited">0 <i class="icon-thumbs-up"></i></a> 
<!--	    		<a href="https://bootsnipp.com/tags/3.1.0"><span class="label label-info tip" data-toggle="tooltip" title="Bootstrap version">3.1.0</span></a>-->
	    	</p>
	    	<p class="lead snipp-title">
	    		<a href="https://bootsnipp.com/snippets/2RK5">Simple Datepicker with moment.js</a>
	    	</p>
	    </div>
            <a href="https://bootsnipp.com/snippets/2RK5">
                <img class="lazy" data-original="//d2d3qesrx8xj6s.cloudfront.net/img/screenshots/nofeat-92e1db8f09f732b1f80439e7c00af7356a3c19a1.jpg" width="320" height="240" alt="Simple Datepicker with moment.js" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
        </a>

    	<div class="caption">
    	</div>
    </div>
</div>
                    </div>
        
		</div>
	</div>
<hr>
    <div class="container">
		<div class="col-md-8">
				<a name="comments"></a>
                <h2 id="comments">Questions / Comments: </h2>
				<input type="hidden" id="forumIdHash" value="dPyz">
				<link rel="stylesheet" href="./Bootstrap_files/default.min.css">
<script src="./Bootstrap_files/highlight.min.js.download"></script>
<script>hljs.initHighlightingOnLoad();</script>
<style>.hljs { white-space: nowrap; max-height: 300px;}pre {padding:0}.forumDivOuter {padding:10px 10px;}.forumTagline {padding:10px 0;}.forumvote:hover {color:orange; cursor: pointer;}.forumText { font-weight:500; font-size:1.2em;}.forumName { font-weight:200; font-size:1em;}.forumTime { font-size:1em;}.forumKey { border-radius: 4px;    border: 2px solid #555;    width: 20px;    display: inline-flex;    align-items: center;    justify-content: center;    height: 20px; margin: 0 2px;}</style><div class="newPost"><div id="newPostContainer" class="container-fluid" style="margin-top:10px;"><!--<div class="row"><div class="col-xs-4"><hr style="margin-top:16px;border-top:1px solid #ccc;"></div><div class="col-xs-4 text-center"><a class="btn btn-md btn-warning" id="newPostButton">NEW POST</a></div><div class="col-xs-4"><hr style="margin-top:16px;border-top:1px solid #ccc;"></div></div>--></div><div class="forumDivOuter" style=""><div id="forumDiv"><textarea class="autoExpand forumPost form-control" rows="4" data-min-rows="4" placeholder="Enter your message here"></textarea><br><button class="forumPostButton btn btn-default">Post</button><span style="margin: 0 10px;" class="pull-right"><a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" data-toggle="popover" title="" data-html="true" data-content="&lt;ul&gt;&lt;li&gt;When asking a question, provide as much detail as possible.  Posts of simply &quot;It doesn&#39;t work&quot; may be removed.  &lt;/li&gt;&lt;li&gt;Don&#39;t Spam&lt;/li&gt;&lt;li&gt;Be respectful&lt;/li&gt;&lt;/ul&gt;" data-original-title="">Posting Guidelines</a></span><span style="margin: 0 10px;" class="pull-right"><a href="https://bootsnipp.com/snippets/featured/simple-datepicker-with-momentjs#" data-toggle="popover" title="" data-html="true" data-content="&lt;ul&gt;&lt;li&gt;&lt;span class=&#39;forumKey&#39;&gt;`&lt;/span&gt; - Surround code with backticks&lt;/li&gt;&lt;li&gt;&lt;span class=&#39;forumKey&#39;&gt;*&lt;/span&gt; - Surround text with stars to italicize.&lt;/li&gt;&lt;li&gt;&lt;span class=&#39;forumKey&#39;&gt;&gt;&lt;/span&gt;&lt;span class=&#39;forumKey&#39;&gt;&gt;&lt;/span&gt; - A line starting with two greater than characters will be indented as a quote.&lt;/li&gt;&lt;li&gt;A blank line will separate paragraphs.&lt;/li&gt;&lt;/ul&gt;" data-original-title="">Formatting</a></span></div></div><hr><div class="col-md-12 hidden"><p class="forumTagline"><strong class="reply 0 name"></strong> - Now</p><hr></div></div>
        	<div style="margin-top:10px">
<center>

<script async="" src="./Bootstrap_files/f.txt"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8815422507798180" data-ad-slot="5700240528" data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


<!--<div id='div-gpt-ad-1491271781423-0'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1491271781423-0'); });
</script>
</div>
-->
</center>
</div>

		</div>
		<div class="col-md-4">
        	<div style="margin-top:10px">
<center>

<script async="" src="./Bootstrap_files/f.txt"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8815422507798180" data-ad-slot="5700240528" data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


<!--<div id='div-gpt-ad-1491271781423-0'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1491271781423-0'); });
</script>
</div>
-->
</center>
</div>

		</div>
<hr>
        <div class="row">
            <div class="col-md-8">

<!--             <div id="disqus_thread"></div>
                <script type="text/javascript">
                    var disqus_shortname = 'bootsnipp'; // required: replace example with your forum shortname
                    var disqus_identifier = 'dPyz';
                    (function() {
                        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                    })();
                </script>
                <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
-->
            </div>
	    <div class="col-md-4" style="padding-top: 60px">
<!--<ins class="adsbygoogle"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-8815422507798180"
     data-ad-slot="3792335328"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
-->
<div id="div-gpt-ad-1490987467028-0">
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1490987467028-0'); });
</script>
</div>

	    </div>
        </div>
    </div>
    <footer class="bs-footer" role="contentinfo">
  <div class="container">
    <div class="bs-social">
      <ul class="bs-social-buttons">
        <li class="facebook-button">
          <div id="fb-root"></div>
          <div id="js-facebook-share" class="fb-like" data-href="http://bootsnipp.com" data-width="130" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>        
        </li>
        <li class="follow-btn">
          <a id="js-twitter-follow" href="https://twitter.com/bootsnipp" class="twitter-follow-button" data-show-count="false">Follow @bootsnipp</a>
        </li>
        <li class="tweet-btn">
          <a id="js-twitter-tweet" href="https://twitter.com/share" class="twitter-share-button" data-url="http://bootsnipp.com" data-text="RT Design elements and code snippets for #twbootstrap HTML/CSS/JS framework" data-via="bootsnipp" data-related="bootsnipp">Tweet</a>
        </li>
      </ul>
    </div>
    <p>Bootsnipp.com © 2017 <a href="http://www.danstools.com/" target="_blank">Dan's Tools</a> | <a href="https://bootsnipp.com/privacy" target="_blank">Site Privacy policy</a> | <a href="https://www.buysellads.com/buy/detail/270577" rel="nofollow">Advertise</a> | Featured snippets are <a href="https://bootsnipp.com/license">MIT license.</a> </p>
  </div>

</footer>

    <script src="./Bootstrap_files/jquery-1.11.0.min.js.download"></script>
    <script src="./Bootstrap_files/bootstrap.min.js.download"></script>
    <script src="./Bootstrap_files/scripts.min.js.download"></script>
    <script async="" src="./Bootstrap_files/f.txt"></script>
    <script src="./Bootstrap_files/forum.js.download"></script>
    <script type="text/javascript">
$(function(){
        $('iframe.new-preview').each(function()
        {
                previewportWidth = $(this).parent().innerWidth()-15;
                factor = previewportWidth/1200;
console.log(factor);
                $(this).css({
    'height': '800px',
    'width': '1200px',
    '-ms-zoom': factor,
    '-ms-transform': 'scale('+factor+')',
    'transform': 'scale('+factor+')',
    '-moz-transform': 'scale('+factor+')',
    '-moz-transform-origin': '0 0',
    '-o-transform': 'scale('+factor+')',
    '-o-transform-origin': '0 0',
    '-webkit-transform': 'scale('+factor+')',
    '-webkit-transform-origin': '0 0'
                });
                $(this).parent().css('height',$(this).parent().innerWidth()*.75);
        });
$('iframe.snippet-preview').each(function()
        {
                previewportWidth = $(this).parent().parent().innerWidth()-30;
                $(this).zoomer({ width: previewportWidth, height: $(this).parent().innerWidth()*.75, zoom: .5, message : '' ,messageURL : $(this).attr('data-url') })
                $(this).zoomer('refresh');
        });
});
</script>
<script src="./Bootstrap_files/ace.js.download"></script>
<script type="text/javascript">
(function($) { 
    window.addEventListener('message', receiveMessage, false);
    function receiveMessage(evt)
    {
        if (evt.origin !== 'https://bootsnipp.com') return;
        
        if ((evt.data != undefined) && (evt.data) && (typeof evt.data === "number"))
            if(evt.data >= 500) {
//                $('#playground-container').css('height', evt.data+30+'px');    
            }
    }

    var version = '3.1.0';
    var version_jq = '1.11.1';
    var htmleditor = ace.edit("editor-html");
    var jseditor = ace.edit("editor-js");
    var csseditor = ace.edit("editor-css");

    $('#theme_chooser').change(function(){
        whichCSS = $(this).val();
        document.getElementById('snippet-preview').contentWindow.changeCSS(whichCSS);
    });

    function setEditorOptions(editor, type){
        editor.setTheme("ace/theme/clouds");
        editor.setHighlightActiveLine(false);
//        editor.setReadOnly(true);
        editor.getSession().setMode("ace/mode/"+type);
    };

    setEditorOptions(htmleditor,'html');
    setEditorOptions(jseditor,'javascript');
    setEditorOptions(csseditor,'css');

    function markActive(el)
    {
       $(el).siblings().removeClass('active');
       $(el).addClass('active'); 
    }

    $('#show-html').click(function(e){
        e.preventDefault();
        $('#editor-html').show().siblings().hide();
        markActive(this);
        $('#preview-container').hide();
        htmleditor.resize();
    });

    $('#show-js').click(function(e){
        e.preventDefault();
        $('#editor-js').show().siblings().hide();
        $('#preview-container').hide();
        markActive(this);
        jseditor.resize();
    });

    $('#show-css').click(function(e){
        e.preventDefault();
        $('#editor-css').show().siblings().hide();
        $('#preview-container').hide();
        markActive(this);
        csseditor.resize();
    });

    $('#show-preview').click(function(e){
        e.preventDefault();
 
        markActive(this);
 
        $('.playground-editor').hide();
 
        var html = buildSource(htmleditor, jseditor, csseditor);
        var iframe = document.createElement('iframe');
        
        iframe.src = 'about:blank';
        iframe.frameBorder="0";
        iframe.height = 496;
        iframe.className = 'preview-iframe';
        
        $('.preview-iframe').remove();
        $('div#preview-container').append(iframe);
        
        iframe.contentWindow.document.open('text/html', 'replace');
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
 
        $('#preview-container').show();
    });

    var cssurls = {};
    var jsurls = {};
    var jqurls = {};

        cssurls['4.1.1'] = '//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
    jsurls['4.1.1'] = '//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js';
        cssurls['4.0.0'] = '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    jsurls['4.0.0'] = '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
        cssurls['3.3.0'] = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css';
    jsurls['3.3.0'] = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js';
        cssurls['3.2.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css';
    jsurls['3.2.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js';
        cssurls['3.1.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css';
    jsurls['3.1.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js';
        cssurls['3.0.3'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css';
    jsurls['3.0.3'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js';
        cssurls['3.0.1'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css';
    jsurls['3.0.1'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js';
        cssurls['3.0.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css';
    jsurls['3.0.0'] = '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js';
        cssurls['2.3.2'] = '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css';
    jsurls['2.3.2'] = '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js';
        
        jqurls['3.2.1'] = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        jqurls['2.2.4'] = '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        jqurls['1.11.1'] = '//code.jquery.com/jquery-1.11.1.min.js';
        

    function buildSource(htmleditor, jseditor, csseditor)
    {   
        var code = {};
        code.html = htmleditor.getValue();
        code.css = csseditor.getValue();
        code.js = jseditor.getValue();
        code.bootstrapcss = cssurls[version];
        code.bootstrapjs = jsurls[version];
        code.jqueryurl = jqurls[version_jq];

        var template = "<!doctype html>\n\
                        <html>\n\
                            <head>\n\
                                <meta charset='utf-8'>\n\
                                <meta name='viewport' content='width=device-width, initial-scale=1'>\n\
                                <title>Snippet - Bootsnipp.com</title>\n\
                                <link href='|bootstrapcss|' rel='stylesheet'>\n\
                                <style>|css|\x3C/style>\n\
                                \x3Cscript type='text/javascript' src='|jqueryurl|'>\x3C/script>\n\
                                \x3Cscript type='text/javascript' src='|bootstrapjs|'>\x3C/script>\n\
                                \x3Cscript type='text/javascript'>|js|\x3C/script>\n\
                            </head>\n\
                            <body>\n\
                            |html|\n\
                            </body>\n\
                        </html>";

        content = template.replace(/\|(\w+)\|/g, function(match, str)
        {
            if(str in code) return code[str];
            return '';
        });   
                        
        return content;
    }

    
})(jQuery);
</script>

<div class="modal fade" id="DonateModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" style="margin-top:100px">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
            <h1 class="modal-title" id="lineModalLabel">Donate</h1>
        </div>
        <div class="modal-body text-center">
<!--    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC4CAYAAAChOH1KAAAABHNCSVQICAgIfAhkiAAABDVJREFUeJzt3dFuEzEUQEGC+P9fDu8oq9bFjr0nM48IhdAeWdor2/t4Pp/PXxD0e/cXgFXETZa4yRI3WeIm68+rP3w8Hu/+Hj9yNeiZ9f1HP3/14Gn0/zXr+9y1Bys3WeImS9xkiZsscZP1clpyZdc2lNOe1u8yFVk9XTm9Bys3WeImS9xkiZsscZM1NC25snovxyyjU4XRPSSz/v6oXXtOrpzSg5WbLHGTJW6yxE2WuMmaMi25i9XTjLucDNp1kujdrNxkiZsscZMlbrLETVZyWjLrqX/0c1ZPVz5lyjGLlZsscZMlbrLETZa4yZoyLTntaX3WVGH1fSl3+Z6jTunByk2WuMkSN1niJkvcZA1NS057Kp9l1/0kq0/KnHZfyrtZuckSN1niJkvcZImbrJfTklP2BvzU3e/rmDXlWD11OZ2VmyxxkyVussRNlrjJejxfPAqvfsfKKe9M+cqud9zM+n/t+j2u/vlc+ffftXKTJW6yxE2WuMkSN1lLb3m9yxt4r9xlj8pp061T3iVk5SZL3GSJmyxxkyVusm7xTpxd04nVU4JRq+8tufr7q/ecXPnfKYqVmyxxkyVussRNlrjJGpqWrD4hcve9Gafd/rrrnTunfH8rN1niJkvcZImbLHGTNeWW19UnaHbdB7LrfpJd75pZ/Xt89xTFyk2WuMkSN1niJkvcZE255XWWXXseZjnlvo67ff6q34uVmyxxkyVussRNlrjJOuokzqy/P+tzVr9pd9fJmtNOBo2yt4SPJ26yxE2WuMkSN1lDJ3Huvudk9cmgXSePVt8Dc9otu+4t4eOJmyxxkyVussRN1tJ34uyaTtx978SV1VOjXe++WTWNsXKTJW6yxE2WuMkSN1kvpyV32Utw+i2jP3WXk0qjn/Pue2ms3GSJmyxxkyVussRN1stbXoc/ZNMJnU+zaxqz2qppmJWbLHGTJW6yxE2WuMlaehLnyq49G6NOO7lz2i21o979ziArN1niJkvcZImbLHGTNXQS58pp74I5bcox6rTp0Cyzfv5ueeXjiZsscZMlbrLETdaUkzinWT3tmfXvjnr3vR8/9e49JFefY+UmS9xkiZsscZMlbrKm7C3ZZdY7cWadAFo9zdjltBNS32XlJkvcZImbLHGTJW6yhu4tucsJkdVTiF3v0Nk1XTltKuIkDh9P3GSJmyxxkyVusqbc8jrrKf60p/K732dy2pRp1P/2YOUmS9xkiZsscZMlbrK2vBNntVX3YHz1Oavv/di1d2XXdOjKd7+nlZsscZMlbrLETZa4yUpOS67cZW/GaXtsrpz+87RykyVussRNlrjJEjdZU6Ylpz3dr94jcdr9JLvuP9n1zp3vsnKTJW6yxE2WuMkSN1lD05LT7rVY7bQTKFd2vdNnF7e88vHETZa4yRI3WeIm6/G8yyMyDLJykyVussRN1l8F2immyBsj/gAAAABJRU5ErkJggg==" />-->
    <br>BTC: 12JxYMYi6Vt3mx3hcmP3B2oyFiCSF3FhYT
	<br>ETH: 0xCD715b2E3549c54A40e6ecAaFeB82138148a6c76
<hr>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="FDGD82NBKQDHJ">
<input type="image" src="./Bootstrap_files/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="./Bootstrap_files/pixel.gif" width="1" height="1" hidden="" style="display: none !important;">
</form>
        </div>
        <div class="modal-footer">
            <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" data-dismiss="modal" role="button">Close</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

  

</body></html>