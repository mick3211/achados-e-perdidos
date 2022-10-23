export interface CadastroFormInterface extends DadosLocalFormInterface {
    usuario: DadosUsuarioFormInterface;
}

export interface DadosLocalFormInterface {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local?: string;
}

export interface DadosUsuarioFormInterface {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}
