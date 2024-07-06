
import { useState } from "react";
import "./Cadastro.css"
import { cadastrar } from "../../services/cadastroService";

const componenteCadastro = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: '',
        cpf: '',
        cep: '',
        cidade: '',
        bairro: '',
        endereco: '',
        complemento: '',
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //chamada de API para enviar dados via POST
        cadastrar(formData);
    };
    return (

        <><form onSubmit={handleSubmit}>
            <div className="container">
                <div className="form-image">
                    <img src="src\assets\SenacXLanches.png" alt="Gon" width="500px" height="500px"></img>
                </div>
                <div className="form">
                    <form action="#">
                        <div className="form-header">
                            <div className="title">
                                <h1>Cadastre-se</h1>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="firstname">Primeiro Nome</label>
                                < input
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    placeholder="Digite seu primeiro nome" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="lastname">Sobrenome</label>
                                <input value={formData.lastname}
                                    onChange={handleChange} id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" ></input>
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Digite seu e-mail" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="number">Celular</label>
                                <input id="number" type="tel" value={formData.number} onChange={handleChange} name="number" placeholder="(xx) xxxx-xxxx" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="password">Senha</label>
                                <input id="password" type="password" value={formData.password} onChange={handleChange} name="password" placeholder="Digite sua senha" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="confirmPassword">Confirme sua Senha</label>
                                <input id="confirmPassword" value={formData.confirmPassword} type="password" onChange={handleChange} name="confirmPassword" placeholder="Digite sua senha novamente" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="CPF">CPF</label>
                                <input id="cpf" type="text" value={formData.cpf} name="cpf" onChange={handleChange} placeholder="Digite seu CPF" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="CEP">CEP</label>
                                <input id="cep" type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="Digite seu CEP" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="cidade">Cidade</label>
                                <input id="cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Digite sua cidade" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="bairro">Bairro</label>
                                <input id="bairro" type="bairro" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Digite seu bairro" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="endereco">Endereço</label>
                                <input id="endereco" type="endereco" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Digite seu Endereço" ></input>
                            </div>

                            <div className="input-box">
                                <label htmlFor="complemento">Complemento</label>
                                <input id="complemento" type="complemento" name="complemento" value={formData.complemento} onChange={handleChange} placeholder="Digite um complemento" ></input>
                            </div>

                        </div>


                        <div className="continue-button">
                            <button type="submit">Continuar</button>
                        </div>


                    </form>
                </div>



            </div>


        </form>
        </>
    );
};

export default componenteCadastro;

//teste