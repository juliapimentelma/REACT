import { use, useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";


class Authentication {
    users = [
    {
        nome: "Julia",
        senha: "1234",
        age: 28,
        cpf: "123.456.789-00",
        email: "juliapimentelma@gmail.com",

    },
    {
        nome: "Chunyah",
        senha: "4321",
        age: 30,
        cpf: "987.654.321-00",
        email: "lalalapararara@gmail.com"
    },
    {
        nome: "Julia",
        senha: "5678",
        age: 25,
        cpf: "456.789.123-00",
        email: "julia.pimentel@maisunifacisa.com.br"
    }
    ];
}
const authUsers = new Authentication();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const auth = async (email, password) => {
        // const response = await fetch("http://localhost:3000/login", 
        //     {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ email, password })
        // });
        // console.log(response);
    }
    
    const handleLogin = (e) => {
        e.preventDefault() 

        auth(email, password)
        const usuarioEncontrado = authUsers.users.find(
            (user) => user.email === email && user.senha === password
        )

        if(usuarioEncontrado) {
            alert("Usuário logado com sucesso");
            navigate("/home");
        } else {
            alert("Usuário não encontrado");
        }
    }

    return (
        <div className="login-page">
        <div className="login-container">
            <div className="left-container">
                <h1>Sing in to developer!</h1>
                <div className="icons">
                    <a href="#" className="google"><i className="fab fa-google"></i></a>
                    <a href="#" className="github"><i className="fab fa-github"></i></a>
                    <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="form-container">
                    <h5>Or use your e-mail account.</h5>
                <form onSubmit={() => auth(email, password)}> </form>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="userEmail" name="userEmail" placeholder="User Email" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    
                        <button className="submit-button" type="submit">Login</button>
                    
                </form> 
            </div> 
            </div>
            <div className="right-container">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={() => {}}>Sing Up!</button>
        </div>
    </div>
</div>
    )
};

export default Login;