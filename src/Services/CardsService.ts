import axios from "axios";
import { CardType } from "../Types/Card";
// import "Assets/CardData/cards.json";
export const createTestCard = () => {
	const arthur: CardType = {
		id: 1,
		name: "Arthur",
		series: "gng",
		description:
			"A fearless knight faced with fending off legions of the undead and supernatural creatures. Journeying to defeat the demon lords and save Princess Guinevere, when beating the final boss, its often an illusion. He usually has to beat the final boss twice.",
		firstAppeared: "Ghosts n' Goblins",
		cameos: "Fights in Marvel vs Capcom 3.",
	};

	axios.post(
		"https://capcom-cards-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json",
		arthur
	);
};
