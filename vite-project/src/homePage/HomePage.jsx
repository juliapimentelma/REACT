import React from "react";
import { use, useState } from "react";
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import BananaPudding from "../imagens/Banana_Pudding.png";
import Chocolate_Cake from "../imagens/Chocolate_Cake.png";
import Poppyseed_Muffin from "../imagens/Poppyseed_Muffin.png";
import Seafoam_Pudding from "../imagens/Seafoam_Pudding.png";
import Strange_Bun from "../imagens/Strange_Bun.png"

const produtosIniciais = [
    { id: 440, nome: "Banana Pudding", preco: 260.00, imagem: BananaPudding },
    { id: 887, nome: "Chocolate Cake", preco: 200.00, imagem: Chocolate_Cake },
    { id: 888, nome: "Poppyseed Muffin", preco: 250.00, imagem: Poppyseed_Muffin },
    { id: 333, nome: "Seafoam Pudding", preco: 300.00, imagem: Seafoam_Pudding },
    { id: 555, nome: "Strange Bun", preco: 225.00, imagem: Strange_Bun }
];

const Home = () => {
    const [produtos, setProdutos] = useState(produtosIniciais);

    const removerProduto = (id) => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
    };

    return (
        <div className="home-page">
            <h1><strong>LISTA DE PRODUTOS</strong></h1>
            <div className="produto-container">
                <div className="todos-produtos">
                    {produtos.length > 0 ? (
                        <ul>
                            {produtos.map((produto) => (
                                <li
                                key={produto.id} className="produto"
                                >
                                        <img src={produto.imagem}></img>
                                        <div className="produto-detalhes">
                                            <h3>{produto.nome}</h3>
                                            Preço: R$ {produto.preco.toFixed(2)}<br/>
                                            Código: {produto. id} 
                                        </div>
                                        <i
                                        style={{ cursor: "pointer"}}
                                        className="fas fa-trash-alt"
                                        onClick={() => removerProduto(produto.id)}
                                        ></i>

                                    {/* <button
                                        onClick={() => removerProduto(produto.id)}
                                    >
                                        
                                    </button> */}
                                </li>
                    ))}
                </ul>
            ): (
                <p>Nenhum produto disponível</p>
            )}
            </div>
        </div>
        </div>
    );
};

export default Home;