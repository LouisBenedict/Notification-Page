const notification = document.querySelectorAll('.notification');
const numbers = document.getElementById('number');
const markRead = document.getElementById('mark-read');

numbers.innerText = notification.length;

const mark = () => {
    const notification = document.querySelectorAll('.notification');
    const numbers = document.getElementById('number');
    const markRead = document.getElementById('mark-read');


    console.log('Marked as read');
    numbers.innerText = 0;
}

markRead.addEventListener('click', mark);

// const markRead = () => {
//     const markRead = document.getElementById('mark-read');

//     markRead.addEventListener('click', () => {
//         const notifications = document.getElementsByClassName('notification');

//         for (let i = 0; i < notifications.length; i++) {
//             notifications[i].classList.add('read');
//         }
//     });
// }