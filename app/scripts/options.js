'use strict';

console.log('\'Allo \'Allo! Option');
//# sourceMappingURL=options.js.map


// Saves options to chrome.storage.sync.
function save_options() {
  var enableReddit = document.getElementById('reddit').checked;
  var enableFacebook = document.getElementById('facebook').checked;
  var enableLinkedIn = document.getElementById('linkedin').checked;
  
  chrome.storage.sync.set({
    enableReddit: enableReddit,
    enableFacebook: enableFacebook,
    enableLinkedIn: enableLinkedIn
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    enableReddit: true,
    enableFacebook: true,
    enableLinkedIn: true
  }, function(items) {
    document.getElementById('reddit').checked = items.enableReddit;
    document.getElementById('facebook').checked = items.enableFacebook;
    document.getElementById('linkedin').checked = items.enableLinkedIn;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);