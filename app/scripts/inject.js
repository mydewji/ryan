'use strict';

alert("Injected!");

var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'ryan.css';
    document.head.appendChild(style);