class Ship {
    constructor(length, startIndex, direction) {
        this.length = length;
        this.hitTimes = 0;
        this.sunk = false;
        this.startIndex = startIndex;
        this.direction = direction;
    }
    hit() {
        this.hitTimes = this.hitTimes + 1;
        return this.hitTimes;
    }
    isSunk() {
        if (this.length <= this.hitTimes) {
            this.sunk = true;
        } else {
            this.sunk = false;
        }
        return this.sunk;
    }
}

function testShip(length, timesHit) {
    const shipObject = new Ship(length);

    for (let i = 0; i < timesHit; i++) {
        shipObject.hit();
    }
    return shipObject.isSunk();
}
export { Ship, testShip };
