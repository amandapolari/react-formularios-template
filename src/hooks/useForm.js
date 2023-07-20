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
