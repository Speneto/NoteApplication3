function NotesApplication(author) {

    //validate autor
    this.author = author;
     this.notelist = [];



  /**
   * Method create
   *
   * This function takes note content and add to notelist object
  */
  this.create = function(note_content){
    this.notelist.push(note_content);
    //return this.notelist;
  }


  /**
  * Method listNote
  * This function list out note_id, the content and authors
  */
  this.listNote = function(){
    for(var i =0; i < this.notelist.length; i++ ){
      console.log('Note Id :' + i + '\n' + this.notelist[i] );
    }
    console.log('By Author :' + this.author);

  }

  /**
  *Method getNoteId
  *This function takes in the note_id and return the note content as string
  */
  this.getNoteId = function(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      console.log(this.notelist[note_id]);
    }else{
      console.log("Note Id is Not Valid");
    }
  }


/**
*Method searchText
*This function takes in a seach text and returns all note with that text within in
*/

  this.searchText = function(search_text){
    for(var i =0; i < this.notelist.length; i++ ){
      if(this.notelist[i].includes(search_text)){


      	console.log('Showing result for search :' + '['+search_text+']' +'\n' +
      	           'Note Id :' + i + '\n' +
      	           this.notelist[i] +'\n' +
      	            'By Author :' + this.author);
      }else{
      	// do nothing console.log('Search text not in search string');
      }

    }

  }


/**
*Method deleteNote
*This function takes in note_id and delete the corresponding  note from notelist
*/

  this.deleteNote = function(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      delete this.notelist[note_id];
    }else{
      return "Note Id is Not Valid";
    }
  }


/**
*Method editNote
*This function takes in note_id and a new content and replace the old one
*/
  this.editNote = function(note_id, new_content){
    if(Math.abs(note_id) < this.notelist.length  && new_content !== ""){
      this.notelist[note_id] = new_content;
    }else{
      return "Note Id is Not Valid";
    }
  }

}

module.exports = NotesApplication
