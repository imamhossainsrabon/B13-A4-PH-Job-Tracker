const p = document.querySelectorAll('.text')

const addElement = document.getElementById('add')
const removeElement = document.getElementById('remove')

addElement.addEventListener('click', function () {
    p[0].classList.remove('hidden')
})


removeElement.addEventListener('click', function () {
    p[0].classList.add('hidden')
})



console.log('Bangladesh zindabad');
console.log('Bangladesh zindabad');
console.log('Bangladesh zindabad');

console.clear()

