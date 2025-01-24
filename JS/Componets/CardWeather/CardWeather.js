export default function CardWeather(headcaedR,headcaedL,state,img,temperature,Description,droplet,wind){
    return `
        <div class="p-2 col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div class="card-weather shadow-sm mx-auto">
                <div class="d-flex justify-content-between align-self-center head p-1 rounded-top-3">
                    <div class="text-white py-2">${headcaedR}</div>
                    <div class="text-white py-2">${headcaedL}</div>
                </div>
                <div class="body p-2 rounded-bottom-3 d-flex flex-column align-items-center">
                    <span class="text-white py-3">${state}</span>
                    <div class="img-card py-4">
                        <img src="${img}" class="w-100 d-block" alt="img">
                    </div>
                    <div class="text-white py-3 fa-3x">
                        ${temperature}<sup>o</sup>C
                    </div>
                    <span class="text-info py-3">${Description}</span>
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <div><i class="fa-solid fa-droplet text-white me-1"></i><span class="text-dark-emphasis fw-bold">${droplet}%</span></div>
                        <div><i class="fa-solid fa-wind text-white me-1"></i><span class="text-dark-emphasis fw-bold">${wind}k/h</span></div>
                    </div>
                </div>
            </div>
        </div>`
}