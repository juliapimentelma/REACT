class Login {
    user = [
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

    constructor() {}

    login() {
        const userEmail = document.getElementById('userEmail').value;
        const password = document.getElementById('password').value;

        let userRegistered = false;
        for (let i = 0; i < this.user.length; i++) {
            const currentUser = this.user[i];
            if (currentUser.email === userEmail && currentUser.senha === password) {
                alert("Usuário logado com sucesso!");
                userRegistered = true;
                break;
            }
        }
        if (!userRegistered) {
            alert("Credenciais inválidas!");
        }
    }
}

const loginObj = new Login();