const elements = {
    username: id('username'),
    password: id('password'),
    submit: id('submit')
}

const formElements = [username, password]

elements.submit.addEventListener('click', () => {
    resetClasses(formElements)
    setTimeout(() => {
        if (!validateForm()) {
            return
        }

        sendForm()
    }, 1)
})

const validateForm = () => {
    removeMessage('notifyUsername')
    removeMessage('notifyPassword')

    return [
        verifyUsername(elements.username),
        verifyPassword(elements.password)
    ].every(v => v)
}

const sendForm = () => {
    console.log("Sending login request to server...")

    axios.post('/api/login', {
        username: elements.username.value,
        password: elements.password.value
    }).then((response) => {
        const data = response.data

        if (data.status === StatusCode.LOGIN_DOESNT_EXIST) {
            updateServerMessage('Login does not exist')
            return
        }

        if (data.status === StatusCode.LOGIN_WRONG_PASSWORD) {
            updateServerMessage('Wrong password')
            return
        }

        if (data.status === StatusCode.LOGIN_SUCCESS) {
            updateServerMessage('Login successful!')
        }
    }).catch((error) => {
        console.log(error)
    })
}