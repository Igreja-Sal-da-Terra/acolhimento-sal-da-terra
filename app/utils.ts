const whatsShortcut = "https://wa.me";

export const createLinkToWhats = (phone: string, message: string) => {
	return `${whatsShortcut}/55${phone}?text=${encodeURIComponent(message)}`;
};
