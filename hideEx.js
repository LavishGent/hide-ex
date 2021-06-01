
//creating variables for the exname, and replacement name
var exNameRegex = /Drake/g;
var newName = "El Stupido";

// get all html children to iterate through
var allElements =  $("body").children();

allElements.each(function() {
    //grab current elements text
    var currentText = $(this).html();

    //create new html with replacement name
    var newText = currentText.replace(exNameRegex,newName);

    //update the new name to have the new text
    $(this).html(newText);
});
