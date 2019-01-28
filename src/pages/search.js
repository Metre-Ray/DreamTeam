// sessionStorage.setItem('language', 'eng'); // проверка работы разных языков
var textPlaseholder = '';
var textButton = '';

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
    var el = document.querySelector('.input');
    el.placeholder=textPlaseholder;
    var button = document.querySelector('.search');
    button.value = textButton;
    document.querySelector('.search').click();
     };


document.querySelector('.search').onclick = function(){    
    var ul = document.querySelector("ul");
    var searchfield = document.querySelector('.input').value;
    console.log(sessionStorage.getItem('language'));
    // var myExp = new RegExp(searchfield, 'i'); //любое совпадение
    var myExp = new RegExp('^'+searchfield, 'i'); // совпадение по первым буквам
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

           if(sessionStorage.getItem('language') == undefined) //проверка языка страницы
            {
                sessionStorage.setItem('language','rus');

            }

        var response = JSON.parse(xhttp.responseText);
        var output = '';
        var lang = sessionStorage.getItem('language');

        var obj = response[lang];
        var matchs =[];

        for(key in obj){
            if((key.search(myExp) != -1) || (obj[key].place_of_working.search(myExp) != -1)){
                matchs.push(key);
            }
        }
        matchs.forEach((el)=>{output +='<li><a href=\'#\'>'+ obj[el].name +'</a></li>'});  // добавить генерацию ссылки на режиссера
        
        if(matchs.length == 0){
            switch (sessionStorage.getItem('language')) {
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
