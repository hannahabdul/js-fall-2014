(function() {

    Parse.initialize("anBpWcFi4tt8WN5nIFJ2T2eaRLp9rCGhxOWZohtQ", "0bKnqYCRZhCr0OorUipeh5KoFbvvWm5zpYzOkVW8");

    var Photo = Parse.Object.extend("Photo");

    window.navigateTo = function (page) {
        window.location = page;
    }

    var renderPhoto = function (photo) {
        var li = $('<li/>');

        var img = $('<img/>');
        img.attr('src', photo.get('photo').url());

        var caption = $('<p/>');
        caption.text(photo.get('caption'));

        li.append(img);
        li.append(caption);

        return li;
    }

    var renderPhotos = function (photos) {
        var photosList = $('#list');

        for (var i = 0; i < photos.length; i++) {
            photosList.append(renderPhoto(photos[i]));
        }

    }

    var refreshPhotos = function() {

        var query = new Parse.Query(Photo);
        query.equalTo('user', currentUser);
        query.descending('createdAt');

        query.find({
            success: function(results) {
                renderPhotos(results);
            }
        });

    }

    var handleUploadSubmit = function(e) {
        e.preventDefault();

        var fileUploadControl = $("#photo").get(0);

        if (fileUploadControl.files.length > 0) {

            var file = fileUploadControl.files[0];
            var name = "photo.jpg";

            var photo = new Photo();

            photo.set('user', currentUser);
            photo.set('caption', $('#caption').val());

            var parseFile = new Parse.File(name, file);

            parseFile.save().then(function() {
                photo.set('photo', parseFile);
                photo.save(null, {success: function() {
                    refreshPhotos();
                }});

            });

            closeForm();
        }

    }

    var closeForm = function() {
        var form = $('#upload');
        form.find('.display').removeClass('display');
        form.removeClass('display');
    }

    var initializeMenu = function() {

        var toggleBtn = $('.toggle-upload');
        var form = $('#upload');

        toggleBtn.on('click', function() {
            form.toggleClass('display');
        });
    }

    var connectStyledUploadBtn = function () {
        var styled = $('#styled-photo');
        var realUpload = $('#photo');
        styled.on('click', function(e) {
            e.preventDefault();
            realUpload.trigger('click');
        });
        realUpload.on('change', function(e) {
            var fileName = e.currentTarget.files[0].name;
            styled.text(fileName);
        });
    }

    var showFormOnSelect = function() {
        var realUpload = $('#photo');
        var form = $('#upload');
        realUpload.on('change', function(e) {
            form.find('.caption-section').addClass('display');
        });
    }

    var initializeForm = function() {
        connectStyledUploadBtn();
        showFormOnSelect();
        var form = $('#upload');
        form.on('submit', handleUploadSubmit);
    }

    window.startApp = function() {
        // Allow user to upload a new photo.
        initializeMenu();
        initializeForm();

        // Get users recent photos with caption and title
        refreshPhotos();
        var query =  new Parse.Query(Photo);
        // If clicks on a photo, they can draw and save it.
    }

})()

