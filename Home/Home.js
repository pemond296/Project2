

const extend = document.querySelector(".name")
const button = document.querySelector(".button-wrapper")

const resetShowing = () =>{
    const expanded = button.getAttribute('aria-expanded') === 'true'||false
    button.setAttribute('aria-expanded', !expanded)
    if(expanded === true){
        button.style.display = 'block'
    }
    else button.style.display = 'none'
}

extend.addEventListener('click', () =>{
    resetShowing()
})

const logout = document.querySelector(".logout")
logout.addEventListener('click', () =>{
    window.location.href = '/index.html'
})

const bar = document.querySelectorAll(".sidebar div")
const form = document.querySelectorAll(".form3 div")

const resetOnShowing = () =>{
    bar.forEach((value, index) => {
        value.classList.remove('showing');
            if(form[index]) form[index].classList.remove('seeing');
    })
}

bar.forEach((value, index) =>  {
   value.addEventListener('click', () => {
        resetOnShowing()
        value.classList.add("showing")
        if(form[index]) form[index].classList.add("seeing")
    })
})

const setting = document.querySelector(".setting")
setting.addEventListener('click', () =>{
    resetOnShowing()
    bar[4].classList.add('showing')
    form[4].classList.add('seeing')
    resetShowing()
})

