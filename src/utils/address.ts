import type { Unidade } from '@types';

export function getAddress(unidade: Unidade) {
	if (!unidade) return '';

	const {
		nome,
		tipo,
		endereco: { cidade, uf },
	} = unidade;

	return [tipo, nome, cidade, uf].filter(x => x).join(" - ");
}
