self.onmessage = function (e) {
    var data = e.data;
    var result = 0;

    if (data.Operation === 'add') {
        result = data.Number1 + data.Number2;
    } else if (data.Operation === 'sub') {
        result = data.Number1 - data.Number2; // Fix subtraction
    } else if (data.Operation === 'mul') {
        result = data.Number1 * data.Number2;
    } else if (data.Operation === 'div') {
        result = data.Number1 / data.Number2;
    }

    // Post the result back to the main thread
    postMessage(result);
};
