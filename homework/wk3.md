Reading
=======

Read all of [Chapter 12](http://eloquentjavascript.net/12_browser.html) and [Chaper 13](http://eloquentjavascript.net/13_dom.html) of Eloquent Javascript.

Exercise
=========

To complete these exercises, use the wk3 homework template in your repo.

- Load the exercise html file in your browser and note its initial appearance.
- Create a variable that stores the DOM element with ID `rect`;
- Using javascript, add a css class named `bordered` to this element.
- Below is a function that toggles a class on an element. Attach it as an event listener to this DOM element so it fires when you click on it.

```javascript

// Note: you don't have to change anything in this function. Just paste it into 
// your program and use it as an event handler.

var leftyClickHandler = function(e) {

    if (e.currentTarget.classList.contains('lefty')) {
        e.currentTarget.classList.remove('lefty');
    } else {
        e.currentTarget.classList.add('lefty');
    }

};

```

- Bonus: Change the class `lefty` so that a field animates when you click.
