export default function Search(section){
    return `<div class="w-100">
            <h2 class="text-center text-white pt-5 pb-2">${section}</h2>
            <div class="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 mx-auto position-relative d-flex align-items-center">
                <input id="Search" type="text" class="form-control text-dark fa-2x w-100 rounded-5 bg-white py-2 ps-5" placeholder="Search location...">
                <i class="fa-solid fa-search text-dark position-absolute ms-3"></i>
            </div>
        </div>`
}