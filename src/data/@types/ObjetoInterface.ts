import type { ApiLinkInterface } from './LinkInterface';

export interface ObjetoInterface {
    id: number;
    nome: string;
    descricao: string;
    entregue: boolean;
    data_cadastro: string;
    imagem?: string;
    links: ApiLinkInterface[];
}
