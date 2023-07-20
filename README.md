# React e Formulários - Template

## Índice

-   [1. Prática 1](#prática-1)
-   [2. Prática 2](#prática-2)
-   [3. Prática 3](#prática-3)
-   [4. Fixação](#fixação)

## Prática 1

### Enunciado

-   Refatore o código `Login.js`
    -   Unifique os estados usando um objeto chamado `form`. Faça ajustes necessários nos inputs.
    -   Faça a validação dos inputs e os tornem obrigatórios.

### Resolução

-   Objetivo: Ter um **único estado** e uma **única função** que controla as mudanças!

-   Em `Login.js`:

1.  Crio um estado que recebe um objeto, cada chave desse objeto irá referenciar valores dos inputs que eu desejo. Como os inputs que eu desejo controlar são `email` e `password`, o useState recebe um objeto com `email` e `password`:
    ```
    const [form, setForm] = useState({ email: '', password: '' });
    ```
2.  Na propriedade `name` de cada input, eu passo a propriedade criada no useState:
    -   input de email:
        ```
        <Input
            name="email"
        (...)
        />
        ```
    -   input de password:
        ```
        <Input
            name="password"
            (...)
        />
        ```
3.  Altero os `values` dos inputs para receber os valores dos estados:

    -   input de email:

        ```
        (...)
        <Input
            value={form.email}
        (...)
        />
        ```

    -   input de password:
        ```
        (...)
        <Input
            value={form.password}
        (...)
        />
        ```

4.  Agora iremos tornar os campos obrigatórios com `required` e colocar uma validação de e-mail e senha com `type`:

    -   input email:

        ```
        type="email"
        required
        ```

    -   input senha:

        ```
        type="password"
        required
        ```

    -   Para uma validação mais forte, podemos utilizar um `Regex` na propriedade `pattern`

## Prática 2

### Enunciado

-   Unifique as funções de `onChange` para que editem o estado `form` apenas com uma única função chamada `onChangeInputs`. Faça os ajustes necessários nos inputs.

### Resolução

-   Ainda em `Login.js`:

1.  Crio uma função chamada `onChangeInputs`, descontruindo as propriedades dos inputs e setando os forms com seus valores:

    ```
    const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    };
    ```

2.  Agora substitu os `onChanges` por um `onChangeInputs`:

    -   input de email:

        ```
        (...)
        <Input
            onChange={onChangeInputs}
        (...)
        />
        ```

    -   input de password:

        ```
        (...)
        <Input
            onChange={onChangeInputs}
        (...)
        />
        ```

3.  Agora mudo também o console da função `enviaLogin`:

    Disso `console.log({ email, password })` para isso `console.log(form.email, form.password )`

## Prática 3

### Enunciado

-   Crie na pasta `hooks` um arquivo `useForm.js`
-   Extraia os estados e a lógica do `onchangeInputs` e crie um custom hook `useForm` dentro do arquivo `useForm.js`
-   Consuma o `useForm` no `Login.js`, substituindo a lógica do `onChangeInputs`. Faça os ajustes necessários nos inputs

### Resolução

-   Em `hooks`

1. Criei um arquivo `useForm.js` e dentro desse arquivo coloquei uma função chamada `useForm`. Dentro dela inseri a lógica criada anteriormente, com algumas alterações para que seja mais genérica:

    ```
    import { useState } from 'react';

    const useForm = (inicialState) => {
        const [form, setForm] = useState(inicialState);

        const onChangeInputs = (event) => {
            const { name, value } = event.target;
            setForm({ ...form, [name]: value });
        };

        const cleanFilds = () => {
            setForm(inicialState);
        };

        return { form, onChangeInputs, cleanFilds };
    };
    export default useForm;
    ```

-   Em `Login.js` e faço as adaptações:

    ```
    const { form, onChangeInputs, cleanFilds } = useForm({
        email: '',
        password: '',
    });

    const enviaLogin = (e) => {
        e.preventDefault();
        // console.log(form.email, form.password);
        // console.log(form);
        cleanFilds();
    };
    ```

## Fixação

### Enunciado

Refatore o `Signup.js`

1. Adicione a propriedade name de cada input, de acordo com o que está no formulário.

2. Trate os inputs deste componente com `type` e `pattern` quando necessário e torne-os obrigatórios.

3. Consuma o hook `useForm` para controlar os inputs.

4. Complete a função `enviarCadastro` fazendo com que o formulário não seja resetado e imprima o form.

### Resolução

-   Em `Signup.js`:

1.  Criei um estado que recebe um objeto, cada chave desse objeto irá referenciar valores dos inputs que eu desejo. Como os inputs que eu desejo controlar são `nomeUsuario`, `email`, `senha` e `confirmaSenha`, o useState recebe um objeto com `nomeUsuario`, `email`, `senha` e `confirmaSenha`:

    ```
    const { form, onChangeInputs, cleanFilds } = useState({ nomeUsuario: '', email: '', senha: '', confirmaSenha: '', });
    ```

2.  Modifico a função `enviarCadastro`:

    ```
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
    ```

3.  Altero as propriedades necessárias dos inputs

    -   input nomeUsuario:

        ```
        <Input
            name="nomeUsuario"
            id="nome"
            value={form.nomeUsuario}
            onChange={onChangeInputs}
            placeholder="username"
            required
        />
        ```

    -   input email:

        ```
        <Input
            name="email"
            id="email"
            value={form.email}
            onChange={onChangeInputs}
            placeholder="nome@email.com"
            required
        />
        ```

    -   input senha:

        ```
        <Input
            name="senha"
            id="senha"
            value={form.senha}
            onChange={onChangeInputs}
            placeholder="Crie sua senha"
            required
        />
        ```

    -   input confirmaSenha:

        ```
        <Input
            name="confirmaSenha"
            id="confirma-senha"
            value={form.confirmaSenha}
            onChange={onChangeInputs}
            placeholder="Confirme a senha"
            required
        />
        ```
