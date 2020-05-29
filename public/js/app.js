const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('.location')
const messageTwo = document.querySelector('.forecast')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()

    const location = search.value

    messageOne.innerText = 'Loading...'
    messageTwo.innerHTML = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.innerText = data.error
            } else {
                messageOne.innerText = data.location
                messageTwo.innerText = data.forecast
            }

            search.value = ''
        })
    })
})