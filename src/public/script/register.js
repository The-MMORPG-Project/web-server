const elements = {
    email: id('email'),
    username: id('username'),
    password: id('password'),
    confirmPassword: id('confirmPassword'),
    submit: id('submit')
}

const formElements = [email, username, password, confirmPassword]

const validateForm = () => {
    removeMessage('notifyEmail')
    removeMessage('notifyUsername')
    removeMessage('notifyPassword')
    removeMessage('notifyPasswordConfirm')

    return [
        verifyEmail(elements.email),
        verifyUsername(elements.username),
        verifyPassword(elements.password),
        verifyConfirmPassword(elements.password, elements.confirmPassword)
    ].every(v => v)
}

const sendForm = () => {
    console.log("Sending register request to server...")

    axios.post('/api/register', {
        username: elements.username.value,
        password: elements.password.value
    }).then((response) => {
        const data = response.data

        if (data.status === StatusCode.REGISTER_ACCOUNT_ALREADY_EXISTS) {
            updateServerMessage('Account already exists')
            return
        }

        if (data.status === StatusCode.REGISTER_USERNAME_INVALID) {
            updateServerMessage('Invalid username')
            return
        }

        if (data.status === StatusCode.REGISTER_PASSWORD_INVALID) {
            updateServerMessage('Invalid password')
            return
        }

        if (data.status === StatusCode.REGISTER_SUCCESS) {
            updateServerMessage('Account registered!')
        }
    }).catch((error) => {
        console.log(error)
    })
}

elements.submit.addEventListener('click', () => {
    resetClasses(formElements)
    setTimeout(() => {
        if (!validateForm()) {
            return
        }

        sendForm()
    }, 1)
})