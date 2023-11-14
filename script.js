function Validation() {
    let UsernameValidation = document.querySelector("#form2Example11").value.trim(); 
    let Passwordvalidation = document.querySelector("#form2Example22").value.trim(); 

    if (UsernameValidation === "") {
        alert("Please enter a username");
        return;
    }

    if (Passwordvalidation === "") {
        alert("Please enter a password");
        return;
    }
}
