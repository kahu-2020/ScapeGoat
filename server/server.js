const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const goatUrl = 'http://placegoat.com/'


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/:width/:height', (req,res) => {
    request
    .get(goatUrl + req.params.width + '/' + req.params.height)
    .then(res => res.body)
    .then(apiRes => res.json(apiRes))
})

module.exports = server
