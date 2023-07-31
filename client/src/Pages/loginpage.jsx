import { useState } from "react"

export default function LoginPage()
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
async function login(ev)
{
    ev.preventDefault();
    await fetch ('http://localhost:5173/login',
    { method: 'POST',
        body:JSON.stringify({username,password}),
        header:{'content:type':'application/json'},

    })
}
    return (
       <form action="" className="login" onSubmit={login}>
                <h2>Login</h2>
        <input type="text" placeholder="username" value={username} onChange={ev=> setUsername(ev.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
        <button>Login</button>
       </form>
    )
}