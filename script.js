'use strict';

const collectionBooks = document.querySelectorAll('.books'),
        elemsBooks = document.querySelectorAll('.book'),
        deleteAdvertisment = document.querySelectorAll('.adv'),
        head = document.getElementsByTagName('a')[4],
        elemsBook = document.getElementsByTagName('li');
       
        

console.log(elemsBooks);

collectionBooks[0].append(elemsBooks[2]);
collectionBooks[0].prepend(elemsBooks[1]);
elemsBooks[4].after(elemsBooks[3]);

head.textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

elemsBook[16].before(elemsBook[8]);
elemsBook[9].before(elemsBook[11]);
elemsBook[10].before(elemsBook[13]);

elemsBook[38].before(elemsBook[45]);
elemsBook[41].after(elemsBook[39]);
elemsBook[44].after(elemsBook[42]);

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
console.log(newElem);
elemsBook[55].after(newElem);

console.log(elemsBook);

deleteAdvertisment[0].remove();
