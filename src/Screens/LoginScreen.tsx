import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Div, Image, Input, Text } from "react-native-magnus";
import Backgrounds from "../Assets/Backgrounds";
import Logos from "../Assets/Logos";
import useNav from "../Hooks/useNav";
import { UserType } from "../Store/createUserSlice";
import { useForm } from "react-hook-form";

const LoginScreen = () => {
	const testUser: UserType = {
		_id: 1,
		username: "toast",
		cards: {
			row1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		},
		currency: 30000,
	};

	const { navTo } = useNav();
	const {
		register,
		handleSubmit,
		watch,
		formState: { isValid, errors },
	} = useForm();

	return (
		<Div
			w={Dimensions.get("window").width}
			bgImg={Backgrounds.bg2}
			flex={1}
			justifyContent="center"
			alignItems="center">
			{/* <Image h="100%" w="100%" source={Backgrounds.bg2} zIndex={1} /> */}

			<Div justifyContent="space-between">
				<Input
					// name="username"
					placeholder="enter username"
					w={150}
				/>
				<Input
					// name="username"
					placeholder="enter password"
					w={150}
				/>
			</Div>
		</Div>
	);
};

export default LoginScreen;
