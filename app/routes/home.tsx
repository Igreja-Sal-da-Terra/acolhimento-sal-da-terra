import { MessagePage } from "~/messages/message";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Acolhimento | Igreja Sal da Terra" },
		{ name: "description", content: "Sistema de acolhimento da Igreja Sal da Terra" },
	];
}

export default function Home() {
	return <MessagePage />;
}
