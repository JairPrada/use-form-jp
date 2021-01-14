import { useState } from 'react';

const useForm = ({ initialState }) => {
    const [formState, setFormState] = useState({ initialState });
    const cambiarValor = ({ target }) => {
        setFormState({
            ...initialState,
            [target]: target.value
        })
    }
    return [formState, cambiarValor];
}
module.exports = { useForm }