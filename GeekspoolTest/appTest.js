var assert = require('assert');
var fun = require('../routes/index');
describe('Test Suite 1', function () {
    it('Test 1', function () {
        assert.ok(true, "This shouldn't fail");
    });

    it('Test 2', function () {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(fun.testing() === '5', "This shouldn't fail");
    });
});
