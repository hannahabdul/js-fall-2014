title: Flow Control / Functions
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme
--

# Flow Control and Functions

--

## Looping

For loops let you loop over arrays.

```javascript

    var arr = [1, 2, 3];
    
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

```
--

And Objects

```javascript

    var person = {
        name: 'Justin',
        age: 35,
        profession: 'Software Engineer'
    };

    for (var key in person) {
        console.log(person[key]);
    }
```

--

## Branching

Use if and if...else statements to change program flow depending on truthyness of some condition.


```javascript

    var person = {
        name: 'Justin',
        age: 35,
        profession: 'Software Engineer'
    };

    if (person.age < 65 && person.age > 22) {
        console.log('Work');
    } else if (person.age >= 65) {
        console.log('Play Golf');
    } else {
        console.log('Go to School');
    }

```
--

## Scope

Scope is a term that refers to 'visibility' of variables. A variable is in scope if you can use it.

--

## Functions and Scope

Variables defined inside a function are only visible inside of the function.

```javascript

    var a = 1;
    var b = 2;
    var c = 3;

    var fn = function(a) {

        var b = "Foo";
        var d = "Bar";

        console.log(a, b, c);
    }

    fn(6);

    console.log(a,b,c,d);
    
```

--

## Functions and Scope

When you use a variable, Javascript will find the "nearest" one and use it. If it can't find it, it will walk up the ladder of scope.

```javascript

    var a = 1;
    var b = 2;
    var c = 3;

    var fn = function(a) {

        var fn2 = function() {
            var a = "Hello";
            console.log(a);
        }

        console.log(a);
        fn2();

    }

    fn(10);

```

--

## debugging

Allows you to see exactly what's happening in a program.

Set in the Sources panel or from your code.

```javascript

    debugger;

```

[demo](http://miniatureape.github.io/js-fall-2014/slides/demos/basics/index.html)

--

## this

We saw that in an event listener, the keyword 'this' refered to the thing the event handler was attached to. In general, this refers to the object the function is defined in. If it is not defined in a function, it refers to the 'global' scope, window.

```javascript

    console.log(this);

    var fn = function() {
        console.log(this);
    }

    var person = {
        name: "Justin",
        sayName: function() {
            console.log(this.name);
        }
    }

    person.sayName();

```

