import { CopyIcon } from "@chakra-ui/icons";
import {
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";

export function Home() {
	return (
		<Flex flexDir="column" alignItems="center" justifyContent="flex-end" gap={3} flex="1" paddingBlock="3rem">
            <Heading>Seja Bem-vindo(a)</Heading>
			<Text>Junte-se aos jogadores desse incrível server</Text>
			<InputGroup width="fit-content">
				<InputLeftElement>
					<IconButton
						colorScheme="blue"
						aria-label="Search database"
						icon={<CopyIcon />}
					/>
				</InputLeftElement>
				<Input textAlign="center" type="text" readOnly value="localhost:3000" />
			</InputGroup>
		</Flex>
	);
}
