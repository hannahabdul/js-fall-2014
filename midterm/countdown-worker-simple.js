var interval;

var worker = self;

function tick() {
    worker.postMessage('tick');
}

self.addEventListener('message', function(e) {

    if (e.data == 'start') {
        interval = setInterval(tick, 10);
    } else if (e.data == 'stop') {
        clearInterval(interval);
    }
})
