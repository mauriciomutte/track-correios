import { getIcon } from '../../src/utils';

describe('Função getIcon', function() {
	it.each`
	status | value
	${'Objeto em trânsito - por favor aguarde'} | ${'🚚'}
	${'Objeto saiu para entrega ao destinatário'} | ${'🙌'}
	${'Objeto entregue ao destinatário'} | ${'🎁'}
	${'Pagamento confirmado'} | ${'🤑'}
	${'Aguardando o pagamento do despacho postal'} | ${'💸'}
	${'Objeto encaminhado para fiscalização aduaneira'} | ${'🔎'}
	${'Objeto recebido pelos correios do Brasil'} | ${'🛬'}
	${'Objeto postado'} | ${'📦'}
	${'DEFAULT'} | ${'🚧'}
	${'RANDOM STATUS'} | ${'🚧'}
	`('deve retornar os icones corretos de acordo com o mapeamento ', function({ status, value }) {
		expect(getIcon(status)).toEqual(value);
	});
});
