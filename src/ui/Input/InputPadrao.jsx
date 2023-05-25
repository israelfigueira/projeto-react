import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFuncoesAuxiliares } from '../../services/hooksAuxiliares/funcoesAuxiliares';
import Form from 'react-bootstrap/Form';

const MySwal = withReactContent(Swal);

const InputPadrao = ({ value, setFieldValue, required, name, ...rest }) => {
    const [valor, setValor] = useState(value || '');

    useEffect(() => {
        setValor(value || '');
    }, [value]);

    const handleChange = (e) => {
        setValor(e.target.value);
        setFieldValue(name, e.target.value);
    };

    return (
        <>
            <Form.Control
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
                {...rest}
            />
        </>
    );
};

export default InputPadrao;
