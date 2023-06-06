import FrontScreen from "./src/Screens/FrontScreen";
import HubScreen from "./src/Screens/HubScreen";
import { Div } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	// Navigator? Make the screens first?

	return (
		<NavigationContainer>
			<Div>
				{/* <FrontScreen /> */}
				<HubScreen />
			</Div>
		</NavigationContainer>
	);
}
