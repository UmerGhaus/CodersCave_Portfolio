// imageLoaderWorker.js
self.onmessage = function(event) {
    var imageURL = event.data;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageURL, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        if (xhr.status === 200) {
            self.postMessage(xhr.response);
        } else {
            self.postMessage('Image load failed with status ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        self.postMessage('Image load error');
    };
    xhr.send();
};
