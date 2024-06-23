#!/usr/bin/env node

const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const colors = require('./src/const/colors');

yargs(hideBin(process.argv))
    .command('gcn [color]', 'get tailwind color name', (yargs) => {
        yargs.positional('color', {
            alias: 'c',
            description: 'any hex value'
        })
    }, (argv) => {
        console.log(colors[argv.color]);
    })

    .parse()
