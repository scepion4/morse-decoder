const MORSE_TABLE = {
    '*':' ',
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
    let j=0;
    let k=10
    let arr=[]
    let round=expr.length/10
    for(let i=0;i<round;i++){
      let subStr=expr.slice(j,k)
      k=k+10
      j=j+10
      arr.push(subStr)
    }
    let newArr=arr.map(e=>e.slice(e.indexOf('1'),e.length))
    let dot=newArr.map(e=>e.replaceAll('10','.'))
    let dashed=dot.map(e=>e.replaceAll('11','-'))
    let text=dashed.map(e=>e=MORSE_TABLE[e])
    let result=text.join('')
    return result
}

module.exports = {
    decode
}