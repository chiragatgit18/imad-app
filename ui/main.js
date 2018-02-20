// counter code

var button=document.getElementById('counter');

button.onClick=function()
{
    //create a Request Object
    
    var request= new XMLHttpRequest();
    
    // capture a response store it in a variable
    
    request.onreadystatechange=== function()
    {
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var counter=requst.responseText;
                var span=getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }f
            
    };
    
    // Make a request
    
    request.open('GET','http://chiraggambha15197.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
};
