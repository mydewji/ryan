'use strict';

chrome.storage.sync.get('enableLinkedIn', function(item) {
  if (item.enableLinkedIn == true) {

      //append stylesheet
      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = chrome.extension.getURL('css/linkedin.css');
      document.head.appendChild(style);          
  }
});


      
