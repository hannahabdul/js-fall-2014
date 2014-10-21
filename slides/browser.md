title: Javascript Basics
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme

--

# Javascript in the Browser

-- 

- HTML: Structure (What it is)
- CSS: How it looks (and moves)
- Javascript: What it does.

-- 

# Document Object Model (DOM)

- The computer's internal representation of your markup.
- Javascript can read and change it.
- A "Tree-like" structure
- Each element is a "Dom Node"
- Different than "View Source"

-- 

# window

- Javascript's environment in the browser
- Provides access to Javascript Built-ins...
- There's tons of stuff on window. Go explore.

```javascript
// Try this: go to: https://www.google.com/?q=cats
var loc = window.location.toString();
window.location = loc.replace('google', 'bing')
```

-- 

# window

- Also provides access to the DOM through (window.document)

```javascript
window.document.body.style.backgroundColor = 'red';
```

-- 
# You can dynamically change nearly any part of the DOM.

To do so, you need a reference to a DOM Node.

```javascript
var myBox = document.getElementById('box');
var myBoxes = document.getElementsByTagName('div');
var myOrangeBoxes = document.querySelectorAll('.orange');
```

-- 

Once you have a dom node, you can...

```javascript

// Add a class using classList

var myBox = document.getElementById('box');

myBox.classList.add('orange');
myBox.classList.remove('bold');

```

-- 

Change styles directly

```javascript

var myBoxes = document.getElementsByTagName('div');
myBoxes[0].style.backgroundColor = 'red';

// Notice I use array access brackets to get the first element.
// You can't do myBoxes.style because my box is not a dom node, its a list of them.
```
-- 

You can remove an element.

```javascript
var myBoxes = document.getElementsByTagName('div');
var firstBox = myBoxes[0];
firstBox.remove();
```
-- 

You can create a new element

```javascript

var newDiv = document.createElement('div');
var text = document.createTextNode('Dynamically added text');
newDiv.appendChild(text);
document.body.appendChild(newDiv);
```
-- 

You can create a new element

```javascript

var newDiv = document.createElement('div');
var text = document.createTextNode('Dynamically added text');
newDiv.appendChild(text);
document.body.appendChild(newDiv);
```

-- 

Dom nodes can be talked about as being in parent/child relationships.

A tag is a parent of a tag if it contains that tag. That tag is its child.

You can extend the metaphor: tags that have the same parent are siblings.

```javascript

var list = document.getElementById('list');
var items = list.childNodes;
var secondItem = items[1];

```

-- 

I've been using document to find children nodes. It's the ancestor of every node, so you can find any of them.

But, you can search under a specific node by scoping your query.

```javascript

var list = document.getElementById('list');
list.querySelectorAll('.orange')

```

-- 

# Browser Events

This stuff isn't really fun until you start working with user input. 

With Browser events you can respond when a user: 

- clicks something
- moves her mouse
- scrolls the page
- resizes the window
- types into the keyboard
- submits a form
- moves to another page
- changes a select box
- turns their device from portrait to landscape
- changes their physical location
- ...

-- 

# Browser Events

The setup is always basically the same. Let's say I want to add an item to a list any time you click on it.

1. Get a reference to the DOM node you want to listen to events on.

```javascript
var list = document.getElementById('list');
```

-- 

The setup is always basically the same. 

2. Call the 'addEventListener' function on it. The first argument is the name of the event you want to listen to. The second is the function you want to run when you the event occurs.

```javascript
list.addEventListener('click', clickHandler);
```

In this case, clickHandler is something we need to define.

-- 

```javascript

var clickHandler = function() {
    // add new item
};

list.addEventListener('click', clickHandler);
```
-- 

# A Few More Things About Events

Inside of your handler function, there is a variable you can use called `this`

It refers to the element you attached the handler to.

```javascript

var clickHandler = function() {
    this.appendChild(...pass in a new node...);
};

list.addEventListener('click', clickHandler);

-- 

Almost every event handler gets passed an 'Event' argument.

```javascript

var clickHandler = function(e) {
    console.log(e.currentTarget);
    console.log(e.timeStamp);
    console.log(e.pageX, e.pageY);
    console.log(e); // go explore
};

list.addEventListener('click', clickHandler);

```
