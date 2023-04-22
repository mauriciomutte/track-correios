import axios from 'axios';

import type { CorreiosError, CorreiosResponse } from '@types';

const BASE_URL = 'https://proxyapp.correios.com.br/v1/sro-rastro';

export const fetchObject = async (code: string) => {
	const { data } = await axios.get<CorreiosResponse>(`${BASE_URL}/${code}`);

	return data;
};

export function isError(data: any): data is CorreiosError {
	return data.erro !== undefined;
}
