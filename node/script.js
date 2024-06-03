const fs = require('fs');

const folderName = process.argv[2] || 'Project';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, 'console.log("Hello from app.js")');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log('Something went wrong');
    console.log(e);
}