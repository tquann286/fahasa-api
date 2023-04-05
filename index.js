const jsonServer = require('json-server') // importing json-server library
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001 // you can use any port number here; i chose to use 3001

router.get('/statistic', (req, res) => {
  const { books, users } = router.db.value()
  const total = {
    books: books.length,
    users: users.length,
  }
  res.jsonp(total)
})

server.use(middlewares)
server.use(router)

server.listen(port)
