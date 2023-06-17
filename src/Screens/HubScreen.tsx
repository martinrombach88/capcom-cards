import { Dimensions } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Avatars from "../Assets/Avatars";
import Placeholders from "../Assets/Placeholders";
import { Props } from "../Navigation/Navigators/NavParams";
import { UserType } from "../Store/createUserSlice";

const HubScreen = ({ route }: Props) => {
	const user = route.params;
	console.log("route params", route.params);

	const [phState, setPhstate] = useState(Placeholders.CammyPH);

	const swapCard = () => {
		if (phState != Placeholders.CammyGPH) {
			setPhstate(Placeholders.CammyGPH);
		} else if (phState != Placeholders.CammyPH) {
			setPhstate(Placeholders.CammyPH);
		}
	};

	return (
		<Div w={Dimensions.get("window").width} position="relative">
			<Div
				flexDir="row"
				bg="white"
				w="100%"
				top={50}
				position="absolute"
				zIndex={2}
				justifyContent="space-between"
				px="xl">
				<Div flexDir="row">
					<Image w={40} h={40} source={Avatars.Arthur} />
					<Text fontSize="lg">user: gng225</Text>
				</Div>

				<Text>currency: 40000</Text>
			</Div>
			<Div
				flexDir="row"
				bg="white"
				w="100%"
				top={90}
				position="absolute"
				zIndex={2}
				justifyContent="space-between"
				px="xl">
				<Text>pressing this creates a modal?</Text>
			</Div>
			<Div
				position="absolute"
				w="100%"
				alignItems="center"
				top={150}
				zIndex={2}>
				<Div bg="white" my="md">
					<Text fontSize="2xl">Latest Card</Text>
				</Div>
				<Div>
					<Button onPress={swapCard}>
						<Image resizeMode="contain" source={phState} h={200} w={200} />
					</Button>
				</Div>
			</Div>

			<Div
				flexDir="row"
				bg="white"
				w="100%"
				top={500}
				position="absolute"
				zIndex={2}
				justifyContent="space-between"
				px="xl">
				<Div alignItems="center" w="100%">
					<Text fontSize="2xl">Collected Cards: 10/100</Text>
					<Text fontSize="2xl">Currency Spent: 5000</Text>
					<Text fontSize="2xl">Daily Bonus: Available again in 5:15:30 </Text>
				</Div>
			</Div>

			<Div
				flexDir="row"
				bg="white"
				w="100%"
				bottom={78}
				position="absolute"
				zIndex={2}
				justifyContent="space-between"
				px="xl">
				<Text fontSize="xl">Tab Navigator goes here?</Text>
			</Div>
			<Div
				flexDir="row"
				bg="white"
				w="100%"
				bottom={50}
				position="absolute"
				zIndex={2}
				justifyContent="space-between"
				px="xl">
				<Text fontSize="2xl">Collect</Text>
				<Text fontSize="2xl">Earn</Text>
				<Text fontSize="2xl">My Cards</Text>
			</Div>
			<Image h="100%" w="100%" source={Backgrounds.bg2} zIndex={1} />
		</Div>
	);
};
export default HubScreen;
