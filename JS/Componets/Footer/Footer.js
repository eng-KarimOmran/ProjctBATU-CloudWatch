export default function Footer(){
    const Developers = [
        { Name: 'Karim-Omran', Link: 'https://www.facebook.com/kareem.abdelhalem.10' },
        { Name: 'Mostafa-Shendy', Link: 'https://www.facebook.com/share/UVqqQmbiK8QusJ7S/?mibextid=wwXIfr' },
        { Name: 'Abdulaziz-Salah', Link: 'https://www.facebook.com/Abdalaziizsalah?mibextid=ZbWKwL' },
        { Name: 'Essam-Mohammed', Link: 'https://www.facebook.com/essam.mohamed.7165331?mibextid=ZbWKwL' },
        { Name: 'Mohamed-Khamis', Link: 'https://www.facebook.com/profile.php?id=100009534673816&mibextid=kFxxJD' },
        { Name: 'Abdulaziz-Abdo', Link: 'https://www.facebook.com/zezo.elsambo' },
        { Name: 'Mohamed-ElSarjani', Link: 'https://www.facebook.com/profile.php?id=100058611527270&mibextid=ZbWKwL' },
        { Name: 'Omar-Ragab', Link: 'https://www.facebook.com/profile.php?id=100008781030084&mibextid=ZbWKwL' },
        { Name: 'Hala-Eldefrawy', Link: 'https://www.facebook.com/profile.php?id=100056783152088&mibextid=kFxxJD' },
        { Name: 'Moaz-Osama', Link: 'https://www.facebook.com/moaaz.osama.73?mibextid=ZbWKwL' },
        { Name: 'Mostafa-Elmasre', Link: 'https://www.facebook.com/mustafaelmasre10?mibextid=ZbWKwL' },
        { Name: 'Abdulrahman-Suleiman', Link: 'https://www.facebook.com/share/1GpH7HhkGi/' },
        { Name: 'Mostafa-Reda', Link: 'https://www.facebook.com/profile.php?id=100009880898453&mibextid=ZbWKwL' },
        { Name: 'Mohamed-Fekry', Link: '#' },
        { Name: 'Abdulrahman-Ahmed', Link: 'https://www.facebook.com/share/1E9XtLuTAB/' },
      ];
      
    document.querySelector('footer').innerHTML = `<div class="px-1 py-3">
            <div class="container Copyright d-flex align-items-center justify-content-center flex-column">
                <span class="Developed">Developed By Eng</span>
                <ul class="d-flex align-items-center justify-content-center px-1 m-0 flex-wrap py-1">
                   ${Developers.map((Developer)=>{
                    return ` <li class="m-1 shadow p-1"><span><a class="text-decoration-none" href="${Developer.Link}">${Developer.Name}</a></span></li>`
                   }).join('')}
                </ul>
                <span class="Developed">All Copy Rights Reserved @2024</span>
            </div>
        </div>`
}
