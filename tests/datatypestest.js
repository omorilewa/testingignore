'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/soln_ass1.js');


describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(myApp.dataTypes(null)).to.eql('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(myApp.dataTypes(undefined)).to.eql('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(myApp.dataTypes(true)).to.be.eql(true);
    });

    it("should return false for `false`", function() {
      expect(myApp.dataTypes(false)).to.be.eql(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(myApp.dataTypes(44)).to.eql('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(myApp.dataTypes(144)).to.eql('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(myApp.dataTypes(100)).to.eql('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(myApp.dataTypes('tergiversate')).to.eql(12);
    });

    it("should return the length of an empty string", function() {
      expect(myApp.dataTypes('')).to.eql(0);
    });

    it("should return the length of `555`", function() {
      expect(myApp.dataTypes('555')).to.eql(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(myApp.dataTypes([0, 1, 2])).to.eql(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(myApp.dataTypes([])).to.be.undefined;
    });

    it("should return `undefined` for `[4, 9]`", function() {
      expect(myApp.dataTypes([4, 9])).to.be.undefined;
    });

  });


  describe("Case for functions", function() {

    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).to.be.true;
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(myApp.dataTypes(callback)).to.be.eql('called callback');
    });

  });
  });
