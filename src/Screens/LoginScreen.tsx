import { Dimensions } from "react-native";
import { Button, Div } from "react-native-magnus";
import { useForm } from "react-hook-form";

import Backgrounds from "../Assets/Backgrounds";
import { FormInput } from "../Components";
import useNav from "../Hooks/useNav";
import { UserType } from "../Store/createUserSlice";
import { createUserFormatter, showToastMessage } from "../Helpers/Helpers";
import { SCREENS } from "../Navigation/Routes";

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
		control,
		handleSubmit,
		formState: { isValid, errors },
		getValues,
	} = useForm();

	const submitUser = () => {
		console.log("submit");
		if (isValid) {
			console.log("valid");
			const { username, password } = getValues();
			const payload = createUserFormatter(username, password);
			//firebase logic goes here, test for now
			navTo(SCREENS.HUB_SCREEN, { payload })();
		} else {
			showToastMessage("Invalid", "Please enter a username and password");
		}
	};

	return (
		<Div
			w={Dimensions.get("window").width}
			bgImg={Backgrounds.bg2}
			flex={1}
			pt={200}
			alignItems="center">
			{/* <Image h="100%" w="100%" source={Backgrounds.bg2} zIndex={1} /> */}

			<Div alignItems="center">
				<Div py="md">
					<FormInput control={control} name="username" placeholder="Username" />
				</Div>
				<Div py="md">
					<FormInput control={control} name="password" placeholder="Password" />
				</Div>

				{/* Add: password confirm */}
				<Div py="md">
					<Button onPress={submitUser}>Submit</Button>
				</Div>
			</Div>
		</Div>
	);
};

export default LoginScreen;
