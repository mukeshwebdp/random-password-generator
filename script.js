const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbols')
const generatorEl = document.getElementById('generator')
const clipbordEl = document.getElementById('clipbord')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
generatorEl.addEventListener('click',()=>{
    const length = +lengthEl.value // + sing used to convert to th number
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumebr = numberEl.checked
    const hasSymbol = symbolsEl.checked
    
    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumebr,hasSymbol,length)
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    // it is used true and false object
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item=> Object.values(item)[0])
    
    if(typesCount === 0){
        return ''
    }
    for(let i = 0; i < length; i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

// clipbord 
    clipbordEl.addEventListener('click',() =>{
        const textarea = document.createElement('textarea')
        const password = resultEl.innerText

        if(!password) { return }
        textarea.value = password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert('Password copied to clipboard!')

    })
    
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26 )+ 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 27 ) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

