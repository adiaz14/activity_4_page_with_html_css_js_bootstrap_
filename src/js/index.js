/*Array of objects -registred users-*/
const REGISTRED_USERS = []
/*Function to registre new users*/
function registreUser() {

    //Get txt data
    let nameTxt = document.getElementById("name").value
    let lastNameTxt = document.getElementById("lastName").value
    let phoneTxt = document.getElementById("phone").value
    let identificationTxt = document.getElementById("identification").value
    let passwordTxt = document.getElementById("password").value

    //Check inputs
    if (!nameTxt.trim()) {
        alert("Please insert name")
        return
    }
    if (!lastNameTxt.trim()) {
        alert("Please insert lastname")
        return
    }
    if (!phoneTxt.trim()) {
        alert("Please insert phone")
        return
    }
    if (!identificationTxt.trim()) {
        alert("Please insert identification")
        return
    }
    if (!passwordTxt.trim()) {
        alert("Please insert password")
        return
    }

    if (identificationTxt.trim().length < 8) {
        alert("Identification number must have at least 8 digits")
        return
    }
    if (phoneTxt.trim().length < 10) {
        alert("Phone number must have at least 10 digits")
        return
    }
    if (passwordTxt.trim().length < 8) {
        alert("Password must have at least 10 characters")
        return
    }

    //Render data in table
    let table = document.getElementById("cuerpotabla")
    table.innerHTML += `<tr><td>${nameTxt}</td><td>${lastNameTxt}</td><td>${phoneTxt}</td><td>${identificationTxt}</td><td>${passwordTxt}</td></tr>`

    //Add new objects
    REGISTRED_USERS.push({ name: nameTxt, lastName: lastNameTxt, phone: phoneTxt, identification: identificationTxt, password: passwordTxt });
    alert("User registred successfully!")
    clearInputs();
}

/*Function to clear form*/
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("identification").value = "";
    document.getElementById("password").value = "";
}
