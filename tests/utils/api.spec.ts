import { fetchObject, isError } from '../../src/utils';
import axios from 'axios';


describe('Função isError', function() {
	it('deve retornar os erros dos correios', function() {
		const data = {
			erro: 'erro',
			mensagem: 'mensagem',
		};
		const result = isError(data);
		expect(result).toEqual(true);
	});
	it('deve retornar falso quando o erro enviado não for definido', function() {
		const data = {
			erro: undefined,
			mensagem: 'mensagem',
		};
		const result = isError(data);
		expect(result).toEqual(false);
	});
});

describe('Função fetchObject', function() {
	jest.mock('axios');
	const makeCorreiosResponse = (mockedResponse: object) => {
		axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: mockedResponse }));
	};

	it('deve retornar os valores corretos da api dos correios', async () => {
		const mockedResponse = {
			codObjeto: 'codObjeto',
			tipoPostal:
				{
					sigla: 'sigla',
					descricao: 'descricao',
					categoria: 'categoria',
				},
			dtPrevista: 'dtPrevista',
			modalidade: 'modalidade',
			eventos: [],
			situacao: 'situacao',
			autoDeclaracao: true,
			encargoImportacao: true,
			percorridaCarteiro: true,
			bloqueioObjeto: true,
			arEletronico: true,
			redis: true,
		};
		makeCorreiosResponse(mockedResponse);
		const result = await fetchObject('123');
		expect(result).toBe(mockedResponse);
	});
});
