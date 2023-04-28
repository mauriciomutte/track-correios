import { getIcon } from '../../src/utils';

describe('Função getIcon', function() {
	it.each`
	status | value
	${'TRANSITO'} | ${'🚚'}
	${'SAIU-ENTREGA-DESTINATARIO'} | ${'🙌'}
	${'ENTREGUE'} | ${'🎁'}
	${'PAR31'} | ${'🤑'}
	${'PAR17'} | ${'💸'}
	${'PAR21'} | ${'🔎'}
	${'RecebidoCorreiosBrasil'} | ${'🛬'}
	${'POSTAGEM'} | ${'📦'}
	${'DEFAULT'} | ${'🚧'}
	${'RANDOM STATUS'} | ${'🚧'}
	`('deve retornar os icones corretos de acordo com o mapeamento ', function({ status, value }) {
		expect(getIcon(status)).toEqual(value);
	});
});
