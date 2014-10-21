title: Persistence
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme

--

# Persistence & JSON

-- 

## Localstorage

Easiest way to store data in JS.

-- 

```javascript

localStorage.setItem('age', 72);
var age = localStorage.getItem('age');

```

-- 

Only stores strings!

```javascript
localStorage.setItem('weight', 154.4);
var age = localStorage.getItem('weight');

age.toExponential() // ERROR! age is not a number
```

-- 

Convert when you extract.

```javascript
localStorage.setItem('weight', 154.4);
var age = parseFloat(localStorage.getItem('weight'), 10);

age.toExponential() // ERROR! age is not a number

```

-- 

## JSON: Javascript Object Notation

- A textual representation of a javascript object
- Allows you to store and transmit the objects in your code.

-- 

```javascript

var hero = {
    name: 'Don Quixote',
    hasHorse: true,
    friends: ['Sancho', 'Dulcinea']
}

var heroJSON = JSON.stringify(hero)

var hero = JSON.parse(heroJSON);

```

-- 

```javascript

var hero = {
    name: 'Don Quixote',
    hasHorse: true,
    friends: ['Sancho', 'Dulcinea']
}

var heroJSON = JSON.stringify(hero)

localStorage.setItem('hero', hero);

```

-- 

```javascript

var heroJSON = localStorage.getItem('hero');
var hero = JSON.parse(heroJSON);

```

-- 

Somethings can't be serialized

```javascript

var hero = {
    name: 'Don Quixote',
    sayName: function() {
        console.log(this.name);
    }
}

localStorage.setItem('hero', JSON.stringify(hero));
var heroJSON = localStorage.getItem('hero');

var hero = JSON.parse(heroJSON);
console.log(hero); // No sayName function?

```

-- 

Quick Solution!


```javascript

var makeAnimal = function(animalProperties) {

    animalProperties.speak = function() {
        console.log(this.sound);
    }

    animalProperties.walk = function() {
        console.log('walking on', this.legs, 'legs');
    }

    return animalProperties;

}

var cat = {
    type: 'cat',
    sound: 'meow',
    legs: 4,
}

var bird = {
    type: 'bird',
    sound: 'chirp',
    legs: 2

}

localStorage.setItem('cat', JSON.stringify(cat));
localStorage.setItem('bird', JSON.stringify(bird));

var catJSON = localStorage.getItem('cat');
var birdJSON = localStorage.getItem('bird');

var cat = makeAnimal(JSON.parse(catJSON));
var bird = makeAnimal(JSON.parse(birdJSON));

cat.speak();
bird.walk();

```

