/*


What gets documented:
---------------------

  JSDoc comments should generally be placed immediately before the code
being documented. It must start with a /** sequence in order to be
recognized by the JSDoc parser. Comments beginning with /*, /***, or more
than 3 stars will be ignored. This is a feature to allow you to suppress
parsing of comment blocks.
*/

/** This is a description of the foo function. */
function foo(){};

/**
* Represents a book.
* @constructor
* @param {string} title - The title of the book.
* @param {string} author - The author of the book.
*/
function Book(title, author) {};


/*
Terminal command:
-----------------

  ./jsdoc book.js

  The above command will create a folder named "out" in the current working
directory. Within that you will find the generated HTML pages.
*/
