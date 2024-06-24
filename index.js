#!/usr/bin/env node

const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const colors = require('./src/const/colors');

yargs(hideBin(process.argv))
    .command('gc [color]', 'get tailwind color name', (yargs) => {
        yargs.positional('color', {
            alias: 'c',
            description: 'any hex value'
        })
    }, (argv) => {
        let color = String(argv.color)
        if (!color.startsWith('#')) {
            color = `#${color}`
        }
        if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)) {
            console.log(`Invalid color "${color}"`)
            return
        }

        if (colors[color]) {
            console.log(colors[color])
        } else {
            console.log(`There is no color "${color}"`)
        }
    })
    .parse()
