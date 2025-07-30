import { useState } from "react"
import './Login.css';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isValid = () => {
        return username != '' && password != ''
    };

    function handleUsernameInput(e) {
        setUsername(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const credentials = {
            username,
            password
        }

        try {
            setIsLoading(true);
            await simulateHttpRequest(credentials)
            alert('You are in')
        } catch (error) {
            alert('Authentication failed')
        } finally {
            setIsLoading(false);
        }

    }

    async function simulateHttpRequest(credentials) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (credentials.username === credentials.password) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 1000);
        });
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="column" >
                <input type="text" value={username} onInput={handleUsernameInput} placeholder="Username"></input>
                <input type="password" value={password} onInput={handlePasswordInput} placeholder="Password"></input>
                <input type="submit" disabled={!isValid()} value="Login" />
            </form>
            {
                isLoading && <div className="overlay">login...</div>
            }
        </>
    )
}

export default Login