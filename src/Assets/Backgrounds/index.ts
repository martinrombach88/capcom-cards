export interface Backgrounds {
	//key value interface makes an object of each image for easy access
	[key: string]: string | any;
	//[variable name: variable url] : string or anything
}

//Object freeze creates a constant of the objects below, ready for import
export default Object.freeze({
	bg1: require("./bg1.jpg"),
	bg2: require("./bg2.jpg"),
	bg3: require("./bg3.jpg"),
	bg4: require("./bg4.jpg"),
	bg5: require("./bg5.jpg"),
});
