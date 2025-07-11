import { Gameboard } from "./gameboard.js";
import { Ship, testShip } from "./ship.js";
import {Player} from "./player.js";

describe("Player Class", () => {
    test("checks player constructor and static properties working correctly", () => {
        const player = new Player(true);

        expect(Player.instanceCount["computer"]).toBe(1);

        // const player1 = new Player(true);

        expect(() => new Player(true)).toThrow("Only one computer player is allowed.");

        // expect(board.shipArray[0][1]).toBeInstanceOf(Ship);
    });
    test("checks attack enemyboard working correctly", () => {
        Player.reset();
        const player = new Player(false);
        const player1 = new Player(true);

        player1.gameboard.place(1, "up", [0, 0]);

        // expect(Player.instanceCount["computer"]).toBe(1);

        // const player1 = new Player(true);

        expect(player.attack(player1.gameboard, 0, 0)).toBe(true);

        // expect(player.attack(player1.gameboard, 0, 0)).toBe(false);
        // expect(board.shipArray[0][1]).toBeInstanceOf(Ship);
    });

    // test("checks attack enemyboard working correctly", () => {
    //     Player.reset();
    //     const player = new Player(false);
    //     const player1 = new Player(true);

    //     player.gameboard.place(1, "up", [0, 0]);

    //     player1.randomAttack(player.gameboard);

    //     // player1.gameboard.place(1, "up", [0, 0]);

    //     // expect(Player.instanceCount["computer"]).toBe(1);

    //     // const player1 = new Player(true);

    //     expect(player.attack(player1.gameboard, 0, 0)).toBe(true);

    //     // expect(player.attack(player1.gameboard, 0, 0)).toBe(false);
    //     // expect(board.shipArray[0][1]).toBeInstanceOf(Ship);
    // });

});
