let inverviewList = []
let rejectedList = []

// Counting Selector

const allCount = document.getElementById('allCount')
const interviewCount = document.getElementById('interviewCount')
const rejectedCount = document.getElementById('rejectedCount')
const rightSideAllCount = document.getElementById('jobCount')

// All Cards Selectors
const allCards = document.getElementById('allCards')

// Toggle Button Selectors

const allFilterbtn = document.getElementById('all-filter-btn')
const inerviewFilterbtn = document.getElementById('interview-filter-btn')
const rejectedFilterbtn = document.getElementById('rejected-filter-btn')


function calculateCount() {
    allCount.innerText = allCards.children.length
    rightSideAllCount.innerText = allCards.children.length
    interviewCount.innerText = inverviewList.length
    rejectedCount.innerText = rejectedList.length

}

calculateCount()


function toggleStyle(id) {
    allFilterbtn.classList.add('normal')
    inerviewFilterbtn.classList.add('normal')
    rejectedFilterbtn.classList.add('normal')

    allFilterbtn.classList.remove('active')
    inerviewFilterbtn.classList.remove('active')
    rejectedFilterbtn.classList.remove('active')

    const selected = document.getElementById(id)

    selected.classList.add('active')
    selected.classList.remove('normal')
}


