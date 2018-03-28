const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
server.use(middlewares)

var mock = require('mockjs')

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.method = 'GET'
    }
    // Continue to JSON Server router
    next()
})
server.use('/user', jsonServer.router('user.json'))
server.use('/corp', jsonServer.router('corp.json'))
server.use('/', jsonServer.router('banner.json'))
server.listen(3030, () => {
    console.log('JSON Server is running')
})

