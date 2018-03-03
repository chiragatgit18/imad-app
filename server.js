var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={

    'article-one' : {
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
        
    },
    'article-two':{
         title: 'Article Two',
        date: '20 jan, 2018',
        heading: 'article one',
        Content:`<p>
                        This is article Two.This is article One.This is article One.This is article One.This is article One.
                        This is article Two.This is article One.This is article One.This is article One.This is article One
                        This is article TwoThis is article OneThis is article OneThis is article OneThis is article OneThis is article One
                    </p>
                    `,
            
        
    },
    'article-three':{
         title: 'Article Three',
        date: '21 jan, 2018',
        heading: 'article Two',
        Content:`<p>
                        This is article Three.This is article Three.This is article Three.
                        
                    </p>
                    `
    }
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.Content;
    
    
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
                        ${content};
                    </div>
                </div>
            </body>
        </html>`;
        return htmltemplate;
}


var Pool=require('pg').Pool;

var config={
    user:'chiraggambha15197',
    database:'chiraggambha15197',
    host:'db.imad.hasura-app.io',
    password:process.env.DB_PASSWORD
    
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/couner', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

var pool=new Pool(config);

app.get('/test-db', function (req,res){
   
   pool.query(SELECT *FROM article, function(err,result)
   {
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          res.send(JSON.stringify(result));
      }
   }); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/:articleName', function (req, res) {
    //  articleName==article-one
    //  articles[articleName]== content of article-one object
    var articleName=req.params.articleName;
    
  res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
