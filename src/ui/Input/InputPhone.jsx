import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const InputTelefone = (props) => {
    const { values, nome } = props
    const [value, setValue] = useState(values)

    return (
        <PhoneInput
            international={false}
            defaultCountry="BR"
            name={nome}
            className='form-control border-primary'
            required
            value={value}
            onChange={setValue}
        />
    )

}

export default InputTelefone