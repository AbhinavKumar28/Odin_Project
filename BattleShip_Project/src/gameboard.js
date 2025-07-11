// const { Ship, testShip } = require("./ship.js");
import { Ship, testShip } from "./ship.js";
class Gameboard {
    constructor() {
        this.gameboardArray = Array.from({ length: 10 }, () => Array(10).fill(false));
        this.shipArray = Array.from({ length: 10 }, () => Array(10).fill(false));
        this.ships = [];

        // console.log(this.gameboardArray, this.shipArray);
    }
    place(length, direction, start_index) {
        let [x, y] = start_index;

        if (direction === "up") {
            if ((y + length - 1) > 9) {
                return "Invalid";
            } else {
                const ship = new Ship(length);
                let flag = 0;

                for (let i = y; i < (y + length); i++) {
                    if (this.shipArray[x][i] === false) {
                        flag = 0;
                    } else {
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    for (let i = y; i < (y + length); i++) {
                        this.shipArray[x][i] = ship;
                    }
                    this.ships.push(ship);
                    return "valid";
                }
                return "Invalid";
            }
        } else if (direction === "down") {
            if ((y - length + 1) < 0) {
                return "Invalid";
            } else {
                const ship = new Ship(length);
                let flag = 0;

                for (let i = y; i > (y - length); i--) {
                    if (this.shipArray[x][i] === false) {
                        flag = 0;
                    } else {
                        flag = 1;
                        break;
                    }
                    this.shipArray[x][i] = ship;
                }
                if (flag === 0) {
                    for (let i = y; i > (y - length); i--) {
                        this.shipArray[x][i] = ship;
                    }
                    this.ships.push(ship);
                    return "valid";
                }
                return "Invalid";
            }
        } else if (direction === "right") {

            if ((x + length - 1) > 9) {
                return "Invalid";
            } else {
                const ship = new Ship(length);
                let flag = 0;

                for (let i = x; i < (x + length); i++) {
                    if (this.shipArray[i][y] === false) {
                        flag = 0;
                    } else {
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    for (let i = x; i < (x + length); i++) {
                        this.shipArray[i][y] = ship;
                    }
                    this.ships.push(ship);
                    return "valid";
                }
                return "Invalid";
            }
        } else if (direction === "left") {
            if ((x - length + 1) < 0) {
                return "Invalid";
            } else {
                const ship = new Ship(length);
                let flag = 0;

                for (let i = x; i > (x - length); i--) {
                    if (this.shipArray[i][y] === false) {
                        flag = 0;
                    } else {
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    for (let i = x; i > (x - length); i--) {
                        this.shipArray[i][y] = ship;
                    }
                    this.ships.push(ship);
                    return "valid";
                }
                return "Invalid";
            }
        }
    }
    receiveAttack(x, y) {
        if (this.shipArray[x][y] instanceof Ship) {
            this.shipArray[x][y].hit();
            this.shipArray[x][y].isSunk();
            this.gameboardArray[x][y] = true;
            return true;
        } else {
            this.gameboardArray[x][y] = true;
            return false;
        }

    }
    report() {

        // all ships sunk - true otherwise false
        if (this.ships.length !== 0) {
            let flag = 0;

            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].sunk === true) {
                    flag = 0;
                } else {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return "no ships";
        }
    }
}

export { Gameboard };
