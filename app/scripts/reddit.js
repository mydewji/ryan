'use strict';

chrome.storage.sync.get('enableReddit', function(item) {
  if (item.enableReddit == false) {
      console.log("Ryan - reddit mod disabled");
  }
  else {
      var links, i, le;
      links = document.getElementsByTagName('a');
      for (i = 0, le = links.length; i < le; i++) {
          //change all links
          links[i].href = "https://www.youtube.com/watch?v=NkKOeeYko7w";
      }
      //append stylesheet
      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = chrome.extension.getURL('css/reddit.css');
      document.head.appendChild(style);          
  }
});


      
