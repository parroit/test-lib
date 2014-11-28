/*
 * test-lib
 * https://github.com/parroit/test-lib
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var test_lib = require('../lib/test-lib.js');

describe('test_lib', function(){
    it('is defined', function(){
      test_lib.should.be.a('function');
    });

});
