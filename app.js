document.getElementById('btn1').addEventListener('click',gettext);
function gettext()
{
    console.log('clicked..');
    fetch('test.txt').then(function(res)
    {
        return res.text();
    }).then(function(data){
         console.log(data);
         document.getElementById('output').innerHTML=`<h1>${data}</h1>`;
         console.log(document.getElementById('output'));
    });
}

document.getElementById('btn2').addEventListener('click',getjson);
function getjson()
{
    console.log('clicked..');
    fetch('post.json').then(function(res)
    {
        return res.text();
    }).then(function(data){
         console.log(data);
         var output='';
         data=JSON.parse(data);
         data.forEach(function(post){
            output+=`<li>${post.title}</li>`;
         });
         document.getElementById('output').innerHTML=output;
        //  document.getElementById('output').innerHTML=`<h1>${data}</h1>`;
        //  console.log(document.getElementById('output'));
    });
}
document.getElementById('btn3').addEventListener('click',getapi);
function getapi()
{
    console.log('clicked..');
    fetch('https://jsonplaceholder.typicode.com/posts').then(function(res)
    {
        return res.text();
    }).then(function(data){
         console.log(data);
         var output='';
         data=JSON.parse(data);
         data.forEach(function(post){
            output+=`<li>${post.title}</li>`;
         });
         document.getElementById('output').innerHTML=output;
        //  document.getElementById('output').innerHTML=`<h1>${data}</h1>`;
        //  console.log(document.getElementById('output'));
    });
}