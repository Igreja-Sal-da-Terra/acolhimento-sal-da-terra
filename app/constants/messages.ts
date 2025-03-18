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
Gostaria de saber como foi a sua experiência na nossa igreja e te dar os parabéns pela confissão de fé em Cristo Jesus como seu único Senhor e Salvador. Lembrando que temos culto todas as Quintas-feiras, às 19h30, e aos Domingos, às 19h. Além disso, temos o Connect Jovem, de 15 a 17 anos, às 18h e o Connect+, 18 ou mais, às 20hrs nas sextas-feiras.
E por fim, o Connect Teens, de 10 a 14 anos, aos sábados, às 16h!
Desde já, fico muito feliz em estabelecermos uma conversa de fé cristã! 🙏`,
	Visitante: (name, welcoming) => `Olá, *${name}*!
- Me chamo *${welcoming}*, sou do Departamento de Acolhimento da Igreja Sal da Terra, que você visitou *ontem*!
Gostaria de saber como foi a sua experiência como visitante, no que podemos melhorar para te receber melhor e te convidar a retornar à nossa Igreja. Lembrando que temos culto todas as Quintas-feiras, às 19h30, e aos Domingos, às 19h. Além disso, temos o Connect Jovem, de 15 a 17 anos, às 18h e o Connect+, 18 ou mais, às 20hrs nas sextas-feiras.
E por fim, o Connect Teens, de 10 a 14 anos, aos sábados, às 16h!
Desde já, fico muito contente em estabelecermos uma conversa de fé cristã! 🙏`,
};

export default Messages;
