// Your code goes here
let link = document.querySelector('.nav-link')

// link.addEventListener('click', (event) =>
// {
//     alert('This link does not go anywhere. Try another one.');
// })

document.querySelectorAll('.nav-link').forEach( al => {
    al.addEventListener('click', () => {
        alert('This link does not go anywhere. Try another one.');
    })
})
let pgph = document.querySelector('p')

document.querySelectorAll('p').forEach( noBus => {
    noBus.addEventListener('mouseenter', () => {
        event.target.backgroundColor = 'black';
        event.target.textContent = "there is no bus!";
    })
})
document.querySelectorAll('p').forEach( noBus2 => {
    noBus2.addEventListener('mouseleave', () => {
        event.target.backgroundColor = 'white';
    })
})
// pgph.addEventListener('mouseenter', (event) => {
//     event.target.style.backgroundColor = 'black';
//     pgph.textContent = 'There is no bus!'
// })
// pgph.addEventListener('mouseleave', (event) => {
//     event.target.style.backgroundColor = 'white';
// })

const bus = document.querySelector('.intro img');

bus.addEventListener('dblclick', () => {
    bus.style.display = 'none'
}); 

const page = document.querySelector('html')

page.addEventListener('keydown', () => {
    page.style.display = 'none'
})
page.addEventListener('mouseout', () => {
    page.style.display = 'inline'
})

const subTitle = document.querySelector('h2')
const title = document.querySelector('h1')
title.addEventListener('mousemove', () => {
    title.textContent = 'Turn Back Now!';
})
page.addEventListener('keypress', () => {
    title.textContent = 'There is no bus!'
})
page.addEventListener('mouseup', () => {
    subTitle.textContent = 'The bus is not here, you are stranded.'
})

const button = document.querySelector('.btn')
button.addEventListener('mousedown', () => {
    button.textContent = "No Escape!"
})

// document.querySelectorAll('.btn').forEach( changeBtn => {
//     button.addEventListener('mousedown', () =>{
//         event.target.textContent = "No Escape!";
//         event.target.backgroundColor = 'red';
//         event.target.color = 'black';
//     })
// })

document.querySelectorAll('a').forEach( noEsc => {
    noEsc.addEventListener('click', () => {
        event.preventDefault();
        console.log('No Escape!')
    })
})

document.querySelectorAll('btn').forEach( noEsc2 => {
    noEsc2.addEventListener('click', () => {
        event.preventDefault();
        console.log('No Escape!')
    })
})