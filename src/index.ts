import * as chalk from 'chalk';
import { CorreiosResponse, log, api, logEnter, isError, getIcon, getAddress } from './utils';

async function getData(code: string) {
	const response = await api.get<CorreiosResponse>(`resultado.php`, {
		params: { objeto: code, mqs: 'S' },
	});

	const data = response.data;

	if (isError(data)) {
		log(`❌ ${data?.mensagem}`);
		return null;
	}

	return data;
}

export default async function run() {
	const code = process?.argv[2]?.toUpperCase();

	if (!code) {
		log(`🖊️Informe o código de rastreio para que a consulta seja realizada!`);
		return null;
	}

	logEnter(chalk.bold(`📮 ${code}`));

	const data = await getData(code);

	const events = data?.eventos || [];

	events?.reverse().forEach((event) => {
		const { descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino } = event;

		log(`==> ${getIcon(descricaoWeb)} ${descricao}`);
		log(chalk.blackBright(`Data: ${dtHrCriado}`));
		log(chalk.blackBright(`Local: ${getAddress(unidade)}`));

		if (unidadeDestino) {
			log(chalk.blackBright(`Indo para: ${getAddress(unidadeDestino)}`));
		}

		log();
	});
	return null;
}
