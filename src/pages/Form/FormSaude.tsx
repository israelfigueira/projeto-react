import React from 'react'
import { Button } from 'react-bootstrap'

const FormSaude = (props: any) => {
  const { formik, etapa } = props

  const nextEtapa = () => {
    etapa.onNext();
  }

  return (
    <div>FormSaude
      <Button onClick={nextEtapa}>Próximo</Button>
      <Button onClick={etapa.onBack}>Voltar</Button>
    </div>
  )
}

export default FormSaude