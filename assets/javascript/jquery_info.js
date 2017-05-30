Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

$(document).ready(function(){

   // jQuery methods go here...This is to prevent any jQuery code from running before the document is finished loading (is ready).

});
The jQuery element selector selects elements based on the element name.

You can select all <p> elements on a page like this:

$("p")

he jQuery #id selector uses the id attribute of an HTML tag to find the specific element.

An id should be unique within a page, so you should use the #id selector when you want to find a single, unique element.

To find an element with a specific id, write a hash character, followed by the id of the HTML element:

$("#test")

The jQuery class seleIn jQuery, most DOM events have an equivalent jQuery method.

To assign a click event to all paragraphs on a page, you can do this:

$("p").click();
The next step is to define what should happen when the event fires. You must pass a function to the event:

$("p").click(function(){
  // action goes here!!
});
Commonly Used jQuery Event Methods
$(document).ready()

The $(document).ready() method allows us to execute a function when the document is fully loaded. This event is already explained in the jQuery Syntax chapter.

click()

The click() method attaches an event handler function to an HTML element.

The function is executed when the user clicks on the HTML element.ctor finds elements with a specific class.

To find elements with a specific class, write a period character, followed by the name of the class:

$(".test")


var 
var random = flowers[Math.floor(Math.random()* flowers.length)];
//console.log(random);

$(document).on("keyup",function(me){
console.log(me.key);

});
In jQuery, most DOM events have an equivalent jQuery method.

To assign a click event to all paragraphs on a page, you can do this:

$("p").click();
The next step is to define what should happen when the event fires. You must pass a function to the event:

$("p").click(function(){
  // action goes here!!
});
Commonly Used jQuery Event Methods
$(document).ready()

The $(document).ready() method allows us to execute a function when the document is fully loaded. This event is already explained in the jQuery Syntax chapter.

click()

The click() method attaches an event handler function to an HTML element.

The function is executed when the user clicks on the HTML element.

