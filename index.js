const btnForm = document.getElementById('btn-form')
const inputForm = document.getElementById('input-form')
const alertSucces= document.getElementById('alert-succes')
const alertFail = document.getElementById('alert-fail')
const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

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

function showAlert(alert){
    if (alert.classList.contains('start-50')) {
        alert.classList.remove('start-50')
        alert.classList.add('start-100')
    }else{
        alert.classList.remove('start-100')
        alert.classList.add('start-50')
    }
}

AOS.init()