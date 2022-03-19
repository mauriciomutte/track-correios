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
			objetos: [{
				codObjeto: 'codObjeto',
				tipoPostal:
					{
						sigla: 'sigla',
						descricao: 'descricao',
						categoria: 'categoria',
					},
				modalidade: 'modalidade',
				eventos: [],
				habilitaAutoDeclaracao: true,
				permiteEncargoImportacao: true,
				habilitaPercorridaCarteiro: true,
				bloqueioObjeto: true,
				possuiLocker: true,
				habilitaLocker: true,
				habilitaCrowdshipping: true,
			}],
			quantidade: 1,
  		resultado: "Todos os Eventos",
  		versao: "1.0.0"
		};
		makeCorreiosResponse(mockedResponse);
		const result = await fetchObject('123');
		expect(result).toBe(mockedResponse);
	});
});
