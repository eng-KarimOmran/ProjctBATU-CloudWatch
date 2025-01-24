export default function Contact(){
    const section = document.querySelector('section')
    section.innerHTML = `
        <form class="w-100 form-Contact">
            <h2 class="text-white text-center">Contact</h2>
            <div class="d-flex flex-column p-2 mx-auto col-10 col-md-10">
                <div class="py-3 col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                    <label class="d-block text-white" for="email">Email:</label>
                    <input type="email" class="form-control bg-transparent text-white" name="email">
                </div>
                <div class="py-3 col-12 col-md-10">
                    <textarea name="message" placeholder="Write your message..." class="form-control message bg-transparent text-white" id="message"></textarea>
                </div>
                <button type="submit" class="btn btn-success btn-Contact">Send</button>
            </div>
        </form>
        <div class="bg-success text-white rounded-1 py-2 px-5 d-none message-successfully">The message was sent successfully</div>
        `
    document.querySelector('.form-Contact').addEventListener('submit',(e)=>{e.preventDefault()})
    const regxEmail = /^[a-zA-Z0-9-\.]+@[\w]+\.[\w]+$/
    const regxMessage = /^[a-zA-Z]+/
    const Email = document.querySelector('.form-Contact input')
    Email.addEventListener('input', function CheckEmail(){
        if(regxEmail.test(this.value)){
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
        }else{
            this.classList.remove('is-valid')
            this.classList.add('is-invalid')
        }
    })
    const message = document.querySelector('.form-Contact textarea')
    message.addEventListener('input', function CheckEmail(){
        if(regxMessage.test(this.value)){
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
        }else{
            this.classList.remove('is-valid')
            this.classList.add('is-invalid')
        }
    })
    const btn = document.querySelector('.form-Contact button')
    btn.addEventListener('click',()=>{
        if(regxMessage.test(Email.value)&&regxMessage.test(message.value)){
            message.value = ''
            message.classList.remove('is-valid')
            Email.value = ''
            Email.classList.remove('is-valid')
            document.querySelector('.message-successfully').classList.replace('d-none','d-block')
            setTimeout(()=>{
                document.querySelector('.message-successfully').classList.replace('d-block','d-none')
            }, 1000); 
        }
    })
}