import { createStackNavigator } from "@react-navigation/stack";
import FrontScreen from "../../Screens/FrontScreen";
import HubScreen from "../../Screens/HubScreen";
import LoginScreen from "../../Screens/LoginScreen";
import NewUserScreen from "../../Screens/NewUserScreen";
import { AppNavParams } from "./NavParams";
import { SCREENS } from "../Routes";

const Stack = createStackNavigator<AppNavParams>();
// you can use the stack nav's own header
//for the hub screen's profile or simply make a button that navs
const StackNav = () => (
	<Stack.Navigator>
		<Stack.Screen
			options={{
				headerShown: false,
			}}
			name={SCREENS.FRONT_SCREEN}
			component={FrontScreen}
		/>
		<Stack.Screen name={SCREENS.HUB_SCREEN} component={HubScreen} />
		<Stack.Screen
			options={{
				headerShown: false,
			}}
			name={SCREENS.LOGIN_SCREEN}
			component={LoginScreen}
		/>
		<Stack.Screen
			options={{
				headerShown: false,
			}}
			name={SCREENS.NEW_USER_SCREEN}
			component={NewUserScreen}
		/>
	</Stack.Navigator>
);

export default StackNav;
