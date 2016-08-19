# Notes Application

## The main class NotesApplication :
  Has a constructor that takes in parameter author and save it as an instance variable and also the class contains the following methods
  * create
  * listNote
  * getNoteId
  * searchText
  * deleteNote
  * editNote


##  create Method
    This Method takes in content by the author and add it to the notelist array
##  listNote Method
    This Method list out the various note ids, the corresponding content and the author names  

##  getNoteId Method
    This method takes in valid note id and returns the corresponding content as a string

##  searchText Method
    This method takes in a search_text and returns all notes that contains the search_text in it

##  deleteNote Method
    This method takes in a note_id and delete the corresponding note from note list array
##  editNote Method
    This method takes note_id and a new content and replace it with the exiting note
