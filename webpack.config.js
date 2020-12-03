// path module from node, permite acceder a las carpetas del proyecto
// HtmlWebpackPlugin to be able to work with html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluging = require('copy-webpack-plugin');

//module que va a exportar paso a paso lo que se va a mandar a producción
// es un objeto donde vive la configuración del proyecto
module.exports = {
 // necesitamos un punto de entrada, donde vive todo el código inicial y a partir de acá sale todo el cóodigo inicial
  entry: './src/index.js',
  //salida de los archivos del proyecto
  output: {
    //en este folder va a guardar los archivos para producción
    path: path.resolve(__dirname, 'dist'),
    // indica el nombre del archivo de salida principal para producción
    filename: 'main.js'
  },
  //extensiones que va a usar nuestro proyecto
  resolve: {
    //se le pasa un array de las extensiones de los archivos que se van a usar, en este caso solo javascript
    extensions: ['.js'],
  },
  //ahora un modulo con reglas para producción
  // en este caso babel para que cualquier navegador tome el proyecto
  module: {
    rules: [
      {
        //extructura de babel
        test: /\.js?$/,  //regex para detectar archivos js
        exclude: /node_modules/, // que excluya todo lo que encuentre en esta carpeta de archivos js
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  //establecer pulgings a usar
  plugins: [
    //se le pasa un objeto de cada plugin
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    // copy css style file for deployment
    new CopyWebpackPluging({
      patterns: [{
      from: './src/styles/styles.css',
      to: ''}],
    })
  ]
}