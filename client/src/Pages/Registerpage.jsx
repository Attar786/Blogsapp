import { useState } from "react"

export default function RegisterPage()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev)
    {
        ev.preventDefault();
        try{
            await fetch('http://localhost:4000/register',
        {
        method: "POST",
        body: JSON.stringify({username,password}),
        headers:{'Content-type':'application/json'},
})

}

catch (e){
    alert("Registration failed");
}
    return(


        <form action="" className="register" onSubmit={register}>
        <h2>Register</h2>
        <input type="text" placeholder="username" value = {username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="password" value = {password} onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
       </form>
    )
}