
//актеры
let actorsinfo = [
    ['Кристен Стюарт','Белла Свон'],
    ['Роберт Паттинсон','Эдвард Каллен'],
    ['Питер Фачинелли','Карлайл Каллен'],
    ['Тейлор Лотнер','Джейкоб Блэк'],
    ['Билли Бёрк','Чарли Свон'],
    ['Эшли Грин','Элис Каллен'],
    ['Джексон Рэтбоун','Джаспер Хейл'],
    ['Анна Кендрик','Джессика Стэнли'],
    ['Рашель Лефевр','Виктория']
];

const slides = document.getElementById('slides');

const slide1 = document.createElement('div');
slide1.className = 'slide';
slide1.id = 'slide';

for (let i = 0; i < 5; i++) {
    const slideitem = document.createElement('div');
    slideitem.className = 'slideitem';

    slideitem.innerHTML = `
    <img src="actors/Bg (${i}).png">
    `;

    const slidetext= document.createElement('div');
    slidetext.className = 'slidetext';
    
    slidetext.innerHTML = `
    <h4>${actorsinfo[i][0]}</h4>
    <p>${actorsinfo[i][1]}</p>
    `;

    slideitem.appendChild(slidetext);

    slide1.appendChild(slideitem);
}
slides.appendChild(slide1);

const slide2 = document.createElement('div');
slide2.className = 'slide';
slide2.id = 'slide';

for (let i = 5; i < actorsinfo.length; i++) {
    const slideitem = document.createElement('div');
    slideitem.className = 'slideitem';

    slideitem.innerHTML = `
    <img src="actors/Bg (${i}).png">
    `;

    const slidetext= document.createElement('div');
    slidetext.className = 'slidetext';
    
    slidetext.innerHTML = `
    <h4>${actorsinfo[i][0]}</h4>
    <p>${actorsinfo[i][1]}</p>
    `;

    slideitem.appendChild(slidetext);

    slide2.appendChild(slideitem);
}
const morebtn = document.createElement('button');
morebtn.className = 'moreactors';
morebtn.id = 'moreactors';
morebtn.textContent = 'Узнать больше';
slide2.appendChild(morebtn);

slides.appendChild(slide2);

const slideCount = document.querySelectorAll('.slide').length;
const nextbtn = document.getElementById('next');
const reternbtn = document.getElementById('retern');
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    } 
    if (index >= slideCount) {
        index = 0;
    }

    currentIndex = index;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

reternbtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextbtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

goToSlide(0);

//описание
const showmore = document.getElementById('showmore');
const description = document.getElementById('description');
let ismore = false;

function changeDiscription(){
    ismore = !ismore;
    if(ismore){
        description.textContent = "Первая часть культовой саги о Белле Свон, Эдварде Каллене, их друзьях и соплеменниках — вампирах из захолустного городка Америки. В начале фильма Белла простая старшеклассница, только что сменившая школу. Здесь она пытается жить нормальной жизнью, но её внимание упорно привлекают Каллены — приёмные братья и сёстры из причудливого семейства. О них идут дикие слухи, однако всё же Белле хочется общаться с ними, а не с заурядными одноклассниками. Особенно девушку притягивает её ровесник Эдвард, красивый, но отстранённый юноша. Сперва Эдвард активно избегает Беллу, затем пытается познакомиться, а потом... спасает героине жизнь, остановив грузовик на полном ходу. Белла понимает: парень из её школы обладает паранормальными способностями. В конце концов, ей удаётся добиться от Эдварда признания. Он, его братья, сёстры и приёмные родители — настоящие вампиры. Раскрыть тщательно оберегаемую тайну юношу заставила любовь к Белле, связанная с особым запахом её крови. Девушка также одержима Эдвардом, но быть с ним вместе ей удастся, только лишь если она откажется от человеческой судьбы и сама станет вампиром. Дело осложняется тем, что приятель детства Беллы принадлежит к клану оборотней, ненавидящих семейство Калленов.";
        showmore.textContent = "Скрыть";
        description.appendChild(showmore);
    }
    else{
        description.textContent = "Первая часть культовой саги о Белле Свон, Эдварде Каллене, их друзьях и соплеменниках — вампирах из захолустного городка Америки. В начале фильма Белла простая старшеклассница, только что сменившая школу. Здесь она пытается жить нормальной жизнью, но её внимание упорно привлекают Каллены — приёмные братья и сёстры из причудливого семейства. О них идут дикие слухи, однако всё же Белле хочется общаться с...";
        showmore.textContent = "Ещё";
        description.appendChild(showmore);
    }
}

showmore.addEventListener('click', () =>{
    changeDiscription();
});