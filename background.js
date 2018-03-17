
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain


chrome.runtime.onMessage.addListener(receiver);

window.word = "";

function receiver(request, sender, sendResponse) {
  word = request.text;
}
