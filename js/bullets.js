var bullets = {
    list:{
        "fireball":{
            name:"fireball",
            speed:60,
            reloadTime:30,
            range:8,
            damage:10,
            spriteImages:[
                {name:"fly",count:1,directions:8},
                {name:"explode",count:7}
            ],
        },
        "heatseeker":{
            name:"heatseeker",
            reloadTime:40,
            speed:25,
            range:9,
            damage:20,
            turnSpeed:2,
            spriteImages:[
                {name:"fly",count:1,directions:8},
                {name:"explode",count:7}
            ],
        },
        "cannon-ball":{
            name:"cannon-ball",
            reloadTime:40,
            speed:25,
            damage:10,
            range:6,
            spriteImages:[
                {name:"fly",count:1,directions:8},
                {name:"explode",count:7}
            ],
        },
        "bullet":{
            name:"bullet",
            damage:5,
            speed:50,
            range:5,
            reloadTime:20,
            spriteImages:[
                {name:"fly",count:1,directions:8},
                {name:"explode",count:3}
            ],
        },
    },
    defaults:{
        type:"bullets",
        distanceTravelled:0,
        animationIndex:0,
        direction:0,
        directions:8,
        pixelWidth:10,
        pixelHeight:11,
        pixelOffsetX:5,
        pixelOffsetY:5,
        radius:6,
        action:"fly",
        selected:false,
        selectable:false,
        orders:{type:"fire"},
        moveTo:function(destination){
            // Weapons like the heatseeker can turn slowly towards target while moving
            if (this.turnSpeed){
                // Find out where we need to turn to get to destination
                var newDirection = findFiringAngle(destination,this,this.directions);
                // Calculate difference between new direction and current direction
                var difference = angleDiff(this.direction,newDirection,this.directions);
                // Calculate amount that bullet can turn per animation cycle
                var turnAmount = this.turnSpeed*game.turnSpeedAdjustmentFactor;
                if (Math.abs(difference)>turnAmount){
                    this.direction = wrapDirection(this.direction+turnAmount*Math.abs(difference)/difference,this.directions);
                }
            }

            var movement = this.speed*game.speedAdjustmentFactor;
            this.distanceTravelled += movement;

            var angleRadians = -((this.direction)/this.directions)*2*Math.PI ;

            this.lastMovementX = - (movement*Math.sin(angleRadians));
            this.lastMovementY = - (movement*Math.cos(angleRadians));
            this.x = (this.x +this.lastMovementX);
            this.y = (this.y +this.lastMovementY);
        },
        reachedTarget:function(){
            var item = this.target;
            if (item.type=="buildings"){
                return (item.x<= this.x && item.x >= this.x - item.baseWidth/game.gridSize && item.y<= this.y && item.y >= this.y - item.baseHeight/game.gridSize);
            } else if (item.type=="aircraft"){
                return (Math.pow(item.x-this.x,2)+Math.pow(item.y-(this.y+item.pixelShadowHeight/game.gridSize),2) < Math.pow((item.radius)/game.gridSize,2));
           } else {
                   return (Math.pow(item.x-this.x,2)+Math.pow(item.y-this.y,2) < Math.pow((item.radius)/game.gridSize,2));
           }
        },
        processOrders:function(){
            this.lastMovementX = 0;
            this.lastMovementY = 0;
            switch (this.orders.type){
                case "fire":
                    // Move towards destination and stop when close by or if travelled past range
                    var reachedTarget = false;
                    if (this.distanceTravelled>this.range
                        || (reachedTarget = this.reachedTarget())) {
                        if(reachedTarget){
                            this.target.life -= this.damage;
                            this.orders = {type:"explode"};
                            this.action = "explode";
                            this.animationIndex = 0;
                        } else {
                            // Bullet fizzles out without hitting target
                            game.remove(this);
                        }
                    } else {
                        this.moveTo(this.target);
                    }
                    break;
            }
        },
        animate:function(){
            switch (this.action){
                case "fly":
                    var direction = wrapDirection(Math.round(this.direction),this.directions);
                     this.imageList = this.spriteArray["fly-"+ direction];
                    this.imageOffset = this.imageList.offset;
                    break;
                case "explode":
                    this.imageList = this.spriteArray["explode"];
                    this.imageOffset = this.imageList.offset + this.animationIndex;
                    this.animationIndex++;
                    if (this.animationIndex>=this.imageList.count){
                        // Bullet explodes completely and then disappears
                        game.remove(this);
                    }
                    break;
            }
        },
        draw:function(){
            var x = (this.x*game.gridSize)-game.offsetX-this.pixelOffsetX + this.lastMovementX*game.drawingInterpolationFactor*game.gridSize;
            var y = (this.y*game.gridSize)-game.offsetY-this.pixelOffsetY + this.lastMovementY*game.drawingInterpolationFactor*game.gridSize;
            var colorOffset = 0;
            game.foregroundContext.drawImage(this.spriteSheet, this.imageOffset*this.pixelWidth,colorOffset, this.pixelWidth,this.pixelHeight, x,y,this.pixelWidth,this.pixelHeight);
        }
    },
    load:loadItem,
    add:addItem,
};


