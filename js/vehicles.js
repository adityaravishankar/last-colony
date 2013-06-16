var vehicles = {
    list:{
        "transport":{
            name:"transport",
            pixelWidth:31,
            pixelHeight:30,
            pixelOffsetX:15,
            pixelOffsetY:15,
            radius:15,
            speed:15,
            sight:3,
            cost:400,
            hitPoints:100,
            turnSpeed:2,
            spriteImages:[
                {name:"stand",count:1,directions:8}
            ],
        },
        "harvester":{
            name:"harvester",
            pixelWidth:21,
            pixelHeight:20,
            pixelOffsetX:10,
            pixelOffsetY:10,
            radius:10,
            speed:10,
            sight:3,
            cost:1600,
            hitPoints:50,
            turnSpeed:2,
            spriteImages:[
                {name:"stand",count:1,directions:8}
            ],
        },
        "scout-tank":{
            name:"scout-tank",
            canAttack:true,
            canAttackLand:true,
            canAttackAir:false,
            weaponType:"bullet",
            pixelWidth:21,
            pixelHeight:21,
            pixelOffsetX:10,
            pixelOffsetY:10,
            radius:11,
            speed:20,
            sight:4,
            cost:500,
            hitPoints:50,
            turnSpeed:4,
            spriteImages:[
                {name:"stand",count:1,directions:8}
            ],
        },
        "heavy-tank":{
            name:"heavy-tank",
            canAttack:true,
            canAttackLand:true,
            canAttackAir:false,
            weaponType:"cannon-ball",
            pixelWidth:30,
            pixelHeight:30,
            pixelOffsetX:15,
            pixelOffsetY:15,
            radius:13,
            speed:15,
            sight:5,
            cost:1200,
            hitPoints:50,
            turnSpeed:4,
            spriteImages:[
                {name:"stand",count:1,directions:8}
            ],
        }
    },
    defaults:{
        type:"vehicles",
        animationIndex:0,
        direction:0,
        action:"stand",
        orders:{type:"stand"},
        selected:false,
        selectable:true,
        directions:8,
        animate:function(){
            // Consider an item healthy if it has more than 40% life
            if (this.life>this.hitPoints*0.4){
                this.lifeCode = "healthy";
            } else if (this.life <= 0){
                this.lifeCode = "dead";
                game.remove(this);
                return;
            } else {
                this.lifeCode = "damaged";
            }

            switch (this.action){
                case "stand":
                    var direction = wrapDirection(Math.round(this.direction),this.directions);
                    this.imageList = this.spriteArray["stand-"+direction];
                    this.imageOffset = this.imageList.offset + this.animationIndex;
                    this.animationIndex++;

                    if (this.animationIndex>=this.imageList.count){
                        this.animationIndex = 0;
                    }
                    break;
				case "teleport":
				    var direction = wrapDirection(Math.round(this.direction),this.directions);
				    this.imageList = this.spriteArray["stand-"+direction];
				    this.imageOffset = this.imageList.offset + this.animationIndex;
				    this.animationIndex++;

				    if (this.animationIndex>=this.imageList.count){
				        this.animationIndex = 0;
				    }
				    if (!this.brightness){
				        this.brightness = 1;
				    }
				    this.brightness -= 0.05;
				    if(this.brightness <= 0){
				        this.brightness = undefined;
				        this.action = "stand";
				    }
				    break;

            }
        },
		isValidTarget:isValidTarget,
		findTargetsInSight:findTargetsInSight,
		processOrders:function(){
		    this.lastMovementX = 0;
		    this.lastMovementY = 0;
		    if(this.reloadTimeLeft){
		        this.reloadTimeLeft--;
		    }
		    var target;
		    switch (this.orders.type){
		        case "move":
					// Move towards destination until distance from destination is less than vehicle radius
					var distanceFromDestinationSquared = (Math.pow(this.orders.to.x-this.x,2) + Math.pow(this.orders.to.y-this.y,2));
			        if (distanceFromDestinationSquared < Math.pow(this.radius/game.gridSize,2)) {
		                //Stop when within one radius of the destination
		                this.orders = {type:"stand"};
		                return;
		            } else if (distanceFromDestinationSquared <Math.pow(this.radius*3/game.gridSize,2)) {
						//Stop when within 3 radius of the destination if colliding with something
						this.orders = {type:"stand"};
						return;
			        } else {
						if (this.colliding && (Math.pow(this.orders.to.x-this.x,2) + Math.pow(this.orders.to.y-this.y,2))<Math.pow(this.radius*5/game.gridSize,2)) {
							// Count collsions within 5 radius distance of goal
							if (!this.orders.collisionCount){
								this.orders.collisionCount = 1
							} else {
								this.orders.collisionCount ++;
							}
							// Stop if more than 30 collisions occur
							if (this.orders.collisionCount > 30) {
								this.orders = {type:"stand"};
								return;
							}
					    }
		                var moving = this.moveTo(this.orders.to);
						// Pathfinding couldn't find a path so stop
						if(!moving){
							this.orders = {type:"stand"};
							return;
						}
		            }
		        	break;
				case "deploy":
					// If oilfield has been used already, then cancel order
					if(this.orders.to.lifeCode == "dead"){
						this.orders = {type:"stand"};
						return;
					}
					// Move to middle of oil field
					var target = {x:this.orders.to.x+1,y:this.orders.to.y+0.5,type:"terrain"};
					var distanceFromTargetSquared = (Math.pow(target.x-this.x,2) + Math.pow(target.y-this.y,2));
					if (distanceFromTargetSquared<Math.pow(this.radius*2/game.gridSize,2)) {
						// After reaching oil field, turn harvester to point towards left (direction 6)
						var difference = angleDiff(this.direction,6,this.directions);
						var turnAmount = this.turnSpeed*game.turnSpeedAdjustmentFactor;
						if (Math.abs(difference)>turnAmount){
							this.direction = wrapDirection(this.direction+turnAmount*Math.abs(difference)/difference,this.directions);
						} else {
							// Once it is pointing to the left, remove the harvester and oil field and deploy a harvester building
							game.remove(this.orders.to);
							this.orders.to.lifeCode="dead";
							game.remove(this);
							this.lifeCode="dead";
							game.add({type:"buildings", name:"harvester", x:this.orders.to.x, y:this.orders.to.y, action:"deploy", team:this.team});
						}
				    } else {
				        var moving = this.moveTo(target);
						// Pathfinding couldn't find a path so stop
						if(!moving){
							this.orders = {type:"stand"};
						}
				    }
					break;
			    case "stand":
		            var targets = this.findTargetsInSight();
		            if(targets.length>0){
		                this.orders = {type:"attack",to:targets[0]};
		            }
		            break;
		        case "sentry":
		            var targets = this.findTargetsInSight(2);
		            if(targets.length>0){
		                this.orders = {type:"attack",to:targets[0],nextOrder:this.orders};
		            }
		            break;
		        case "hunt":
		            var targets = this.findTargetsInSight(100);
		            if(targets.length>0){
		                this.orders = {type:"attack",to:targets[0],nextOrder:this.orders};
		            }
		            break;
		        case "attack":
		            if(this.orders.to.lifeCode == "dead" || !this.isValidTarget(this.orders.to)){
		                if (this.orders.nextOrder){
		                    this.orders = this.orders.nextOrder;
		                } else {
		                    this.orders = {type:"stand"};
		                }
		                return;
		            }
		            if ((Math.pow(this.orders.to.x-this.x,2) + Math.pow(this.orders.to.y-this.y,2))<Math.pow(this.sight,2)) {
		                //Turn towards target and then start attacking when within range of the target
		                var newDirection = findFiringAngle(this.orders.to,this,this.directions);
		                var difference = angleDiff(this.direction,newDirection,this.directions);
		                var turnAmount = this.turnSpeed*game.turnSpeedAdjustmentFactor;
		                if (Math.abs(difference)>turnAmount){
		                    this.direction = wrapDirection(this.direction + turnAmount*Math.abs(difference)/difference, this.directions);
		                    return;
		                } else {
		                    this.direction = newDirection;
		                    if(!this.reloadTimeLeft){
		                        this.reloadTimeLeft = bullets.list[this.weaponType].reloadTime;
		                        var angleRadians = -(Math.round(this.direction)/this.directions)*2*Math.PI ;
		                        var bulletX = this.x- (this.radius*Math.sin(angleRadians)/game.gridSize);
		                        var bulletY = this.y- (this.radius*Math.cos(angleRadians)/game.gridSize);
		                        var bullet = game.add({name:this.weaponType,type:"bullets",x:bulletX,y:bulletY, direction:newDirection, target:this.orders.to});
		                    }
		                }
		            } else {
		                var moving = this.moveTo(this.orders.to);
		                // Pathfinding couldn't find a path so stop
		                if(!moving){
		                    this.orders = {type:"stand"};
		                    return;
		                }
		            }
		            break;
		        case "patrol":
		            var targets = this.findTargetsInSight(1);
		            if(targets.length>0){
		                this.orders = {type:"attack",to:targets[0],nextOrder:this.orders};
		                return;
		            }
		            if ((Math.pow(this.orders.to.x-this.x,2) + Math.pow(this.orders.to.y-this.y,2))<Math.pow(this.radius*4/game.gridSize,2)) {
		                var to = this.orders.to;
		                this.orders.to = this.orders.from;
		                this.orders.from = to;
		            } else {
		                this.moveTo(this.orders.to);
		            }
		            break;
		        case "guard":
		            if(this.orders.to.lifeCode == "dead"){
		                if (this.orders.nextOrder){
		                    this.orders = this.orders.nextOrder;
		                } else {
		                    this.orders = {type:"stand"};
		                }
		                return;
		            }
		            if ((Math.pow(this.orders.to.x-this.x,2) + Math.pow(this.orders.to.y-this.y,2))<Math.pow(this.sight-2,2)) {
		                var targets = this.findTargetsInSight(1);
		                if(targets.length>0){
		                    this.orders = {type:"attack",to:targets[0],nextOrder:this.orders};
		                    return;
		                }
		            } else {
		                this.moveTo(this.orders.to);
		            }
		            break;

		    }
		},
		checkCollisionObjects:function(grid){
			// Calculate new position on present path
			var movement = this.speed*game.speedAdjustmentFactor;
			var angleRadians = -(Math.round(this.direction)/this.directions)*2*Math.PI;
			var newX = this.x - (movement*Math.sin(angleRadians));
			var newY = this.y - (movement*Math.cos(angleRadians));

			// List of objects that will collide after next movement step
			var collisionObjects = [];

			var x1 = Math.max(0,Math.floor(newX)-3);
			var x2 = Math.min(game.currentLevel.mapGridWidth-1,Math.floor(newX)+3);
			var y1 = Math.max(0,Math.floor(newY)-3);
			var y2 = Math.min(game.currentLevel.mapGridHeight-1,Math.floor(newY)+3);
			// Test grid upto 3 squares away
			for (var j=x1; j <= x2;j++){
				for(var i=y1; i<= y2 ;i++){
					if(grid[i][j]==1){ // grid square is obstructed
						if (Math.pow(j+0.5-newX,2)+Math.pow(i+0.5-newY,2) < Math.pow(this.radius/game.gridSize+0.1,2)){
							// Distance of obstructed grid from vehicle is less than hard collision threshold
			                collisionObjects.push({collisionType:"hard",with:{type:"wall",x:j+0.5,y:i+0.5}});
			            } else if (Math.pow(j+0.5-newX,2)+Math.pow(i+0.5-newY,2) < Math.pow(this.radius/game.gridSize+0.7,2)){
							// Distance of obstructed grid from vehicle is less than soft collision threshold
			                 collisionObjects.push({collisionType:"soft",with:{type:"wall",x:j+0.5,y:i+0.5}});
			            }
					}
				};
			};

			for (var i = game.vehicles.length - 1; i >= 0; i--){
				var vehicle = game.vehicles[i];
				// Test vehicles that are less than 3 squares away for collisions
				if (vehicle != this && Math.abs(vehicle.x-this.x)<3 && Math.abs(vehicle.y-this.y)<3){
					if (Math.pow(vehicle.x-newX,2) + Math.pow(vehicle.y-newY,2) < Math.pow((this.radius+vehicle.radius)/game.gridSize,2)){
						// Distance between vehicles is less than hard collision threshold (sum of vehicle radii)
			           	collisionObjects.push({collisionType:"hard",with:vehicle});
			        } else if (Math.pow(vehicle.x-newX,2) + Math.pow(vehicle.y-newY,2) < Math.pow((this.radius*1.5+vehicle.radius)/game.gridSize,2)){
						// Distance between vehicles is less than soft collision threshold (1.5 times vehicle radius + colliding vehicle radius)
						collisionObjects.push({collisionType:"soft",with:vehicle});
			        }
				}
			};

			return collisionObjects;
		},
		moveTo:function(destination){
		    if(!game.currentMapPassableGrid){
		        game.rebuildPassableGrid();
		    }

		    // First find path to destination
		    var start = [Math.floor(this.x),Math.floor(this.y)];
		    var end = [Math.floor(destination.x),Math.floor(destination.y)];

		    var grid = $.extend(true,[],game.currentMapPassableGrid);
		    // Allow destination to be "movable" so that algorithm can find a path
		    if(destination.type == "buildings"||destination.type == "terrain"){
		        grid[Math.floor(destination.y)][Math.floor(destination.x)] = 0;
		    }

		    var newDirection;
		    // if vehicle is outside map bounds, just go straight towards goal
		    if (start[1]<0 || start[1]>=game.currentLevel.mapGridHeight || start[0]<0 || start[0]>= game.currentLevel.mapGridWidth){
		        this.orders.path = [this,destination];
		        newDirection = findAngle(destination,this,this.directions);
		    } else {
		        //Use A* algorithm to try and find a path to the destination
		        this.orders.path = AStar(grid,start,end,'Euclidean');
		        if (this.orders.path.length>1){
		            var nextStep = {x:this.orders.path[1].x+0.5,y:this.orders.path[1].y+0.5};
		            newDirection = findAngle(nextStep,this,this.directions);
		        } else if(start[0]==end[0] && start[1] == end[1]){
		            // Reached destination grid square
		            this.orders.path = [this,destination];
		            newDirection = findAngle(destination,this,this.directions);
		        } else {
		            // There is no path
		            return false;
		        }
		    }

			// check if moving along current direction might cause collision..
			// If so, change newDirection
			var collisionObjects = this.checkCollisionObjects(grid);
			this.hardCollision = false;
			if (collisionObjects.length>0){
				this.colliding = true;

				// Create a force vector object that adds up repulsion from all colliding objects
				var forceVector = {x:0,y:0}
				// By default, the next step has a mild attraction force
				collisionObjects.push({collisionType:"attraction", with:{x:this.orders.path[1].x+0.5,y:this.orders.path[1].y+0.5}});
				for (var i = collisionObjects.length - 1; i >= 0; i--){
			        var collObject = collisionObjects[i];
			        var objectAngle = findAngle(collObject.with,this,this.directions);
					var objectAngleRadians = -(objectAngle/this.directions)*2*Math.PI ;
			        var forceMagnitude;
					switch(collObject.collisionType){
						case "hard":
							forceMagnitude = 2;
							this.hardCollision = true;
							break;
						case "soft":
							forceMagnitude = 1;
							break;
						case "attraction":
							forceMagnitude = -0.25;
							break;
					}

					forceVector.x += (forceMagnitude*Math.sin(objectAngleRadians));
					forceVector.y += (forceMagnitude*Math.cos(objectAngleRadians));
			    };
				// Find a new direction based on the force vector
				newDirection = findAngle(forceVector,{x:0,y:0},this.directions);
			} else {
				this.colliding = false;
			}

		    // Calculate turn amount for new direction
		    var difference = angleDiff(this.direction,newDirection,this.directions);
		    var turnAmount = this.turnSpeed*game.turnSpeedAdjustmentFactor;

			// Either turn or move forward based on collision type
			if (this.hardCollision){
				// In case of hard collision, do not move forward, just turn towards new direction
				if (Math.abs(difference)>turnAmount){
					this.direction = wrapDirection(this.direction+ turnAmount*Math.abs(difference)/difference, this.directions);
				}
			} else {
				// Otherwise, move forward, but keep turning as needed
				var movement = this.speed*game.speedAdjustmentFactor;
				var angleRadians = -(Math.round(this.direction)/this.directions)*2*Math.PI ;
				this.lastMovementX = - (movement*Math.sin(angleRadians));
				this.lastMovementY = - (movement*Math.cos(angleRadians));
				this.x = (this.x +this.lastMovementX);
				this.y = (this.y +this.lastMovementY);
				if (Math.abs(difference)>turnAmount){
					this.direction = wrapDirection(this.direction+ turnAmount*Math.abs(difference)/difference, this.directions);
				}
			}
			return true;
		},
		drawLifeBar:function(){
		    var x = this.drawingX;
		    var y = this.drawingY - 2*game.lifeBarHeight;
		    game.foregroundContext.fillStyle = (this.lifeCode == "healthy")?game.healthBarHealthyFillColor:game.healthBarDamagedFillColor;
		    game.foregroundContext.fillRect(x,y,this.pixelWidth*this.life/this.hitPoints,game.lifeBarHeight)
		    game.foregroundContext.strokeStyle = game.healthBarBorderColor;
		    game.foregroundContext.lineWidth = 1;
		    game.foregroundContext.strokeRect(x,y,this.pixelWidth,game.lifeBarHeight)
		},
		drawSelection:function(){
		    var x = this.drawingX + this.pixelOffsetX;
		    var y = this.drawingY + this.pixelOffsetY;
		    game.foregroundContext.strokeStyle = game.selectionBorderColor;
		    game.foregroundContext.lineWidth = 1;
		    game.foregroundContext.beginPath();
		    game.foregroundContext.arc(x,y,this.radius,0,Math.PI*2,false);
		    game.foregroundContext.fillStyle = game.selectionFillColor;
		    game.foregroundContext.fill();
		    game.foregroundContext.stroke();
		},
		draw:function(){
		    var x = (this.x*game.gridSize)-game.offsetX- this.pixelOffsetX + this.lastMovementX*game.drawingInterpolationFactor*game.gridSize;
		    var y = (this.y*game.gridSize)-game.offsetY- this.pixelOffsetY + this.lastMovementY*game.drawingInterpolationFactor*game.gridSize;
		    this.drawingX = x;
		    this.drawingY = y;
		    if (this.selected){
		        this.drawSelection();
		        this.drawLifeBar();
		    }
		    var colorIndex = (this.team == "blue")?0:1;
		    var colorOffset = colorIndex*this.pixelHeight;
		    game.foregroundContext.drawImage(this.spriteSheet, this.imageOffset*this.pixelWidth,colorOffset, this.pixelWidth,this.pixelHeight,x,y,this.pixelWidth,this.pixelHeight);

		    // Draw glow while teleporting in
		    if(this.brightness){
		        game.foregroundContext.beginPath();
		        game.foregroundContext.arc(x+ this.pixelOffsetX, y+this.pixelOffsetY, this.radius, 0 , Math.PI*2,false);
		        game.foregroundContext.fillStyle = 'rgba(255,255,255,'+this.brightness+')';
		        game.foregroundContext.fill();
		    }

		}

    },
    load:loadItem,
    add:addItem,
};


