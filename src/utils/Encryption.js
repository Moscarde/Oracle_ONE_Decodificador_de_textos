const encriptedText = 'pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!'
const text = 'Ola mundo'

// A letra 'e' é convertida para 'enter'
// A letra 'i' é convertida para 'imes'
// A letra 'a' é convertida para 'ai'
// A letra 'o' é convertida para 'ober'
// A letra 'u' é convertida para 'ufat'
class Cipher {
    static decrypt(text) {
        let decryptedText = text.replaceAll('enter', 'e');
        decryptedText = decryptedText.replaceAll('imes', 'i');
        decryptedText = decryptedText.replaceAll('ai', 'a');
        decryptedText = decryptedText.replaceAll('ober', 'o');
        decryptedText = decryptedText.replaceAll('ufat', 'u');
        return decryptedText
    }

    static encrypt(text) {
        let encryptedText = text.replaceAll('e', 'enter');
        encryptedText = encryptedText.replaceAll('i', 'imes');
        encryptedText = encryptedText.replaceAll('a', 'ai');
        encryptedText = encryptedText.replaceAll('o', 'ober');
        encryptedText = encryptedText.replaceAll('u', 'ufat');
        return encryptedText
    }

}

export default Cipher