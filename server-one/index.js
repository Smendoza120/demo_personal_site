    const http = require('http');  

    const app = http.createServer((request, respose) => {
        respose.writeHead(200, { 'Content-type': 'text/plain' });
        respose.end('Hello world');
    })

    const PORT = 3000;

    app.listen(PORT);

    console.log(`Server runnin on port ${PORT}`)