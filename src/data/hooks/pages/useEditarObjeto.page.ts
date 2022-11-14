import { yupResolver } from '@hookform/resolvers/yup';
import { DadosObjetoFormInterface } from 'data/@types/forms/DadosObjetoFormInterface';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import { ObjetosContext } from 'data/contexts/ObjetosContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { ObjectService } from 'data/services/ObjectService';
import { AxiosError } from 'axios';
import { mutate } from 'swr';
import { snackbarContext } from 'data/contexts/SnackbarContext';

export function useEditarObjeto() {
    const router = useRouter();
    const objetoId = Number(router.query.id);
    const { objetos } = useContext(ObjetosContext);
    const { setSnackMessage } = useContext(snackbarContext);

    const objetoEditar = useMemo(
        () => objetos?.find(objeto => objeto.id === objetoId),
        [objetos, objetoId]
    );
    const error = objetoEditar === undefined;

    const formMethods = useForm<DadosObjetoFormInterface>({
        resolver: yupResolver(FormScheemaService.dadosObjeto()),
        defaultValues: { ...objetoEditar, imagem_objeto: objetoEditar?.imagem },
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

    const onSubmit: SubmitHandler<DadosObjetoFormInterface> = ({
        imagem_objeto,
        ...data
    }) => {
        if (objetoEditar) {
            ApiServiceHateoas(
                objetoEditar.links,
                'atualizar_objeto',
                async req => {
                    try {
                        const objeto = (await req<ObjetoInterface>({ data }))
                            .data;

                        if (imagem_objeto)
                            await handlePictureSubmit(objeto, imagem_objeto);

                        setSnackMessage({
                            message: 'Objeto editado com sucesso',
                            severity: 'info',
                        });
                        mutate('listar_objetos_local');
                        router.push('/objetos');
                    } catch (err) {
                        const error = err as AxiosError;
                        alert(
                            `Não foi possível atualizar o objeto (${error.message})`
                        );
                    }
                }
            );
        }
    };

    return {
        formMethods,
        error,
        onSubmit,
    };
}
