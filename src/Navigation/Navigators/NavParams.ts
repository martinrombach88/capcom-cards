import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SCREENS } from "../Routes";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppNavParams = {
	//The [ENUM] notation points to the ENUM object itself
	//This params list is given to the navigator to define
	//types for the props of each screen
	//While set to any for now, it should be updated with the
	//real types for each

	//login
	[SCREENS.FRONT_SCREEN]: any;
	[SCREENS.LOGIN_SCREEN]: any;
	[SCREENS.NEW_USER_SCREEN]: any;

	//hub with tab nav
	[SCREENS.HUB_SCREEN]: any;
	[SCREENS.MY_PROFILE_SCREEN]: any;
	//tab nav screens
	[SCREENS.CARD_DETAILS_SCREEN]: any;
	[SCREENS.CARD_VIEW_SCREEN]: any;
	[SCREENS.COLLECT_CARDS_SCREEN]: any;
	[SCREENS.CURRENCY_GAME_SCREEN]: any;
	[SCREENS.MY_CARDS_SCREEN]: any;
};

export type AppNavProps = NativeStackNavigationProp<AppNavParams, SCREENS>;

export type Props = NativeStackScreenProps<AppNavParams, SCREENS>;
