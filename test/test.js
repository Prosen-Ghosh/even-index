const evenIndex = require('../even-index');
const assert = require('chai').assert;
describe('Even Index Array',function(){
    it('Function Shuld Return Even Index Of Array from the orginal array',function(){
        assert.deepEqual(evenIndex([1]),[1]);
        assert.deepEqual(evenIndex([]),[]);
        assert.deepEqual(evenIndex([-2,-1]),[-2]);
        assert.deepEqual(evenIndex([[],-2,[]]),[[],[]]);
        assert.deepEqual(evenIndex(["foo","baz","jam","bar","bob"]),["foo","jam","bob"]);
    });
});