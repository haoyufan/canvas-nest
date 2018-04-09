import uglify from 'rollup-plugin-uglify'

export default {
    input: './src/canvas.js',
    output: {
        file: './lib/canvas.min.js',
        name: 'canvas',
        format: 'umd'
    },
    plugins: [
        uglify()
    ]
}