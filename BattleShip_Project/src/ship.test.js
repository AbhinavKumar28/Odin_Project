import { Ship, testShip } from "./ship.js";

test("ship test", () => {
    expect(testShip(4, 6)).toBe(true);
});

// const Ship = require("./ship.js");

describe("Ship Class", () => {
    test("ship gets hit correctly", () => {
        const ship = new Ship(3);

        expect(ship.hit()).toBe(1);
        expect(ship.hit()).toBe(2);
        expect(ship.hit()).toBe(3);
        expect(ship.hitTimes).toBe(3);
    });

    test("ship does not sink until hit enough times", () => {
        const ship = new Ship(2);

        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });

    test("ship sinks when hit enough times", () => {
        const ship = new Ship(2);

        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test("ship still reports sunk even if hit more than its length", () => {
        const ship = new Ship(2);

        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
