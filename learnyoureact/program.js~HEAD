var express = require('express');
var app = express();

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> isomorphic, check
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require('babelify');

<<<<<<< HEAD
=======
>>>>>>> initial commit, learnyoureact started
=======
>>>>>>> isomorphic, check
app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var TodoBox = require('./views/index.jsx');
var data = [{'title': 'Shopping', 'detail': process.argv[3] }, {'title': 'Hair cut', 'detail': process.argv[4] }]

app.use('/bundle.js', function(req, res) {
    res.setHeader('content-type', 'application/javascript');

    browserify({ debug: true })
        .transform(babelify.configure({
            presets: ["react", "es2015"]
        }))
        .require("./app.js", { entry: true })
        .bundle()
        .pipe(res);
});

app.use('/', function(req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({src: '/bundle.js'})
    ));

    res.end(html);
=======
app.use('/', function(req, res) {
  res.render('index', '');
>>>>>>> initial commit, learnyoureact started
=======
// write below
=======
var TodoBox = require('./views/index.jsx');
>>>>>>> isomorphic, check
var data = [{'title': 'Shopping', 'detail': process.argv[3] }, {'title': 'Hair cut', 'detail': process.argv[4] }]

app.use('/bundle.js', function(req, res) {
    res.setHeader('content-type', 'application/javascript');

    browserify({ debug: true })
        .transform(babelify.configure({
            presets: ["react", "es2015"]
        }))
        .require("./app.js", { entry: true })
        .bundle()
        .pipe(res);
});

app.use('/', function(req, res) {
<<<<<<< HEAD
  res.render('index', {data: data});
>>>>>>> properties are from the server
=======
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({src: '/bundle.js'})
    ));

    res.end(html);
>>>>>>> isomorphic, check
});

app.listen(app.get('port'), function() {});