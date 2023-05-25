import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFuncoesAuxiliares } from '../../services/hooksAuxiliares/funcoesAuxiliares';

const MySwal = withReactContent(Swal);

const InputCpf = ({ value, setFieldValue, required, name, ...rest }) => {
    const { validarCPF } = useFuncoesAuxiliares();
    const [valor, setValor] = useState(value || '');

    useEffect(() => {
        setValor(value || '');
    }, [value]);

    const handleValidarCpf = (event) => {
        const value = event.target.value.replace(/[^\d]+/g, '');
        if (value.length === 11) {
            if (value === '00000000000' && required) {
                return;
            }
        }
        if (!validarCPF(value)) {
            setValor('');
            MySwal.fire({
                title: <p>CPF inválido</p>,
                text: 'Informe um CPF válido',
                icon: 'error'
            });
        }
    };

    const handleChange = (e) => {
        setValor(e.target.value);
        setFieldValue('cpf', e.target.value);
    };

    return (
        <InputMask
            mask="999.999.999-99"
            value={valor}
            onBlur={handleValidarCpf}
            className="form-control border-primary"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            inputMode="numeric"
            onChange={handleChange}
            required={required}
            {...rest}
        />
    );
};

export default InputCpf;
