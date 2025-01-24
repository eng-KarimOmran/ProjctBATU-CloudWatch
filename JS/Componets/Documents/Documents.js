export default function Documents(){
    const Developers = [
        {name: "كريم عبدالحليم مصطفى شريف",code: "2320935",task: "JS"},
        {name: "مصطفي احمد عبد الحفيظ",code: "2320606",task: "Search"},
        {name: "محمد فكري راشد علي",code: "2320544",task: "Service"},
        {name: "محمد خميس حسين",code: "2320501",task: "ThreeDay"},
        {name: "هاله محمود عبد العزيز الدفراوي",code: "2320717",task: "About"},
        {name: "رجب عمر جابر احمد كمال الدين",code: "2320404",task: "Contact"},
        {name: "عصام محمد يحيى محمد الجوهري",code: "2320381",task: "Footer"},
        {name: "محمد سمير حسن عبدالمتعال",code: "2320513",task: "Today"},
        {name: "عبدالرحمن احمد مصطفي سالم",code: "2320314",task: "Week"},
        {name: "عبدالرحمن احمد محمد عبدالرحمن",code: "2320313",task: "Documents"},
        {name: "عبدالعزيز صلاح منصور عمر",code: "2320350",task: "Hour"},
        {name: "عبدالعزيز عبده عبدالعزيز عبده",code: "2320351",task: "Navbar"},
        {name: "مصطفى عاطف عبدالحميد محمد",code: "2320614",task: "Home"},
        {name: "مصطفى رضا علي احمد",code: "2320612",task: "CardWeather"},
        {name: "معاذ اسامه عبده طه علي",code: "2320624",task: "Index"}
      ];            
    const section = document.querySelector('section')
    section.innerHTML = `
        <table class="container">
            <tr>
                <th class="text-white text-center fw-bold p-2">Code</th>
                <th class="text-white text-center fw-bold p-2">Name</th>
                <th class="text-white text-center fw-bold p-2">Task</th>
            </tr>
            ${Developers.map((Developer)=>{
                return `
            <tr>
                <td class="text-white text-center p-1">${Developer.code}</td>
                <td class="text-white text-center p-1">${Developer.name}</td>
                <td class="text-white text-center p-1">${Developer.task}</td>
            </tr>`
            }).join('')}
        </table>`
}