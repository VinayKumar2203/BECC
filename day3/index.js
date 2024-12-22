const fs = require('fs');
const path = require('path');

const operation = process.argv[2]; // Operation to be performed (read, delete, create, append, rename, list)
const file = process.argv[3]; // The file to be affected
const content = process.argv[4]; // Content to be appended or used for creating the file

// Function to read the content of a file
function readFile(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${file}`);
      return;
    }
    console.log(data);
  });
}

// Function to delete a file
function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.error(`Error deleting file: ${file}`);
      return;
    }
    console.log(`File '${file}' deleted`);
  });
}

// Function to create a new file
function createFile(file) {
  fs.writeFile(file, '', (err) => {
    if (err) {
      console.error(`Error creating file: ${file}`);
      return;
    }
    console.log(`File '${file}' created`);
  });
}

// Function to append content to a file
function appendToFile(file, content) {
  fs.appendFile(file, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file: ${file}`);
      return;
    }
    console.log(`Content appended to the file '${file}'`);
  });
}

// Function to rename a file
function renameFile(oldFile, newFile) {
  fs.rename(oldFile, newFile, (err) => {
    if (err) {
      console.error(`Error renaming file: ${oldFile}`);
      return;
    }
    console.log(`File '${oldFile}' renamed to '${newFile}'`);
  });
}

// Function to list files in the current directory
function listFiles() {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Error reading directory');
      return;
    }
    console.log('Files and directories in the current directory:');
    files.forEach((file) => {
      console.log(file);
    });
  });
}

// Switch to determine which operation to perform
switch (operation) {
  case 'read':
    if (!file) {
      console.error('Please provide the filename to read');
      break;
    }
    readFile(file);
    break;
  
  case 'delete':
    if (!file) {
      console.error('Please provide the filename to delete');
      break;
    }
    deleteFile(file);
    break;
  
  case 'create':
    if (!file) {
      console.error('Please provide the filename to create');
      break;
    }
    createFile(file);
    break;
  
  case 'append':
    if (!file || !content) {
      console.error('Please provide both the content and filename to append');
      break;
    }
    appendToFile(file, content);
    break;
  
  case 'rename':
    if (!file || !content) {
      console.error('Please provide both the old and new filenames to rename');
      break;
    }
    renameFile(file, content);
    break;
  
  case 'list':
    listFiles();
    break;
  
  default:
    console.log(`Invalid operation '${operation}'`);
}
