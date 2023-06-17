import { Div } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNav from "./src/Navigation/Navigators/StackNav";
//stack navigator, with

export default function App() {
	// Navigator? Make the screens first?

	return (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
	);
}
