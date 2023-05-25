import React from 'react'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import Etapas from './Etapas.tsx'
import FormIdentificacao from './FormIdentificacao'
import FormSaude from './FormSaude'
import FormTermoAceite from './FormTermoAceite'
import { useFormularioSchema } from './FormularioSchema'

interface formValues {
  pais: string,
  identificacao: string,
  sexo: string,
  nadar: string,
}

const FormEtapas = () => {
  const [etapa, setEtapa] = useState(0)
  const navigate = useNavigate();

  const { formularioInicial, formularioSchema } = useFormularioSchema();
  const formInicial: formValues = formularioInicial

  /**
     * Constante responsável por gerenciar os estados das etapas.
     */
  const stageControl = {

    /**
     * Etapa atual do cadastro do usuário.
     */
    etapa: etapa,

    /**
     * Avança para próxima etapa.
     */
    onNext: () => {
      setEtapa(etapa + 1)
    },

    /**
     * Retorna para etapa anterior.
     */
    onBack: () => {
      setEtapa(etapa - 1)
    }
  }

  /**
   * Apresenta o conteudo do usuário de acordo com a etapa 
   * atual.
   */
  const CurrentStage = (props: any) => {
    switch (etapa) {
      case 0:
        return <FormIdentificacao
          etapa={stageControl}
          formik={props.formik}
        />
      case 1:
        return <FormSaude
          etapa={stageControl}
          formik={props.formik}
        />
      case 2:
        return <FormTermoAceite
          etapa={stageControl}
          formik={props.formik}
        />
      default:
        throw new Error('Sem mais passos')
    }
  }

  const handleSubmit = (values) => {
    alert('Submitando')
  }

  return (
    <Formik
      initialValues={formInicial}
      validationSchema={formularioSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, setFieldValue, setFieldTouched }) => {
        console.log(values, 'values');
        return (
          <>
            <Etapas
              etapaAtiva={etapa}
              etapas={[
                'Identificação',
                'Dados Saúde',
                'Termo Aceite'
              ]}
            />
            <CurrentStage
              formik={{
                values: values,
                errors: errors,
                touched: touched,
                handleChange: handleChange,
                setFieldValue: setFieldValue,
                setFieldTouched: setFieldTouched,
              }}
            />
          </>
        )
      }}
    </Formik>
  )
}

export default FormEtapas