import chalk from 'chalk';
import type { CorreiosResponse } from '@types';

import { log, fetchObject, isError, getIcon, getAddress } from './utils';

const getData = async (code: string): Promise<CorreiosResponse | null> => {
	const data = await fetchObject(code);

	if (isError(data)) {
		log(`❌ ${data?.mensagem}`);
		return null;
	}

	return data;
};

const run = async () => {
	const code = process?.argv[2]?.toUpperCase();

	if (!code) {
		log(`🖊️ Informe o código de rastreio para que a consulta seja realizada!`);
		return null;
	}

	const data = await getData(code);

	const events = data?.eventos || [];

	events?.reverse().forEach((event) => {
		const { descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino } = event;

		log(`==> ${getIcon(descricaoWeb)} ${chalk.bold(descricao)}`);
		log(chalk.blackBright(`Data: ${dtHrCriado}`));
		log(chalk.blackBright(`Local: ${getAddress(unidade)}`));

		if (unidadeDestino) {
			log(chalk.blackBright(`Indo para: ${getAddress(unidadeDestino)}`));
		}

		log();
	});

	return null;
};

export default run;
