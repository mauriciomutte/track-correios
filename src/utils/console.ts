export const { log } = console;
export const logEnter = (text: string) => {
	log(text);
	log();
};
