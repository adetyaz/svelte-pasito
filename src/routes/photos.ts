export type Photo = {
	src: string;
	alt: string;
	author: string;
	authorUrl: string;
	photoUrl: string;
};

export type PhotoSet = { hero: Photo[]; vertical: Photo[]; autoplay: Photo[] };

// Unsplash photos, hotlinked per the Unsplash License and API guidelines.
export const photos = {
	"default": {
		"hero": [
			{
				"src": "https://images.unsplash.com/photo-1688588428105-c9cadcc670ab?auto=format&fit=crop&w=1400&q=75",
				"alt": "a painting of a country road and a house",
				"author": "Art Institute of Chicago",
				"authorUrl": "https://unsplash.com/@artchicago?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-painting-of-a-country-road-and-a-house-F7PTXUuNR0s?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1763491905762-66f2d0bf57ac?auto=format&fit=crop&w=1400&q=75",
				"alt": "",
				"author": "National Gallery of Art",
				"authorUrl": "https://unsplash.com/@nationalgallery?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/Z-S0resW6gQ?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1763073065060-76d97c485626?auto=format&fit=crop&w=1400&q=75",
				"alt": "Two people tending a garden with blooming flowers",
				"author": "National Gallery of Art",
				"authorUrl": "https://unsplash.com/@nationalgallery?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/two-people-tending-a-garden-with-blooming-flowers-kAK4qj9y-oI?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1699391202798-bec3f1c894bc?auto=format&fit=crop&w=1400&q=75",
				"alt": "a painting of a house and a tree",
				"author": "Europeana",
				"authorUrl": "https://unsplash.com/@europeana?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-painting-of-a-house-and-a-tree-4ewHoDJOSf4?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1763493323903-4de562e32d1c?auto=format&fit=crop&w=1400&q=75",
				"alt": "",
				"author": "National Gallery of Art",
				"authorUrl": "https://unsplash.com/@nationalgallery?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/8x00ZK5WxlY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1763491905801-8257e00e5c48?auto=format&fit=crop&w=1400&q=75",
				"alt": "",
				"author": "National Gallery of Art",
				"authorUrl": "https://unsplash.com/@nationalgallery?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/bcIxZ3h7lV8?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&w=1400&q=75",
				"alt": "a painting of two girls and a dog in a forest",
				"author": "Birmingham Museums Trust",
				"authorUrl": "https://unsplash.com/@birminghammuseumstrust?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-painting-of-two-girls-and-a-dog-in-a-forest-5F3u0j6s6pM?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"vertical": [
			{
				"src": "https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?auto=format&fit=crop&w=1400&q=75",
				"alt": "yellow, red, green, and black abstract painting",
				"author": "Steve A Johnson",
				"authorUrl": "https://unsplash.com/@steve_j?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/yellow-red-green-and-black-abstract-painting-f_nFeb9eWVA?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1536849460588-696219a9e98d?auto=format&fit=crop&w=1400&q=75",
				"alt": "blue and orange abstract canvas painting",
				"author": "Steve A Johnson",
				"authorUrl": "https://unsplash.com/@steve_j?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/blue-and-orange-abstract-canvas-painting-OL3NXdEwfnI?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?auto=format&fit=crop&w=1400&q=75",
				"alt": "green, yellow, and red abstract painting",
				"author": "Steve A Johnson",
				"authorUrl": "https://unsplash.com/@steve_j?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/green-yellow-and-red-abstract-painting-5Oe8KFH5998?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1524664399170-77e7118fdb6d?auto=format&fit=crop&w=1400&q=75",
				"alt": "orange, red, and blue abstract painting",
				"author": "Steve A Johnson",
				"authorUrl": "https://unsplash.com/@steve_j?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/orange-red-and-blue-abstract-painting-VCLNNMRl07k?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"autoplay": [
			{
				"src": "https://images.unsplash.com/photo-1763493324156-c2277d16b8b2?auto=format&fit=crop&w=1400&q=75",
				"alt": "",
				"author": "National Gallery of Art",
				"authorUrl": "https://unsplash.com/@nationalgallery?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/E-fUZYaqFRs?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1695841397204-db5a8fd1044e?auto=format&fit=crop&w=1400&q=75",
				"alt": "a painting of a house with a thatched roof",
				"author": "Birmingham Museums Trust",
				"authorUrl": "https://unsplash.com/@birminghammuseumstrust?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-painting-of-a-house-with-a-thatched-roof-r7BNjDQ8B6M?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1582201957424-621320ad670d?auto=format&fit=crop&w=1400&q=75",
				"alt": "white and brown concrete building painting",
				"author": "Birmingham Museums Trust",
				"authorUrl": "https://unsplash.com/@birminghammuseumstrust?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-and-brown-concrete-building-painting-9dnNnTrHxmI?utm_source=svelte-pasito&utm_medium=referral"
			}
		]
	},
	"minimal": {
		"hero": [
			{
				"src": "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1400&q=75",
				"alt": "worm's-eye view photography of concrete building",
				"author": "Kimon Maritz",
				"authorUrl": "https://unsplash.com/@kimonmaritz?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/worms-eye-view-photography-of-concrete-building-mQiZnKwGXW0?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1576831371356-d6e9411ae501?auto=format&fit=crop&w=1400&q=75",
				"alt": "closeup photo of high-rise building during daytime",
				"author": "Anatolii Nesterov",
				"authorUrl": "https://unsplash.com/@monadiform?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/closeup-photo-of-high-rise-building-during-daytime-X4K1DvQlgPQ?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1619857121838-997e82345250?auto=format&fit=crop&w=1400&q=75",
				"alt": "grayscale photo of man walking on road",
				"author": "Rufat Mammadov",
				"authorUrl": "https://unsplash.com/@rufatmammadov?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/grayscale-photo-of-man-walking-on-road-ak5R4Y7MkW8?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1628270680011-41792b21de87?auto=format&fit=crop&w=1400&q=75",
				"alt": "gray concrete building during daytime",
				"author": "Parrish Freeman",
				"authorUrl": "https://unsplash.com/@parrish?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/gray-concrete-building-during-daytime-c8hi_P21Rn4?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1521428706918-249ece433edf?auto=format&fit=crop&w=1400&q=75",
				"alt": "low angle photo of white high rise building",
				"author": "Aideal Hwa",
				"authorUrl": "https://unsplash.com/@aideal?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/low-angle-photo-of-white-high-rise-building-_XbjJufOcrs?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?auto=format&fit=crop&w=1400&q=75",
				"alt": "several green bonsai trees during daytime",
				"author": "Hugo Sousa",
				"authorUrl": "https://unsplash.com/@hmiguelsousa?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/several-green-bonsai-trees-during-daytime-BghGseQbAkA?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1612089889100-bbcf80456e1f?auto=format&fit=crop&w=1400&q=75",
				"alt": "white concrete building under blue sky during daytime",
				"author": "Deyan Sight",
				"authorUrl": "https://unsplash.com/@deyansight?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-FjvwxgGfAzw?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"vertical": [
			{
				"src": "https://images.unsplash.com/photo-1738844153732-a485f0e78382?auto=format&fit=crop&w=1400&q=75",
				"alt": "A black and white photo of a building and a clock",
				"author": "William Koo",
				"authorUrl": "https://unsplash.com/@willll?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-and-white-photo-of-a-building-and-a-clock--HDmL7Poraw?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1665779736808-047a6bbf43a0?auto=format&fit=crop&w=1400&q=75",
				"alt": "a close-up of a building",
				"author": "Alessandro Matonti",
				"authorUrl": "https://unsplash.com/@xanderart?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-close-up-of-a-building-Gs8UKNggcF0?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1608531078362-d1dcb855bc9f?auto=format&fit=crop&w=1400&q=75",
				"alt": "black and white high rise building",
				"author": "Alejandro Barba",
				"authorUrl": "https://unsplash.com/@albrb?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/black-and-white-high-rise-building-3d66NdTLIEY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1565193438479-a0fc46c17f13?auto=format&fit=crop&w=1400&q=75",
				"alt": "grey concrete building",
				"author": "kiryl",
				"authorUrl": "https://unsplash.com/@kshar2?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/grey-concrete-building-8BqlKF_5zUM?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"autoplay": [
			{
				"src": "https://images.unsplash.com/photo-1676144844767-b25cb5e6c896?auto=format&fit=crop&w=1400&q=75",
				"alt": "a bird is perched on the side of a building",
				"author": "Lukas S",
				"authorUrl": "https://unsplash.com/@hamburgphoto?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-bird-is-perched-on-the-side-of-a-building-ejGv_enkOBY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1677527697566-33034c16adb6?auto=format&fit=crop&w=1400&q=75",
				"alt": "a close up of a building with a sky in the background",
				"author": "Parrish Freeman",
				"authorUrl": "https://unsplash.com/@parrish?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-close-up-of-a-building-with-a-sky-in-the-background-YzwFg3OUFy4?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1612090078171-9e1e933e2bcc?auto=format&fit=crop&w=1400&q=75",
				"alt": "white concrete building under blue sky during daytime",
				"author": "Deyan Sight",
				"authorUrl": "https://unsplash.com/@deyansight?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-i08DWCD3zKA?utm_source=svelte-pasito&utm_medium=referral"
			}
		]
	},
	"hacker": {
		"hero": [
			{
				"src": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=75",
				"alt": "Matrix movie still",
				"author": "Markus Spiske",
				"authorUrl": "https://unsplash.com/@markusspiske?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/matrix-movie-still-iar-afB0QQw?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?auto=format&fit=crop&w=1400&q=75",
				"alt": "A close up of a computer screen with green text",
				"author": "wesfly",
				"authorUrl": "https://unsplash.com/@blender_person?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-close-up-of-a-computer-screen-with-green-text-biBRoGc7ir0?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?auto=format&fit=crop&w=1400&q=75",
				"alt": "Computer code is displayed on a screen",
				"author": "Rob Wingate",
				"authorUrl": "https://unsplash.com/@robwingate?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/computer-code-is-displayed-on-a-screen-4s6QFMyHKa0?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=1400&q=75",
				"alt": "Code on a computer screen",
				"author": "Rob Wingate",
				"authorUrl": "https://unsplash.com/@robwingate?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/code-on-a-computer-screen-LnzSzH24XS8?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1742072593996-ebdc5d605a54?auto=format&fit=crop&w=1400&q=75",
				"alt": "Colorful code scrolls across a dark background",
				"author": "Peaky Frames",
				"authorUrl": "https://unsplash.com/@rashedpaykary?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/colorful-code-scrolls-across-a-dark-background-Aowg76xooEY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1742072594013-c87f855e29ca?auto=format&fit=crop&w=1400&q=75",
				"alt": "Computer code displayed on a black background",
				"author": "Peaky Frames",
				"authorUrl": "https://unsplash.com/@rashedpaykary?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/computer-code-displayed-on-a-black-background-dcoWarHwbxo?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1606606767399-01e271823a2e?auto=format&fit=crop&w=1400&q=75",
				"alt": "black flat screen computer monitor",
				"author": "Compare Fibre",
				"authorUrl": "https://unsplash.com/@comparefibre?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/black-flat-screen-computer-monitor-tiSE_paTt0A?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"vertical": [
			{
				"src": "https://images.unsplash.com/photo-1641545423876-3d7dc842132c?auto=format&fit=crop&w=1400&q=75",
				"alt": "a black background with green dots and lines",
				"author": "MARIOLA GROBELSKA",
				"authorUrl": "https://unsplash.com/@mariolagr?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-background-with-green-dots-and-lines-h6XihPOkSIY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1761599821310-da0d6356b4f3?auto=format&fit=crop&w=1400&q=75",
				"alt": "Abstract green digital pattern with vertical lines",
				"author": "MARIOLA GROBELSKA",
				"authorUrl": "https://unsplash.com/@mariolagr?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/abstract-green-digital-pattern-with-vertical-lines-rp1Ujg56c0g?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=75",
				"alt": "black and gray laptop computer turned on",
				"author": "Markus Spiske",
				"authorUrl": "https://unsplash.com/@markusspiske?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/black-and-gray-laptop-computer-turned-on-FXFz-sW0uwo?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1547190027-9156686aa2f0?auto=format&fit=crop&w=1400&q=75",
				"alt": "Vertical columns of glowing green digital code against a dark black background",
				"author": "Markus Spiske",
				"authorUrl": "https://unsplash.com/@markusspiske?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/glowing-green-digital-code-gcgves5H_Ac?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"autoplay": [
			{
				"src": "https://images.unsplash.com/photo-1548892716-ccc4ff70ca8c?auto=format&fit=crop&w=1400&q=75",
				"alt": "a room filled with lots of green lights",
				"author": "Jason Leung",
				"authorUrl": "https://unsplash.com/@ninjason?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-room-filled-with-lots-of-green-lights-12L2KRuQbN4?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1595928796398-1d0ac507eed0?auto=format&fit=crop&w=1400&q=75",
				"alt": "black laptop computer turned on with green screen",
				"author": "Moritz Erken",
				"authorUrl": "https://unsplash.com/@moritzerken?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/black-laptop-computer-turned-on-with-green-screen-QHDVlXhIacg?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1669054626218-f0b57b8ec632?auto=format&fit=crop&w=1400&q=75",
				"alt": "a computer screen with green lights",
				"author": "thisGUYshoots",
				"authorUrl": "https://unsplash.com/@block_08?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-computer-screen-with-green-lights-ldyooOUG5WI?utm_source=svelte-pasito&utm_medium=referral"
			}
		]
	},
	"warm": {
		"hero": [
			{
				"src": "https://images.unsplash.com/photo-1552853519-1793ff886074?auto=format&fit=crop&w=1400&q=75",
				"alt": "brown concrete houses",
				"author": "Jaanus Jagomägi",
				"authorUrl": "https://unsplash.com/@jaanus?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/brown-concrete-houses-AZJAIiIn6BY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1771347030454-cfd9a6105129?auto=format&fit=crop&w=1400&q=75",
				"alt": "Potted cacti and succulents against a coral wall",
				"author": "Brunxs",
				"authorUrl": "https://unsplash.com/@brunxs?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/potted-cacti-and-succulents-against-a-coral-wall-f86O2RfWH7Q?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1788387586193-38087f61f2e9?auto=format&fit=crop&w=1400&q=75",
				"alt": "A brown adobe building with protruding wooden beams under a bright blue sky",
				"author": "Julia A. Keirns",
				"authorUrl": "https://unsplash.com/@jakeirns?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/adobe-building-with-wooden-beams-66_gB9SULjg?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1777931407549-86d4771c9063?auto=format&fit=crop&w=1400&q=75",
				"alt": "Southwestern adobe building with clear blue sky",
				"author": "Dan Dennis",
				"authorUrl": "https://unsplash.com/@cameramandan83?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/southwestern-adobe-building-with-clear-blue-sky-CDH00ePmQ2M?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1775768299618-e883ba83d96b?auto=format&fit=crop&w=1400&q=75",
				"alt": "Orange buildings with a palm tree under blue sky",
				"author": "Vanessa Zhu",
				"authorUrl": "https://unsplash.com/@vanessazhu777?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/orange-buildings-with-a-palm-tree-under-blue-sky-mw2qfMuvung?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1775599326332-765a4175d159?auto=format&fit=crop&w=1400&q=75",
				"alt": "Yellow taxis drive down a sunny street in morocco",
				"author": "Vanessa Zhu",
				"authorUrl": "https://unsplash.com/@vanessazhu777?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/yellow-taxis-drive-down-a-sunny-street-in-morocco-MzWD4gjodZM?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1775599326325-0a760cdfd95d?auto=format&fit=crop&w=1400&q=75",
				"alt": "People walking in a sunlit moroccan town square",
				"author": "Vanessa Zhu",
				"authorUrl": "https://unsplash.com/@vanessazhu777?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/people-walking-in-a-sunlit-moroccan-town-square-Q_RkanNDMKU?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"vertical": [
			{
				"src": "https://images.unsplash.com/photo-1782220940402-9168f59b582a?auto=format&fit=crop&w=1400&q=75",
				"alt": "A traditional building with a wooden balcony and hanging lights",
				"author": "Ameer Albahouth",
				"authorUrl": "https://unsplash.com/@ameeralbahouth?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-traditional-building-with-a-wooden-balcony-and-hanging-lights-WE48Axj9gnM?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1760574152812-446463182358?auto=format&fit=crop&w=1400&q=75",
				"alt": "Spanish style house with desert landscaping",
				"author": "Jazmin Wong",
				"authorUrl": "https://unsplash.com/@jazziwong?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/spanish-style-house-with-desert-landscaping-8ckpfn2a-xg?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1775599748383-bff74243489e?auto=format&fit=crop&w=1400&q=75",
				"alt": "White horse harnessed to a carriage on a street",
				"author": "Vanessa Zhu",
				"authorUrl": "https://unsplash.com/@vanessazhu777?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-horse-harnessed-to-a-carriage-on-a-street-WbIwHKFCxyg?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1764259422749-38d5140650d3?auto=format&fit=crop&w=1400&q=75",
				"alt": "White house with agave plants and stone terraces",
				"author": "Mauro Mathys",
				"authorUrl": "https://unsplash.com/@mauraw?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-house-with-agave-plants-and-stone-terraces-36PETqlH7jA?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"autoplay": [
			{
				"src": "https://images.unsplash.com/photo-1765875345190-c2f2dc61d43d?auto=format&fit=crop&w=1400&q=75",
				"alt": "Small cactus in an orange pot on a wooden surface",
				"author": "Fer Troulik",
				"authorUrl": "https://unsplash.com/@fertroulik?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/small-cactus-in-an-orange-pot-on-a-wooden-surface-sblamN6HuIw?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1728897712101-dbf4fab885f8?auto=format&fit=crop&w=1400&q=75",
				"alt": "A group of clay balls sitting on top of a cement block",
				"author": "Simon Infanger",
				"authorUrl": "https://unsplash.com/@photosimon?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-group-of-clay-balls-sitting-on-top-of-a-cement-block-6rCoR9QM4wQ?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1788198575137-b9625734f1b1?auto=format&fit=crop&w=1400&q=75",
				"alt": "A prickly pear cactus in a terracotta pot against a weathered concrete wall",
				"author": "Foad Roshan",
				"authorUrl": "https://unsplash.com/@rfrsrh?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/prickly-pear-cactus-in-terracotta-pot-J0fIbaD7GPk?utm_source=svelte-pasito&utm_medium=referral"
			}
		]
	},
	"brutalist": {
		"hero": [
			{
				"src": "https://images.unsplash.com/photo-1546414701-81cc6963c67f?auto=format&fit=crop&w=1400&q=75",
				"alt": "landscape photography of gray concrete building",
				"author": "Simone Hutsch",
				"authorUrl": "https://unsplash.com/@heysupersimi?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/landscape-photography-of-gray-concrete-building-XK0faa4_mCQ?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1591280122880-eec70c6a5810?auto=format&fit=crop&w=1400&q=75",
				"alt": "grayscale photo of a bridge",
				"author": "Ben Allan",
				"authorUrl": "https://unsplash.com/@ballonandon?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/grayscale-photo-of-a-bridge-bHsLYa7nno4?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1595658511703-2cad160de181?auto=format&fit=crop&w=1400&q=75",
				"alt": "white concrete building under blue sky during daytime",
				"author": "Laura Ockel",
				"authorUrl": "https://unsplash.com/@viazavier?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-DrNCgf5RSpw?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1691432215961-b86fbb5892f5?auto=format&fit=crop&w=1400&q=75",
				"alt": "a river running through a city next to tall buildings",
				"author": "Daniel Moore",
				"authorUrl": "https://unsplash.com/@idocreativestuff?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-river-running-through-a-city-next-to-tall-buildings-EnEvA02Oz4M?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1584539094584-c4231ff84bd4?auto=format&fit=crop&w=1400&q=75",
				"alt": "gray concrete building under blue sky during daytime",
				"author": "Ivan Aleksic",
				"authorUrl": "https://unsplash.com/@ivalex?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/gray-concrete-building-under-blue-sky-during-daytime-FoYLV60_eHY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1591394197887-b27e1ba3b2f9?auto=format&fit=crop&w=1400&q=75",
				"alt": "gray concrete building under white sky during daytime",
				"author": "Michael Jasmund",
				"authorUrl": "https://unsplash.com/@jasmund?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/gray-concrete-building-under-white-sky-during-daytime-Jz7taXW19HQ?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1628848427006-43ffd87cdff4?auto=format&fit=crop&w=1400&q=75",
				"alt": "white concrete building under blue sky during daytime",
				"author": "Fedor Shlyapnikov",
				"authorUrl": "https://unsplash.com/@vatu?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-4BLmfd8VUzU?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"vertical": [
			{
				"src": "https://images.unsplash.com/photo-1713515484049-dacbce063d00?auto=format&fit=crop&w=1400&q=75",
				"alt": "a black and white photo of a tall building",
				"author": "Aram Ramazyan",
				"authorUrl": "https://unsplash.com/@aramazyan?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-and-white-photo-of-a-tall-building-MZ4OrjWZeYE?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1722199617938-5d299b43371c?auto=format&fit=crop&w=1400&q=75",
				"alt": "A black and white photo of a tall building",
				"author": "Aram Ramazyan",
				"authorUrl": "https://unsplash.com/@aramazyan?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-and-white-photo-of-a-tall-building-GLdYM0I2B6M?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1685268759630-a0c318007737?auto=format&fit=crop&w=1400&q=75",
				"alt": "a black and white photo of a tall building",
				"author": "Mike Hindle",
				"authorUrl": "https://unsplash.com/@mikehindle?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-and-white-photo-of-a-tall-building-otqhWc2DWjY?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1625390711106-3728815ebcd9?auto=format&fit=crop&w=1400&q=75",
				"alt": "gray concrete building during daytime",
				"author": "Ricardo Gomez Angel",
				"authorUrl": "https://unsplash.com/@rgaleriacom?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/gray-concrete-building-during-daytime-9AjwOAIdsII?utm_source=svelte-pasito&utm_medium=referral"
			}
		],
		"autoplay": [
			{
				"src": "https://images.unsplash.com/photo-1614620027032-b3a81d4f634b?auto=format&fit=crop&w=1400&q=75",
				"alt": "white textile on black textile",
				"author": "Elimende Inagella",
				"authorUrl": "https://unsplash.com/@elimendeinagella?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-textile-on-black-textile-Oj8AHNj18Gc?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1630424177742-2cc48bae2ba6?auto=format&fit=crop&w=1400&q=75",
				"alt": "white concrete building during daytime",
				"author": "Yakov Leonov",
				"authorUrl": "https://unsplash.com/@yakovleonov?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/white-concrete-building-during-daytime-NJNpUKiZF7s?utm_source=svelte-pasito&utm_medium=referral"
			},
			{
				"src": "https://images.unsplash.com/photo-1653587193700-d80e4ffbbd86?auto=format&fit=crop&w=1400&q=75",
				"alt": "a black and white photo of a building",
				"author": "kiryl",
				"authorUrl": "https://unsplash.com/@kshar2?utm_source=svelte-pasito&utm_medium=referral",
				"photoUrl": "https://unsplash.com/photos/a-black-and-white-photo-of-a-building-S6FCH5FqBfE?utm_source=svelte-pasito&utm_medium=referral"
			}
		]
	}
} satisfies Record<string, PhotoSet>;
