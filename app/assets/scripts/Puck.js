/**
 * Puck thats placed on a Junction
 * Holds the mojs shape
 * @param x coordinate
 * @param y coordinate
 * @param id
 * @constructor
 */
Game.Puck = function (x, y, id) {
    /**
     * Used as a mute for the rescale process
     * @type {number}
     * @const
     */
    this.MUTE = 25;
    this.CLASS_NAME = "puck hidden";
    this.CLASS_NAME_ACTIVATED = "puck";
    this.SHAPE = "polygon";
    this.STROKE = "3";
    this.POINTS = 6;

    this.id = id;

    this.left = this.calculateOffset(x);
    this.top = this.calculateOffset(y);

    this.mojs = this.generateMojs();
    this.mojs.el.dataset.id = id;
    $(this.mojs.el).click(this.clickEvent);
};

$.extend(Game.Puck.prototype, Game.Junction.prototype);

/**
 * Activates puck on the board
 * @param man player of puck
 */
Game.Puck.prototype.activate = function (man) {
    $(this.mojs.el).attr("class", this.CLASS_NAME_ACTIVATED + " " + man.toLowerCase());
    this.mojs.play();
};

/**
 * Deactivates and hide the puck on the board
 */
Game.Puck.prototype.deactivate = function () {
    $(this.mojs.el).attr("class", this.CLASS_NAME);
};

/**
 * Puck Event Handler
 */
Game.Puck.prototype.clickEvent = function () {
    var data = Game.State.data;
    if (data.currentPlayer.currentState == "MOVE") {
        if (mouseQueue.length === 0) {
            mouseQueue.push(this);
        }
        return;
    }
    Game.State.requestCommand(data.currentPlayer.currentState.toLowerCase(), [this.dataset.id]);
};
