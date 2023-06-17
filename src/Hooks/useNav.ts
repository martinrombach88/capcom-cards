import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AppNavProps } from "../Navigation/Navigators/NavParams";

const useNav = () => {
	const navigation = useNavigation<AppNavProps>();
	const navTo = (routeName: any, params?: any) => {
		return () => {
			// console.log("nav pressed");
			navigation.navigate(routeName, params);
		};
	};
	return {
		...navigation,
		navTo,
	};
};

export default useNav;
