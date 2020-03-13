const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = ''; 
    for(let i = 0; i < expr.length; i+=10) {
        if (expr[i] === '*') {
            str += ' ';
        } else {
            let symbol = '';
            for (let j = i; j < i + 10; j++) {
                if (expr[j] == '1' && expr[j+1] == '0') {
                    symbol += '.';
                    j++;
                }
                if(expr[j] == '1' && expr[j+1] == '1') {
                    symbol += '-';
                    j++;
                }
            }
            str += MORSE_TABLE[symbol];
        }
    }
    return str;
}

module.exports = {
    decode
}