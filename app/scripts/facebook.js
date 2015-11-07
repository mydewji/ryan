'use strict';

chrome.storage.sync.get('enableFacebook', function(item) {
  if (item.enableFacebook == true) {

      //append stylesheet
      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = chrome.extension.getURL('css/facebook.css');
      document.head.appendChild(style);          
  }
});


      
