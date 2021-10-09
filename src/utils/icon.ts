const iconByStatus: { [id: string]: string } = {
	TRANSITO: "🚚",
	"SAIU-ENTREGA-DESTINATARIO": "🙌",
	ENTREGUE: "🎁",
	PAR31: "🤑", // Pagamento confirmado
	PAR17: "💸", // Aguardando pagamento
	PAR21: "🔎", // Encaminhado para fiscalização aduaneira
	RecebidoCorreiosBrasil: "🛬",
	POSTAGEM: "📦",
	DEFAULT: "🚧"
};

export function getIcon(status: string) {
	return iconByStatus[status] || iconByStatus.DEFAULT;
}
