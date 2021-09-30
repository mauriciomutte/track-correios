const log = console.log;
const logEnter = (text) => {
	log(text);
	log();
};

const iconByStatus = {
	TRANSITO: '🚚',
	'SAIU-ENTREGA-DESTINATARIO': '🙌',
	ENTREGUE: '🎁',
	RecebidoCorreiosBrasil: '🛬',
	POSTAGEM: '📦',
	DEFAULT: '🚧',
};
