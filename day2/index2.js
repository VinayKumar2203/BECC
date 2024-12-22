// HTTP Signup Form

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method == 'get' && req.url == '/signup') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(`
                <form method = "POST" action = "/signup" >
                    < label for= "username" > Username:</ >
                    <input type="text" name="username" id="username" required>
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" required>
                    <button type="submit">Signup</button>
                </form>
                `)
    }
    else if (req.method == "POST" && req.url == '/signup') {
        let body = ''
        res.on('data', chunk => {
            body += chunk.toString();
        })

        res.on('end', () => {
            const parseData = new URLSearchParams(body);
            const username = parseData.get('username')
            const password = parseData.get('password')

            let user = { username, password };

            fs.appendFile('user.txt', JSON.stringify(user), (err) => {
                if (err) {
                    res.writeHead(500, { 'content-type': 'text/plain' })
                    res.end('error saving user data');
                    return
                }
                res.writeHead(200, { 'content-type': 'text/plain' })
                res.end('Thank you for signup...!!!');
            })
        })
    }
    if (req.method === 'GET' && req.url === '/allusers') {
        fs.readFile('user.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading user data');
                return;
            }

            const users = data
                .split('\n')
                // .filter(line => line.trim())
                // .map(line => JSON.parse(line))
                .map(user => user.username);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Users:\n${users.join('\n')}`);
        });
    }

})
server.listen(8080, () => {
    console.log('server is runing port on 8080');
})
