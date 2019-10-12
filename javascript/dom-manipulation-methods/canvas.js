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