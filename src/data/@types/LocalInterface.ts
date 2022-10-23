import { ApiLinkInterface } from './LinkInterface';
import type { UserInterface } from './UserInterface';

export interface LocalInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao?: string;
    usuario: UserInterface;
    links: ApiLinkInterface[];
}
