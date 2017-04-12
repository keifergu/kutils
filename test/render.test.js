var render = require('../src/render')
var assert = require('power-assert')

describe('Render', function(){
    beforeEach(function(){
        this.data = {
        	name: 'Jhon',
        	id: {
        		hid: 123,
        		sid: 456
        	}}
    });
    describe('#render()', function(){
        it('should parse the deep level with \'.\'', function(){
        		var str = '${name} ${id.hid}'
            var res = 'Jhon 123'
            assert(render(str, this.data) === res);
        });
        it('should parse with \'[]\' ', function(){
        		var str = '${name} ${id["hid"]}'
            var res = 'Jhon 123'
            assert(render(str, this.data) === res);
        });
        it('should process the space', function(){
        		var str = '${ name} ${ id["hid"] }'
            var res = 'Jhon 123'
            assert(render(str, this.data) === res);
        });
    });
});

