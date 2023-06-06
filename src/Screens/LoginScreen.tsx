import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Logos from "../Assets/Logos";

const LoginScreen = () => {
	return (
		<Div w={Dimensions.get("window").width} position="relative">
			<Text>login</Text>
		</Div>
	);
};

export default LoginScreen;
