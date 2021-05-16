import fs from 'fs'
import path from 'path'

export const saveData = (data: string, fileName: string, outputDir: string) => {
    fs.writeFile(path.join(outputDir, fileName), data, (err) => err && console.log(err))
}