var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title: 'Article One',
    date: '21 jan, 2018',
    heading: 'article one',
    Content:`<p>
                    This is article One.This is article One.This is article One.This is article One.This is article One.
                    This is article One.This is article One.This is article One.This is article One.This is article One
                    This is article OneThis is article OneThis is article OneThis is article OneThis is article OneThis is article One
                </p>
                <p>
                    This is article One.This is article One.This is article One.This is article One.This is article One.
                    This is article One.This is article One.This is article One.This is article One.This is article One
                    This is article OneThis is article OneThis is article OneThis is article OneThis is article OneThis is article One
                </p>
                <p>
                    This is article One.This is article One.This is article One.This is article One.This is article One.
                    This is article One.This is article One.This is article One.This is article One.This is article One
                    This is article OneThis is article OneThis is article OneThis is article OneThis is article OneThis is article One
                </p>`,
    
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var Content=data.Content;
    
    
        var htmltemplate=
            `<html>
            <head>
                <title>${title};</title>
                <meta name="viweport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                <div class="container">
                <div>
                    <a href="/">home</a>
                    </div>
                    <hr/>
                    <h3>${heading};</h3>
                    <div>
                        ${date};
                    </div>
                    <div>
                        ${Content};
                    </div>
                    </div>
            </body>
        </html>`;
        return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/article-one', function (req, res) {
  res.send(createTemplate(article-one));
});

app.get('/article-Two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
