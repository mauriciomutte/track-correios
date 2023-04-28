import axios from 'axios';

import type { CorreiosError, CorreiosResponse } from '@types';

const BASE_URL = 'https://rastreamento.correios.com.br/app/resultado.php';

export const fetchObject = async (code: string) => {
	const { data, request } = await axios.get<CorreiosResponse>(BASE_URL, {
		params: {
			objeto: code,
			mqs: 'S',
		},
	});

	console.log(request);

	return data;
};

export function isError(data: any): data is CorreiosError {
	return data.erro !== undefined;
}
