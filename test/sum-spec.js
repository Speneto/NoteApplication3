var App = require('../application.js');
var expect = require('chai').expect;

describe(" The getNoteId function", function() {
   //console.log("Adeyemo david Sunday");

  it("should not accept strings only integers", function() {
    var sun = new App('Adeyemo');
    expect(sun.getNoteId("one")).toEqual('Strings are not valid Input');
    //expect(getNoteId("one")).to.equal('Strings are not valid Input');
  });


it("should return the index of the given notelist", function(){
  var sun = new App('Adeyemo');
    expect(sun.getNoteId(note_id)).toEqual(this.notelist[note_id]);
  });
});
