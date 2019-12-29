const adminLogin = 'admin@gmail.com';
let adminPassword = 'AdminPass';
const userLogin = 'user@gmail.com';
let userPassword = 'UserPass';
const minEmailLenght = 5;
const minPassLenght = 6;
let emailInput = prompt('Enter your e-mail:');
if (emailInput === '' || emailInput === null) {
    alert('Canceled.');
} else if (emailInput.length < minEmailLenght) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (emailInput === 'user@gmail.com' || emailInput === 'admin@gmail.com') {
    let passInput = prompt('Enter your password:');
    if (passInput === '' || passInput === null) {
        alert('Canceled.');
    } else if (emailInput === adminLogin && passInput === adminPassword) {
        let changePass = confirm('Do you want to change your password?');
        if (changePass) {
            let oldPass = prompt('Enter your old password:');
            if (oldPass === adminPassword) {
                let newPass = prompt('Enter your new password:');
                if (newPass.length < minPassLenght) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let confirmPass = prompt('Enter your new password again:');
                    if (newPass !== confirmPass) {
                        alert('You wrote the wrong password.')
                    } else {
                        adminPassword = newPass;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Canceled.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else if (emailInput === userLogin && passInput === userPassword) {
        let changePass = confirm('Do you want to change your password?');
        if (changePass) {
            let oldPass = prompt('Enter your old password:');
            if (oldPass === userPassword) {
                let newPass = prompt('Enter your new password:');
                if (newPass.length < minPassLenght) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let confirmPass = prompt('Enter your new password again:');
                    if (newPass !== confirmPass) {
                        alert('You wrote the wrong password.')
                    } else {
                        userPassword = newPass;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Canceled.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
