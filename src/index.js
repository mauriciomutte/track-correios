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

function getIcon(status) {
	return iconByStatus[status] || iconByStatus.DEFAULT;
}
