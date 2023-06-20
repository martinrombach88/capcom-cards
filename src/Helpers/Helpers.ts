import Toast, { ToastProps } from "react-native-toast-message";

export const createUserFormatter = (username: string, password: string) => {
	const currency = 5000;
	const cards = {
		row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	};

	return {
		username,
		password,
		cards,
		currency,
	};
};

export const showToastMessage = (
	text1: string,
	text2: string,
	type: ToastProps["type"] = "success"
) => {
	return Toast.show({
		text1,
		text2,
		type,
		visibilityTime: 2000,
	});
};
