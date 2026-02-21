import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password: pass }); // ✅ proper object
        setUsername("");
        setPass("");
    }

    return (
        <div>
        <h1>log in </h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input 
                type="password" 
                placeholder="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login;