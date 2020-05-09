let form = document.querySelector('.form')

let username = document.getElementById('username')

let email = document.getElementById('email')

let password = document.getElementById('password')

let conPassword = document.getElementById('conpassword')

form.addEventListener('submit', formValidation)

console.log(form, email, password, conPassword)



function formValidation(e){

    e.preventDefault()
      

    // console.log(email, password, conPassword)

    if (email.value === 'abc@cba.com' && password.value === conPassword.value && username.value === 'abc') {
        
        alert('SUCCESS!!!')

    } else {
        
        console.error("Enter the correct Email and Password")
        
    }


}