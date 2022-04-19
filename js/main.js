document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm")
  const emailInput = document.getElementById("email")
  const errorText = document.getElementById("errorText")

  emailForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("checking")
    if (!ValidateEmail(emailInput.value)) {
      errorText.classList.remove("hidden")
    } else {
      errorText.classList.add("hidden")
    }
  })
})

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}
