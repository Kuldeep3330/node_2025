import fs from 'fs'
import http from 'http'
// import url from 'url'

/////////////////////////////////////////////
///routing
const server=http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url === '/' || req.url === '/overview'){
        res.end('Hello from the overview!'); 
    }
    else if(req.url === '/product')
    {
        res.end('Hello from the product!'); 
    }
    else if(req.url === '/api'){
        fs.readFile('./1-node-farm/dev-data/data.json','utf-8',(err, data)=>{
            
            const productData=JSON.parse(data)
            // console.log(productData);
            res.writeHead(200,{
                'content-type':'application/json'
            })
            res.end(data);           
        })
    }
    else{
        res.writeHead(404,{ 
            'content-type':'text/html',
            'my-own-header':'hello-world'
        })
        res.end('<h1>Page not found!</h1>');
    }
    
})

server.listen(3000, ()=>{
    console.log(`server is listening on http://127.0.0.1:3000`);
    
})
///////////////////////////////////////////
///SERVER
// const server=http.createServer((req, res)=>{
//     res.end('Hello from the server!')
// })

// server.listen(3000, ()=>{
//     console.log(`server is listening on http://127.0.0.1:3000`);
    
// })


////////////////////////////////////////////////
// file
//synchronous blocking
// const data=fs.readFileSync('./1-node-farm/txt/input.txt', 'utf-8');

// console.log(data);

// const textOut=`This is what i know about avacado: ${data}.\n Created on ${Date.now()}`
// fs.writeFileSync('./1-node-farm/txt/output.txt', textOut)
// console.log('data written successfully');

//asynchronous non-blocking
// fs.readFile('./1-node-farm/txt/start.txt', 'utf-8', (err, data1) => {
//   if (!err) {
//     fs.readFile(`./1-node-farm/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//       if (!err) {
//         console.log(data2)
//         fs.readFile('./1-node-farm/txt/append.txt', 'utf-8', (err, data3) => {
//           console.log(data3)

//           fs.writeFile(
//             './1-node-farm/txt/final.txt',
//             `help me with more info regarding Avacado\n${data3}`,
//             (err) => {
//               console.log('file written successfully')
//             }
//           )
//         })
//       }
//     })
//   }
// })

// console.log('will read this')
