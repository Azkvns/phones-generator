import { generateContact } from './contactGenerator';
import { saveData } from './dataSaver';
import { generateNumbers } from './numbersGenerator';

const outputDir = process.argv[2];
const count = parseInt(process.argv[3])
const mask = process.argv[4]

if (!outputDir || !count || !mask ) throw Error('Укажите все аргументы')

const numbers =  generateNumbers(count, mask)
console.log(`Сгенерировано ${numbers.length} номеров, с ${numbers[0]} по ${numbers[numbers.length-1]}`)
const contacts = numbers.map(number => generateContact(`gen ${number}`, number)).join('\n')
console.log(`Сгенерированы контакты`)

saveData(contacts, 'contacts.vcf', outputDir)
console.log(`Контакты сохранены в ${outputDir}/contacts.vcf`)