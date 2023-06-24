//data set ->

//Here we expect to make a list of
//objects, rather than alter functional
//component params, so we use a type
export type CardType = {
	id: number;
	name: string;
	description: string;
	series: string;
	firstAppeared: string;
	cameos: string;
	media?: string[];
};

//CharacterType[] means charData is an array of CharacterType objects
