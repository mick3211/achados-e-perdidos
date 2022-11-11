import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { EntregaObjetoForm } from 'data/@types/forms/EntregaObjetoForm';
import { ObjetosContext } from 'data/contexts/ObjetosContext';
import { snackbarContext } from 'data/contexts/SnackbarContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormScheemaService } from 'data/services/FormScheemaService';
import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export function useEntregaObjeto() {
    const router = useRouter();
    const objetoId = router.query.id as string;
    const { objetos } = useContext(ObjetosContext);
    const { setSnackMessage } = useContext(snackbarContext);
    const objeto = useMemo(
        () => objetos?.find(objeto => objeto.id === Number(objetoId)),
        [objetos, objetoId]
    );
    const isLoading = objetos !== undefined && objeto === undefined;
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EntregaObjetoForm>({
        resolver: yupResolver(FormScheemaService.entregaObjeto()),
    });

    const onSubmit: SubmitHandler<EntregaObjetoForm> = async data => {
        if (objeto) {
            data.dono_cpf = data.dono_cpf.replaceAll(/\D/g, '');
            ApiServiceHateoas(
                objeto?.links,
                'definir_dono_objeto',
                async req => {
                    try {
                        await req({ data });
                        setSnackMessage({
                            message: 'Entrega informada com sucesso',
                            severity: 'success',
                        });
                        router.replace('/objetos');
                    } catch (err) {
                        const error = err as AxiosError;
                        setSnackMessage({
                            message: `Ocorreu um erro, tente novamente (${error.message})`,
                            severity: 'error',
                        });
                    }
                }
            );
        }
    };

    return {
        objeto,
        isLoading,
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting,
    };
}
