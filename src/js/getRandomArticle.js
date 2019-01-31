import authorObject from '../data/filmmakers.json';

export default function getRandomArticle() {
    const lang = sessionStorage.getItem('language') || 'rus';
    const keys = Object.keys(authorObject[lang]);
    const num = Math.floor(Math.random() * keys.length);
    const article = authorObject[lang][keys[num]];
    return article;
}