flagShapes = [
	// 3Col, Int++, Revo+
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0  , 1, 0  , 1, 1/6, 0, 1/6],
			[2, 0, 1/6, 1, 1/6, 1, 2/6, 0, 2/6],
			[1, 0, 2/6, 1, 2/6, 1, 3/6, 0, 3/6],
			[2, 0, 3/6, 1, 3/6, 1, 4/6, 0, 4/6],
			[1, 0, 4/6, 1, 4/6, 1, 5/6, 0, 5/6],
			[2, 0, 5/6, 1, 5/6, 1, 1  , 0, 1  ],
			[0, 0, 0, 0.5, 0.5, 0, 1],
		],
		symbol: [0.2, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.6,
				vmax: 1.0,
			},
			{
				name: "t0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Int+, Revo+
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0  , 1, 0  , 1, 1/5, 0, 1/5],
			[2, 0, 1/5, 1, 1/5, 1, 2/5, 0, 2/5],
			[1, 0, 2/5, 1, 2/5, 1, 3/5, 0, 3/5],
			[2, 0, 3/5, 1, 3/5, 1, 4/5, 0, 4/5],
			[1, 0, 4/5, 1, 4/5, 1, 1  , 0, 1  ],
			[0, 0, 0, 0.5, 0.5, 0, 1],
		],
		symbol: [0.2, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.0,
				vmax: 1.0,
			},
			{
				name: "t0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Revo+
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0  , 1, 0  , 1, 1/2, 0, 1/2],
			[2, 0, 1/2, 1, 1/2, 1, 1  , 0, 1  ],
			[0, 0, 0, 0.5, 0.5, 0, 1],
		],
		symbol: [0.2, 0.5, 1.0],
		cond:
		[
			{
				name: "t0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Refo+, Int++
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1/6, 0, 1/6],
			[2, 0, 1/6, 1, 1/6, 1, 2/6, 0, 2/6],
			[1, 0, 2/6, 1, 2/6, 1, 3/6, 0, 3/6],
			[2, 0, 3/6, 1, 3/6, 1, 4/6, 0, 4/6],
			[1, 0, 4/6, 1, 4/6, 1, 5/6, 0, 5/6],
			[2, 0, 5/6, 1, 5/6, 1, 1  , 0, 1  ],
			[0, 0, 0, 1/3, 0, 1/3, 1/2, 0, 1/2]
		],
		symbol: [1/6, 1/4, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.6,
				vmax: 1.0,
			},
			{
				name: "t1",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Refo+, Int+
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1/4, 0, 1/4],
			[2, 0, 1/4, 1, 1/4, 1, 2/4, 0, 2/4],
			[1, 0, 2/4, 1, 2/4, 1, 3/4, 0, 3/4],
			[2, 0, 3/4, 1, 3/4, 1, 1  , 0, 1  ],
			[0, 0, 0, 1/3, 0, 1/3, 1/2, 0, 1/2]
		],
		symbol: [1/6, 1/4, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.0,
				vmax: 1.0,
			},
			{
				name: "t1",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Refo+
	{
		numColors: 3,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1/3, 0, 1/3],
			[0, 0, 1/3, 1, 1/3, 1, 2/3, 0, 2/3],
			[2, 0, 2/3, 1, 2/3, 1, 1, 0, 1]
		],
		symbol: [0.5, 0.5, 1.0],
		cond:
		[
			{
				name: "t1",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 3Col, Int+
	{
		numColors: 3,
		shapes:
		[
			[0, 0, 0, 1/2, 0, 1/2, 1/2, 0, 1/2],
			[1, 1/2, 0, 1, 0, 1, 1/2, 1/2, 1/2],
			[2, 0, 1/2, 1/2, 1/2, 1/2, 1, 0, 1],
			[0, 1/2, 1/2, 1, 1/2, 1, 1, 1/2, 1],
		],
		symbol: [1/4, 1/4, 1.0],
		cond: [ ]
	},
	// 3Col
	{
		numColors: 3,
		shapes:
		[
			[1, 0  , 0, 0,   1, 1/3, 1, 1/3, 0],
			[0, 1/3, 0, 1/3, 1, 2/3, 1, 2/3, 0],
			[2, 2/3, 0, 2/3, 1, 1  , 1, 1  , 0]
		],
		symbol: [0.5, 0.5, 1.0],
		cond: [ ]
	},
	// 2Col, Revo+, Int++
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0, 1, 0, 1, 1, 0, 1],
			[1, 0, 1, 1, 1, 1, 1/2],
			[1, 1, 0, 0, 0, 0, 1/2],
		],
		symbol: [1/2, 1/2, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.6,
				vmax: 1.0,
			},
			{
				name: "t0",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Revo+, Int+
	{
		numColors: 2,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1, 0, 1],
			[0, 0, 0, 1, 0.5, 0, 1],
		],
		symbol: [1/3, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.0,
				vmax: 1.0,
			},
			{
				name: "t0",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Revo+
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0, 1, 0, 0, 1],
			[1, 1, 0, 0, 1, 1, 1]
		],
		symbol: [0.5, 0.5, 1.0],
		cond:
		[
			{
				name: "t0",
				vmin: 0.2,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Refo+, Int++
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0  , 1, 0  , 1, 1/7, 0, 1/7],
			[1, 0, 1/7, 1, 1/7, 1, 2/7, 0, 2/7],
			[0, 0, 2/7, 1, 2/7, 1, 3/7, 0, 3/7],
			[1, 0, 3/7, 1, 3/7, 1, 4/7, 0, 4/7],
			[0, 0, 4/7, 1, 4/7, 1, 5/7, 0, 5/7],
			[1, 0, 5/7, 1, 5/7, 1, 6/7, 0, 6/7],
			[0, 0, 6/7, 1, 6/7, 1, 1  , 0, 1  ],
		],
		symbol: [0.5, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.6,
				vmax: 1.0,
			},
			{
				name: "t1",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Refo+, Int+
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0  , 1, 0  , 1, 1/5, 0, 1/5],
			[1, 0, 1/5, 1, 1/5, 1, 2/5, 0, 2/5],
			[0, 0, 2/5, 1, 2/5, 1, 3/5, 0, 3/5],
			[1, 0, 3/5, 1, 3/5, 1, 4/5, 0, 4/5],
			[0, 0, 4/5, 1, 4/5, 1, 1  , 0, 1  ],
		],
		symbol: [0.5, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.0,
				vmax: 1.0,
			},
			{
				name: "t1",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Refo+
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0  , 1, 0  , 1, 1/2, 0, 1/2],
			[1, 0, 1/2, 1, 1/2, 1, 1  , 0, 1  ],
		],
		symbol: [0.5, 0.5, 1.0],
		cond:
		[
			{
				name: "t1",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Int++
	{
		numColors: 2,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1, 0, 1],
			[0, 0.34, 0, 0.41, 0, 0.41, 1, 0.34, 1],
			[0, 0, 0.43, 1, 0.43, 1, 0.57, 0, 0.57]
		],
		symbol: [0.175, 0.22, 0.7],
		cond:
		[
			{
				name: "b0",
				vmin: 0.6,
				vmax: 1.0,
			}
		]
	},
	// 2Col, Int+
	{
		numColors: 2,
		shapes:
		[
			[1, 0, 0, 1, 0, 1, 1, 0, 1],
			[0, 0, 0, 0.37, 0, 0.43, 1/16, 0.37, 2/16, 0.43, 3/16, 0.37, 4/16, 0.43, 5/16, 0.37, 6/16, 0.43, 7/16, 0.37, 8/16, 0.43, 9/16, 0.37, 10/16, 0.43, 11/16, 0.37, 12/16, 0.43, 13/16, 0.37, 14/16, 0.43, 15/16, 0.37, 1, 0.43, 1, 0, 1]
		],
		symbol: [0.2, 0.5, 1.0],
		cond:
		[
			{
				name: "b0",
				vmin: 0.0,
				vmax: 1.0,
			}
		]
	},
	// 2Col
	{
		numColors: 2,
		shapes:
		[
			[0, 0, 0, 0.5, 0, 0.5, 1, 0, 1],
			[1, 0.5, 0, 1, 0, 1, 1, 0.5, 1]
		],
		symbol: [0.5, 0.5, 1.0],
		cond: [ ]
	},
	// 1Col, Revo+
	{
		numColors: 1,
		shapes:
		[
			[0, 0, 0, 1, 0, 1, 1, 0, 1]
		],
		symbol: [1/6, 1/4, 1.0],
		cond:
		[
			{
				name: "t0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	// 1Col
	{
		numColors: 1,
		shapes:
		[
			[0, 0, 0, 1, 0, 1, 1, 0, 1]
		],
		symbol: [0.5, 0.5, 1.0],
		cond: [ ]
	}
];

flagColors = [
	//Anarchisme
	{
		bgColor: "#000000",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "anar",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	//Monarichisme
	{
		bgColor: "#ffffff",
		fgColor: "#1218bb",
		cond:
		[
			{
				name: "mona",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	//Nationalisme
	{
		bgColor: "#a45e22",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "b1",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	//Conservatism
	{
		bgColor: "#1b0ea1",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "s1",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	//Communiste
	{
		bgColor: "#c70106",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "p0",
				vmin: 0.6,
				vmax: 1.0,
			}
		]
	},
	//Socialiste
	{
		bgColor: "#c92375",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "m0",
				vmin: 0.4,
				vmax: 1.0,
			},
			{
				name: "p0",
				vmin: 0.0,
				vmax: 0.59999,
			}
		]
	},
	{
		bgColor: "#c92375",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "m0",
				vmin: 0.4,
				vmax: 1.0,
			},
			{
				name: "p1",
				vmin: 0.0,
				vmax: 1.0,
			}
		]
	},
	//Liberal
	{
		bgColor: "#ffbd00",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "m1",
				vmin: 0.4,
				vmax: 1.0,
			},
			{
				name: "p1",
				vmin: 0.1,
				vmax: 1.0,
			}
		]
	},
	//Ecologie
	{
		bgColor: "#18ab10",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "e0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	},
	//Egalité (constructivisme)
	{
		bgColor: "#6a1094",
		fgColor: "#ffffff",
		cond:
		[
			{
				name: "c0",
				vmin: 0.4,
				vmax: 1.0,
			}
		]
	}
];

flagSymbols = [
	//Nazisme
	{
		id: 5,
		cond:
		[
			{
				name: "c1",
				vmin: 0.85,
				vmax: 1.0,
			},
			{
				name: "j1",
				vmin: 0.6,
				vmax: 1.0,
			}
		]
	},
	//Monarchisme
	{
		id: 2,
		cond:
		[
			{
				name: "mona",
				vmin: 0.5,
				vmax: 1.0,
			}
		]
	},
	//Feminisme
	{
		id: 1,
		cond:
		[
			{
				name: "femi",
				vmin: 0.95,
				vmax: 1.0,
			}
		]
	},
	//Communisme
	{
		id: 0,
		cond:
		[
			{
				name: "p0",
				vmin: 0.8,
				vmax: 1.0,
			}
		]
	},
	//Conservatisme
	{
		id: 4,
		cond:
		[
			{
				name: "s1",
				vmin: 0.6,
				vmax: 1.0,
			}
		]
	},
	//Ecologie
	{
		id: 6,
		cond:
		[
			{
				name: "e0",
				vmin: 0.7,
				vmax: 1.0,
			}
		]
	},
	//Internationalisme
	{
		id: 7,
		cond:
		[
			{
				name: "b0",
				vmin: 0.7,
				vmax: 1.0,
			}
		]
	},
	//Revolution
	{
		id: 3,
		cond:
		[
			{
				name: "t0",
				vmin: 0.6,
				vmax: 1.0,
			}
		]
	},
];
