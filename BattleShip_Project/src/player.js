import { Gameboard } from "./gameboard.js";
import { Ship, testShip } from "./ship.js";
class Player {
    static instanceCount = {
        human: 0,
        computer: 0
    };

    constructor(isComputer = false) {
        this.isComputer = isComputer;
        const type = isComputer ? "computer" : "human";

        if (Player.instanceCount[type] >= 1) {
            throw new Error(`Only one ${type} player is allowed.`);
        }

        Player.instanceCount[type]++;
        this.gameboard = new Gameboard();
    }

    attack(enemyBoard, x, y) { // true if ship present in x,y otherwise false
        return enemyBoard.receiveAttack(x, y);
    }

    randomAttack(enemyBoard) {
        if (!this.isComputer) return;
        let x, y;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (enemyBoard.gameboardArray[x][y] === true);
        // this.gameboard.gameboardArray[x][y] = true;

        return this.attack(enemyBoard, x, y);
    }

    destroy() {
        const type = this.isComputer ? "computer" : "human";

        Player.instanceCount[type]--;
    }

    static reset() {
        Player.instanceCount = {
            human: 0,
            computer: 0
        };
    }
}

export { Player };
