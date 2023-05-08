const { readdirSync, unlinkSync } = require("fs");
const { join } = require("path");
const rootDir = join(__dirname, '../')

const findAllFileInFolder = (dir, pattern) => {
    const content = readdirSync(dir, { withFileTypes: true })
    return content.filter(x => x.isFile() && (!pattern || x.name.indexOf(pattern) > -1)).map(x => x.name)
}

const getAllDirectory = (dir) => {
    const content = readdirSync(dir, { withFileTypes: true })
    return content.filter(x => x.isDirectory()).map(x => x.name)
}
const cleanTests = (dir) => {
    const directories = getAllDirectory(dir)
    const files = findAllFileInFolder(dir, '.test.ts')
    if (files) {
        files.forEach(x => {
            unlinkSync(join(dir, x), (c) => {
                console.log('Deleted ', x);
            })
        })
    }

    if (directories) {
        directories.forEach(x => {
            cleanTests(join(dir, x))
        })
    }
}

cleanTests(rootDir)