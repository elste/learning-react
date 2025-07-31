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
            const resp = await loginHttpRequest(credentials)
            alert(`You are in with token: ${resp.token}`)
        } catch (error) {
            alert(`Authentication failed: ${error}`)
        } finally {
            setIsLoading(false);
        }
    }

    async function loginHttpRequest(credentials) {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            const data = await response.json();
            const { username, password } = data.json;

            if (username === password) {
                return {token: 'TKN-123456789'}
            }
            throw new Error('Credenziali non valide');

        }
        throw new Error('Errore durante la richiesta di login');


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