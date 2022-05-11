import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export function Header() {
	return (
		<Flex h="4rem" justifyContent="center" alignItems="center" gap={6}>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Início
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Cadastrar Conta
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Notícias
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Loja
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Forum
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Sobre Nós
				</Text>
			</Link>
			<Link to="/">
				<Text
					fontSize="lg"
					_hover={{
						color: "telegram.300",
						transition: "color ease 0.3s",
					}}
				>
					Contato
				</Text>
			</Link>
		</Flex>
	);
}
