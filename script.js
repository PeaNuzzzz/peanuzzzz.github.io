var a = 'lmao'

if (a == 'lmao') {
    console.log('TIN JUAN')
} else {
    console.log('TIN GIA')
}

const circle = document.querySelector('.circle');
const imageWidth = circle.offsetWidth;
const imageHeight = circle.offsetHeight;

document.addEventListener('mousemove', (event) => {
  circle.style.left = event.clientX - imageWidth / 2 + 'px';
  circle.style.top = event.clientY - imageHeight / 2 + 'px';
});


