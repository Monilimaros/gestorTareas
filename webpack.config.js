const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos css
            },
            {
                test: /\.jss$/, //Regex para identificare archivos js
                exclude: /node_modules/, // Excluir la carpeta nodule_modules
                use: {
                    loader: 'babel-loader', // Loader para llevar js moderno a js antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, //Habilitar la compresión qzip
        part: 9000, // Puerto del servidor de desarrollo
    },
};