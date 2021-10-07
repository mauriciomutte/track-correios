import axios from 'axios';
import type { CorreiosError } from './';

const baseURL = 'https://rastreamento.correios.com.br/app/';
export const api = axios.create({ baseURL });

export function isError(data: any): data is CorreiosError {
	return data.erro !== undefined;
}
