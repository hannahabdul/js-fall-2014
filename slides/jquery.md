title: Javascript Basics
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme

--

# jQuery

A toolkit for JS in the browser.

http://jquery.com/

--

```javascript

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>

    console.log(jQuery);

</script>
```

--

Provides a javascript object named __$__ with lots of functionality.

There's nothing special about "__$__". It's just a variable name.


```javascript

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>
    // Your code here.
</script>
```

--

Most often jQuery is treated as a function. It does different things depending on what you do with it.


```javascript
    // Pass it some HTML

    var para = $("<p class='small'>Something</p>");

    // Equivalent to:

    var para = document.createElement('p');
    var text = document.createTextNode('Something');
    para.appendChild(text);
    para.setAttribute('class', 'small');

```
--

```javascript
    // Pass it a css selector

    var orange = $(".orange");

    // Equivalent to:

    vara orange = document.querySelectorAll('.orange');

    // Or try 

    $('p'); // get all p tags
    $('#header') // get by id
    $('#header .orange') // all things with orange class inside the header
```

--

jQuery returns a jquery object.

Its a little like an array, and a little like a DOM node.


```javascript

var lists = $('ul'); // Get all the ULs on a page.

lists.css({backgroundColor: red}); // Turn them all red

lists.append($('<li>jQuery is easy.</li>')); // Append a new item to each of them

lists.addClass('orange'); // Now they all have a new class

lists.empty(); // Now they're all empty
    
```
--

Events

```javascript
var btn = $('button');
btn.addEventListener('click', function() {
    this.toggleClass('on');
});
    
```

--

--

Fun effects.

```javascript

var lists = $('ul'); // Get all the ULs on a page.

lists.fadeOut() // Elements fade away.
lists.fadeIn() // Elements fade back in.
lists.animate({backgroundColor: '#f00'});

lists.append($('<li>jQuery is easy.</li>')); // Append a new item to each of them

lists.addClass('orange'); // Now they all have a new class

lists.empty(); // Now they're all empty
    
```

--

There's a lot more to jQuery. But you already have so much to explore.

- [Complete Docs](http://api.jquery.com/)
- [DOM Manipulation](http://api.jquery.com/category/manipulation/)
- [Effects](http://api.jquery.com/category/effects/)
- [Selectors](http://api.jquery.com/category/selectors/)
- [Events](http://api.jquery.com/category/events/)

