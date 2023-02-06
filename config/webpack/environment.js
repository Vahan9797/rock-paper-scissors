const { environment } = require('@rails/webpacker')
const { EnvironmentPlugin } = require('webpack')
const dotenv = require('dotenv')

const dotEnvFiles = [
  `.env.local.${process.env.NODE_ENV}`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env'
]

dotEnvFiles.forEach(dotEnvFile => {
  dotenv.config({ path: dotEnvFile, silent: true })
})

environment.plugins.insert(
  "Environment",
  new EnvironmentPlugin(process.env)
)

// Get the actual sass-loader config
const sassLoader = environment.loaders.get('sass')
const sassLoaderConfig = sassLoader.use.find(function(element) {
  return element.loader == 'sass-loader'
})

// Use Dart-implementation of Sass (default is node-sass)
const options = sassLoaderConfig.options
options.implementation = require('sass')

module.exports = environment
