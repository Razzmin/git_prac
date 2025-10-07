const workBtn = document.querySelector('.intro-btn');
const gifContainer = document.getElementById('gif-container');

workBtn.addEventListener('click', () => {
    if(gifContainer.style.display === 'none') {
        gifContainer.style.display = 'block';

        document.body.style.backgroundColor = '#D6A99D';
        document.querySelector('.intro-text').textContent = 'enjoy the dance!';
    }
    else {
        gifContainer.style.display = 'none';
        document.body.style.backgroundColor = '#A7C1A8';
        document.querySelector('.intro-greeting').textContent = 'Hello';
    }
});