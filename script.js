let interviewList = []
let rejectedList = []
let currentStatus = 'all'


// Counting Selector

const allCount = document.getElementById('allCount')
const interviewCount = document.getElementById('interviewCount')
const rejectedCount = document.getElementById('rejectedCount')
const rightSideAllCount = document.getElementById('jobCount')

// All Cards Selectors
const allCards = document.getElementById('allCards')
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')



// Toggle Button Selectors

const allFilterbtn = document.getElementById('all-filter-btn')
const inerviewFilterbtn = document.getElementById('interview-filter-btn')
const rejectedFilterbtn = document.getElementById('rejected-filter-btn')


// Main button

const interviewBtn = document.getElementById('interview-btn')
const rejectedBtn = document.getElementById('rejected-btn')

function calculateCount() {
    allCount.innerText = allCards.children.length
    rightSideAllCount.innerText = allCards.children.length
    interviewCount.innerText = interviewList.length
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
    currentStatus = id

    if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderInterview()
        rightSideAllCount.innerText = interviewList.length
    } else if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        rightSideAllCount.innerText = allCards.children.length

    } else if (id == 'rejected-filter-btn') {
        allCards.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        rightSideAllCount.innerText = rejectedList.length
        renderRejected()

    }

}


mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText
        const designNation = parentNode.querySelector('.designNation').innerText
        const time = parentNode.querySelector('.time').innerText
        const status = parentNode.querySelector('.status').innerText
        const subHeading = parentNode.querySelector('.subHeading').innerText

        parentNode.querySelector('.status').innerText = 'Interviewed'
        parentNode.querySelector('.status').style.color = 'white'
        parentNode.querySelector('.status').style.outline = '1px solid #fff'
        parentNode.querySelector('.status').style.backgroundColor = '#10B981'



        const cardInfo = {
            companyName,
            designNation,
            time,
            status: 'Interviewed',
            subHeading
        }

        const interviewExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!interviewExist) {
            interviewList.push(cardInfo)
        }
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        renderRejected()
        calculateCount()




    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode.parentNode
        const companyName = parentNode.querySelector('.companyName').innerText
        const designNation = parentNode.querySelector('.designNation').innerText
        const time = parentNode.querySelector('.time').innerText
        const status = parentNode.querySelector('.status').innerText
        const subHeading = parentNode.querySelector('.subHeading').innerText

        parentNode.querySelector('.status').innerText = 'Rejected'
        parentNode.querySelector('.status').style.color = 'red'
        parentNode.querySelector('.status').style.outline = '1px solid red'
        parentNode.querySelector('.status').style.backgroundColor = 'white'



        const cardInfo = {
            companyName,
            designNation,
            time,
            status: 'Rejected',
            subHeading
        }

        const RejectedExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!RejectedExist) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        renderInterview()
        calculateCount()




    } else if (event.target.closest('.delete')) {

        const card = event.target.closest('.card')
        const companyName = card.querySelector('.companyName').innerText
        card.remove()
        for (let i = 0; i < allCards.children.length; i++) {
            const child = allCards.children[i]
            const name = child.querySelector('.companyName').innerText.trim()

            if (name === companyName) {
                child.remove()
                break
            }
        }

        interviewList = interviewList.filter(item => item.companyName !== companyName)
        rejectedList = rejectedList.filter(item => item.companyName !== companyName)


        calculateCount()

        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }
        else if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }
    }
})

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = `<div class="first_col">
                    <div>
                        <p class="companyName">${interview.companyName}</p>
                        <p class="designNation">${interview.designNation}</p>
                    </div>
                    <p class="time">${interview.time}</p>
                    <div>
                        <p class="status ${interview.status === 'Interviewed' ? 'status-interviewed' : ''}">
  ${interview.status}
</p>
                        <p class="subHeading">${interview.subHeading}</p>
                    </div>
                    <div>
                        <button id="interview-btn" class="interview-btn">Interview</button>
                        <button id="rejected-btn" class="rejected-btn">Rejected</button>
                    </div>
                </div>
                <!-- Part 2 -->
                <div class="delete">
                    <img src="./images/delete.png" alt="">
                </div>`
        filteredSection.appendChild(div)
    }
}
function renderRejected() {
    filteredSection.innerHTML = ''

    for (let rejected of rejectedList) {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = `<div class="first_col">
                    <div>
                        <p class="companyName">${rejected.companyName}</p>
                        <p class="designNation">${rejected.designNation}</p>
                    </div>
                    <p class="time">${rejected.time}</p>
                    <div>
                        <p class="status ${rejected.status === 'Rejected' ? 'status-rejected' : ''}">
                    ${rejected.status}
                </p>
                        <p class="subHeading">${rejected.subHeading}</p>
                    </div>
                    <div>
                        <button id="interview-btn" class="interview-btn">Interview</button>
                        <button id="rejected-btn" class="rejected-btn">Rejected</button>
                    </div>
                </div>
                <!-- Part 2 -->
                <div class="delete">
                    <img src="./images/delete.png" alt="">
                </div>`
        filteredSection.appendChild(div)
    }
}

