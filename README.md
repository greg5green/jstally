JSTally
=======
Description coming soon.

If you want to fork and are unfamiliar with NPM/Bower do the following:

    'npm install' in /
    'bower install' in /app
    'bower install' in /tests

Grunt is set up with two real tasks atm:

    'grunt serve' - Converts SCSS to CSS and moves everything necessary to
        /dist. Also sets up a server at localhost:9000 and test server
        at localhost:90001
    'grunt build' - Converts SCSS to CSS, moves everything necessary to /dist
        and does a custom modernizr build
