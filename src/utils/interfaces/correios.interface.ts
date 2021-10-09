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
	tipo: string;
	dtHrCriado: string;
	descricao: string;
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

export interface CorreiosResponse {
	codObjeto: string;
	tipoPostal: TipoPostal;
	dtPrevista: string;
	modalidade: string;
	eventos: Event[];
	situacao: string;
	autoDeclaracao: boolean;
	encargoImportacao: boolean;
	percorridaCarteiro: boolean;
	bloqueioObjeto: boolean;
	arEletronico: boolean;
	redis: boolean;
}

export interface CorreiosError {
	erro: string;
	mensagem: string;
}
