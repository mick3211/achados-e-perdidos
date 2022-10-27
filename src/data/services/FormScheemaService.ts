import * as yup from 'yup';

export const FormScheemaService = {
    login() {
        return yup
            .object()
            .shape({
                email: yup
                    .string()
                    .email('Insira um email válido')
                    .required('Insira um email'),
                password: yup.string().required('Insira a sua senha'),
            })
            .defined();
    },
    dadosLocal() {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .required('Por favor, insira o nome do local')
                    .min(3, 'Nome muito curto')
                    .max(255, 'O nome não deve exceder 255 caracteres'),
                endereco: yup
                    .string()
                    .required('Por favor, insira o endereço do local')
                    .min(3, 'Endereco muito curto')
                    .max(255, 'O endereco não deve exceder 255 caracteres'),
                contato: yup
                    .string()
                    .required('Por favor, insira uma forma de contato')
                    .min(3, 'Contato muito curto')
                    .max(255, 'O contato não deve exceder 255 caracteres'),
                descricao: yup
                    .string()
                    .max(255, 'A descrição não deve exceder 255 caracteres')
                    .notRequired()
                    .nullable(),
            })
            .defined();
    },
    dadosUsuario() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    nome: yup
                        .string()
                        .required('Por favor, insira o nome do administrador')
                        .min(3, 'Nome muito curto')
                        .max(255, 'O nome não deve exceder 255 caracteres'),
                    email: yup
                        .string()
                        .required('Insira um email')
                        .email('Insira um email válido'),
                    password: yup
                        .string()
                        .required('Insira uma senha')
                        .min(8, 'A senha deve conter, no mínimo, 8 caracteres')
                        .max(255, 'a senha não deve exceder 255 caracteres'),
                    password_confirmation: yup
                        .string()
                        .oneOf(
                            [yup.ref('password'), null],
                            'As senhas devem ser iguais'
                        ),
                }),
            })
            .defined();
    },
    dadosObjeto() {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .required('Insira o nome do objeto')
                    .min(3, 'Nome muito curto')
                    .max(255, 'O nome não deve exceder 255 caracteres'),
                descricao: yup
                    .string()
                    .required('Insira a descrição do objeto')
                    .min(3, 'Nome muito curto')
                    .max(255, 'A descrição não deve exceder 255 caracteres'),
            })
            .defined();
    },
};
