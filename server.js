const http=require('http');
const server=http.createServer((request,response)=>{
    console.log('request recieved by the server');
    response.end("this is my first server!");
    console.log('reponse recived from server');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server listeniing on port');
})
