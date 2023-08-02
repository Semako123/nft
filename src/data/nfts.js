import {
	Avatar13,
	Avatar5,
	Avatar6,
	Basketball,
	Camera,
	MagicWand,
	MusicNote,
	NFTspacew,
	PaintBrush,
	Planet,
	Swatches,
	VideoCamera,
	aniCol1,
	aniCol2,
	aniCol3,
	cat1,
	cat2,
	cat3,
	cat4,
	cat5,
	cat6,
	cat7,
	cat8,
	disCol1,
	disCol2,
	disCol3,
	mushCol1,
	mushCol2,
	mushCol3,
} from "../assets";
import { Avatar1 } from "../assets";

const nftData = [
	{
		name: "Space Walking",
		img: NFTspacew,
		artist: {
			name: "AnimaKid",
			img: Avatar1,
		},
	},
];

export const nftCollection = [
	{
		name: "DSGN Animals",
		img1: aniCol1,
		img2: aniCol2,
		img3: aniCol3,
		value: 1023,
		artist: { name: "MrFox", img: Avatar5 },
	},
	{
		name: "Magic Mushrooms",
		img1: mushCol1,
		img2: mushCol2,
		img3: mushCol3,
		value: 900,
		artist: { name: "Shroomie", img: Avatar6 },
	},
	{
		name: "Disco Machines",
		img1: disCol1,
		img2: disCol2,
		img3: disCol3,
		value: 104,
		artist: { name: "BeKind2Robots", img: Avatar13 },
	},
];

export const nftCategories = [
	{ name: "Art", image: cat1, icon: PaintBrush },
	{ name: "Collectibles", image: cat2, icon: Swatches },
	{ name: "Music", image: cat3, icon: MusicNote },
	{ name: "Photography", image: cat4, icon: Camera },
	{ name: "Video", image: cat5, icon: VideoCamera },
	{ name: "Utility", image: cat6, icon: MagicWand },
	{ name: "Sport", image: cat7, icon: Basketball },
	{ name: "Virtual Worlds", image: cat8, icon: Planet },
];

export default nftData;
