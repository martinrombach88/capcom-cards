import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Logos from "../Assets/Logos";

const FrontScreen = () => {
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
				}}>
				<Button bg="white">
					<Text color="black" fontWeight="600">
						Log Me In
					</Text>
				</Button>
				<Button bg="white">
					<Text color="black" fontWeight="600">
						I'm New
					</Text>
				</Button>
			</Div>
		</Div>
	);
};

export default FrontScreen;
