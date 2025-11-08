const button = document.querySelector("button");
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        const li = document.createElement('li');
        const btn_del = document.createElement('button');

        li.textContent = input.value;
        btn_del.textContent = "❌";
        btn_del.setAttribute("aria-label", "Delete Chapter");

        li.append(btn_del);
        list.append(li);

        btn_del.addEventListener('click', () => {
            list.removeChild(li);
            input.value = '';
            input.focus();
        });

        input.value = '';
        input.focus();
    }
});