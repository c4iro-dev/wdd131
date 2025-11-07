const button = document.querySelector("button");
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
const li = document.createElement('li');
const btn_del = document.createElement('button');

li.textContent = input.value;
btn_del.textContent = "❌";
li.append(btn_del);
list.append(li);
button.setAttribute("aria-label", "Close");
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        console.log("Nice.");
    }
});