export type UserType = {
	_id: number;
	username: string;
	cards: CardCollection;
	currency: number;
};

export type CardCollection = {
	row1: number[];
	row2: number[];
	row3: number[];
	row4: number[];
	row5: number[];
};
