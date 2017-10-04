const evenIndex = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]')throw new TypeError('expect an array got ' + typeof arr);
        return arr.reduce((p,c,i) => {
            if(!(i&1))p.push(c);
            return p;
        },[]);
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = evenIndex;
}