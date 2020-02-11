// Your code goes here
// Declare variables for tags; variables can be any name, but they must be consistent
const body = document.querySelector('body');
const nav = document.getElementsByClassName('nav-link');
const pgph = document.getElementsByTagName('p');
const bus = document.querySelector('img');
const header1 = document.querySelectorAll('h1');
const page = document.querySelector('html')
const button = document.querySelectorAll('.btn')
const link = document.querySelectorAll('.nav-link')

// Use events to trigger changes in the DOM

// click event
document.querySelectorAll('a').forEach( prvdft => {
    prvdft.addEventListener('click', () => {
        event.preventDefault();
        alert('prevented default')
    })
})

// double click event
bus.addEventListener('dblclick', () => {
    bus.src = 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
})

// mouseover event
document.querySelectorAll('p').forEach( chgtxt => {
    chgtxt.addEventListener('mouseover', () => {
        event.target.textContent = 'some text';
    })
})

// mouseleave event
document.querySelectorAll('.btn').forEach( chgtxt => {
    chgtxt.addEventListener('mouseleave', () => {
        event.target.textContent = 'button';
    })
})

// mouseenter event
document.querySelectorAll('.nav-link').forEach( chgtxt => {
    chgtxt.addEventListener('mouseenter', () => {
        event.target.textContent = 'link'
    })
})

// keyup event
page.addEventListener('keyup', () => {
     alert('You have triggered a keyup event.')
})

// keypress event
page.addEventListener('keypress', () => {
    bus.style.display = 'none';
})

// pointerover event
document.querySelectorAll('h2').forEach( chgtxt => {
    chgtxt.addEventListener('pointerover', () => {
        event.target.textContent = 'a header'
    })
})

// pointereenter event
document.querySelectorAll('h4').forEach( chgtxt => {
    chgtxt.addEventListener('pointerenter', () => {
        event.target.textContent = 'a smaller header'
        })
})

// event
page.addEventListener('mouseout', () => {
    page.style.backgroundColor = 'lightblue';
})