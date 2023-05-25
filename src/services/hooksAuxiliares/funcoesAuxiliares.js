export const useFuncoesAuxiliares = () => {
    const patternData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    const validarCPF = (cpf) => {
        cpf = cpf?.replace(/[^\d]+/g, '')
        if (cpf === '' || typeof cpf === "undefined") return true
        if (cpf.length !== 11 ||
            cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999")
            return false
        let add = 0
        let rev = 0
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf?.charAt(i)) * (10 - i)
        rev = 11 - (add % 11)
        if (rev === 10 || rev === 11)
            rev = 0
        if (rev !== parseInt(cpf?.charAt(9)))
            return false

        add = 0
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf?.charAt(i)) * (11 - i)
        rev = 11 - (add % 11)
        if (rev === 10 || rev === 11)
            rev = 0
        if (rev !== parseInt(cpf?.charAt(10)))
            return false
        return true
    }

    function diferencaAnos(dataInicial) {
        let dataFinal = new Date();
        let dataInicialObj = new Date(dataInicial);

        let anoInicial = dataInicialObj.getFullYear();
        let anoFinal = dataFinal.getFullYear();
        let diferencaAnos = anoFinal - anoInicial;

        return diferencaAnos;
    }

    const formataDataBanco = data => {
        if (data === null || typeof data === "undefined") return
        let dataArray = data?.split("/")
        return `${dataArray[2]}-${dataArray[1]}-${dataArray[0]}`
    }
    const formataDataBack = data => {
        if (data === null || typeof data === "undefined") return
        let dataArray = data?.split("/")
        return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
    }

    function dataAtualFormatada() {
        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero. Se não colocar da erro.
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    const formataDataFront = data => {
        if (data === null || typeof data === "undefined") return
        let dataArray = data?.split("T")[0]?.split("-")
        return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
    }

    const tirarMascara = (texto) => {
        if (texto === null || typeof texto === "undefined") return
        return texto?.replace(/[^\d]+/g, '')
    }

    const gerarFiltro = filtro => {
        filtro = filtro?.join("&")
        return (filtro) ? (`?${filtro}`) : ""
    }

    const dataMenorIgualAtual = data => {
        if (!data) return true
        const split = data?.split('/')

        const dataFormatada = new Date(split[1] + "/" + split[0] + "/" + split[2])
        const dataCurrente = new Date()

        return (dataFormatada < dataCurrente)
    }

    const dataMenorIgual = (dataMenor, dataMaior) => {
        if (!dataMenor || !dataMaior) {
            return false
        }

        const splitMenor = dataMenor?.split('/')
        const splitMaior = dataMaior?.split('/')

        const dataMenorFormatada = new Date(splitMenor[1] + "/" + splitMenor[0] + "/" + splitMenor[2])
        const dataMaiorFormatada = new Date(splitMaior[1] + "/" + splitMaior[0] + "/" + splitMaior[2])

        return (dataMenorFormatada <= dataMaiorFormatada)
    }

    const dataMaiorIgualAtual = data => {
        if (!data) return true
        const split = data?.split('/')

        const dataFormatada = new Date(split[1] + "/" + split[0] + "/" + split[2])
        const dataCurrente = new Date()
        return (dataFormatada >= dataCurrente)
    }

    const dataMaiorIgual = (dataMenor, dataMaior) => {
        if (!dataMenor || !dataMaior) {
            return false
        }
        const splitMenor = dataMenor?.split('/')
        const splitMaior = dataMaior?.split('/')

        const dataMenorFormatada = new Date(splitMenor[1] + "/" + splitMenor[0] + "/" + splitMenor[2])
        const dataMaiorFormatada = new Date(splitMaior[1] + "/" + splitMaior[0] + "/" + splitMaior[2])

        return (dataMenorFormatada >= dataMaiorFormatada)
    }

    const formataCPF = (cpf) => {
        cpf = cpf?.replace(/[^\d]/g, "");
        return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    const formataTelefone = (telefone) => {
        telefone = telefone?.replace(/[^\d]/g, "");
        return telefone?.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    /**
     * Verifica a condicional e retorna o valor informado.
     * 
     * @param {*} condition 
     * @param {*} value 
     * @returns 
     */
    const getIf = (condition, value) => {
        return condition ? value : null
    }

    /**
     * Verifica a condicional e retorna os valores especificados.
     * 
     * @param {*} condition 
     * @param {*} valueCondition 
     * @param {*} valueNotCondition 
     * @returns 
     */
    const getIfElse = (condition = null, valueCondition = null, valueNotCondition = null) => {
        return condition ? valueCondition : valueNotCondition
    }

    const validaTipoArquivo = (arquivo, tiposValidos) => {
        const tipoDoArquivo = arquivo?.type?.split("/")[1].toLowerCase()
        const tiposArray = tiposValidos.split("|")

        var isValid = false
        tiposArray.forEach(function (tipoValido) {
            if (tipoValido === tipoDoArquivo) {
                isValid = true
                return
            }
        })

        return isValid
    }

    const fileToBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

    const dataAtual = () => {

        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    const dataHora = (data) => {
        data = data?.replace(/[^\d]/g, "");
        return data?.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$3/$2/$1 $4:$5:$6");
    }

    const dataFront = (data) => {
        var dt = new Date(data)
        var dia = dt.getDate().toString();
        var diaF = (dia.length == 1) ? '0' + dia : dia;
        var mes = (dt.getMonth() + 1).toString();
        var mesF = (mes.length == 1) ? '0' + mes : mes;
        var anoF = dt.getFullYear();

        return diaF + "/" + mesF + "/" + anoF;
    }
    const dataFrontN = (dateString) => {
        const date = new Date(dateString);

        // Obtém as partes da data
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);

        // Retorna a data no formato "yyyy-mm-dd hh:mm"
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    /**
     * Função que compara duas arrays de objetos e retorna suas diferenças
     * @param otherArray
     * @returns {function(*): boolean}
     */
    const comparer = (otherArray) => {
        return (current) => {
            return otherArray.filter((other) => {
                return parseInt(other.cod_modulo) === parseInt(current.cod_modulo)
            }).length === 0;
        }
    }

    /**
     * Função que faz o loop recursivo caso uma funcionalidade tenha funcionalidades filhas
     * @param arrFuncs
     * @param func
     * @returns {*}
     */
    const loopFuncFilha = (arrFuncs, func) => {
        func.forEach((funcFilha) => {
            if (!arrFuncs.includes(funcFilha.cod_funcionalidade)) {
                arrFuncs.push(funcFilha.cod_funcionalidade)
            }
            if (funcFilha.funcionalidades_filhas !== null) {
                loopFuncFilha(arrFuncs, funcFilha.funcionalidades_filhas.data)
            }
        })
        return arrFuncs
    }

    const loadArrFunction = (diff) => {
        let arrFuncs = [];

        if (diff[0].funcionalidades !== null) {
            diff[0].funcionalidades.data.forEach((func) => {
                if (!arrFuncs.includes(func.cod_funcionalidade)) {
                    arrFuncs.push(func.cod_funcionalidade)
                }
                if (func.funcionalidades_filhas !== null) {
                    arrFuncs = loopFuncFilha(arrFuncs, func.funcionalidades_filhas.data)
                }
            })
        }

        return arrFuncs;
    };

    const loadArrFuncFinal = (arrFuncs, funcionalidades) => {
        let arrFuncFinal = [];

        if (funcionalidades.length > 0) {
            funcionalidades.forEach((func) => {
                if (arrFuncs.includes(func)) {
                    arrFuncFinal.push(funcionalidades.indexOf(func))
                }
            })
        }

        return arrFuncFinal;
    }

    const loadArrExpandedFinal = (arrFuncs, funcionalidades, expanded) => {
        let arrExpandedFinal = [];

        if (funcionalidades.length > 0) {
            expanded.forEach((func) => {
                if (arrFuncs.includes(func)) {
                    arrExpandedFinal.push(expanded.indexOf(func))
                }
            })
        }

        return arrExpandedFinal;
    }

    /**
     * Função que verifica se um módulo foi excluído no onChange, caso sim, remover as funcionalidades desse módulo da state de funcionalidades
     * @param modulo
     */
    const verificaModuloExcluido = (modulo, perfil, funcionalidades, setFuncionalidades, expanded, setExpanded) => {

        let atual = modulo
        let old = perfil?.modulos
        var onlyInAtual = atual.filter(comparer(old))
        var onlyInOld = old.filter(comparer(atual))
        let diff = onlyInAtual.concat(onlyInOld)

        if (atual < old) {

            let arrFuncs = loadArrFunction(diff);
            let arrFuncFinal = loadArrFuncFinal(arrFuncs, funcionalidades);
            let arrExpandedFinal = loadArrExpandedFinal(arrFuncs, funcionalidades, expanded);

            for (var i = arrFuncFinal.length - 1; i >= 0; i--) {
                funcionalidades.splice(arrFuncFinal[i], 1)
                setFuncionalidades(funcionalidades)
            }

            for (var i = arrExpandedFinal.length - 1; i >= 0; i--) {
                expanded.splice(arrExpandedFinal[i], 1)
                setExpanded(expanded)
            }
        }
    }

    const trataNomeUsuario = (nome) => {
        if (!nome) return true

        let n = nome.substring(0, nome.length - 1);
        let arr = n.split(" ");

        if (arr.length > 1)
            return true;

        return null;
    }

    const formataCIDIC = (cidic) => {

        cidic = cidic?.replace(/(\d{5})(\d{6})(\d{4})(\d{2})(\w{1})(\d{2})(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})(\d{4})(\w{1})/, "$1.$2/$3-$4.$5.$6.$7/$8/$9.$10/$11/$12.$13");
        return cidic
    }

    const formataCIDICNovo = (cidic) => {

        let numero = cidic;
        return numero.substr(0, 5) + '.' + numero.substr(5, 6) + '/' + numero.substr(11, 4) + '-' + numero.substr(14, 2) + '.' + numero.substr(17, 1) + '.' +
            numero.substr(18, 2) + '.' + numero.substr(20, 2) + '/' + numero.substr(22, 4) + '.' + numero.substr(26, 2) + '/' + numero.substr(28, 2) + '/' +
            numero.substr(30, 4) + '.' + numero.substr(34, 1);

    }

    const removeMascaraCIDIC = (cidic) => {
        if (cidic.length === 49) {
            cidic = cidic.replace(".", "")
                .replace("/", "")
                .replace("-", "")
                .replace(".", "")
                .replace(".", "")
                .replace(".", "")
                .replace("/", "")
                .replace("/", "")
                .replace("/", "")
                .replace(".", "")
                .replace("/", "")
                .replace("/", "")
                .replace(".", "");
        } else {
            cidic = cidic.replace(".", "")
                .replace("/", "")
                .replace("-", "")
                .replace(".", "")
                .replace(".", "")
                .replace(".", "")
                .replace("/", "")
                .replace("/", "")
                .replace("/", "")
                .replace(".", "")
                .replace("/", "")
                .replace("/", "")
                .replace(".", "")
                .replace(".", "")
                .replace("/", "")
                .replace("/", "");
        }
        return cidic
    }

    const listaStatus = (condition) => {
        if (condition === '0') {
            return 'Inativo'
        } else if (condition === '1') {
            return 'Ativo'
        } else if (condition === '2') {
            return 'Pendente'
        } else {
            return null
        }
    }

    function isBusinessDay(date) {
        // Obtém o dia da semana da data fornecida (0-6, sendo 0 o domingo e 6 o sábado)
        var dayOfWeek = new Date(date).getDay();

        // Verifica se o dia da semana é um sábado ou domingo
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return false;
        }

        // Verifica se a data é um feriado
        var holidays = [
            "01-01", // Ano Novo
            "25-12", // Natal
        ];
        var formattedDate = new Date(date).toLocaleDateString("pt-BR", { month: "2-digit", day: "2-digit" });
        if (holidays.includes(formattedDate)) {
            return false;
        }

        // Verifica se o horário atual está dentro do intervalo de 7h às 18h
        var currentHour = new Date(date).getHours();
        if (currentHour < 7 || currentHour >= 18) {
            return false;
        }

        // Se não for um sábado, domingo, feriado ou fora do horário de trabalho, é um dia útil
        return true;
    }

    function validarData(s) {
        if (s) {
            var l = s.length
            var j = 0
            var dt = { 0: '', 1: '', 2: '' }

            // dias de cada mês
            var n = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            // divide a data para o objeto "dt"
            for (var i = 0; i < l; i++) {
                var c = s[i]
                if (c !== '/')
                    dt[j] += c
                else
                    j++
            }

            // converte strings em número
            var d = +dt[0]
            var m = +dt[1]
            var y = +dt[2]

            // atualiza dias do ano bisexto
            n[2] += +(y % 400 === 0 || y % 4 === 0 && y % 100 !== 0)

            // regras de validação
            // mês deve ser entre 1-12 e dia deve ser maior que zero
            if (m < 1 || m > 12 || d < 1) {
                return false
            }
            // valida número de dias do mês
            else if (d > n[m]) {
                return false
            }

            // passou nas validações
            return true
        }
    }

    function contaCaracteres(texto, limite) {
        if (texto.length > limite)
            return true;
    }

    function compareObjects(obj1, obj2) {
        let diff = Object.keys(obj2).reduce((diff, key) => {
            if (obj1[key] === obj2[key]) return diff
            return {
                ...diff,
                [key]: obj2[key]
            }
        }, {})

        return diff;
    }

    function iniciaisNome(fullName) {
        const token = '.';
        const separator = ' ';
        const names = removePrepositions(fullName).split(separator);
        const firstName = names[0];
        let surnames = '';
        names
            .filter((name, index) => index)
            .map(name => surnames += `${separator}${name.charAt()}${token}`);
        return `${firstName.substr(0, 1) + '.'}${surnames.toUpperCase()}`;
    }

    function removePrepositions(fullName) {
        return fullName.replace(/\ dos|\ das|\ dos|\ da|\ das|\ de|\ d\'/gi, '');
    }

    function calculaQtdeAnos(dt1, dt2) {
        let dat_slip1 = dt1.split('/');
        let dat_slip2 = dt2.split('/');
        let ano1 = parseInt(dat_slip1[2]);
        let ano2 = parseInt(dat_slip2[2]);

        return ano2 - ano1;
    }

    function formatHorarios(horarios) {
        let horarioString = "";
        for (const [key, value] of Object.entries(horarios)) {
            if (value !== "") {
                horarioString += `${key}: ${value} `;
            }
        }
        return horarioString.trim();
    }

    return {
        dataFrontN,
        dataMaiorIgual,
        dataAtualFormatada,
        patternData,
        validarCPF,
        formataDataBanco,
        formataDataBack,
        formataDataFront,
        tirarMascara,
        gerarFiltro,
        dataMenorIgualAtual,
        dataMaiorIgualAtual,
        dataMenorIgual,
        dataMaiorIgual,
        formataCPF,
        formataTelefone,
        validaTipoArquivo,
        fileToBase64,
        dataAtual,
        getIfElse,
        getIf,
        verificaModuloExcluido,
        trataNomeUsuario,
        formataCIDIC,
        formataCIDICNovo,
        removeMascaraCIDIC,
        listaStatus,
        dataHora,
        dataFront,
        isBusinessDay,
        validarData,
        contaCaracteres,
        compareObjects,
        iniciaisNome,
        calculaQtdeAnos,
        formatHorarios
    }
}
