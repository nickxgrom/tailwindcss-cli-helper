const colors = require("../const/colors");

module.exports = {
    command: "gc [color]",
    description: "Get tailwind color name",
    builder: (yargs) => {
        yargs.positional('color', {
            alias: 'c',
            description: 'any hex value'
        })
    },
    handler: (argv) => {
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
    }
}