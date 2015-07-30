// ==UserScript==
// @name        Facebook Hide News Feed
// @namespace   facebook.com
// @match       http://facebook.com/*
// @match       https://facebook.com/*
// @match       http://*.facebook.com/*
// @match       https://*.facebook.com/*
// @version     1
// @grant       none
// allow pasting
// ==/UserScript==

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

window.addEventListener('load', function () {
  // loaded
  fct = (function () {
    streamID = ''
    if (document.cookie.match('topnews_main_stream_[0-9]+') == null) {
      streamID = document.getElementById('globalContainer').innerHTML.match('topnews_main_stream_[0-9]+') [0]
      setCookie(streamID, 'i', 30)
      console.log('Searching for stream ID; Found tag, ' + streamID)
    }
    streamID = document.cookie.match('topnews_main_stream_[0-9]+') [0]
    //console.log('running');
    document.getElementById(streamID).style.visibility = 'hidden';
    document.getElementById('rightCol').style.visibility = 'hidden';
    document.getElementById('pagelet_composer').style.visibility = 'hidden';
  });
  fct();
  document.getElementById('globalContainer').style.visibility = 'visible';
  document.getElementById('globalContainer').addEventListener('DOMSubtreeModified', fct, false);
}, false);

document.getElementById('globalContainer').style.visibility = 'hidden';

