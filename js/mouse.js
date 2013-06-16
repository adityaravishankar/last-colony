var mouse = {
    // x,y coordinates of mouse relative to top left corner of canvas
    x:0,
    y:0,
    // x,y coordinates of mouse relative to top left corner of game map
    gameX:0,
    gameY:0,
    // game grid x,y coordinates of mouse
    gridX:0,
    gridY:0,
    // whether or not the left mouse button is currently pressed
    buttonPressed:false,
    // whether or not the player is dragging and selecting with the left mouse button pressed
    dragSelect:false,
    // whether or not the mouse is inside the canvas region
    insideCanvas:false,

	click:function(ev,rightClick){
	    // Player clicked inside the canvas

	    var clickedItem = this.itemUnderMouse();
	    var shiftPressed = ev.shiftKey;

	    if (!rightClick){ // Player left clicked
			if (game.deployBuilding){
				// If the game is in deployBuilding mode, left clicking will deploy the building
				if(game.canDeployBuilding){
					sidebar.finishDeployingBuilding();
				} else {
					game.showMessage("system","Warning! Cannot deploy building here.");
				}
				return;
			}

	        if (clickedItem){
	            // Pressing shift adds to existing selection. If shift is not pressed, clear existing selection
	            if(!shiftPressed){
	                game.clearSelection();
	            }
	            game.selectItem(clickedItem,shiftPressed);
	        }
	    } else { // Player right clicked
	        if (game.deployBuilding){
				// If the game is in deployBuilding mode, right clicking will cancel deployBuilding mode
	            sidebar.cancelDeployingBuilding();
	            return;
	        }
			// Handle actions like attacking and movement of selected units
			var uids = [];
			if (clickedItem){ // Player right clicked on something
				if (clickedItem.type != "terrain"){
					if (clickedItem.team != game.team){ // Player right clicked on an enemy item
						// identify selected items from players team that can attack
						for (var i = game.selectedItems.length - 1; i >= 0; i--){
							var item = game.selectedItems[i];
							if(item.team == game.team && item.canAttack){
								uids.push(item.uid);
							}
						};
						// then command them to attack the clicked item
						if (uids.length>0){
							game.sendCommand(uids,{type:"attack",toUid:clickedItem.uid});
							sounds.play("acknowledge-attacking");
						}
					} else  { // Player right clicked on a friendly item
						//identify selected items from players team that can move
						for (var i = game.selectedItems.length - 1; i >= 0; i--){
							var item = game.selectedItems[i];
							if(item.team == game.team && (item.type == "vehicles" || item.type == "aircraft")){
								uids.push(item.uid);
							}
						};
						// then command them to guard the clicked item
						if (uids.length>0){
							game.sendCommand(uids,{type:"guard",toUid:clickedItem.uid});
							sounds.play("acknowledge-moving");
						}
					}
				} else if (clickedItem.name == "oilfield"){ // Player right clicked on an oilfield
					// identify the first selected harvester from players team (since only one can deploy at a time)
					for (var i = game.selectedItems.length - 1; i >= 0; i--){
						var item = game.selectedItems[i];
						if(item.team == game.team && (item.type == "vehicles" && item.name == "harvester")){
							uids.push(item.uid);
							break;
						}
					};
					// then command it to deploy on the oilfield
					if (uids.length>0){
						game.sendCommand(uids,{type:"deploy",toUid:clickedItem.uid});
						sounds.play("acknowledge-moving");
					}
				}
			} else { // Player right clicked on the ground
				//identify selected items from players team that can move
				for (var i = game.selectedItems.length - 1; i >= 0; i--){
					var item = game.selectedItems[i];
					if(item.team == game.team && (item.type == "vehicles" || item.type == "aircraft")){
						uids.push(item.uid);
					}
				};
				// then command them to move to the clicked location
				if (uids.length>0){
					game.sendCommand(uids, {type:"move", to:{x:mouse.gameX/game.gridSize, y:mouse.gameY/game.gridSize}});
					sounds.play("acknowledge-moving");
				}
			}
	    }
	},
	itemUnderMouse:function(){
		if(fog.isPointOverFog(mouse.gameX,mouse.gameY)){
	        return;
	    }

	    for (var i = game.items.length - 1; i >= 0; i--){
	        var item = game.items[i];
	        if (item.type=="buildings" || item.type=="terrain"){
	            if(item.lifeCode != "dead"
	                && item.x<= (mouse.gameX)/game.gridSize
	                && item.x >= (mouse.gameX - item.baseWidth)/game.gridSize
	                && item.y<= mouse.gameY/game.gridSize
	                && item.y >= (mouse.gameY - item.baseHeight)/game.gridSize
	                ){
	                    return item;
	            }
	        } else if (item.type=="aircraft"){
	            if (item.lifeCode != "dead" &&
	                Math.pow(item.x-mouse.gameX/game.gridSize,2) + Math.pow(item.y-(mouse.gameY+item.pixelShadowHeight)/game.gridSize,2) < Math.pow((item.radius)/game.gridSize,2)){
	                return item;
	            }
	       }else {
	            if (item.lifeCode != "dead" && Math.pow(item.x-mouse.gameX/game.gridSize,2) + Math.pow(item.y-mouse.gameY/game.gridSize,2) < Math.pow((item.radius)/game.gridSize,2)){
	                return item;
	            }
	        }
	    }
	},
	draw:function(){
	    if(this.dragSelect){
	        var x = Math.min(this.gameX,this.dragX);
	        var y = Math.min(this.gameY,this.dragY);
	        var width = Math.abs(this.gameX-this.dragX)
	        var height = Math.abs(this.gameY-this.dragY)
	        game.foregroundContext.strokeStyle = 'white';
	        game.foregroundContext.strokeRect(x-game.offsetX,y-game.offsetY, width, height);
	    }
	    if (game.deployBuilding && game.placementGrid){
	        var buildingType = buildings.list[game.deployBuilding];
	        var x = (this.gridX*game.gridSize)-game.offsetX;
	        var y = (this.gridY*game.gridSize)-game.offsetY;
	        for (var i = game.placementGrid.length - 1; i >= 0; i--){
	            for (var j = game.placementGrid[i].length - 1; j >= 0; j--){
	                if(game.placementGrid[i][j]){
	                    game.foregroundContext.fillStyle = "rgba(0,0,255,0.3)";
	                } else {
	                    game.foregroundContext.fillStyle = "rgba(255,0,0,0.3)";
	                }
	                game.foregroundContext.fillRect(x+j*game.gridSize, y+i*game.gridSize, game.gridSize, game.gridSize);
	            };
	        };
	    }
	},
	calculateGameCoordinates:function(){
		mouse.gameX = mouse.x + game.offsetX ;
		mouse.gameY = mouse.y + game.offsetY;

		mouse.gridX = Math.floor((mouse.gameX) / game.gridSize);
		mouse.gridY = Math.floor((mouse.gameY) / game.gridSize);
	},
    init:function(){
        var $mouseCanvas = $("#gameforegroundcanvas");
        $mouseCanvas.mousemove(function(ev) {
            var offset = $mouseCanvas.offset();
            mouse.x = ev.pageX - offset.left;
            mouse.y = ev.pageY - offset.top;

            mouse.calculateGameCoordinates();

            if (mouse.buttonPressed){
                if  ((Math.abs(mouse.dragX - mouse.gameX) > 4 || Math.abs(mouse.dragY - mouse.gameY) > 4)){
                        mouse.dragSelect = true
                }
            } else {
                mouse.dragSelect = false;
            }
        });

        $mouseCanvas.click(function(ev) {
            mouse.click(ev,false);
            mouse.dragSelect = false;
            return false;
        });

        $mouseCanvas.mousedown(function(ev) {
            if(ev.which == 1){
                mouse.buttonPressed = true;
                mouse.dragX = mouse.gameX;
                mouse.dragY = mouse.gameY;
                ev.preventDefault();
            }
            return false;
        });

        $mouseCanvas.bind('contextmenu',function(ev){
            mouse.click(ev,true);
            return false;
        });

		$mouseCanvas.mouseup(function(ev) {
		    var shiftPressed = ev.shiftKey;
		    if(ev.which==1){
		    //Left key was released
		        if (mouse.dragSelect){
		            if (!shiftPressed){
		                // Shift key was not pressed
		                game.clearSelection();
		            }

		            var x1 = Math.min(mouse.gameX,mouse.dragX)/game.gridSize;
		            var y1 = Math.min(mouse.gameY,mouse.dragY)/game.gridSize;
		            var x2 = Math.max(mouse.gameX,mouse.dragX)/game.gridSize;
		            var y2 = Math.max(mouse.gameY,mouse.dragY)/game.gridSize;
		            for (var i = game.items.length - 1; i >= 0; i--){
		                var item = game.items[i];
		                if (item.type != "buildings" && item.selectable && item.team==game.team && x1<= item.x && x2 >= item.x){
		                    if ((item.type == "vehicles" && y1<= item.y && y2 >= item.y)
		                    || (item.type == "aircraft" && (y1 <= item.y-item.pixelShadowHeight/game.gridSize) && (y2 >= item.y-item.pixelShadowHeight/game.gridSize))){
		                        game.selectItem(item,shiftPressed);
		                    }

		                }
		            };
		        }
		        mouse.buttonPressed = false;
		        mouse.dragSelect = false;
		    }
		    return false;
		});


        $mouseCanvas.mouseleave(function(ev) {
            mouse.insideCanvas = false;
        });

        $mouseCanvas.mouseenter(function(ev) {
            mouse.buttonPressed = false;
            mouse.insideCanvas = true;
        });
    }
};

