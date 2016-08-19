var App = require('../application.js');
var expect = require('chai').expect;

describe("Create a NotesApplication", function() {
   //console.log("Adeyemo david Sunday");

  it("should not accept strings only integers", function() {
    var getId = new App('Adeyemo');
    expect(getId.getNoteId("one week")).to.equal("Strings are not valid Input");
    //expect(getNoteId("one")).to.equal('Strings are not valid Input');
  });


it("should return the index of the given notelist", function(){
  var getId = new App('Adeyemo');
    expect(getId.getNoteId(1)).to.equal(true);
  });

it("Takes Notes Content and Add it to listNote ", function(){
  var getContent = new App("Samuel");
  expect(getContent.create(" ")).to.equal("Empty Inputs are not allowed");
});


});
