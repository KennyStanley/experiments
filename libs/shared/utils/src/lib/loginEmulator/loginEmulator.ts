interface loginProps {
    username: string
    password: string
}

export async function login({ username, password }: loginProps) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (username === 'kenny' && password === 'pass') {
                resolve()
            } else {
                reject()
            }
        }, 1000)
    })
}