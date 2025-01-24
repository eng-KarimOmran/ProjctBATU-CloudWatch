export default function Services(){
    const ServicesText = ['The Hour','Today','ThreeDay','Week']
    const section = document.querySelector('section')
    section.innerHTML = `<h2 class="text-white text-center pt-5 pb-2">Services</h2>
    <p class="text-center text-white">You can find out the weather with us during</p>
    <div class="d-flex justify-content-between align-items-center container flex-column flex-lg-row">
    ${ServicesText.map((Service)=>{
        return `<div class="circle d-flex justify-content-center align-items-center">
                <div class="circle-in d-flex justify-content-center align-items-center text-white fa-2x">${Service}</div>
                </div>`
    })}
    </div>`
}