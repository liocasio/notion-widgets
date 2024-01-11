const fastify = require('fastify')({logger: true})
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
//   prefix: '/public/', // optional: default '/'
//   constraints: { host: 'example.com' } // optional: default {}
})

fastify.get('/notion/quotes', function (req, reply) {
  reply.sendFile('quotes.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

fastify.get('/', function (req, reply) {
    reply.redirect("https://ocasio.link")
  })

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})