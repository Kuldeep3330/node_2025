const fs = require('fs')
const http = require('http')
const url = require('url')

const client= require('./client')

function init()
{

}
///////////////File////////////////
// //for reading the file
// const textIn=fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);

// //for writing into the file
// const textOut=`this  is what we know about development: ${textIn}.\n created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('file written');

// //callback hell
// fs.readFile('./txt/output.txt', 'utf-8', (error, data) => {
//   fs.readFile(`${data}.txt`, 'utf-8', (err, data2) => {
//     fs.readFile(`${data2}.txt`, 'utf-8', (err, data3) => {
//       fs.writeFile('./txt/input.txt', `${data2} ${data1}`, 'utf-8', (err) => {
//         if (err) throw err
//         console.log(`file has been saved successfully`)
//       })
//     })
//   })
// })

//reading and writing files in asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {

//     console.log(data2)
//     fs.writeFile('./txt/output.txt', `${data}\n${data}`, 'utf-8', err=>{
//         if(err) throw err;
//         console.log('file successfully updated');
//     })
//   })
// })

////////////////SERVER/////////////////////

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   // console.log(req.url);
//   const pathName = req.url
//   if (pathName === '/' || pathName === '/overview') {
//     res.end('this is the overview')
//   } else if (pathName === '/product') {
//     res.end('This is the product')
//   } else if (pathName === '/api') {
//     res.writeHead(200, {
//       'Content-type': 'application/json'
//     });
//     res.end(data);

//     // Not found
//   } else {
//     res.writeHead(404, {
//       'content-type': 'text/html',
//       'my-own-header': 'hello-world',
//     })
//     res.end('page not found 404')
//   }

//   // res.end('hello from the server!')
// })

// server.listen(3000, '127.0.0.1', () => {
//   console.log(`listening on server 3000`)
// })
