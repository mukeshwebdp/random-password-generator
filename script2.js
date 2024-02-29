const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbols')
const generatorEl = document.getElementById('generator')
const clipbordEl = document.getElementById('clipbord')
    
function Getlowercase(){
    return String.fromCharCode(Math.floor(Math.random()*27)+97)
}

function Getuppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function Getnumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function Getsymbol(){
    const symbols = '~!@#$%^&*()_+{}[]*/?'
    return symbols[Math.floor(Math.random()*symbols.length)]
}
        // password generator function
    let generatePassword = (password = '')=>{
    if(uppercaseEl.checked){
        password += Getuppercase()
    }
    if(lowercaseEl.checked){
        password += Getlowercase()
    }
    if(numberEl.checked){
        password += Getnumber()
    }
    if(symbolsEl.checked){
        password += Getsymbol()
    }
    if(password.length < lengthEl.value){
        return generatePassword(password);
    }
    resultEl.innerText = truncateStrig(password,lengthEl.value)

}
        // string range triming function

function truncateStrig(str,num){
    if(str.length > num){
        let substring = str.substring(0,num)
        return substring;
    }else{
        return str;
    }
}

generatorEl.addEventListener('click',function(){
    generatePassword();
})

clipbordEl.addEventListener('click',function(){
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