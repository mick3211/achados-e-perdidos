import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from 'data/contexts/UserContext';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { CadastroFormInterface } from 'data/@types/forms/CadastroFormInterface';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { snackbarContext } from 'data/contexts/SnackbarContext';
import { AxiosError } from 'axios';
import { ObjectService } from 'data/services/ObjectService';
import { LoginService } from 'data/services/LoginService';

export function useAlterarDados() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { userData } = useContext(UserContext).userState;
    const { setSnackMessage } = useContext(snackbarContext);
    const { imagem, links, ...defaultValues } = userData;
    const formMethods = useForm<CadastroFormInterface>({
        defaultValues: {
            ...defaultValues,
        },
        resolver: yupResolver(
            FormScheemaService.dadosLocal().concat(
                FormScheemaService.editarDadosUsuario()
            )
        ),
    });

    const clearData = (data: CadastroFormInterface) => {
        if (data.usuario.password?.length === 0) {
            data.usuario.password = undefined as any;
            data.usuario.password_confirmation = undefined as any;
        }
        return data;
    };

    const SubmitPicture = async (imagem_local: string) => {
        ApiServiceHateoas(userData.links, 'definir_imagem_local', async req => {
            const formData = ObjectService.jsonToFormData({
                imagem_local,
            });
            await req<string>({
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        });
    };

    const SubmitData = async (data: CadastroFormInterface) => {
        ApiServiceHateoas(userData.links, 'atualizar_local', async req => {
            try {
                await req({
                    data,
                });
                setSnackMessage({
                    message: 'Dados alterados com sucesso',
                    severity: 'success',
                });
            } catch (err) {
                const error = err as AxiosError<CadastroFormInterface>;

                if (
                    error.response?.status === 400 &&
                    error.response?.data?.usuario.email[0]
                ) {
                    formMethods.setError('usuario.email', {
                        message: error.response.data.usuario.email[0],
                    });
                } else
                    setSnackMessage({
                        message: `Não foi possível alterar os dados (${error.message})`,
                        severity: 'error',
                    });
            }
        });
    };

    const onSubmit: SubmitHandler<CadastroFormInterface> = async data => {
        const { imagem_local, ...dadosLocal } = clearData(data);

        await SubmitData(dadosLocal);
        if (imagem_local !== undefined) {
            await SubmitPicture(imagem_local);
        }
    };

    const onDeleteAccount = async () => {
        ApiServiceHateoas(userData.links, 'apagar_local', async req => {
            try {
                await req();
                LoginService.logout();
                window.location.reload();
            } catch (err) {
                const error = err as AxiosError;

                setSnackMessage({
                    message: `Não foi possível apagar a sua conta (${error.message})`,
                    severity: 'error',
                });
            }
        });
    };

    return {
        formMethods,
        onSubmit,
        isDialogOpen,
        setIsDialogOpen,
        onDeleteAccount,
    };
}
