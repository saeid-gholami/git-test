const isLogin = (username) => {
    if (username === "Saeid") {
        return true
    } else {
        return false
    }
}

const register = (userID) => {
    return true
}

const getMe = (userToken) => {
    return false
}

const getTickets = (userID) => {
    return true
}

const testInputs = (inputValue) => {
    if (inputValue) {
        return true
    } else {
        return false
    }
}
