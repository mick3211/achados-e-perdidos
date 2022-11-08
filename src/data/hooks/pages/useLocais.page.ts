import { LocalInterface } from 'data/@types/LocalInterface';
import { ObjetoInterface } from 'data/@types/ObjetoInterface';
import { ApiService } from 'data/services/ApiService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { mutate } from 'swr';
import { useApi, useApiHateoas } from '../useApi';

export function useLocais() {
    const router = useRouter();
    const localId = router.query.id as string;
    const [local, setLocal] = useState<LocalInterface>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { data: objetos, error: objetosError } = useApiHateoas<
        ObjetoInterface[]
    >(local?.links, 'objetos_local');
    const isLoading =
        objetos === undefined && !objetosError && local !== undefined;

    useEffect(() => {
        (async () => {
            const locais = (
                await ApiService.get<LocalInterface[]>('/api/locais/busca', {
                    params: { id: localId },
                })
            ).data;
            setLocal(locais[0]);
        })();
    }, [localId]);

    useEffect(() => {
        mutate('objetos_local');
    }, [local]);

    return {
        objetos,
        error: objetosError,
        local,
        isLoading,
        isDialogOpen,
        setIsDialogOpen,
    };
}
