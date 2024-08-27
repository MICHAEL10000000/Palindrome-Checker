const textInput = document.getElementById("text-input")
const checkBtn = document.querySelector("#check-btn")


checkBtn.addEventListener("click", ()=> {
    if(!(/[a-zA-Z]/.test(textInput.value))){ 
        ///[a-zA-Z]/ is a regular expression
        alert("Please input a value")
    } else {
        const initTextValue = textInput.value
        let textValue = textInput.value
        let textArray = textValue.split('')

         //returns values not equal to ' ' and their likes
        textArray = textArray.filter(e => e !== ' ')
        textArray = textArray.filter(e => e !== '_')
        textArray = textArray.filter(e => e !== ':')
        textArray = textArray.filter(e => e !== ';')
        textArray = textArray.filter(e => e !== '(')
        textArray = textArray.filter(e => e !== ')')
        textArray = textArray.filter(e => e !== '-')
        textArray = textArray.filter(e => e !== ',')
        textArray = textArray.filter(e => e !== '.')
        textArray = textArray.filter(e => e !== '/')
        textArray = textArray.filter(e => e !== '/')

        textValue = textArray.join('')
        textValueReverse = textValue.split('').reverse().join('')
        if (textValue.toLowerCase() === textValueReverse.toLowerCase()){
            document.getElementById("result").innerHTML = `${initTextValue} is a Palindrome`
        } else if (textValue.toLowerCase() !== textValueReverse.toLowerCase()){
            document.getElementById("result").innerHTML = `${initTextValue} is not a Palindrome`
        }
        console.log(textValue)
    }
    
    
    /* This project has made me put to use the split(), reverse(), join(), a REGEX, filter() */
})