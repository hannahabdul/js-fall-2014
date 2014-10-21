title: Mustache
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme
--

# Mustache Templating

--

Up to this point, we've been changing DOM programatically:

```javascript
    var input = $('#myInput');
    input.text(firstName);
```

--

And when we have to render new data, we've been building it using jquery and dom nodes.

```javascript
    var list = $('#myList');
    var newLi = $('<li>');
    var closeButton = $('<span class="close">x</span>');
    newLi.text("Some todo item");
    newLi.append(closeButton);
    ...
    list.append(newLi);
```

-- 

It would be nice if we could just write HTML and replace the bits we care about with data. 

We can do this with a templating language.

-- 

[Mustache](https://github.com/janl/mustache.js) is one of the simplest templating languages.

---

```javascript
    // Store your template in a string
    var itemTemplate = "<li>{{ todoText }}<span class='close'>x</span></li>";

    // render an html string by passing the function an object.
    var itemHtml = Mustache.render(itemTemplate, {todoText: 'Buy Beer and Diapers.'});

    // Stick in DOM using jquery
    $('#list').html(itemHtml);
```

---

Rather than keep long html templates in your code, put them in your HTML and extract.

```javascript
    // Store your template in a string
    <script id='person-tpl' >
        <div class="person-card">
            <img class="avatar" src="{{image_avatar}} />
            <span>{{first_name}}</span>
            <span>{{last_name}}</span>
            <div class="job-title">{{job_title}}</div>
        </div>
    </script>

    var personTemplate = $('#person-tpl').html();

```

--

Mustache lets you do rudimentary logic and loops.

--

[Example](http://miniatureape.github.io/js-fall-2014/examples/mustache/index.html)
