// Tag names ("p", "div")
// Class names (".my-class")
// IDs ("#my-id")
// Attribute selectors ( "[type='text']")
// Combinators ( ".parent > .child")



const fullBody = document.getElementById('full-body');

const bodyText = document.querySelector('h1');

const paragraphText = document.querySelector('p');


// const buttonClick = document.getElementById('click-me');


// buttonClick.addEventListener('mouseover', () => {
//     console.log('mouseover event working..');
//     bodyText.innerHTML = 'Mouse is over the Button';
//     //alert('Button is clicked');
// });

// buttonClick.addEventListener('mouseout', () => {
//     console.log('mouseout event working..');
//     bodyText.innerHTML = 'Mouse is out of the Button';
//     //alert('Button is clicked');
// });

function addEvent(selector, event, handler) {
    document.querySelector(selector).addEventListener(event, handler);
}


addEvent('#click-me', 'mouseover', function () {
    // console.log('full-body');
    bodyText.innerHTML = 'Mouse is over the Button';
    fullBody.style.backgroundColor = 'green';
});

addEvent('#click-me', 'mouseout', function () {
    // console.log('full-body');
    bodyText.innerHTML = 'Mouse is out the Button';
    fullBody.style.backgroundColor = 'yellow';
});

addEvent('#full-body', 'scroll', function () {
    console.log('scrolling pressing');
});

