const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to Home page');
    } else if (req.url == '/aboutus') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>welcome to About Page</h1>')
    } else if (req.url == '/contactus') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<a href="https://www.masaischool.com" target="_blank">Contact us at www.masaischool.com</a>')
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('page not found 404');
    }

})
server.listen(8080, () => {
    console.log("server is running port on 8080");
})