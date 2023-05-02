const title = document.querySelectorAll(".Title div")
const form = document.querySelectorAll(".Form4 form")
const signup = document.querySelector(".signup_link p")
const login = document.querySelector(".login_link p")
const Form = document.querySelector(".Form3")

signup.addEventListener("click", () => {
    title[0].style.display = "none";
    title[1].style.display = "block";
    form[0].style.display = "none";
    form[1].style.display = "block";
    Form.style.marginTop = "100px";
})

login.addEventListener("click", () => {
    title[1].style.display = "none";
    title[0].style.display = "block";
    form[1].style.display = "none";
    form[0].style.display = "block";
    Form.style.marginTop = "200px"
})

const submit = document.getElementById("submit_login")
submit.addEventListener('click', () => {
    window.location.href = '/Home/Home.html'
})