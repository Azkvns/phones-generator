export const generateContact = (fullName: string, phone: string) => {
    return `BEGIN:VCARD
VERSION:2.1
FN:${fullName}
TEL;CELL:${phone}
END:VCARD`
}