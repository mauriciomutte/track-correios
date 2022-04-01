const iconByStatus: Record<string, string> = {
	"Objeto em trânsito - por favor aguarde": "🚚",
	"Objeto saiu para entrega ao destinatário": "🙌",
	"Objeto entregue ao destinatário": "🎁",
	"Pagamento confirmado": "🤑",
	"Aguardando o pagamento do despacho postal": "💸",
	"Objeto encaminhado para fiscalização aduaneira": "🔎",
	"Objeto recebido pelos correios do Brasil": "🛬",
	"Objeto postado": "📦",
	DEFAULT: "🚧"
};

export function getIcon(status: string) {
	return iconByStatus[status] || iconByStatus.DEFAULT;
}
