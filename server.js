//
// d8b
// 88P
// d88
// 888   d8888b  d888b8b  ?88,.d88b,  88bd88b d8888b ?88,  88P?88   d8P
// ?88  d8P' ?88d8P' ?88  `?88'  ?88  88P'  `d8P' ?88 `?8bd8P'd88   88
// 88b 88b  d8888b  ,88b   88b  d8P d88     88b  d88 d8P?8b, ?8(  d88
//  88b`?8888P'`?88P'`88b  888888P'd88'     `?8888P'd8P' `?8b`?88P'?8b
//                    )88  88P'                                     )88
//                   ,88P d88                                      ,d8P
//               `?8888P  ?8P                                   `?888P'
//

const http = require('http')
const httpProxy = require('http-proxy')
const chalk = require('chalk')
const pkg = require('./package.json')

//
// Configure
//
const port = process.env.HTTP_PORT || 8000
const target = process.env.TARGET_URL || 'localhost'

//
// Create a proxy server, and log each request
// before simply passing it on to the target.
//
const proxy = httpProxy.createProxyServer({})
const server = http.createServer((req, res) => {
  console.log(chalk.gray(`->`), chalk.cyan(`[${req.method}]`), chalk.white(`${req.url}`))
  proxy.web(req, res, { target })
}).listen(port, () => {
  console.log(chalk.gray(`->`))
  console.log(chalk.gray(`->`), chalk.white(`log-proxy ${pkg.version}`))
  console.log(chalk.gray(`->`))
  console.log(chalk.gray(`-> listening on port:`), chalk.yellow(port))
  console.log(chalk.gray(`-> proxying requests to:`), chalk.yellow(target))
  console.log(chalk.gray(`-> ready...`))
  console.log(chalk.gray(`->`))
})
