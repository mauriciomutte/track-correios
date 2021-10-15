import type { Unidade } from './';

export function getAddress(unidade: Unidade) {
	if (!unidade) return '';

	const {
		nome,
		tipo,
		endereco: { cidade, uf },
	} = unidade;

	return [tipo, nome, cidade, uf].filter(x => x).join(" - ");
}
