document.querySelector('.search').onclick = function(){

    var ul = document.querySelector("ul");
    var searchfield = document.querySelector('.input').value;

    // var myExp = new RegExp(searchfield, 'i'); //любое совпадение
    var myExp = new RegExp('^'+searchfield, 'i'); // совпадение по первым буквам
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

           if(sessionStorage.getItem('language') == undefined) //проверка языка страницы
                {sessionStorage.setItem('language','rus');}

        var response = JSON.parse(xhttp.responseText);
        var output = '';
        var lang = sessionStorage.getItem('language');
        var obj = response[lang];
        var matchs =[];

        for(key in obj){
            if(key.search(myExp) != -1){
                matchs.push(key);
            }
        }
        matchs.forEach((el)=>{output +='<li><a href=\'#\'>'+ obj[el].name +'</a></li>'});      
        if(matchs.length == 0){
            output = '<li>Совпадений не найдено =(</li>';
        }
        document.querySelector("ul").innerHTML = output;        
    }
};
xhttp.open("GET", "../data/filmmakers.json", true);
xhttp.send();
}
