/**
 * @author Adal Khan
 * Express.js 5.x
 * 26 JAN 2025
 * */

/* Hello World/ here req and res Object are same in nodejs and express.
 * When we call express() methods request and response Object are created as can be passed as arguments
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/* Basic Routing Methods = POST, GET, DELETE, PUT */

app.Methods(PATH,Handler) 

/* Serve Static file use() function will load middleware. we can add multiple static folder */

app.use(express.static('public'))

Note:
// 01. If you use app.use() in index.js file then this will be global middleware and will be applied for all routes automatically

/**
 * Notes
 * 
 * 
 */



