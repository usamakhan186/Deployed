
const adminAuth = async (usern,pass) => {
    let username = 'admin'
    let password = 'admin'

    if (username === usern && password === pass) {

    }
    else {
        console.log('auth are wrong')
    }
    return (
        <>
        <form>
            <input type='text' placeholder="username" /> <br />
            <input type='password' placeholder="username" /> <br />
            <button>Login</button>
        </form>
        </>
    )
} 