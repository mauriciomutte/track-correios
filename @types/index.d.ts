export interface Endereco {
	identificacao?: string;
	principal?: string;
	numero?: string;
	logradouro?: string;
	complemento?: string;
	dddFixo?: string;
	foneFixo?: string;
	bairro?: string;
	cidade: string;
	uf: string;
	codigoPostal?: string;
	siglaPais?: string;
}

export interface Unidade {
	nome: string;
	codSro: string;
	codMcu: string;
	tipo: string;
	endereco: Endereco;
}

export const enum Rota {
	Contexto = 'CONTEXTO',
	Normal = 'NORMAL',
	Retirada = 'RETIRADA',
}

export interface Event {
	codigo: string;
	descricao: string;
	dtHrCriado: string;
	tipo: string;
	unidade: Unidade;
	unidadeDestino: Unidade | null;
	comentario?: string;
	icone: string;
	descricaoFrontEnd: string;
	finalizador: 'S' | 'N';
	rota: Rota;
	descricaoWeb: string;
	detalhe: string;
	cached: boolean;
}

export interface TipoPostal {
	sigla: string;
	descricao: string;
	categoria: string;
}

export interface ObjectItem {
	codObjeto: string;
	eventos: Event[];
	modalidade: string;
	tipoPostal: TipoPostal;
	habilitaAutoDeclaracao: boolean;
	permiteEncargoImportacao: boolean;
	habilitaPercorridaCarteiro: boolean;
	bloqueioObjeto: boolean;
	possuiLocker: boolean;
	habilitaLocker: boolean;
	habilitaCrowdshipping: boolean;
}

export interface CorreiosResponse {
	objetos: ObjectItem[];
	quantidade: number;
	resultado: string;
	versao: string;
}

export interface CorreiosError {
	erro: string;
	mensagem: string;
}
