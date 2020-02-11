// Your code goes here
// Declare variables for tags; variables can be any name, but they must be consistent
const body = document.querySelector('body');
const nav = document.getElementsByClassName('nav-link');
const pgph = document.getElementsByTagName('p');
const bus = document.querySelector('img');
const header = document.querySelectorAll('h2');


// Use events to trigger changes in the DOM

// click event
bus.addEventListener('click', () => {
    bus.src = 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
})

// mouseover event
document.querySelectorAll('p').forEach( chgtxt => {
    chgtxt.addEventListener('mouseover', () => {
        event.target.textContent = 'some text';
    })
})

// mouseleave event
document.querySelectorAll('h2').forEach( chgclr => {
    chgclr.addEventListener('mouseleave', () => {
        event.target.color = 'pink';
    })
})

// body.addEventListener('keydown', () => {
//     nav.style.backgroundColor = 'pink';
// })

