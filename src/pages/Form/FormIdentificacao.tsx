import React from 'react'
import { Formik } from 'formik';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import InputCpf from '../../ui/Input/InputCPF.jsx'

import { usePaises } from '../../services/data/paises.js';
import { useFormularioSchema } from './FormularioSchema.js';
import InputPadrao from '../../ui/Input/InputPadrao.jsx';

interface formValues {
  pais: string,
  identificacao: string,
  sexo: string,
  nadar: string,
}

const CampoIdentificacao = (props: any) => {
  const { values, setFieldValue } = props.formik;
  switch (values.identificacao) {
    case 'CPF':
      return (
        <InputCpf
          value={values.cpf}
          setFieldValue={setFieldValue}
          required={true}
          name="cpf"
          placeholder="Preencha o CPF"
        />
      );
    case 'RG':
      return (
        <InputPadrao
          value={values.rg}
          setFieldValue={setFieldValue}
          required={true}
          name="rg"
          placeholder="Preencha o RG"
        />
      )
    case 'Passaporte':
      return (
        <InputPadrao
          value={values.passaporte}
          setFieldValue={setFieldValue}
          required={true}
          name="passaporte"
          placeholder="Preencha o Passaporte"
        />
      )
    default:
      return null;
  }
};

const FormIdentificacao = (props: any) => {
  const { etapa, formik } = props;
  const { handleChange, values, setFieldValue, setFieldTouched, errors, touched } = formik;

  const paises = usePaises();
  const { formularioInicial, formularioSchema } = useFormularioSchema();
  const formInicial: formValues = formularioInicial

  const nextEtapa = () => {
    etapa.onNext();
  }

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="pais">
          <Form.Label>Nacionalidade</Form.Label>
          <Form.Select
            aria-label="Selecione o país:"
            name="pais"
            value={values.pais || ''}
            onChange={handleChange}
          >
            <option>Selecione o país:</option>
            {paises.map((pais) => (
              <option key={pais.ordem} value={pais.nome}>{pais.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="identificacao">
          <Form.Label>Identificação</Form.Label>
          <Form.Select
            aria-label="identificacao"
            name="identificacao"
            value={values.identificacao}
            onChange={handleChange}>
            <option>Selecione uma opção</option>
            <option value="CPF">CPF</option>
            <option value="RG">RG</option>
            <option value="Passaporte">Passaporte</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId={values.identificacao}>
          <Form.Label variant="primary">{values.identificacao}</Form.Label>
          <CampoIdentificacao
            formik={{
              values: values,
              errors: errors,
              touched: touched,
              setFieldValue: setFieldValue,
            }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="nome">
          <Form.Label variant="primary">Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o Nome completo"
            onChange={handleChange}
            name="nome" />
        </Form.Group>
        <Form.Group as={Col} controlId="telefone">
          <Form.Label variant="primary">Telefone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Insira o Telefone"
            onChange={handleChange}
            name="telefone" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label variant="primary">E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Insira o Endereço de E-mail"
            onChange={handleChange}
            name="email" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="dtNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            placeholder="01/01/2001"
            onChange={handleChange}
            name="dtNascimento"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="sexo">
          <Form.Label>Sexo</Form.Label>
          <Form.Select
            aria-label="sexo"
            name="sexo"
            value={values.sexo}
            onChange={handleChange}>
            <option value="Não Informado">Não Informado</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="peso">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            placeholder="0,00"
            onChange={handleChange}
            name="peso" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="Altura">
          <Form.Label>Altura</Form.Label>
          <Form.Control
            placeholder="0,00"
            onChange={handleChange}
            name="altura" />
        </Form.Group>
        <Form.Group as={Col} controlId="Sabe Nadar?">
          <Form.Label>Sabe Nadar?</Form.Label>
          <Form.Select
            aria-label="nadar"
            name="nadar"
            value={values.nadar}
            onChange={handleChange}>
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
            <option value="Razoável">Razoável</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="paisResidencia">
          <Form.Label>Residência</Form.Label>
          <Form.Select
            aria-label="Selecione o país:"
            name="paisResidencia"
            value={values.paisResidencia || ''}
            onChange={handleChange}
          >
            <option>Selecione o país:</option>
            {paises.map((pais) => (
              <option key={pais.ordem} value={pais.nome}>{pais.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="ufResidencia">
          <Form.Label>UF</Form.Label>
          <Form.Control 
          />
        </Form.Group>
        <Form.Group as={Col} controlId="cidadeResidencia">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={nextEtapa}>
        Submit
      </Button>
    </Form>
  );
}

export default FormIdentificacao