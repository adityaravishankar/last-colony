$(window).load(function() {
	game.init();
});

var game = {
    // Start preloading assets
	init:function(){
		loader.init();
		mouse.init();
		sidebar.init();
		sounds.init();

		$('.gamelayer').hide();
		$('#gamestartscreen').show();

		game.backgroundCanvas = document.getElementById('gamebackgroundcanvas');
		game.backgroundContext = game.backgroundCanvas.getContext('2d');

		game.foregroundCanvas = document.getElementById('gameforegroundcanvas');
		game.foregroundContext = game.foregroundCanvas.getContext('2d');

		game.canvasWidth = game.backgroundCanvas.width;
		game.canvasHeight = game.backgroundCanvas.height;
	},
    start:function(){
        $('.gamelayer').hide();
        $('#gameinterfacescreen').show();
		game.running = true;
		game.refreshBackground = true;

		game.drawingLoop();

		$('#gamemessages').html("");

        // Initialize All Game Triggers
        for (var i = game.currentLevel.triggers.length - 1; i >= 0; i--){
            game.initTrigger(game.currentLevel.triggers[i]);
        };
    },

	// The map is broken into square tiles of this size (20 pixels x 20 pixels)
	gridSize:20,

	// Store whether or not the background moved and needs to be redrawn
	refreshBackground:true,

	// A control loop that runs at a fixed period of time
	animationTimeout:100, // 100 milliseconds or 10 times a second
	offsetX:0,	// X & Y panning offsets for the map
	offsetY:0,
	panningThreshold:60, // Distance from edge of canvas at which panning starts
	panningSpeed:10, // Pixels to pan every drawing loop
	handlePanning:function(){
		// do not pan if mouse leaves the canvas
		if (!mouse.insideCanvas){
			return;
		}

		if(mouse.x<=game.panningThreshold){
			if (game.offsetX>=game.panningSpeed){
				game.refreshBackground = true;
				game.offsetX -= game.panningSpeed;
			}
		} else if (mouse.x>= game.canvasWidth - game.panningThreshold){
			if (game.offsetX + game.canvasWidth + game.panningSpeed <= game.currentMapImage.width){
				game.refreshBackground = true;
				game.offsetX += game.panningSpeed;
			}
		}

		if(mouse.y<=game.panningThreshold){
			if (game.offsetY>=game.panningSpeed){
				game.refreshBackground = true;
				game.offsetY -= game.panningSpeed;
			}
		} else if (mouse.y>= game.canvasHeight - game.panningThreshold){
			if (game.offsetY + game.canvasHeight + game.panningSpeed <= game.currentMapImage.height){
				game.refreshBackground = true;
				game.offsetY += game.panningSpeed;
			}
		}

		if (game.refreshBackground){
			// Update mouse game coordinates based on game offsets
			mouse.calculateGameCoordinates();
		}
	},
	animationLoop:function(){
		// Animate the Sidebar
	    sidebar.animate();

		// Process orders for any item that handles it
	    for (var i = game.items.length - 1; i >= 0; i--){
	        if(game.items[i].processOrders){
	            game.items[i].processOrders();
	        }
	    };

	    // Animate each of the elements within the game
	    for (var i = game.items.length - 1; i >= 0; i--){
	        game.items[i].animate();
	    };

	    // Sort game items into a sortedItems array based on their x,y coordinates
	    game.sortedItems = $.extend([],game.items);
	    game.sortedItems.sort(function(a,b){
	        return b.y-a.y + ((b.y==a.y)?(a.x-b.x):0);
	    });

		fog.animate();

	    //Save the time that the last animation loop completed
	    game.lastAnimationTime = (new Date()).getTime();
	},
	drawingLoop:function(){
	    // Handle Panning the Map
	    game.handlePanning();

		// Check the time since the game was animated and calculate a linear interpolation factor (-1 to 0)
		// since drawing will happen more often than animation
		game.lastDrawTime = (new Date()).getTime();
	    if (game.lastAnimationTime){
	        game.drawingInterpolationFactor = (game.lastDrawTime-game.lastAnimationTime)/game.animationTimeout - 1;
	        if (game.drawingInterpolationFactor>0){ // No point interpolating beyond the next animation loop...
            	game.drawingInterpolationFactor = 0;
	        }
	    } else {
			game.drawingInterpolationFactor = -1;
		}

	    // Since drawing the background map is a fairly large operation,
	    // we only redraw the background if it changes (due to panning)
	    if (game.refreshBackground){
	        game.backgroundContext.drawImage(game.currentMapImage, game.offsetX, game.offsetY,game.canvasWidth, game.canvasHeight, 0, 0, game.canvasWidth, game.canvasHeight);
	        game.refreshBackground = false;
	    }

	    // Clear the foreground canvas
	    game.foregroundContext.clearRect(0,0,game.canvasWidth,game.canvasHeight);

	    // Start drawing the foreground elements
	    for (var i = game.sortedItems.length - 1; i >= 0; i--){
	        if (game.sortedItems[i].type != "bullets"){
	            game.sortedItems[i].draw();
	        }
	    };

		// Draw the bullets on top of all the other elements
	    for (var i = game.bullets.length - 1; i >= 0; i--){
	        game.bullets[i].draw();
	    };

		fog.draw();

	    // Draw the mouse
	    mouse.draw();

	    // Call the drawing loop for the next frame using request animation frame
	    if (game.running){
	        requestAnimationFrame(game.drawingLoop);
	    }
	},
	resetArrays:function(){
	    game.counter = 1;
	    game.items = [];
	    game.sortedItems = [];
	    game.buildings = [];
	    game.vehicles = [];
	    game.aircraft = [];
	    game.terrain = [];
	    game.triggeredEvents = [];
	    game.selectedItems = [];
	    game.sortedItems = [];
		game.bullets = [];
	},
	add:function(itemDetails) {
	    // Set a unique id for the item
	    if (!itemDetails.uid){
	        itemDetails.uid = game.counter++;
	    }

	    var item = window[itemDetails.type].add(itemDetails);

	    // Add the item to the items array
	    game.items.push(item);
	    // Add the item to the type specific array
	    game[item.type].push(item);

	    if(item.type == "buildings" || item.type == "terrain"){
	        game.currentMapPassableGrid = undefined;
	    }

	    if (item.type == "bullets"){
	        sounds.play(item.name);
	    }
	    return item;
	},
	remove:function(item){
	    // Unselect item if it is selected
	    item.selected = false;
	    for (var i = game.selectedItems.length - 1; i >= 0; i--){
	           if(game.selectedItems[i].uid == item.uid){
	               game.selectedItems.splice(i,1);
	               break;
	           }
	    };

	    // Remove item from the items array
	    for (var i = game.items.length - 1; i >= 0; i--){
	        if(game.items[i].uid == item.uid){
	            game.items.splice(i,1);
	            break;
	        }
	    };

	    // Remove items from the type specific array
	    for (var i = game[item.type].length - 1; i >= 0; i--){
	        if(game[item.type][i].uid == item.uid){
	            game[item.type].splice(i,1);
	            break;
	        }
	    };

	    if(item.type == "buildings" || item.type == "terrain"){
	        game.currentMapPassableGrid = undefined;
	    }
	},
	/* Selection Related Code */
	selectionBorderColor:"rgba(255,255,0,0.5)",
	selectionFillColor:"rgba(255,215,0,0.2)",
	healthBarBorderColor:"rgba(0,0,0,0.8)",
	healthBarHealthyFillColor:"rgba(0,255,0,0.5)",
	healthBarDamagedFillColor:"rgba(255,0,0,0.5)",
	lifeBarHeight:5,
	clearSelection:function(){
	    while(game.selectedItems.length>0){
	        game.selectedItems.pop().selected = false;
	    }
	},
	selectItem:function(item,shiftPressed){
	    // Pressing shift and clicking on a selected item will deselect it
	    if (shiftPressed && item.selected){
	        // deselect item
	        item.selected = false;
	        for (var i = game.selectedItems.length - 1; i >= 0; i--){
	            if(game.selectedItems[i].uid == item.uid){
	                game.selectedItems.splice(i,1);
	                break;
	            }
	        };
	        return;
	    }

	    if (item.selectable && !item.selected){
	        item.selected = true;
	        game.selectedItems.push(item);
	    }
	},
	// Send command to either singleplayer or multiplayer object
	sendCommand:function(uids,details){
		if (game.type=="singleplayer"){
			 singleplayer.sendCommand(uids,details);
		} else {
			multiplayer.sendCommand(uids,details);
		}
	},
	getItemByUid:function(uid){
	    for (var i = game.items.length - 1; i >= 0; i--){
	        if(game.items[i].uid == uid){
	            return game.items[i];
	        }
	    };
	},
	// Receive command from singleplayer or multiplayer object and send it to units
	processCommand:function(uids,details){
		// In case the target "to" object is in terms of uid, fetch the target object
		var toObject;
		if (details.toUid){
			toObject = game.getItemByUid(details.toUid);
			if(!toObject || toObject.lifeCode=="dead"){
				// To object no longer exists. Invalid command
				return;
			}
		}

		for (var i in uids){
			var uid = uids[i];
			var item = game.getItemByUid(uid);
			//if uid is a valid item, set the order for the item
			if(item){
				item.orders = $.extend([],details);
				if(toObject) {
					item.orders.to = toObject;
				}
			}
		};
	},
	//Movement related properties
	speedAdjustmentFactor:1/64,
	turnSpeedAdjustmentFactor:1/8,
	rebuildPassableGrid:function(){
	    game.currentMapPassableGrid = $.extend(true,[],game.currentMapTerrainGrid);
	    for (var i = game.items.length - 1; i >= 0; i--){
	        var item = game.items[i];
	        if(item.type == "buildings" || item.type == "terrain"){
	            for (var y = item.passableGrid.length - 1; y >= 0; y--){
	                for (var x = item.passableGrid[y].length - 1; x >= 0; x--){
	                    if(item.passableGrid[y][x]){
	                        game.currentMapPassableGrid[item.y+y][item.x+x] = 1;
	                    }
	                };
	            };
	        }
	    };
	},
	rebuildBuildableGrid:function(){
	    game.currentMapBuildableGrid = $.extend(true,[],game.currentMapTerrainGrid);
	    for (var i = game.items.length - 1; i >= 0; i--){
	        var item = game.items[i];
	        if(item.type == "buildings" || item.type == "terrain"){
	            for (var y = item.buildableGrid.length - 1; y >= 0; y--){
	                for (var x = item.buildableGrid[y].length - 1; x >= 0; x--){
	                    if(item.buildableGrid[y][x]){
	                        game.currentMapBuildableGrid[item.y+y][item.x+x] = 1;
	                    }
	                };
	            };
	        } else if (item.type == "vehicles"){
	            // Mark all squares under or near the vehicle as unbuildable
	            var radius = item.radius/game.gridSize;
	            var x1 = Math.max(Math.floor(item.x - radius),0);
	            var x2 = Math.min(Math.floor(item.x + radius),game.currentLevel.mapGridWidth-1);
	            var y1 = Math.max(Math.floor(item.y - radius),0);
	            var y2 = Math.min(Math.floor(item.y + radius),game.currentLevel.mapGridHeight-1);
	            for (var x=x1; x <= x2; x++) {
	                for (var y=y1; y <= y2; y++) {
	                    game.currentMapBuildableGrid[y][x] = 1;
	                };
	            };
	        }
	    };
	},
	// Functions for communicating with player
	characters: {
	    "system":{
	        "name":"System",
	        "image":"images/characters/system.png"
	    },
	    "op":{
	        "name":"Operator",
	        "image":"images/characters/girl1.png"
	    },
	    "pilot":{
	        "name":"Pilot",
	        "image":"images/characters/girl2.png"
	    },
	    "driver":{
	        "name":"Driver",
	        "image":"images/characters/man1.png"
	    }
	},
	showMessage:function(from,message){
		sounds.play('message-received');
	    var character = game.characters[from];
	    if (character){
	        from = character.name;
	        if (character.image){
	            $('#callerpicture').html('<img src="'+character.image+'"/>');
	            // hide the profile picture after six seconds
	            setTimeout(function(){
	                $('#callerpicture').html("");
	            },6000)
	        }
	    }
	    // Append message to messages pane and scroll to the bottom
	    var existingMessage = $('#gamemessages').html();
	    var newMessage = existingMessage+'<span>'+from+': </span>'+message+'<br>';
	    $('#gamemessages').html(newMessage);
	    $('#gamemessages').animate({scrollTop:$('#gamemessages').prop('scrollHeight')});
	},
	/* Message Box related code*/
	messageBoxOkCallback:undefined,
	messageBoxCancelCallback:undefined,
	showMessageBox:function(message,onOK,onCancel){
	    // Set message box text
	    $('#messageboxtext').html(message);

	    // Set message box ok and cancel handlers and enable buttons
	    if(!onOK){
	        game.messageBoxOkCallback = undefined;
	    } else {
	        game.messageBoxOkCallback = onOK;
	    }

	    if(!onCancel){
	        game.messageBoxCancelCallback = undefined;
	        $("#messageboxcancel").hide();
	    } else {
	        game.messageBoxCancelCallback = onCancel;
	        $("#messageboxcancel").show();
	    }

	    // Display the message box and wait for user to click a button
	    $('#messageboxscreen').show();
	},
	messageBoxOK:function(){
	    $('#messageboxscreen').hide();
	    if(game.messageBoxOkCallback){
	        game.messageBoxOkCallback()
	    }
	},
	messageBoxCancel:function(){
	    $('#messageboxscreen').hide();
	    if(game.messageBoxCancelCallback){
	        game.messageBoxCancelCallback();
	    }
	},
	// Methods for handling triggered events within the game
	initTrigger:function(trigger){
	    if(trigger.type == "timed"){
	        trigger.timeout = setTimeout (function(){
	            game.runTrigger(trigger);
	        },trigger.time)
	    } else if(trigger.type == "conditional"){
	        trigger.interval = setInterval (function(){
	            game.runTrigger(trigger);
	        },1000)
	    }
	},
	runTrigger:function(trigger){
	    if(trigger.type == "timed"){
	        // Re initialize the trigger based on repeat settings
	        if (trigger.repeat){
	            game.initTrigger(trigger);
	        }
	        // Call the trigger action
	        trigger.action(trigger);
	    } else if (trigger.type == "conditional"){
	        //Check if the condition has been satisfied
	        if(trigger.condition()){
	            // Clear the trigger
	            game.clearTrigger(trigger);
	            // Call the trigger action
	            trigger.action(trigger);
	        }
	    }
	},
	clearTrigger:function(trigger){
	    if(trigger.type == "timed"){
	        clearTimeout(trigger.timeout);
	    } else if (trigger.type == "conditional"){
	        clearInterval(trigger.interval);
	    }
	},
	end:function(){
	    // Clear Any Game Triggers
	    if (game.currentLevel.triggers){
	        for (var i = game.currentLevel.triggers.length - 1; i >= 0; i--){
	            game.clearTrigger(game.currentLevel.triggers[i]);
	        };
	    }
	    game.running = false;
	}

};
