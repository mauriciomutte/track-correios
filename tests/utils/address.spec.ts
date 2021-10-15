import { getAddress } from '../../src/utils';

describe('Função getAddress', function() {
	it('deve retornar as informações do endereço separados por "-"', function() {
		const data = {
			nome: 'my test name',
			codSro: '123',
			codMcu: '456',
			tipo: 'my type',
			endereco: {
				identificacao: 'identificacao',
				principal: 'principal',
				numero: 'numero',
				logradouro: 'logradouro',
				complemento: 'complemento',
				dddFixo: 'dddFixo',
				foneFixo: 'foneFixo',
				bairro: 'bairro',
				cidade: 'cidade',
				uf: 'uf',
				codigoPostal: 'codigoPostal',
				siglaPais: 'siglaPais',
			},
		};
		const result = getAddress(data);
		expect(result).toEqual(`${data.tipo} - ${data.nome} - ${data.endereco.cidade} - ${data.endereco.uf}`);
	});
});
