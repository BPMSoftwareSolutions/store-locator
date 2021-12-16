const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
    data: {"shops": 
        [{
            "location": "test location #1",
            "address" : "test address #1"
        }, {
            "location": "test location #2",
            "address" : "test address #2"
        }, {
            "location": "",
            "address" : ""
        }]}
};

axiosMock.get.mockImplementation(req);

function req() {
    return new Promise(function(resolve) {
        axiosMock.delayTimer = setTimeout(function() {
            resolve(mockResponse);
        }, 1000);
    });
}

module.exports = axiosMock;