import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { DadosObjetoFormInterface } from 'data/@types/forms/DadosObjetoFormInterface';
import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { UserContext } from 'data/contexts/UserContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { ObjectService } from 'data/services/ObjectService';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export function useAdicionarObjeto() {
    const router = useRouter();
    const { userData } = useContext(UserContext).userState;
    const formMethods = useForm<DadosObjetoFormInterface>({
        resolver: yupResolver(FormScheemaService.dadosObjeto()),
    });

    const handlePictureSubmit = async (
        objeto: ObjetoInterface,
        imagem_objeto: string
    ) => {
        ApiServiceHateoas(objeto.links, 'definir_imagem_objeto', async req => {
            const data = ObjectService.jsonToFormData({ imagem_objeto });

            await req({
                data,
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        });
    };

    const onSubmit: SubmitHandler<DadosObjetoFormInterface> = async ({
        imagem_objeto,
        ...data
    }) => {
        ApiServiceHateoas(
            userData.links,
            'adicionar_objeto_local',
            async req => {
                try {
                    const objeto = (await req<ObjetoInterface>({ data })).data;

                    if (imagem_objeto)
                        await handlePictureSubmit(objeto, imagem_objeto);

                    router.push('/objetos');
                } catch (e) {
                    const error = e as AxiosError;
                    alert(
                        `Não foi possível cadastrar o objeto (${error.message})`
                    );
                }
            }
        );
    };

    return {
        formMethods,
        onSubmit,
    };
}
