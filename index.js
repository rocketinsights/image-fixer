const gm = require('gm')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const files = fs.readdirSync(path.join(__dirname, 'input'))
_.each(files, (file) => {
    if (file === '.gitignore') {
        return
    }
    
    const inputFile = path.join(__dirname, 'input', file)
    gm(inputFile)
        .resize(null, 1080)
        .write(path.join(__dirname, 'output', file), (err) => {
            if (err) {
                return console.log('ERR', err)
            }

            return console.log(file, 'written')
        })
})