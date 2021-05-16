export const generateNumbers = (
    count: number, mask: string //+x-xxx-xxxxxxx 
) => {
    const cleanMask = mask.toLocaleLowerCase().match(/[\dx]+/g)
    if (!cleanMask || cleanMask.length !== 3) throw Error('Маска не соответствует стандарту')
    let [countryCode, operatorCode, numberMask] = cleanMask

    let minNumber = parseInt(new Array(numberMask.length).fill('0').join(''))
    const maxNumber = parseInt(new Array(numberMask.length).fill('9').join(''))

    const numbers = []
    
    while (numbers.length < count && minNumber < maxNumber ) {
        let number = minNumber.toString()
        if (number.length < numberMask.length) {
            number = new Array(numberMask.length - number.length).fill('0').join('') + number
        }

        numbers.push(`+${countryCode}${operatorCode}${number}`)

        minNumber += 1;
    }

    return numbers
}