import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Logos from "../Assets/Logos";
import { useNavigation } from "@react-navigation/native";
import useNav from "../Hooks/useNav";
import { SCREENS } from "../Navigation/Routes";
import { UserType } from "../Types/User";
import { createTestCard } from "../Services/CardsService";
const FrontScreen = () => {
	// console.log("i am on front screen");
	const { navTo } = useNav();

	return (
		<Div w={Dimensions.get("window").width} position="relative">
			<Image h="100%" w="100%" source={Backgrounds.bg4} zIndex={1} />
			<Image
				w="100%"
				h={300}
				source={Logos.capcomLogo}
				position="absolute"
				top={70}
				zIndex={2}
				resizeMode="contain"
			/>
			<Div
				style={{
					position: "absolute",
					bottom: 200,
					zIndex: 2,
					flexDirection: "row",
					justifyContent: "space-around",
					width: "100%",
				}}>
				<Button bg="white" onPress={navTo(SCREENS.LOGIN_SCREEN)}>
					<Text color="black" fontWeight="600">
						Log Me In
					</Text>
				</Button>
				<Button bg="white" onPress={navTo(SCREENS.NEW_USER_SCREEN)}>
					<Text color="black" fontWeight="600">
						I'm New
					</Text>
				</Button>
				<Button onPress={createTestCard} bg="white">
					<Text color="black" fontWeight="600">
						Create Arthur Card
					</Text>
				</Button>
			</Div>
		</Div>
	);
};

export default FrontScreen;
