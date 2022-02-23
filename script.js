let formulario = document.querySelector('#form')

formulario.onsubmit = function(event) {
    event.preventDefault()

    let inputName = document.forms['form']['name'].value
    let inputPayment = document.forms['form']['mensalidade'].value
    let inputTime = document.forms['form']['tempo'].value
    let inputTaxa = document.forms['form']['juros'].value

    console.log(inputName)
    console.log(inputPayment)
    console.log(inputTime)

}   


const url =  "http://api.mathjs.org/v4/"

fetch(url, {
    method: "POST",
    
    body: JSON.stringify({
        "expr": "${inputPayment} * (((1 + ${inputTaxa}) ^ ${inputTime} - 1) / ${inputTaxa})"  
    }),

    headers: {
        "Content-type": 'application/json: charset=UTF-8'
    }
    
}).then(response => response.json()).then(json => console.log(json))
