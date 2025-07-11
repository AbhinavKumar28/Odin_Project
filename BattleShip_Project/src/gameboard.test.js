import { Gameboard } from "./gameboard.js";
import { Ship, testShip } from "./ship.js";
describe("Gameboard Class", () => {
    test("places a ship going up correctly", () => {
        const board = new Gameboard();
        const result1 = board.place(4, "up", [0, 0]);

        expect(result1).toBe("valid");
        expect(board.shipArray[0][0]).toBeInstanceOf(Ship);
        expect(board.shipArray[0][1]).toBeInstanceOf(Ship);
        expect(board.shipArray[0][4]).toBe(false);
    });
    test("fails to place ship outside gameboard", () => {
        const board = new Gameboard();
        const result2 = board.place(4, "down", [0, 0]);

        expect(result2).toBe("Invalid");
    });
    test("places a ship going up correctly", () => {
        const board = new Gameboard();
        const result1 = board.place(4, "up", [0, 0]);
        const result2 = board.place(4, "right", [0, 0]);

        expect(result1).toBe("valid");
        expect(result2).toBe("Invalid");
    });
    test("checks a recieves attack correctly", () => {
        const board = new Gameboard();
        const result1 = board.place(2, "up", [0, 0]);

        expect(board.shipArray[0][0].hitTimes).toBe(0);

        // const result2 = board.place(4, "right", [0, 0]);
        board.receiveAttack(0, 0);

        expect(board.shipArray[0][0].hitTimes).toBe(1);
        board.receiveAttack(0, 1);
        expect(board.shipArray[0][0].hitTimes).toBe(2);


        expect(board.gameboardArray[0][0]).toBe(true);
        expect(board.shipArray[0][1].isSunk()).toBe(true);
        expect(board.shipArray[0][0].isSunk()).toBe(true);
        expect(board.ships[0].sunk).toBe(true);

    });

    test("checks reports function correctly", () => {
        const board = new Gameboard();

        expect(board.report()).toBe("no ships");

        const result1 = board.place(2, "up", [0, 0]);

        // const result2 = board.place(4, "right", [0, 0]);
        board.receiveAttack(0, 0);

        expect(board.report()).toBe(false);
        board.receiveAttack(0, 1);
        expect(board.report()).toBe(true);


    });

});
