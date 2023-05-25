import * as yup from 'yup'
import { useFuncoesAuxiliares } from './funcoesAuxiliares';

export const useYup = _ => {

    const { validarCPF, dataMenorIgualAtual, validaTipoArquivo, dataMaiorIgualAtual } = useFuncoesAuxiliares();

    yup.addMethod(yup.string, "isValidCPF", function (mensagem) {
        return this.test({
            name: 'isValidCPF',
            message: mensagem || "CPF Inválido",
            test: value => validarCPF(value)
        });
    })

    yup.addMethod(yup.string, "menorIgualAtual", function (mensagem) {
        return this.test({
            name: 'menorIgualAtual',
            message: mensagem || "Data deve ser menor ou igual a data de hoje",
            test: data => dataMenorIgualAtual(data)
        });
    })

    yup.addMethod(yup.mixed, "tipoAnexoValida", function (mensagem, tiposValidos) {
        return this.test({
            name: "tipoAnexoValida",
            message: mensagem || "Formato do arquivo não é suportado",
            test: anexo => validaTipoArquivo(anexo, tiposValidos)
        })
    })

    yup.addMethod(yup.string, "maiorIgualAtual", function (mensagem) {
        return this.test({
            name: 'maiorIgualAtual',
            message: mensagem || "Data deve ser maior ou igual a data de hoje",
            test: data => dataMaiorIgualAtual(data)
        });
    })

    return yup
}
