import { Field, Formik } from "formik";
import { Form } from "react-router";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Messages from "~/constants/messages";
import { welcomings } from "~/constants/welcomings";
import { createLinkToWhats } from "~/utils";

export const PHONE_WITHOUT_PLUS = /\d{11}/;

export const TypeMessage = ["Visitante", "Novo convertido"] as const;
const TypeMessageEnum = z.enum(TypeMessage);
const WelcomingEnum = z.enum(welcomings);

const messageFormSchema = z.object({
	name: z.string({ required_error: "Por favor, insira o nome" }),
	phone: z
		.string({ required_error: "Por favor, insira o telefone" })
		.regex(PHONE_WITHOUT_PLUS, "Formato correto para telefone: 83911112222"),
	type: TypeMessageEnum,
	welcoming: WelcomingEnum,
});

type MessageFormSchema = z.infer<typeof messageFormSchema>;

export function MessagePage() {
	return (
		<main className="flex flex-col items-center justify-center pt-16 pb-4">
			<div className="relative w-[180px] not-dark:bg-blue-950 rounded-lg mb-4">
				<img src="/logo-sal.png" alt="logo" className="object-contain" />
			</div>
			<h1 className="text-2xl font-bold">Acolhimento da Sal da Terra</h1>
			<p className="text-md italic mb-8">Envio de mensagens</p>
			<Formik<MessageFormSchema>
				initialValues={{
					name: "",
					phone: "",
					type: "Visitante",
					welcoming: "Bruna",
				}}
				onSubmit={(values) => {
					const message = Messages[values.type](values.name.trim(), values.welcoming);
					// alert(`Mensagem enviada para ${values.phone}...\n${message}`);
					const link = createLinkToWhats(values.phone, message);
					// console.log(link);
					window.open(link, '_blank')
				}}
				validationSchema={toFormikValidationSchema(messageFormSchema)}
			>
				{(formik) => {
					const { errors } = formik;

					return (
						<Form
							className="flex flex-col gap-4"
							onSubmit={formik.handleSubmit}
						>
							<div className="flex flex-col gap-1">
								<label htmlFor="name">Nome</label>
								<Field
									id="name"
									name="name"
									type="text"
									className="border-1 rounded-md p-1"
								/>
								{!!errors.name && (
									<span className="text-sm text-red-500 italic">
										{errors.name}
									</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="name">Telefone</label>
								<Field
									id="phone"
									name="phone"
									type="tel"
									className="border-1 rounded-md p-1"
									maxLength={11}
								/>
								{!!errors.phone && (
									<span className="text-xs text-red-500 italic">
										{errors.phone}
									</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="type">Tipo da mensagem</label>
								<select
									id="type"
									name="type"
									className="border-1 rounded-md p-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								>
									{TypeMessage.map((type) => {
										return (
											<option
												key={type}
												value={type}
												className="dark:bg-neutral-900"
											>
												{type}
											</option>
										);
									})}
								</select>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="welcoming">Acolhedor</label>
								<select
									id="welcoming"
									name="welcoming"
									className="border-1 rounded-md p-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								>
									{[...welcomings].sort().map((welcoming) => {
										return (
											<option
												key={welcoming}
												value={welcoming}
												className="dark:bg-neutral-900"
											>
												{welcoming}
											</option>
										);
									})}
								</select>
							</div>
							<button
								type="submit"
								className="rounded-lg px-4 py-2 bg-secondary cursor-pointer"
							>
								Enviar
							</button>
						</Form>
					);
				}}
			</Formik>
		</main>
	);
}
