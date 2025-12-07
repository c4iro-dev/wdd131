let counter = document.querySelector('.review-ct');
let countNum = localStorage.getItem('numReviews-ls');

counter.insertAdjacentHTML('beforeend', countNum);