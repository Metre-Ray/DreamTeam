let textPlaseholder = '';
let textButton = '';
const submit = document.getElementById('submit');

switch (sessionStorage.getItem('language')) {
    case "rus":
        textPlaseholder = 'поиск';
        textButton = 'ИСКАТЬ!';
        break;
    case "eng":
        textPlaseholder = 'search';
        textButton = 'SEARCH!';
        break;
    case "by":
        textPlaseholder = 'пошук';        
        textButton = 'ШУКАЦЬ!';
        break;
    default:
        textPlaseholder = 'поиск';
        textButton = 'ИСКАТЬ!';
        break;
} 

window.onload = function (){
    const el = document.querySelector('.input');
    const button = document.querySelector('.search');
    el.placeholder=textPlaseholder;
    button.value = textButton;
    submit.click();
};

function search() {
    const searchfield = document.querySelector('.input').value;
    // let myExp = new RegExp(searchfield, 'i'); //любое совпадение
    const myExp = new RegExp('^' + searchfield, 'i'); // совпадение по первым буквам
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            const response = JSON.parse(xhttp.responseText);
            const output = '';
            const lang = sessionStorage.getItem('language');

            if(lang == undefined) {
                sessionStorage.setItem('language','rus');
                lang = 'rus';
            }

            const obj = response[lang];
            const matchs = [];

            for(key in obj){
                if((key.search(myExp) !== -1) || (obj[key].place_of_working.search(myExp) !== -1)){
                    matchs.push(key);
                }
            }
            matchs.forEach((el)=>{output +='<li><a href=\'https://metre-ray.github.io/DreamTeam/html/authors/'+ el +'.html\'>'+ obj[el].name +'</a></li>'}); 
            
            if(matchs.length === 0){
                switch (lang) {
                    case "rus":
                        output = '<li>Совпадений не найдено =(</li>';
                        break;
                    case "eng":
                        output = '<li>No match found =(</li>';
                        break;
                    case "by":
                        output = '<li>Супадзенняў не знойдзена =(</li>';
                        break;
                    default:
                        output = '<li>Совпадений не найдено =(</li>';
                        break;
                } 
            }
            document.querySelector("ul").innerHTML = output;        
        }
    };
    xhttp.open("GET", "../data/filmmakers.json", true);
    xhttp.send();
}

submit.addEventListener('click', search, false);
