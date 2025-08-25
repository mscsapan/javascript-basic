
const bodyText = document.getElementById('body');


const buttonClick = document.getElementById('click-me');


buttonClick.addEventListener('mouseover', () => {
    console.log('mouseover event working..');
    bodyText.innerHTML = 'Mouse is over the Button';
    //alert('Button is clicked');
});

buttonClick.addEventListener('mouseout', () => {
    console.log('mouseout event working..');
    bodyText.innerHTML = 'Mouse is out of the Button';
    //alert('Button is clicked');
});

