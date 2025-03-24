import type { welcomings } from "~/constants/welcomings";
import type { TypeMessage } from "../messages/message";

const Messages: Record<
	(typeof TypeMessage)[number],
	(
		name: string,
		welcoming: (typeof welcomings)[number],
		phone?: string,
	) => string
> = {
	"Novo convertido": (name, welcoming) => `Graça e paz, *${name}*!
- Me chamo *${welcoming}*, sou do departamento de Acolhimento da Igreja Sal da Terra, que você visitou e onde fez sua confissão de fé em Jesus Cristo *ontem*!
Gostaria de te dar os parabéns pela confissão de fé em Cristo Jesus como seu único Senhor e Salvador e dizer que estamos todos muito felizes por esse seu passo de fé. Lembrando que temos culto todas as Quintas-feiras, às 19h30, e aos Domingos, às 19h. Além disso, temos o Connect Jovem, de 15 a 17 anos, às 18h e o Connect+, de 18 anos acima, às 20hrs, ambos nas sextas-feiras.
E por fim, o Connect Teens, de 10 a 14 anos, todos os sábados, às 16h!
Estou te enviando o link para entrar no grupo do Whatsapp da Sal da Terra, dessa família a qual você também já faz parte. Por lá recebemos avisos a respeito da programação da igreja, bem como estabelecemos momentos de comunhão com os irmãos. Será de grande valia se puder fazer parte dele.

https://chat.whatsapp.com/Ic3Od5mN1Nh8DtZYEPIOWu

Mais uma vez, os nossos parabéns, qualquer dúvida pode falar comigo. Até breve! 🙏`,
	Visitante: (name, welcoming) => `Olá, *${name}*!
- Me chamo *${welcoming}*, sou do Departamento de Acolhimento da Igreja Sal da Terra, que você visitou *ontem*!
Gostaria de saber como foi a sua experiência como visitante, no que podemos melhorar para te receber melhor e te convidar a retornar à nossa Igreja. Lembrando que temos culto todas as Quintas-feiras, às 19h30, e aos Domingos, às 19h. Além disso, temos o Connect Jovem, de 15 a 17 anos, às 18h e o Connect+, de 18 anos acima, às 20hrs, ambos nas sextas-feiras.
E por fim, o Connect Teens, de 10 a 14 anos, todos os sábados, às 16h!
Desde já, fico muito contente em estabelecermos uma conversa de fé cristã! 🙏`,
};

export default Messages;
