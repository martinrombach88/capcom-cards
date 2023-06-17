import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Logos from "../Assets/Logos";

const NewUserScreen = () => {
	return (
		<Div w={Dimensions.get("window").width} position="relative">
			<Image h="100%" w="100%" source={Backgrounds.bg2} zIndex={1} />
			<Image
				w="100%"
				h={200}
				source={Logos.capcomLogo}
				position="absolute"
				bottom={300}
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
				}}></Div>
		</Div>
	);
};

export default NewUserScreen;
