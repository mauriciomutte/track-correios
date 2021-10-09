import type { Unidade } from './';

export function getAddress(unidade: Unidade) {
	if (!unidade) return '';

	const {
		tipo,
		endereco: { cidade, uf },
	} = unidade;

	return `${tipo}, ${cidade} - ${uf}`;
}
