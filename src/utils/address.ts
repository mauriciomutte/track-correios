import type { Unidade } from '@types';

export function getAddress(unidade: Unidade) {
	if (!unidade) return '';

	const {
		tipo,
		endereco: { cidade, uf },
	} = unidade;

	return `${tipo}, ${cidade} - ${uf}`;
}
