import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
{
	/* <Image style={styles.logo} source={require("./src/Assets/Logos/capcom-cards-logo.png")}/> */
}
export default function App() {
	return (
		<View
			style={[
				styles.container,
				{
					position: "relative",
					justifyContent: "center",
					alignItems: "center",
				},
			]}>
			<StatusBar style="auto" />
			<Image
				style={{
					position: "absolute",
					zIndex: 20,
					top: 450,
					resizeMode: "contain",
					width: 300,
				}}
				source={require("./src/Assets/Logos/capcom-cards-logo.png")}
			/>
			<View
				style={{
					position: "absolute",
					bottom: 100,
					zIndex: 2,
					flexDirection: "row",
					justifyContent: "space-around",
					width: "100%",
				}}>
				<Button title="Log me in!" />
				<Button title="I'm New!" />
			</View>
			<View></View>

			<Image
				style={styles.bg}
				source={require("./src/Assets/Backgrounds/bg2.jpg")}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
	bg: {
		resizeMode: "cover",
		width: "100%",
		zIndex: 1,
	},
});
