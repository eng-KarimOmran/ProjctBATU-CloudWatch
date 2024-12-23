const btnLogin = document.querySelector('.Login button')
const Login = document.querySelector('.Login')
const Register = document.querySelector('.Register')
const dontHaveAccount = document.querySelector('.Login a')
const IhaveAccount = document.querySelector('.Register a')
const inputs = document.querySelectorAll('input')
const btnRegister = document.querySelector('.Register button')
btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
})
btnRegister.addEventListener('click',(e)=>{
    e.preventDefault()
    addUser()
})
IhaveAccount.addEventListener('click',()=>{
    Login.classList.add('form-backe')
    Register.classList.remove('form-backe')
})
dontHaveAccount.addEventListener('click',()=>{
    Login.classList.remove('form-backe')
    Register.classList.add('form-backe')
})
const regex = {
    text:/^[a-zA-Z]+[\s\-]*$/,
    email:/^[a-zA-Z0-9-\.]+@[\w]+\.[\w]+$/,
    tel:/^01(0|1|2|5)[0-9]{8}$/,
    password:/^.{8,}$/,
}
for (const input of inputs) {
    input.addEventListener('input',()=>{
        if(input.value == ''){
            input.classList.remove('is-valid')
            input.classList.remove('is-invalid')
        }
        else if(regex[input.type].test(input.value)){
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
        }else{
            input.classList.remove('is-valid')
            input.classList.add('is-invalid')
        }
    })
}