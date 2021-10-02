import fetch from 'node-fetch';
import chalk from 'chalk';

const log = console.log;
const logEnter = (text) => {
	log(text);
	log();
};

const iconByStatus = {
	TRANSITO: '🚚',
	'SAIU-ENTREGA-DESTINATARIO': '🙌',
	ENTREGUE: '🎁',
	PAR17: '💸', // Aguardando pagamento
	PAR21: '🔎', // Encaminhado para fiscalização aduaneira
	RecebidoCorreiosBrasil: '🛬',
	POSTAGEM: '📦',
	DEFAULT: '🚧',
};

function getIcon(status) {
	return iconByStatus[status] || iconByStatus.DEFAULT;
}

async function getData(code) {
	const url = 'https://rastreamento.correios.com.br/app/resultado.php';

	const response = await fetch(`${url}?objeto=${code}&mqs=S`);
	const data = await response.json();

	if (data.erro) {
		log(`❌ ${data.mensagem}`);
		return;
	}

	return data;
}

async function run() {
	const code = process.argv[2].toUpperCase();

	logEnter(chalk.bold(`📮 ${code}`));

	const data = await getData(code);

	const events = data?.eventos || [];

	events.map((event) => {
		const { descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino } = event;

		log(`==> ${getIcon(descricaoWeb)} ${descricao}`);
		log(chalk.blackBright(`Data: ${dtHrCriado}`));
		log(chalk.blackBright(`Local: ${unidade.nome}`));

		if (unidadeDestino) {
			log(chalk.blackBright(`Indo para: ${unidadeDestino?.nome}`));
		}

		log();
	});
}

export { run };
