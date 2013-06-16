var maps = {
	"singleplayer":[
		{
			"name":"Rescue",
			"briefing": "In the months since the great war, mankind has fallen into chaos. Billions are dead with cities in ruins.\nSmall groups of survivors band together to try and survive as best as they can.\nWe are trying to reach out to all the survivors in this sector before we join back with the main colony.",

			/* Map Details */
			"mapImage":"images/maps/level-one.png",
			"startX":36,
			"startY":0,

			/* Map coordinates that are obstructed by terrain*/
			"mapGridWidth":60,
			"mapGridHeight":40,
			"mapObstructedTerrain":[
				[49,8], [50,8], [51,8], [51,9], [52,9], [53,9], [53,10], [53,11], [53,12], [53,13], [53,14], [53,15], [53,16], [52,16], [52,17], [52,18], [52,19], [51,19], [50,19], [50,18], [50,17], [49,17], [49,18], [48,18], [47,18], [47,17], [47,16], [48,16], [49,16], [49,15], [49,14], [48,14], [48,13], [48,12], [49,12], [49,11], [50,11], [50,10], [49,10], [49,9], [44,0], [45,0], [45,1], [45,2], [46,2], [47,2], [47,3], [48,3], [48,4], [48,5], [49,5], [49,6], [49,7], [50,7], [51,7], [51,6], [51,5], [51,4], [52,4], [53,4], [53,3], [54,3], [55,3], [55,2], [56,2], [56,1], [56,0], [55,0], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [48,20], [48,21], [47,21], [46,21], [45,21], [44,21], [43,21], [43,20], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [50,22], [50,23], [50,24], [49,24], [48,24], [47,24], [47,25], [47,26], [47,27], [47,28], [47,29], [47,30], [46,30], [45,30], [44,30], [43,30], [43,29], [43,28], [43,27], [43,26], [43,25], [43,24], [42,24], [41,24], [41,23], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [59,38], [59,37], [59,36], [59,35], [59,34], [59,33], [59,32], [59,31], [59,30], [59,29], [0,0], [1,0], [2,0], [1,1], [2,1], [10,3], [11,3], [12,3], [12,2], [13,2], [14,2], [14,3], [14,4], [15,4], [15,5], [15,6], [14,6], [13,6], [13,5], [12,5], [11,5], [10,5], [10,4], [3,9], [4,9], [5,9], [5,10], [6,10], [7,10], [8,10], [9,10], [9,11], [10,11], [11,11], [11,10], [12,10], [13,10], [13,11], [13,12], [12,12], [11,12], [10,12], [9,12], [8,12], [7,12], [7,13], [7,14], [6,14], [5,14], [5,13], [5,12], [5,11], [4,11], [3,11], [3,10], [33,33], [34,33], [35,33], [35,34], [35,35], [34,35], [33,35], [33,34], [27,39], [27,38], [27,37], [28,37], [28,36], [28,35], [28,34], [28,33], [28,32], [28,31], [28,30], [28,29], [29,29], [29,28], [29,27], [29,26], [29,25], [29,24], [29,23], [30,23], [31,23], [32,23], [32,22], [32,21], [31,21], [30,21], [30,22], [29,22], [28,22], [27,22], [26,22], [26,21], [25,21], [24,21], [24,22], [24,23], [25,23], [26,23], [26,24], [25,24], [25,25], [24,25], [24,26], [24,27], [25,27], [25,28], [25,29], [24,29], [23,29], [23,30], [23,31], [24,31], [25,31], [25,32], [25,33], [24,33], [23,33], [23,34], [23,35], [24,35], [24,36], [24,37], [23,37], [22,37], [22,38], [22,39], [23,39], [24,39], [25,39], [26,0], [26,1], [25,1], [25,2], [25,3], [26,3], [27,3], [27,2], [28,2], [29,2], [29,3], [30,3], [31,3], [31,2], [31,1], [32,1], [32,0], [33,0], [32,8], [33,8], [34,8], [34,9], [34,10], [33,10], [32,10], [32,9], [8,29], [9,29], [9,30], [17,32], [18,32], [19,32], [19,33], [18,33], [17,33], [18,34], [19,34], [3,27], [4,27], [4,26], [3,26], [2,26], [3,25], [4,25], [9,20], [10,20], [11,20], [11,21], [10,21], [10,19], [19,7], [15,7], [29,12], [30,13], [20,14], [21,14], [34,13], [35,13], [36,13], [36,14], [35,14], [34,14], [35,15], [36,15], [16,18], [17,18], [18,18], [16,19], [17,19], [18,19], [17,20], [18,20], [11,19], [58,0], [59,0], [58,1], [59,1], [59,2], [58,3], [59,3], [58,4], [59,4], [59,5], [58,6], [59,6], [58,7], [59,7], [59,8], [58,9], [59,9], [58,10], [59,10], [59,11], [52,6], [53,6], [54,6], [52,7], [53,7], [54,7], [53,8], [54,8], [44,17], [46,32], [55,32], [54,28], [26,34], [34,34], [4,10], [6,11], [6,12], [6,13], [7,11], [8,11], [12,11], [27,0], [27,1], [26,2], [28,1], [28,0], [29,0], [29,1], [30,2], [30,1], [30,0], [31,0], [33,9], [46,0], [47,0], [48,0], [49,0], [50,0], [51,0], [52,0], [53,0], [54,0], [55,1], [54,1], [53,1], [52,1], [51,1], [50,1], [49,1], [48,1], [47,1], [46,1], [48,2], [49,2], [50,2], [51,2], [52,2], [53,2], [54,2], [52,3], [51,3], [50,3], [49,3], [49,4], [50,4], [50,5], [50,6], [50,9], [51,10], [52,10], [51,11], [52,11], [50,12], [51,12], [52,12], [49,13], [50,13], [51,13], [52,13], [50,14], [51,14], [52,14], [50,15], [51,15], [52,15], [50,16], [51,16], [51,17], [48,17], [51,18], [44,20], [45,20], [46,20], [47,20], [42,23], [43,23], [44,23], [45,23], [46,23], [47,23], [48,23], [49,23], [44,24], [45,24], [46,24], [44,25], [45,25], [46,25], [44,26], [45,26], [46,26], [44,27], [45,27], [46,27], [44,28], [45,28], [46,28], [44,29], [45,29], [46,29], [11,4], [12,4], [13,4], [13,3], [14,5], [25,22], [31,22], [27,23], [28,23], [27,24], [28,24], [26,25], [27,25], [28,25], [25,26], [26,26], [27,26], [28,26], [26,27], [27,27], [28,27], [26,28], [27,28], [28,28], [26,29], [27,29], [24,30], [25,30], [26,30], [27,30], [26,31], [27,31], [26,32], [27,32], [26,33], [27,33], [24,34], [25,34], [27,34], [25,35], [26,35], [27,35], [25,36], [26,36], [27,36], [25,37], [26,37], [23,38], [24,38], [25,38], [26,38], [26,39], [2,25], [9,19], [36,31]
			],

			/* Entities to be loaded */
			"requirements":{
				"buildings":["base"],
				"vehicles":["transport","scout-tank","heavy-tank"],
				"aircraft":[],
				"terrain":[]
			},

			/* Economy Related*/
			"cash":{
				"blue":0,
				"green":0
			},

			/* Entities to be added */
			"items":[
				/* Slightly damaged base */
				{"type":"buildings","name":"base","x":55,"y":6,"team":"blue","life":100},

				{"type":"vehicles","name":"heavy-tank","x":57,"y":12,"direction":4,"team":"blue","uid":-1},

				/* Two transport vehicles waiting just outside the visible map */
				{"type":"vehicles","name":"transport","x":-3,"y":2,"direction":2,"team":"blue","uid":-3,"selectable":false},
				{"type":"vehicles","name":"transport","x":-3,"y":4,"direction":2,"team":"blue","uid":-4,"selectable":false},

				/* Two damaged enemy scout-tanks patroling the area*/
				{"type":"vehicles","name":"scout-tank","x":40,"y":20,"direction":4,"team":"green","uid":-2,"life":20,"orders":{"type":"patrol","from":{"x":34,"y":20},"to":{"x":42,"y":25}}},
				{"type":"vehicles","name":"scout-tank","x":14,"y":0,"direction":4,"team":"green","uid":-5,"life":20,"orders":{"type":"patrol","from":{"x":14,"y":0},"to":{"x":14,"y":14}}},

			],


			/* Conditional and Timed Trigger Events */
			"triggers":[
			    {"type":"timed","time":3000,
			        "action":function(){
						game.showMessage("op", "Commander!! We haven't heard from the last convoy in over two hours. They should have arrived by now.");
			        }
			    },
			    {"type":"timed","time":10000,
			        "action":function(){
						game.showMessage("op", "They were last seen in the North West Sector. Could you investigate?");
			        }
			    },
			    {"type":"conditional",
			        "condition":function(){
						return(isItemDead(-1)||isItemDead(-3)||isItemDead(-4));
			        },
			        "action":function(){
			            singleplayer.endLevel(false);
			        }
			    },
			   {"type":"conditional",
			        "condition":function(){
						// Check if first enemy is dead
						return isItemDead(-2);
			        },
			        "action":function(){
						game.showMessage("op", "The rebels have been getting very aggressive lately. I hope the convoy is safe. Find them and escort them back to the base.");
			        }
			    },
				{"type":"conditional",
					"condition":function(){
						// Check if first enemy is dead
						return isItemDead(-2);
					},
					"action":function(){
						game.showMessage("op", "The rebels have been getting very aggressive lately. I hope the convoy is safe. Find them and escort them back to the base.");
					}
				},
				{"type":"conditional",
					"condition":function(){
						var hero = game.getItemByUid(-1);
						return(hero && hero.x<30 && hero.y<30);
					},
					"action":function(){
						game.showMessage("driver", "Can anyone hear us? Our convoy has been pinned down by rebel tanks. We need help.");
					}
				},
				{"type":"conditional",
					"condition":function(){
						var hero = game.getItemByUid(-1);
						return(hero && hero.x<10 && hero.y<10);
					},
					"action":function(){
						var hero = game.getItemByUid(-1);
						game.showMessage("driver", "Thank you. We thought we would never get out of here alive.");
						game.sendCommand([-3,-4],{type:"guard",to:hero});
					}
				},
				{"type":"conditional",
					"condition":function(){
						var transport1 = game.getItemByUid(-3);
						var transport2 = game.getItemByUid(-4);
						return(transport1 && transport2 && transport1.x>52 && transport2.x>52 && transport2.y<18 && transport1.y<18);
					},
					"action":function(){
						singleplayer.endLevel(true);
					}
				},

			],
		},
		{
			"name":"Assault",
			"briefing": "Thanks to the supplies from the convoy, we now have the base up and running.\n The rebels nearby are proving to be a problem. We need to take them out. \n First set up the base defences. Then find and destroy all rebels in the area.\n The colony will be sending us reinforcements to help us out.",

			/* Map Details */
			"mapImage":"images/maps/level-one.png",
			"startX":36,
			"startY":0,

			/* Map coordinates that are obstructed by terrain*/
			"mapGridWidth":60,
			"mapGridHeight":40,
			"mapObstructedTerrain":[
				[49,8], [50,8], [51,8], [51,9], [52,9], [53,9], [53,10], [53,11], [53,12], [53,13], [53,14], [53,15], [53,16], [52,16], [52,17], [52,18], [52,19], [51,19], [50,19], [50,18], [50,17], [49,17], [49,18], [48,18], [47,18], [47,17], [47,16], [48,16], [49,16], [49,15], [49,14], [48,14], [48,13], [48,12], [49,12], [49,11], [50,11], [50,10], [49,10], [49,9], [44,0], [45,0], [45,1], [45,2], [46,2], [47,2], [47,3], [48,3], [48,4], [48,5], [49,5], [49,6], [49,7], [50,7], [51,7], [51,6], [51,5], [51,4], [52,4], [53,4], [53,3], [54,3], [55,3], [55,2], [56,2], [56,1], [56,0], [55,0], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [48,20], [48,21], [47,21], [46,21], [45,21], [44,21], [43,21], [43,20], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [50,22], [50,23], [50,24], [49,24], [48,24], [47,24], [47,25], [47,26], [47,27], [47,28], [47,29], [47,30], [46,30], [45,30], [44,30], [43,30], [43,29], [43,28], [43,27], [43,26], [43,25], [43,24], [42,24], [41,24], [41,23], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [59,38], [59,37], [59,36], [59,35], [59,34], [59,33], [59,32], [59,31], [59,30], [59,29], [0,0], [1,0], [2,0], [1,1], [2,1], [10,3], [11,3], [12,3], [12,2], [13,2], [14,2], [14,3], [14,4], [15,4], [15,5], [15,6], [14,6], [13,6], [13,5], [12,5], [11,5], [10,5], [10,4], [3,9], [4,9], [5,9], [5,10], [6,10], [7,10], [8,10], [9,10], [9,11], [10,11], [11,11], [11,10], [12,10], [13,10], [13,11], [13,12], [12,12], [11,12], [10,12], [9,12], [8,12], [7,12], [7,13], [7,14], [6,14], [5,14], [5,13], [5,12], [5,11], [4,11], [3,11], [3,10], [33,33], [34,33], [35,33], [35,34], [35,35], [34,35], [33,35], [33,34], [27,39], [27,38], [27,37], [28,37], [28,36], [28,35], [28,34], [28,33], [28,32], [28,31], [28,30], [28,29], [29,29], [29,28], [29,27], [29,26], [29,25], [29,24], [29,23], [30,23], [31,23], [32,23], [32,22], [32,21], [31,21], [30,21], [30,22], [29,22], [28,22], [27,22], [26,22], [26,21], [25,21], [24,21], [24,22], [24,23], [25,23], [26,23], [26,24], [25,24], [25,25], [24,25], [24,26], [24,27], [25,27], [25,28], [25,29], [24,29], [23,29], [23,30], [23,31], [24,31], [25,31], [25,32], [25,33], [24,33], [23,33], [23,34], [23,35], [24,35], [24,36], [24,37], [23,37], [22,37], [22,38], [22,39], [23,39], [24,39], [25,39], [26,0], [26,1], [25,1], [25,2], [25,3], [26,3], [27,3], [27,2], [28,2], [29,2], [29,3], [30,3], [31,3], [31,2], [31,1], [32,1], [32,0], [33,0], [32,8], [33,8], [34,8], [34,9], [34,10], [33,10], [32,10], [32,9], [8,29], [9,29], [9,30], [17,32], [18,32], [19,32], [19,33], [18,33], [17,33], [18,34], [19,34], [3,27], [4,27], [4,26], [3,26], [2,26], [3,25], [4,25], [9,20], [10,20], [11,20], [11,21], [10,21], [10,19], [19,7], [15,7], [29,12], [30,13], [20,14], [21,14], [34,13], [35,13], [36,13], [36,14], [35,14], [34,14], [35,15], [36,15], [16,18], [17,18], [18,18], [16,19], [17,19], [18,19], [17,20], [18,20], [11,19], [58,0], [59,0], [58,1], [59,1], [59,2], [58,3], [59,3], [58,4], [59,4], [59,5], [58,6], [59,6], [58,7], [59,7], [59,8], [58,9], [59,9], [58,10], [59,10], [59,11], [52,6], [53,6], [54,6], [52,7], [53,7], [54,7], [53,8], [54,8], [44,17], [46,32], [55,32], [54,28], [26,34], [34,34], [4,10], [6,11], [6,12], [6,13], [7,11], [8,11], [12,11], [27,0], [27,1], [26,2], [28,1], [28,0], [29,0], [29,1], [30,2], [30,1], [30,0], [31,0], [33,9], [46,0], [47,0], [48,0], [49,0], [50,0], [51,0], [52,0], [53,0], [54,0], [55,1], [54,1], [53,1], [52,1], [51,1], [50,1], [49,1], [48,1], [47,1], [46,1], [48,2], [49,2], [50,2], [51,2], [52,2], [53,2], [54,2], [52,3], [51,3], [50,3], [49,3], [49,4], [50,4], [50,5], [50,6], [50,9], [51,10], [52,10], [51,11], [52,11], [50,12], [51,12], [52,12], [49,13], [50,13], [51,13], [52,13], [50,14], [51,14], [52,14], [50,15], [51,15], [52,15], [50,16], [51,16], [51,17], [48,17], [51,18], [44,20], [45,20], [46,20], [47,20], [42,23], [43,23], [44,23], [45,23], [46,23], [47,23], [48,23], [49,23], [44,24], [45,24], [46,24], [44,25], [45,25], [46,25], [44,26], [45,26], [46,26], [44,27], [45,27], [46,27], [44,28], [45,28], [46,28], [44,29], [45,29], [46,29], [11,4], [12,4], [13,4], [13,3], [14,5], [25,22], [31,22], [27,23], [28,23], [27,24], [28,24], [26,25], [27,25], [28,25], [25,26], [26,26], [27,26], [28,26], [26,27], [27,27], [28,27], [26,28], [27,28], [28,28], [26,29], [27,29], [24,30], [25,30], [26,30], [27,30], [26,31], [27,31], [26,32], [27,32], [26,33], [27,33], [24,34], [25,34], [27,34], [25,35], [26,35], [27,35], [25,36], [26,36], [27,36], [25,37], [26,37], [23,38], [24,38], [25,38], [26,38], [26,39], [2,25], [9,19], [36,31]
			],

			/* Entities to be loaded */
			"requirements":{
				"buildings":["base","ground-turret","starport","harvester"],
				"vehicles":["transport","scout-tank","heavy-tank"],
				"aircraft":["chopper"],
				"terrain":[]
			},

			/* Economy Related*/
			"cash":{
				"blue":0,
				"green":0
			},

			/* Entities to be added */
			"items":[
				{"type":"buildings","name":"base","x":55,"y":6,"team":"blue","uid":-1},
				{"type":"buildings","name":"ground-turret","x":53,"y":17,"team":"blue"},
				{"type":"vehicles","name":"heavy-tank","x":55,"y":16,"direction":4,"team":"blue","uid":-2,"orders":{"type":"sentry"}},

				/* The first wave of attacks*/
				{"type":"vehicles","name":"scout-tank","x":55,"y":36,"direction":4,"team":"green","orders":{"type":"hunt"}},
				{"type":"vehicles","name":"scout-tank","x":53,"y":36,"direction":4,"team":"green","orders":{"type":"hunt"}},

				/* Enemies patroling the area */
				{"type":"vehicles","name":"scout-tank","x":5,"y":5,"direction":4,"team":"green","orders":{"type":"patrol","from":{"x":5,"y":5},"to":{"x":20,"y":20}}},
				{"type":"vehicles","name":"scout-tank","x":5,"y":15,"direction":4,"team":"green","orders":{"type":"patrol","from":{"x":5,"y":15},"to":{"x":20,"y":30}}},
				{"type":"vehicles","name":"scout-tank","x":25,"y":5,"direction":4,"team":"green","orders":{"type":"patrol","from":{"x":25,"y":5},"to":{"x":25,"y":20}}},
				{"type":"vehicles","name":"scout-tank","x":35,"y":5,"direction":4,"team":"green","orders":{"type":"patrol","from":{"x":35,"y":5},"to":{"x":35,"y":30}}},

				/* The Evil Rebel Base*/
				{"type":"buildings","name":"base","x":5,"y":36,"team":"green","uid":-11},
				{"type":"buildings","name":"starport","x":1,"y":30,"team":"green","uid":-12},
				{"type":"buildings","name":"starport","x":4,"y":32,"team":"green","uid":-13},
				{"type":"buildings","name":"harvester","x":1,"y":38,"team":"green","action":"deploy"},
				{"type":"buildings","name":"ground-turret","x":5,"y":28,"team":"green"},
				{"type":"buildings","name":"ground-turret","x":7,"y":33,"team":"green"},
				{"type":"buildings","name":"ground-turret","x":8,"y":37,"team":"green"},
			],

			/* Conditional and Timed Trigger Events */
			"triggers":[
				{"type":"timed","time":8000,
			        "action":function(){
						// Send in reinforcements to defend the base from the first wave
						game.showMessage("op", "Commander!! Reinforcements have arrived from the colony.");
						var hero = game.getItemByUid(-2);
						game.add ({"type":"vehicles","name":"scout-tank","x":61,"y":22,"team":"blue","orders":{"type":"guard","to":hero}});
						game.add ({"type":"vehicles","name":"scout-tank","x":61,"y":21,"team":"blue","orders":{"type":"guard","to":hero}});
			        }
			    },
				{"type":"timed","time":25000,
			        "action":function(){
						// Supply extra cash
						game.cash["blue"] = 1500;
						game.showMessage("op", "Commander!! We have enough resources for another ground turret. Set up the turret to keep the base safe from any more attacks.");
			        }
			    },
				// Construct a couple of bad guys to hunt the player every time enemy has enough money
				{"type":"timed","time":60000,"repeat":true,
				    "action":function(){
						if(game.cash["green"]>1000){
							game.sendCommand([-12,-13],{type:"construct-unit",details:{type:"vehicles",name:"scout-tank",orders:{"type":"hunt"}}});
						}
				    }
				},
				// Send in some reinforcements every three minutes
				{"type":"timed","time":180000,"repeat":true,
				    "action":function(){
						game.showMessage("op", "Commander!! More Reinforcments have arrived.");
						game.add ({"type":"vehicles","name":"scout-tank","x":61,"y":22,"team":"blue","orders":{"type":"move","to":{"x":55,"y":21}}});
						game.add ({"type":"vehicles","name":"heavy-tank","x":61,"y":23,"team":"blue","orders":{"type":"move","to":{"x":56,"y":23}}});
				    }
				},
				// Send in air support after 10 minutes
				{"type":"timed","time":600000,
				    "action":function(){
						game.showMessage("pilot", "Close Air Support en route. Will try to do what I can.");
						game.add ({"type":"aircraft","name":"chopper","x":61,"y":22,"selectable":false,"team":"blue","orders":{"type":"hunt"}});
				    }
				},
				/* Lose if our base gets destroyed  */
				{"type":"conditional",
				    "condition":function(){
				        return isItemDead(-1);
				    },
				    "action":function(){
				        singleplayer.endLevel(false);
				    }
				},
				/* Win if enemy base gets at least half destroyed */
				{"type":"conditional",
				    "condition":function(){
				        var enemyBase = game.getItemByUid(-11);
						return(!enemyBase || (enemyBase.life<=enemyBase.hitPoints/2));
				    },
				    "action":function(){
				        singleplayer.endLevel(true);
					}
				},
			]
		},
		{
			"name":"Under Siege",
			"briefing": "Thanks to the attack led by you, we now have control of the rebel base. We can expect the rebels to try to retaliate.\n The colony is sending in aircraft to help us evacuate back to the main camp. All we need to do is hang tight until the choppers get here. \n Luckily, we have some supplies and ammunition to defend ourselves with until they get here. \n Protect the transports at all costs.",

			/* Map Details */
			"mapImage":"images/maps/level-one.png",
			"startX":0,
			"startY":20,

			/* Map coordinates that are obstructed by terrain*/
			"mapGridWidth":60,
			"mapGridHeight":40,
			"mapObstructedTerrain":[
				[49,8], [50,8], [51,8], [51,9], [52,9], [53,9], [53,10], [53,11], [53,12], [53,13], [53,14], [53,15], [53,16], [52,16], [52,17], [52,18], [52,19], [51,19], [50,19], [50,18], [50,17], [49,17], [49,18], [48,18], [47,18], [47,17], [47,16], [48,16], [49,16], [49,15], [49,14], [48,14], [48,13], [48,12], [49,12], [49,11], [50,11], [50,10], [49,10], [49,9], [44,0], [45,0], [45,1], [45,2], [46,2], [47,2], [47,3], [48,3], [48,4], [48,5], [49,5], [49,6], [49,7], [50,7], [51,7], [51,6], [51,5], [51,4], [52,4], [53,4], [53,3], [54,3], [55,3], [55,2], [56,2], [56,1], [56,0], [55,0], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [48,20], [48,21], [47,21], [46,21], [45,21], [44,21], [43,21], [43,20], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [50,22], [50,23], [50,24], [49,24], [48,24], [47,24], [47,25], [47,26], [47,27], [47,28], [47,29], [47,30], [46,30], [45,30], [44,30], [43,30], [43,29], [43,28], [43,27], [43,26], [43,25], [43,24], [42,24], [41,24], [41,23], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [59,38], [59,37], [59,36], [59,35], [59,34], [59,33], [59,32], [59,31], [59,30], [59,29], [0,0], [1,0], [2,0], [1,1], [2,1], [10,3], [11,3], [12,3], [12,2], [13,2], [14,2], [14,3], [14,4], [15,4], [15,5], [15,6], [14,6], [13,6], [13,5], [12,5], [11,5], [10,5], [10,4], [3,9], [4,9], [5,9], [5,10], [6,10], [7,10], [8,10], [9,10], [9,11], [10,11], [11,11], [11,10], [12,10], [13,10], [13,11], [13,12], [12,12], [11,12], [10,12], [9,12], [8,12], [7,12], [7,13], [7,14], [6,14], [5,14], [5,13], [5,12], [5,11], [4,11], [3,11], [3,10], [33,33], [34,33], [35,33], [35,34], [35,35], [34,35], [33,35], [33,34], [27,39], [27,38], [27,37], [28,37], [28,36], [28,35], [28,34], [28,33], [28,32], [28,31], [28,30], [28,29], [29,29], [29,28], [29,27], [29,26], [29,25], [29,24], [29,23], [30,23], [31,23], [32,23], [32,22], [32,21], [31,21], [30,21], [30,22], [29,22], [28,22], [27,22], [26,22], [26,21], [25,21], [24,21], [24,22], [24,23], [25,23], [26,23], [26,24], [25,24], [25,25], [24,25], [24,26], [24,27], [25,27], [25,28], [25,29], [24,29], [23,29], [23,30], [23,31], [24,31], [25,31], [25,32], [25,33], [24,33], [23,33], [23,34], [23,35], [24,35], [24,36], [24,37], [23,37], [22,37], [22,38], [22,39], [23,39], [24,39], [25,39], [26,0], [26,1], [25,1], [25,2], [25,3], [26,3], [27,3], [27,2], [28,2], [29,2], [29,3], [30,3], [31,3], [31,2], [31,1], [32,1], [32,0], [33,0], [32,8], [33,8], [34,8], [34,9], [34,10], [33,10], [32,10], [32,9], [8,29], [9,29], [9,30], [17,32], [18,32], [19,32], [19,33], [18,33], [17,33], [18,34], [19,34], [3,27], [4,27], [4,26], [3,26], [2,26], [3,25], [4,25], [9,20], [10,20], [11,20], [11,21], [10,21], [10,19], [19,7], [15,7], [29,12], [30,13], [20,14], [21,14], [34,13], [35,13], [36,13], [36,14], [35,14], [34,14], [35,15], [36,15], [16,18], [17,18], [18,18], [16,19], [17,19], [18,19], [17,20], [18,20], [11,19], [58,0], [59,0], [58,1], [59,1], [59,2], [58,3], [59,3], [58,4], [59,4], [59,5], [58,6], [59,6], [58,7], [59,7], [59,8], [58,9], [59,9], [58,10], [59,10], [59,11], [52,6], [53,6], [54,6], [52,7], [53,7], [54,7], [53,8], [54,8], [44,17], [46,32], [55,32], [54,28], [26,34], [34,34], [4,10], [6,11], [6,12], [6,13], [7,11], [8,11], [12,11], [27,0], [27,1], [26,2], [28,1], [28,0], [29,0], [29,1], [30,2], [30,1], [30,0], [31,0], [33,9], [46,0], [47,0], [48,0], [49,0], [50,0], [51,0], [52,0], [53,0], [54,0], [55,1], [54,1], [53,1], [52,1], [51,1], [50,1], [49,1], [48,1], [47,1], [46,1], [48,2], [49,2], [50,2], [51,2], [52,2], [53,2], [54,2], [52,3], [51,3], [50,3], [49,3], [49,4], [50,4], [50,5], [50,6], [50,9], [51,10], [52,10], [51,11], [52,11], [50,12], [51,12], [52,12], [49,13], [50,13], [51,13], [52,13], [50,14], [51,14], [52,14], [50,15], [51,15], [52,15], [50,16], [51,16], [51,17], [48,17], [51,18], [44,20], [45,20], [46,20], [47,20], [42,23], [43,23], [44,23], [45,23], [46,23], [47,23], [48,23], [49,23], [44,24], [45,24], [46,24], [44,25], [45,25], [46,25], [44,26], [45,26], [46,26], [44,27], [45,27], [46,27], [44,28], [45,28], [46,28], [44,29], [45,29], [46,29], [11,4], [12,4], [13,4], [13,3], [14,5], [25,22], [31,22], [27,23], [28,23], [27,24], [28,24], [26,25], [27,25], [28,25], [25,26], [26,26], [27,26], [28,26], [26,27], [27,27], [28,27], [26,28], [27,28], [28,28], [26,29], [27,29], [24,30], [25,30], [26,30], [27,30], [26,31], [27,31], [26,32], [27,32], [26,33], [27,33], [24,34], [25,34], [27,34], [25,35], [26,35], [27,35], [25,36], [26,36], [27,36], [25,37], [26,37], [23,38], [24,38], [25,38], [26,38], [26,39], [2,25], [9,19], [36,31]
			],

			/* Entities to be loaded */
			"requirements":{
				"buildings":["base","ground-turret","starport","harvester"],
				"vehicles":["transport","scout-tank","heavy-tank"],
				"aircraft":["chopper","wraith"],
				"terrain":[]
			},

			/* Economy Related*/
			"cash":{
				"blue":0,
				"green":0
			},

			/* Entities to be added */
			"items":[
				/* The Rebel Base now in our hands */
				{"type":"buildings","name":"base","x":5,"y":36,"team":"blue","uid":-11},
				{"type":"buildings","name":"starport","x":1,"y":28,"team":"blue","uid":-12},
				{"type":"buildings","name":"starport","x":4,"y":32,"team":"blue","uid":-13},
				{"type":"buildings","name":"harvester","x":1,"y":38,"team":"blue","action":"deploy"},
				{"type":"buildings","name":"ground-turret","x":7,"y":28,"team":"blue"},
				{"type":"buildings","name":"ground-turret","x":8,"y":32,"team":"blue"},
				{"type":"buildings","name":"ground-turret","x":11,"y":37,"team":"blue"},

				/* The transports that need to be protected*/
				{"type":"vehicles","name":"transport","x":2,"y":33,"team":"blue","direction":2,"selectable":false,"uid":-1},
				{"type":"vehicles","name":"transport","x":1,"y":34,"team":"blue","direction":2,"selectable":false,"uid":-2},
				{"type":"vehicles","name":"transport","x":2,"y":35,"team":"blue","direction":2,"selectable":false,"uid":-3},
				{"type":"vehicles","name":"transport","x":1,"y":36,"team":"blue","direction":2,"selectable":false,"uid":-4},

				/* The chopper pilot from the last mission */
				{"type":"aircraft","name":"chopper","x":15,"y":40,"team":"blue","selectable":false,"uid":-5,"orders":{"type":"patrol","from":{"x":15,"y":40},"to":{"x":0,"y":25}}},

				/* The first wave of attacks*/
				{"type":"vehicles","name":"scout-tank","x":15,"y":16,"direction":4,"team":"green","orders":{"type":"hunt"}},
				{"type":"vehicles","name":"scout-tank","x":17,"y":16,"direction":4,"team":"green","orders":{"type":"hunt"}},

				/* Secret Rebel bases*/

				{"type":"buildings","name":"starport","x":35,"y":37,"team":"green","uid":-23},
				{"type":"buildings","name":"starport","x":33,"y":37,"team":"green","uid":-24},
				{"type":"buildings","name":"harvester","x":28,"y":39,"team":"green","action":"deploy"},
				{"type":"buildings","name":"harvester","x":30,"y":39,"team":"green","action":"deploy"},

				{"type":"buildings","name":"starport","x":3,"y":0,"team":"green","uid":-21},
				{"type":"buildings","name":"starport","x":6,"y":0,"team":"green","uid":-22},
				{"type":"buildings","name":"harvester","x":0,"y":2,"team":"green","action":"deploy"},
				{"type":"buildings","name":"harvester","x":0,"y":4,"team":"green","action":"deploy"},

			],

			/* Conditional and Timed Trigger Events */
			"triggers":[
				/* Lose if even one transport gets destroyed  */
			    {"type":"conditional",
			        "condition":function(){
			            return isItemDead(-1)||isItemDead(-2)||isItemDead(-3)||isItemDead(-4);
			        },
			        "action":function(){
			            singleplayer.endLevel(false);
			        }
			    },
				{"type":"timed","time":5000,
			        "action":function(){
						game.showMessage("op", "Commander!! The rebels have started attacking. We need to protect the base at any cost.");
			        }
			    },
				{"type":"timed","time":20000,
				    "action":function(){
						game.add({"type":"vehicles","name":"transport","x":57,"y":3,"team":"blue","direction":4,"selectable":false,"uid":-6});
						game.sendCommand([-5],{"type":"guard","toUid":-6})
						game.showMessage("driver", "Commander!! The colony has sent some extra supplies. We are coming in from the North East sector through rebel territory. We could use a little protection.");
				    }
				},
				//Have the pilot offer to assist and get some villains in to make it interesting
				{"type":"timed","time":28000,
				    "action":function(){
						game.showMessage("pilot", "I'm on my way.");
						game.add({"type":"vehicles","name":"scout-tank","x":57,"y":28,"team":"green","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"wraith","x":55,"y":33,"team":"green","orders":{"type":"sentry"}});
						game.add({"type":"aircraft","name":"wraith","x":53,"y":33,"team":"green","orders":{"type":"sentry"}});
						game.add({"type":"vehicles","name":"scout-tank","x":35,"y":25,"life":20,"direction":4,"team":"green","orders":{"type":"patrol","from":{"x":35,"y":25},"to":{"x":35,"y":30}}});
				    }
				},
				// Start moving the transport,
				{"type":"timed","time":48000,
				    "action":function(){
						game.showMessage("driver", "Thanks! Appreciate the backup. All right. Off we go.");
						game.sendCommand([-6],{"type":"move","to":{"x":0,"y":39,}});
				    }
				},
				// Pilot asks for help when attacked
				{"type":"conditional",
				    "condition":function(){
				        var pilot = game.getItemByUid(-5);
				        return pilot.life<pilot.hitPoints;
				    },
				    "action":function(){
						game.showMessage("pilot", "We are under attack! Need assistance. This doesn't look good.");
				    }
				},
				// Extra supplies from new transport
				{"type":"conditional",
				    "condition":function(){
				        var driver = game.getItemByUid(-6);
						return driver && driver.x < 2 && driver.y>37;
				    },
				    "action":function(){
						game.showMessage("driver", "The rebels came out of nowhere. There was nothing we could do. She saved our lives. Hope these supplies were worth it.");
						game.cash["blue"] += 1200;
				    }
				},
				// Send in waves of enemies every 150 seconds
				{"type":"timed","time":150000,"repeat":true,
				    "action":function(){
						// Count aircraft and tanks already available to bad guys
						var wraithCount = 0;
						var chopperCount = 0;
						var scoutTankCount = 0;
						var heavyTankCount = 0;
						for (var i = game.items.length - 1; i >= 0; i--){
							var item = game.items[i];
							if(item.team=="green"){
								switch(item.name){
									case "chopper":
										chopperCount++;
										break;
									case "wraith":
										wraithCount++;
										break;
									case "scout-tank":
										scoutTankCount++;
										break;
									case "heavy-tank":
										heavyTankCount++;
										break;
								}
							}
						};

		// Make sure enemy has atleast two wraiths and two heavy tanks, and use the remaining starports to build choppers and scouts
		if(wraithCount==0){
			// No wraiths alive. Ask both starports to make wraiths
			game.sendCommand([-23,-24],{type:"construct-unit",details:{type:"aircraft",name:"wraith","orders":{"type":"hunt"}}});
		} else if (wraithCount==1){
			// One wraith alive. Ask starports to make one wraith and one chopper
			game.sendCommand([-23],{type:"construct-unit",details:{type:"aircraft",name:"wraith","orders":{"type":"hunt"}}});
			game.sendCommand([-24],{type:"construct-unit",details:{type:"aircraft",name:"chopper","orders":{"type":"hunt"}}});
		} else {
			// Two wraiths alive. Ask both starports to make choppers
			game.sendCommand([-23,-24],{type:"construct-unit",details:{type:"aircraft",name:"chopper","orders":{"type":"hunt"}}});
		}

		if(heavyTankCount==0){
			// No heavy-tanks alive. Ask both starports to make heavy-tanks
			game.sendCommand([-21,-22],{type:"construct-unit",details:{type:"vehicles",name:"heavy-tank","orders":{"type":"hunt"}}});
		} else if (heavyTankCount==1){
			// One heavy-tank alive. Ask starports to make one heavy-tank and one scout-tank
			game.sendCommand([-21],{type:"construct-unit",details:{type:"vehicles",name:"heavy-tank","orders":{"type":"hunt"}}});
			game.sendCommand([-22],{type:"construct-unit",details:{type:"vehicles",name:"scout-tank","orders":{"type":"hunt"}}});
		} else {
			// Two heavy-tanks alive. Ask both starports to make scout-tanks
			game.sendCommand([-21,-22],{type:"construct-unit",details:{type:"vehicles",name:"scout-tank","orders":{"type":"hunt"}}});
		}
						// Ask any units on the field to attack
						var uids = [];
						for (var i=0; i < game.items.length; i++) {
							var item = game.items[i];
							if(item.team == "green" && item.canAttack){
								uids.push(item.uid);
							}
						};
						game.sendCommand(uids,{"type":"hunt"});
				    }
				},
				//After 8 minutes, start waiting for the end
				{"type":"timed","time":480000,
				    "action":function(){
						game.showMessage("op", "Commander! The colony air fleet is just a few minutes away.");
				    }
				},
				//After 10 minutes send in reinforcements
				{"type":"timed","time":600000,
				    "action":function(){
						game.showMessage("op", "Commander! The colony air fleet is approaching");
						game.add({"type":"aircraft","name":"wraith","x":-1,"y":30,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"chopper","x":-1,"y":31,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"wraith","x":-1,"y":32,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"chopper","x":-1,"y":33,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"wraith","x":-1,"y":34,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"chopper","x":-1,"y":35,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"wraith","x":-1,"y":36,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"chopper","x":-1,"y":37,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"wraith","x":-1,"y":38,"team":"blue","orders":{"type":"hunt"}});
						game.add({"type":"aircraft","name":"chopper","x":-1,"y":39,"team":"blue","orders":{"type":"hunt"}});
				    }
				},
				// And a minute after, end the level
				{"type":"timed","time":660000,
				    "action":function(){
						singleplayer.endLevel(true);

				    }
				},
			],
		}
	],
	"multiplayer":[
	    {
	        /* Map Details */
	        "mapImage":"images/maps/level-one.png",

	        /* Map coordinates that are obstructed by terrain*/
	        "mapGridWidth":60,
	        "mapGridHeight":40,
	        "mapObstructedTerrain":[
	            [49,8], [50,8], [51,8], [51,9], [52,9], [53,9], [53,10], [53,11], [53,12], [53,13], [53,14], [53,15], [53,16], [52,16], [52,17], [52,18], [52,19], [51,19], [50,19], [50,18], [50,17], [49,17], [49,18], [48,18], [47,18], [47,17], [47,16], [48,16], [49,16], [49,15], [49,14], [48,14], [48,13], [48,12], [49,12], [49,11], [50,11], [50,10], [49,10], [49,9], [44,0], [45,0], [45,1], [45,2], [46,2], [47,2], [47,3], [48,3], [48,4], [48,5], [49,5], [49,6], [49,7], [50,7], [51,7], [51,6], [51,5], [51,4], [52,4], [53,4], [53,3], [54,3], [55,3], [55,2], [56,2], [56,1], [56,0], [55,0], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [48,20], [48,21], [47,21], [46,21], [45,21], [44,21], [43,21], [43,20], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [50,22], [50,23], [50,24], [49,24], [48,24], [47,24], [47,25], [47,26], [47,27], [47,28], [47,29], [47,30], [46,30], [45,30], [44,30], [43,30], [43,29], [43,28], [43,27], [43,26], [43,25], [43,24], [42,24], [41,24], [41,23], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [59,38], [59,37], [59,36], [59,35], [59,34], [59,33], [59,32], [59,31], [59,30], [59,29], [0,0], [1,0], [2,0], [1,1], [2,1], [10,3], [11,3], [12,3], [12,2], [13,2], [14,2], [14,3], [14,4], [15,4], [15,5], [15,6], [14,6], [13,6], [13,5], [12,5], [11,5], [10,5], [10,4], [3,9], [4,9], [5,9], [5,10], [6,10], [7,10], [8,10], [9,10], [9,11], [10,11], [11,11], [11,10], [12,10], [13,10], [13,11], [13,12], [12,12], [11,12], [10,12], [9,12], [8,12], [7,12], [7,13], [7,14], [6,14], [5,14], [5,13], [5,12], [5,11], [4,11], [3,11], [3,10], [33,33], [34,33], [35,33], [35,34], [35,35], [34,35], [33,35], [33,34], [27,39], [27,38], [27,37], [28,37], [28,36], [28,35], [28,34], [28,33], [28,32], [28,31], [28,30], [28,29], [29,29], [29,28], [29,27], [29,26], [29,25], [29,24], [29,23], [30,23], [31,23], [32,23], [32,22], [32,21], [31,21], [30,21], [30,22], [29,22], [28,22], [27,22], [26,22], [26,21], [25,21], [24,21], [24,22], [24,23], [25,23], [26,23], [26,24], [25,24], [25,25], [24,25], [24,26], [24,27], [25,27], [25,28], [25,29], [24,29], [23,29], [23,30], [23,31], [24,31], [25,31], [25,32], [25,33], [24,33], [23,33], [23,34], [23,35], [24,35], [24,36], [24,37], [23,37], [22,37], [22,38], [22,39], [23,39], [24,39], [25,39], [26,0], [26,1], [25,1], [25,2], [25,3], [26,3], [27,3], [27,2], [28,2], [29,2], [29,3], [30,3], [31,3], [31,2], [31,1], [32,1], [32,0], [33,0], [32,8], [33,8], [34,8], [34,9], [34,10], [33,10], [32,10], [32,9], [8,29], [9,29], [9,30], [17,32], [18,32], [19,32], [19,33], [18,33], [17,33], [18,34], [19,34], [3,27], [4,27], [4,26], [3,26], [2,26], [3,25], [4,25], [9,20], [10,20], [11,20], [11,21], [10,21], [10,19], [19,7], [15,7], [29,12], [30,13], [20,14], [21,14], [34,13], [35,13], [36,13], [36,14], [35,14], [34,14], [35,15], [36,15], [16,18], [17,18], [18,18], [16,19], [17,19], [18,19], [17,20], [18,20], [11,19], [58,0], [59,0], [58,1], [59,1], [59,2], [58,3], [59,3], [58,4], [59,4], [59,5], [58,6], [59,6], [58,7], [59,7], [59,8], [58,9], [59,9], [58,10], [59,10], [59,11], [52,6], [53,6], [54,6], [52,7], [53,7], [54,7], [53,8], [54,8], [44,17], [46,32], [55,32], [54,28], [26,34], [34,34], [4,10], [6,11], [6,12], [6,13], [7,11], [8,11], [12,11], [27,0], [27,1], [26,2], [28,1], [28,0], [29,0], [29,1], [30,2], [30,1], [30,0], [31,0], [33,9], [46,0], [47,0], [48,0], [49,0], [50,0], [51,0], [52,0], [53,0], [54,0], [55,1], [54,1], [53,1], [52,1], [51,1], [50,1], [49,1], [48,1], [47,1], [46,1], [48,2], [49,2], [50,2], [51,2], [52,2], [53,2], [54,2], [52,3], [51,3], [50,3], [49,3], [49,4], [50,4], [50,5], [50,6], [50,9], [51,10], [52,10], [51,11], [52,11], [50,12], [51,12], [52,12], [49,13], [50,13], [51,13], [52,13], [50,14], [51,14], [52,14], [50,15], [51,15], [52,15], [50,16], [51,16], [51,17], [48,17], [51,18], [44,20], [45,20], [46,20], [47,20], [42,23], [43,23], [44,23], [45,23], [46,23], [47,23], [48,23], [49,23], [44,24], [45,24], [46,24], [44,25], [45,25], [46,25], [44,26], [45,26], [46,26], [44,27], [45,27], [46,27], [44,28], [45,28], [46,28], [44,29], [45,29], [46,29], [11,4], [12,4], [13,4], [13,3], [14,5], [25,22], [31,22], [27,23], [28,23], [27,24], [28,24], [26,25], [27,25], [28,25], [25,26], [26,26], [27,26], [28,26], [26,27], [27,27], [28,27], [26,28], [27,28], [28,28], [26,29], [27,29], [24,30], [25,30], [26,30], [27,30], [26,31], [27,31], [26,32], [27,32], [26,33], [27,33], [24,34], [25,34], [27,34], [25,35], [26,35], [27,35], [25,36], [26,36], [27,36], [25,37], [26,37], [23,38], [24,38], [25,38], [26,38], [26,39], [2,25], [9,19], [36,31]
	        ],

	        /* Entities to be loaded */
	        "requirements":{
	            "buildings":["base","harvester","starport","ground-turret"],
	            "vehicles":["transport","scout-tank","heavy-tank","harvester"],
	            "aircraft":["wraith","chopper"],
	            "terrain":["oilfield"]
	        },

	        /* Economy Related*/
	        "cash":{
	            "blue":1000,
	            "green":1000
	        },

	        /* Entities to be added */
	        "items":[
	            {"type":"terrain","name":"oilfield","x":16,"y":4,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":34,"y":12,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":1,"y":30,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":38,"y":38,"action":"hint"},
	        ],

	        /* Entities for each starting team */
	        "teamStartingItems":[
	            {"type":"buildings","name":"base","x":0,"y":0},
	            {"type":"vehicles","name":"harvester","x":2,"y":0},
	            {"type":"vehicles","name":"heavy-tank","x":2,"y":1},
	            {"type":"vehicles","name":"scout-tank","x":3,"y":0},
	            {"type":"vehicles","name":"scout-tank","x":3,"y":1},
	        ],
	        "spawnLocations":[
	            { "x":48, "y":36,"startX":36,"startY":20},
	            { "x":3, "y":36,"startX":0,"startY":20},
	            { "x":36, "y":3,"startX":32,"startY":0},
	            { "x":3, "y":3,"startX":0,"startY":0},
	        ],
			/* Conditional and Timed Trigger Events */
			"triggers":[
			    /* Lose if not even one item is left */
			    {"type":"conditional",
			        "condition":function(){
			            for (var i=0; i < game.items.length; i++) {
			                if(game.items[i].team == game.team){
			                    return false;
			                }
			            };
			            return true;
			        },
			        "action":function(){
			            multiplayer.loseGame();
			        }
			    },
			]

	    }
	]
};
