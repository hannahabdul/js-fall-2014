title: Ajax
author:
  name: Justin Donato
  twitter: justindo
  url: http://justindonato.com
controls: false
theme: miniatureape/cleaver-theme
--

# Ajax

--

Asynchronus Javascript and XML

--

XML is a serialization format. Replaced by JSON.

(See persistance slides for more info.)

--

Allows JS programmer to fetch data that isn't on the current page or in the current script.

It also allows a user to send data to a server, like submitting a form, but doesn't refresh the page.

--

It doesn't depend on jQuery, but jQuery makes it very easy.

```javascript

    $.ajax({
        url: 'http://www.yourdomain.com/stuff', 
        success: function(results) {
            console.log('I got the results', results);
        },
        error: function() {
            console.error('Something went wrong');
        },
    });

```
--

Asynchronous

```javascript

    var results;

    $.ajax({
        url: 'http://www.yourdomain.com/stuff', 
        success: function(results) {
            results = results;
        }
    });

    var title = results.title; // ERROR! You don't have the results!

```
--

3rd Party APIs (Application Programming Interface)

A way of getting at data in a database you don't own.

--

NY Times API

[http://developer.nytimes.com/docs](http://developer.nytimes.com/docs)

Create an account so you have a `key`

--

Unfortunately, Security Restrictions prevent this from working from a webpage

```javascript

$.ajax({
    url: 'http://api.nytimes.com/svc/events/v2/listings.json',
    data: {
        'api-key': YOUR_KEY_HERE,
        'date_range': '2014-10-13:2014-10-14'
    },
    success: function(response) {
        // This doesn't work! :(
    }
});
```

--

Fortunately, there's a work around: JSONP

```javascript

$.ajax({
    url: 'http://api.nytimes.com/svc/events/v2/listings.jsonp',
    data: {
        'api-key': YOUR_KEY_HERE,
        'date_range': '2014-10-13:2014-10-14'
    },
    dataType: 'jsonp'
    success: function(response) {
        //  Yippee :)
    }
});

```

--

JSONP

We've been loading scripts directly from 3rd party servers all class long (jQuery, etc).

The `<script>` tag is not limited by same-domain restrictions.

Scripts contain code, but also data. We want data.

```

--

JSONP

When you make a JSONP request, under the hood jQuery is creating a `<script>` tag with the `src` set to the api address.

It also tells the server to wrap the data in a function call. So this data:

```javascript
 {results: ['Thing', 'Something', 'Another thing']}
```

Gets transformed to:

```javascript
 success({results: ['Thing', 'Something', 'Another thing']});
```

