
function changeLanguage() {
    const but = document.querySelector('li.chooseLang');
    but.addEventListener('click', (event) => {
        if (event.target.id === 'rus') sessionStorage.setItem('language', 'rus');
        else if (event.target.id === 'eng') sessionStorage.setItem('language', 'eng');
        else if (event.target.id === 'bel') sessionStorage.setItem('language', 'by');
        location.reload();
    });
}

changeLanguage();