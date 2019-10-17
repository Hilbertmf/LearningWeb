let paragraphs = document.querySelectorAll('.challenge p');

paragraphs.forEach(paragraph => {
    paragraph.style.color = 'blue';
    if(paragraph.textContent.indexOf('error') !== -1) {
        paragraph.classList.add('error');
        paragraph.style.color = 'red';
    }
    
    if(paragraph.textContent.indexOf('success') !== -1) {
        paragraph.classList.add('success');
        paragraph.style.color = 'green';
    }
});

const caretLink = document.getElementById('caret');
const caret = document.querySelector('#caret i');
let isToggled = false;
caretLink.addEventListener('click', function() {
    if(isToggled) {
        isToggled = false;
        caret.style.cssText -= 'transform: rotate(180deg)';
    }
    else {
        isToggled = true;
        caret.style.cssText += 'transform: rotate(180deg)';
    }
});


