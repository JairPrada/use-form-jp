import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);
    const cambiarValor = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return [formState, cambiarValor];
}
export default useForm;