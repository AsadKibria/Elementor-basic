//Get elements
const section = document.querySelector('section');
const text = document.getElementById('text');
const heading = document.getElementById('heading');
const h1 = document.querySelector('section h1');
const p = document.querySelector('section p');
const align = document.querySelectorAll('.align');
const size = document.getElementById('size');
const color = document.getElementById('color');
const ff = document.getElementById('ff');


// console.log(text.value)

//Funcetions

text.onchange = () => {
    if (text.value == 'paragraph') {
       
        heading.onkeyup = () => {
            p.innerHTML = heading.value;
            p.style.fontSize = '60px'
            p.style.padding = '15px'
        }
        align.forEach(item => {
            item.onchange = () => {
                p.style.textAlign = item.value;
            }
        })
        
        size.oninput = () => {
            p.style.fontSize = size.value + 'px';
        }
        color.oninput = () => {
            p.style.color = color.value;
        }
        
        ff.onchange = () => {
            p.style.fontFamily = ff.value;
        }
    } else if(text.value == 'heading') {
        
        heading.onkeyup = () => {
            h1.innerHTML = heading.value;
            h1.style.fontSize = '18px'
            h1.style.padding = '28px'
        }
        align.forEach(item => {
            item.onchange = () => {
                h1.style.textAlign = item.value;
            }
        })
        
        size.oninput = () => {
            h1.style.fontSize = size.value + 'px';
        }
        color.oninput = () => {
            h1.style.color = color.value;
        }
        
        ff.onchange = () => {
            h1.style.fontFamily = ff.value;
        }
    } else if (text.value == 'bg') {
        color.oninput = () => {
            section.style.backgroundColor = color.value;
            section.style.borderRadius = '15px';
        }
    }
    
}



// heading.onkeyup = () => {
//     h1.innerHTML = heading.value;
//     h1.style.fontSize = '20px'
// }

// align.forEach(item => {
//     item.onchange = () => {
//         h1.style.textAlign = item.value;
//     }
// })

// size.oninput = () => {
//     h1.style.fontSize = size.value + 'px';
// }
// color.oninput = () => {
//     h1.style.color = color.value;
// }

// ff.onchange = () => {
//     h1.style.fontFamily = ff.value;
// }