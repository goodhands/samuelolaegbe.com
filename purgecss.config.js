module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        // './src/**/*.jsx',
        './src/**/*.html',
        // './src/**/*.pug',
        // './src/**/*.md',
    ],
    whitelist: [
        'body',
        'html',
        'pre',
        'img',
        'a',
        'prose',
        'prose-xl',
        'prose code',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
    ],
    extractors: [
        {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g),
            extensions: ['vue', 'js', 'html'],
        },
    ],
}