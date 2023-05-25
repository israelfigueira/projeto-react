import { useYup } from '../../services/hooksAuxiliares/yupConfig'

export const useFormularioSchema = () => {

    const yup = useYup()

    const formularioInicial = {
        pais: '',
        identificacao: '',
        nome: '',
        telefone: '',
        sexo: '',
        nadar: '',
        cpf: '',
        rg: '',
        passaporte: ''
    }

    const formularioSchema = yup.object({
        // uf: yup.string().required("UF é obrigatório"),
        // qtdEmpregados: yup.number("Preenchimento de números é obrigatório").required('A quantidade de empregados é obrigatória').positive().integer(),
        // classEstabelecimento: yup.string().required("A seleção do campo é obrigatório"),
        // qtdDimensionamento: yup.number().required('A quantidade de empregados para dimensionamento é obrigatória').positive().integer(),
        // atividadeEconomica: yup.string().required("Selecione uma Atividade Economica"),
        // servicoSeguranca: yup.string().required("Selecione um Serviço de Segurança"),
        // servicoMedicina: yup.string().required("Selecione um Serviço de Medicina"),
        // profissionais: yup.array()
        //     .min(1, 'Preencha ao menos um profissional')
        //     .required('Campo obrigatório'),
    });

    return {
        formularioInicial,
        formularioSchema,
    }
}


