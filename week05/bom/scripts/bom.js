const button = document.querySelector("button");
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
let chaptersArray = getChapterList();
if (!Array.isArray(chaptersArray)) chaptersArray = [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    const newChapter = input.value.trim();
    if (newChapter !== '') {
        displayList(newChapter);
        chaptersArray.push(newChapter);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function setChapterList() {
    localStorage.setItem('bomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('bomList'));
}

function deleteChapter(chapter) {
    const trimmedChapter = chapter.trim();
    chaptersArray = chaptersArray.filter((item) => item.trim() !== trimmedChapter);
    setChapterList();
}

function displayList(item) {        
    let li = document.createElement('li');
    let btn_del = document.createElement('button');

    li.dataset.chapter = item;
    li.textContent = item;

    btn_del.textContent = '❌';
    btn_del.classList.add('delete');
    li.append(btn_del);
    list.append(li);

    btn_del.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.dataset.chapter);
        input.focus();
    });

    input.value = '';
    input.focus();

}