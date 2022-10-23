import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import type { CadastroFormInterface } from 'data/@types/forms/CadastroFormInterface';
import { ApiService, ApiServiceHateoas } from 'data/services/ApiService';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { LoginService } from 'data/services/LoginService';
import { ObjectService } from 'data/services/ObjectService';
import { SubmitHandler, useForm } from 'react-hook-form';

export function useCadastro() {
    const formMethods = useForm<CadastroFormInterface>({
        resolver: yupResolver(
            FormScheemaService.dadosLocal().concat(
                FormScheemaService.dadosUsuario()
            )
        ),
    });

    const handleCreateAccountError = (error: unknown) => {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 400) {
                formMethods.setError('usuario.email', {
                    message:
                        'Já existe uma conta cadastrada com este endereço de email',
                });
            } else alert('Não foi possível cadastrar ' + `(${error.message})`);
        }
    };

    const uploadPicture = async (data: CadastroFormInterface) => {
        const user = await LoginService.getUser();

        if (user) {
            ApiServiceHateoas(user.links, 'definir_imagem_local', async req => {
                const formData = ObjectService.jsonToFormData({
                    imagem_local: data.imagem_local,
                });
                try {
                    await req<string>({
                        data: formData,
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                } catch (err) {
                    console.log(err);
                }
            });
        }
    };

    const onSubmit: SubmitHandler<CadastroFormInterface> = async data => {
        try {
            await ApiService.post('/api/locais/', data);

            const login = await LoginService.login({
                email: data.usuario.email,
                password: data.usuario.password,
            });

            if (login.success) {
                await uploadPicture(data);
                window.location.reload();
            }
        } catch (err) {
            handleCreateAccountError(err);
        }
    };

    return { formMethods, onSubmit };
}
