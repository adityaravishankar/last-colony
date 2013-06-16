var fog = {
    grid:[],
    canvas:document.createElement('canvas'),
    initLevel:function(){
        // Set fog canvas to the size of the map
        this.canvas.width = game.currentLevel.mapGridWidth*game.gridSize;
        this.canvas.height = game.currentLevel.mapGridHeight*game.gridSize;

        this.context = this.canvas.getContext('2d');

        // Set the fog grid for the player to array with all values set to 1
        this.defaultFogGrid = [];
        for (var i=0; i < game.currentLevel.mapGridHeight; i++) {
           this.defaultFogGrid[i] = [];
           for (var j=0; j < game.currentLevel.mapGridWidth; j++) {
               this.defaultFogGrid[i][j] = 1;
           };
        };

    },
    isPointOverFog:function(x,y){
        // If the point is outside the map bounds consider it fogged
        if(y<0 || y/game.gridSize >= game.currentLevel.mapGridHeight || x<0 || x/game.gridSize >= game.currentLevel.mapGridWidth ){
            return true;
           }
        // If not, return value based on the player's fog grid
        return this.grid[game.team][Math.floor(y/game.gridSize)][Math.floor(x/game.gridSize)] == 1;
    },
    animate:function(){
        // Fill fog with semi solid black color over the map
        this.context.drawImage(game.currentMapImage,0,0)
        this.context.fillStyle = 'rgba(0,0,0,0.8)';
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

        // Initialize the players fog grid
        this.grid[game.team] = $.extend(true,[],this.defaultFogGrid);

        // Clear all areas of the fog where a player item has vision
        fog.context.globalCompositeOperation = "destination-out";
        for (var i = game.items.length - 1; i >= 0; i--){
            var item = game.items[i];
            var team = game.team;
                if (item.team == team && !item.keepFogged){
                    var x = Math.floor(item.x );
                    var y = Math.floor(item.y );
                      var x0 = Math.max(0,x-item.sight+1);
                      var y0 = Math.max(0,y-item.sight+1);
                      var x1 = Math.min(game.currentLevel.mapGridWidth-1, x+item.sight-1+ (item.type=="buildings"?item.baseWidth/game.gridSize:0));
                      var y1 = Math.min(game.currentLevel.mapGridHeight-1, y+item.sight-1+ (item.type=="buildings"?item.baseHeight/game.gridSize:0));
                    for (var j=x0; j <= x1; j++) {
                        for (var k=y0; k <= y1; k++) {
                            if ((j>x0 && j<x1) || (k>y0 && k<y1)){
                                if(this.grid[team][k][j]){
                                    this.context.fillStyle = 'rgba(100,0,0,0.9)';
                                    this.context.beginPath();
                                    this.context.arc(j*game.gridSize+12, k*game.gridSize+12, 16, 0, 2*Math.PI, false);
                                    this.context.fill();
                                    this.context.fillStyle = 'rgba(100,0,0,0.7)';
                                    this.context.beginPath();
                                    this.context.arc(j*game.gridSize+12, k*game.gridSize+12,18, 0, 2*Math.PI, false);
                                    this.context.fill();

                                    this.context.fillStyle = 'rgba(100,0,0,0.5)';
                                    this.context.beginPath();
                                    this.context.arc(j*game.gridSize+12, k*game.gridSize+12, 24, 0, 2*Math.PI, false);
                                    this.context.fill();

                                }
                                this.grid[team][k][j] = 0;
                          }
                     };
                 };
             }
        };
        fog.context.globalCompositeOperation = "source-over";
    },
    draw:function(){
        game.foregroundContext.drawImage(this.canvas,game.offsetX, game.offsetY, game.canvasWidth, game.canvasHeight, 0,0,game.canvasWidth,game.canvasHeight);
    }
};


