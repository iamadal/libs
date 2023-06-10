const math = require('../lib.js');

test('1+2 = 3',function(){
   expect(math.add(1,2)).toBe(3);
});