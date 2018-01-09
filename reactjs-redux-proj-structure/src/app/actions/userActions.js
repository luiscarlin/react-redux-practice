export function setName(name) {
    let namePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 2000)
    })

    return {
        type: "SET_NAME",
        payload: namePromise
    }
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}
