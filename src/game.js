Game = function(game) {}
Game.prototype = {
    preload: function() {
        //load assets
        this.game.load.image('circle','asset/circle.png');
        this.game.load.image('background', 'asset/tile.png');
    },
    create: function() {
        var width = this.game.width;
        var height = this.game.height;

        this.game.world.setBounds(-width, -height, width*2, height*2);
        this.game.stage.backgroundColor = '#444';

        //add tilesprite background
        var background = this.game.add.tileSprite(-width, -height,
            this.game.world.width, this.game.world.height, 'background');

        //initialize physics and groups
        this.game.physics.startSystem(Phaser.Physics.P2JS);

        this.game.snakes = [];

        //create player
        var snake = new Snake(this.game, 'circle', 0, 0);
        this.game.camera.follow(snake.head);
    }
}