const scrollTopbutton = document.getElementById('scroll-top-button')
const btnForm = document.getElementById('btn-form')
const inputForm = document.getElementById('input-form')
const alertSucces= document.getElementById('alert-succes')
const alertFail = document.getElementById('alert-fail')
const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/


function showAlert(alert){
    if (alert.classList.contains('start-100')) {
        alert.classList.remove('start-100')
        alert.classList.add('start-0')
    }else{
        alert.classList.remove('start-0')
        alert.classList.add('start-100')
    }
}

    
const onScroll = (e) => {
        const scrollposition = e.target.scrollingElement.scrollTop
        scrollTopbutton.classList.toggle('visible', scrollposition > 0)
}
const scrolltoTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
}
    document.addEventListener('scroll', onScroll)
    scrollTopbutton.addEventListener('click', scrolltoTop)
    btnForm.addEventListener('click', e => {
        e.preventDefault()
        
        if(regex.test(inputForm.value)) {
            showAlert(alertSucces)
            setTimeout(() => {
                showAlert(alertSucces)
            },3000)
        }else {
            showAlert(alertFail)
            setTimeout(() => {
                showAlert(alertFail)
            },3000)
        }
})
    
    AOS.init()