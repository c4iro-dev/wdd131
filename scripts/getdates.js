const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `<span class="highlight">Last Modification: ` + document.lastModified + `</span>`;
