import React from 'react';
import { ContainerForm, ContainerSignup, Input } from './styled';
import useForm from '../../hooks/useForm';

export default function Signup() {
    const { form, onChangeInputs, cleanFilds } = useForm({
        nomeUsuario: '',
        email: '',
        senha: '',
        confirmaSenha: '',
    });

    const enviarCadastro = (e) => {
        e.preventDefault();
        if (form.senha === form.confirmaSenha) {
            console.log(
                form.nomeUsuario,
                form.email,
                form.senha,
                form.confirmaSenha
            );
            cleanFilds();
            alert('Usuário cadastrado');
        } else {
            alert('Senhas não conferem');
        }
    };

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor="nome">Nome de usuario:</label>
                <Input
                    name="nomeUsuario"
                    id="nome"
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                    required
                />
                <label htmlFor="email">Email:</label>
                <Input
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                    required
                />
                <label htmlFor="senha">Senha:</label>
                <Input
                    name="senha"
                    id="senha"
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                    required
                />
                <label htmlFor="confirma-senha">Confirmação de senha:</label>
                <Input
                    name="confirmaSenha"
                    id="confirma-senha"
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    );
}
