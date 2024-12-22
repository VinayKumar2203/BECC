// index.js

const crypto = require('crypto');
const uuid = require('uuid');
const fs = require('fs');
const os = require('os');
const stream = require('stream');
const readline = require('readline');

// Command line arguments
const args = process.argv.slice(2);

// Function to encrypt string using 'crypto' module
function encryptString(inputString) {
    const algorithm = 'aes-192-cbc';
    const password = 'mySecretPassword';
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = Buffer.alloc(16, 0); // Initialization vector.
    
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(inputString, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    console.log(`Encrypted String: ${encrypted}`);
}

// Function to generate a UUID string
function generateUUID() {
    const id = uuid.v4();
    console.log(`Generated UUID: ${id}`);
}

// Function to compare stream read vs fs.readFile read
function compareReadMethods(filePath) {
    const fileStats = fs.statSync(filePath);
    const fileSizeInBytes = fileStats.size;

    // Using fs.readFile
    const startTimeFS = Date.now();
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        const endTimeFS = Date.now();
        console.log(`Time taken for fs.readFile: ${endTimeFS - startTimeFS} ms`);
    });

    // Using stream module
    const startTimeStream = Date.now();
    const readStream = fs.createReadStream(filePath, 'utf8');
    let dataStream = '';

    readStream.on('data', chunk => {
        dataStream += chunk;
    });

    readStream.on('end', () => {
        const endTimeStream = Date.now();
        console.log(`Time taken for stream read: ${endTimeStream - startTimeStream} ms`);
    });
}

// Function to print system details using 'os' module
function printSystemDetails() {
    console.log('System Details:');
    console.log(`OS: ${os.type()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`Architecture: ${os.arch()}`);
    console.log(`CPU Info: ${JSON.stringify(os.cpus())}`);
    console.log(`Free Memory: ${os.freemem()} bytes`);
    console.log(`Total Memory: ${os.totalmem()} bytes`);
    console.log(`Uptime: ${os.uptime()} seconds`);
}

// Main execution based on command line arguments
if (args.length === 0) {
    console.log('Please provide a command (encrypt, uuid, compare, system)');
} else {
    const command = args[0];

    switch (command) {
        case 'encrypt':
            encryptString("Hello, Good Morning");
            break;
        case 'uuid':
            generateUUID();
            break;
        case 'compare':
            if (args.length < 2) {
                console.log('Please provide the file path for comparison');
            } else {
                compareReadMethods(args[1]);
            }
            break;
        case 'system':
            printSystemDetails();
            break;
        default:
            console.log('Unknown command');
            break;
    }
}
