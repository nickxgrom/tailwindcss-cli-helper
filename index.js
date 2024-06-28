#!/usr/bin/env node

const yargs = require("yargs/yargs")
const {hideBin} = require("yargs/helpers");

function defineCommand({command, description, builder, handler}) {
    yargs(hideBin(process.argv))
        .command(command, description, (yrgs) => builder(yrgs), (args) => handler(args))
        .help()
        .parse()
}

const commands = [
    require('./src/commands/get-color')
]

commands.forEach(command => {
    defineCommand(command)
})
