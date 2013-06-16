// Setup requestAnimationFrame and cancelAnimationFrame for use in the game code
(function() {
    var lastTime = 0;
    var vendors = ['ms', ';', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var loader = {
    loaded:true,
    loadedCount:0, // Assets that have been loaded so far
    totalCount:0, // Total number of assets that need to be loaded

    init:function(){
        // check for sound support
        var mp3Support,oggSupport;
        var audio = document.createElement('audio');
        if (audio.canPlayType) {
        		// Currently canPlayType() returns: "", "maybe" or "probably"
        		mp3Support = "" != audio.canPlayType('audio/mpeg');
        		oggSupport = "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
        } else {
        	//The audio tag is not supported
        	mp3Support = false;
        	oggSupport = false;
        }

        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        loader.soundFileExtn = oggSupport?".ogg":mp3Support?".mp3":undefined;
    },
    loadImage:function(url){
        this.totalCount++;
        this.loaded = false;
        $('#loadingscreen').show();
        var image = new Image();
        image.src = url;
        image.onload = loader.itemLoaded;
        return image;
    },
    soundFileExtn:".ogg",
	loadSound:function(url){
		this.totalCount++;
		this.loaded = false;
		$('#loadingscreen').show();
		var audio = new Audio();
		audio.src = url+loader.soundFileExtn;
		audio.addEventListener("canplaythrough", loader.itemLoaded, false);
		return audio;
	},
    itemLoaded:function(){
        loader.loadedCount++;
        $('#loadingmessage').html('Loaded '+loader.loadedCount+' of '+loader.totalCount);
        if (loader.loadedCount === loader.totalCount){
            loader.loaded = true;
            $('#loadingscreen').hide();
            if(loader.onload){
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
}

/* The default load() method used by all our game entities*/
function loadItem(name){
    var item = this.list[name];
    // if the item sprite array has already been loaded then no need to do it again
    if(item.spriteArray){
        return;
    }
    item.spriteSheet = loader.loadImage('images/'+this.defaults.type+'/'+name+'.png');
    item.spriteArray = [];
    item.spriteCount = 0;

    for (var i=0; i < item.spriteImages.length; i++){
        var constructImageCount = item.spriteImages[i].count;
        var constructDirectionCount = item.spriteImages[i].directions;
        if (constructDirectionCount){
            for (var j=0; j < constructDirectionCount; j++) {
                var constructImageName = item.spriteImages[i].name +"-"+j;
                item.spriteArray[constructImageName] = {
                    name:constructImageName,
                    count:constructImageCount,
                    offset:item.spriteCount
                };
                item.spriteCount += constructImageCount;
            };
        } else {
            var constructImageName = item.spriteImages[i].name;
            item.spriteArray[constructImageName] = {
                name:constructImageName,
                count:constructImageCount,
                offset:item.spriteCount
            };
            item.spriteCount += constructImageCount;
        }
    };
    // Load the weapon if item has one
    if(item.weaponType){
        bullets.load(item.weaponType);
    }

}

/* The default add() method used by all our game entities*/
function addItem(details){
    var item = {};
    var name = details.name;
    $.extend(item,this.defaults);
    $.extend(item,this.list[name]);
    item.life = item.hitPoints;
    $.extend(item,details);
    return item;
}

/* Common functions for turning and movement */

// Finds the angle between two objects in terms of a direction (where 0 <= angle < directions)
function findAngle(object,unit,directions){
     var dy = (object.y) - (unit.y);
     var dx = (object.x) - (unit.x);
    //Convert Arctan to value between (0 - directions)
    var angle = wrapDirection(directions/2-(Math.atan2(dx,dy)*directions/(2*Math.PI)),directions);
    return angle;
 }

// returns the smallest difference (value ranging between -directions/2 to +directions/2) between two angles (where 0 <= angle < directions)
function angleDiff(angle1,angle2,directions){
    if (angle1>=directions/2){
        angle1 = angle1-directions;
    }
    if (angle2>=directions/2){
        angle2 = angle2-directions;
    }

    diff = angle2-angle1;

    if (diff<-directions/2){
        diff += directions;
    }
    if (diff>directions/2){
        diff -= directions;
    }

    return diff;
}

// Wrap value of direction so that it lies between 0 and directions-1
function wrapDirection(direction,directions){
    if (direction<0){
        direction += directions;
    }
    if (direction >= directions){
        direction -= directions;
    }
    return direction;
}

function findFiringAngle(target,source,directions){
    var dy = (target.y) - (source.y);
    var dx = (target.x) - (source.x);

    if(target.type=="buildings"){
        dy += target.baseWidth/2/game.gridSize;
        dx += target.baseHeight/2/game.gridSize;
    } else if(target.type == "aircraft"){
        dy -= target.pixelShadowHeight/game.gridSize;
    }

     if(source.type=="buildings"){
        dy -= source.baseWidth/2/game.gridSize;
        dx -= source.baseHeight/2/game.gridSize;
    } else if(source.type == "aircraft"){
        dy += source.pixelShadowHeight/game.gridSize;
    }

    //Convert Arctan to value between (0 - 7)
    var angle = wrapDirection(directions/2-(Math.atan2(dx,dy)*directions/(2*Math.PI)),directions);
    return angle;
}

// Common Functions related to combat
function isValidTarget(item){
    return item.team != this.team && (this.canAttackLand && (item.type == "buildings" || item.type == "vehicles")|| (this.canAttackAir && (item.type == "aircraft")));
}

function findTargetsInSight(increment){
    if(!increment){
        increment=0;
    }
    var targets = [];
    for (var i = game.items.length - 1; i >= 0; i--){
        var item = game.items[i];
        if (this.isValidTarget(item)){
            if(Math.pow(item.x-this.x,2) + Math.pow(item.y-this.y,2)<Math.pow(this.sight+increment,2)){
                targets.push(item);
            }
        }
    };

    // Sort targets based on distance from attacker
    var attacker = this;
    targets.sort(function(a,b){
        return (Math.pow(a.x-attacker.x,2) + Math.pow(a.y-attacker.y,2))-(Math.pow(b.x-attacker.x,2) + Math.pow(b.y-attacker.y,2));
       });

    return targets;
}

function isItemDead(uid){
    var item = game.getItemByUid(uid);
    return (!item || item.lifeCode == "dead");
}

