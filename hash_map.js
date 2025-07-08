// class HashMap {
//     constructor() {
//         this.load_factor = 0.75;
//         this.arrSize = 50;
//         this.arr = new Array(this.arrSize).fill(null);
//     }
//     hash(key) {
//         let hashCode = 0;

//         const primeNumber = 31;

//         for (let i = 0; i < key.length; i++) {
//             hashCode = primeNumber * hashCode + key.charCodeAt(i);
//             hashCode = hashCode % this.arrSize;
//         }
//         return hashCode;
//     }
//     set(key, value) {
//         this.arr[this.hash(key)] = value;
//         this.cap_load();
//     }
//     length() {
//         let counter = 0;

//         for (let i = 0; i < this.arrSize; i = i + 1) {
//             if (!(this.arr[i] === null)) {
//                 counter = counter + 1;
//             }
//         }
//         return counter;
//     }
//     cap_load() {
//         if (this.length() / this.arrSize >= this.load_factor) {
//             const ariy = [...this.arr];
//             const a = new Array(this.arrSize).fill(null);

//             this.arrSize = this.arrSize * 2;
//             this.arr = ariy.concat(a);
//         }
//         return this.length();
//     }
//     get(key) {
//         if (!(this.arr[this.hash(key)] === null)) {
//             return this.arr[this.hash(key)];
//         }
//         return null;
//     }
//     has(key) {
//         if (!(this.arr[this.hash(key)] === null)) {
//             return true;
//         }
//         return false;
//     }
//     remove(key) {
//         if (!(this.arr[this.hash(key)] === null)) {
//             this.arr[this.hash(key)] = null;
//             return true;
//         }
//         return false;
//     }
//     clear() {
//         for (let i = 0; i < this.arrSize; i = i + 1) {
//             if (!(this.arr[i] === null)) {
//                 this.arr[i] = null;
//             }
//         }
//     }
//     values() {
//         const ari = [];

//         for (let i = 0; i < this.arrSize; i = i + 1) {
//             if (!(this.arr[i] === null)) {
//                 ari.push(this.arr[i]);
//             }
//         }
//         ari.push(null);
//         return ari;
//     }
//     entries() {
//         const ari = [];

//         for (let i = 0; i < this.arrSize; i = i + 1) {
//             if (!(this.arr[i] === null)) {
//                 ari.push([i, this.arr[i]]);
//             }
//         }

//         // ari.push(null)
//         return ari;

//     }
// }

class HashMap {
    constructor() {
        this.load_factor = 0.75;
        this.arrSize = 4;

        // this.arr = new Array(this.arrSize).fill(null);
        this.arr = Array.from({ length: this.arrSize }, () => ({}));
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.arrSize;
        }
        return hashCode;
    }
    set(key, value) {
        for (let i = 0; i < this.arrSize; i++) {

            // if (Object.keys(myObject).length === 0) ;
            // console.log(arr[i]);
            if (i === this.hash(key)) {
                if (Object.keys(this.arr[i]).length === 0) {
                    this.arr[i][key] = value;

                    // console.log(this.arr[i]);
                    break;
                } else {
                    this.arr[i][key] = value;
                    break;
                }
            }
        }

        this.cap_load();
    }
    length() {
        let counter = 0;

        for (let i = 0; i < this.arrSize; i = i + 1) {
            const numberOfKeys = Object.keys(this.arr[i]).length;

            counter = counter + numberOfKeys;

        }
        return counter;
    }
    get(key) {
        if (Object.keys(this.arr[this.hash(key)]).length !== 0) {
            if (key in this.arr[this.hash(key)]) {
                return this.arr[this.hash(key)][key];
            }
        }
        return null;
    }
    has(key) {
        if (Object.keys(this.arr[this.hash(key)]).length !== 0) {
            if (key in this.arr[this.hash(key)]) {
                return true;
            }
        }
        return false;
    }
    remove(key) {
        if (Object.keys(this.arr[this.hash(key)]).length !== 0) {
            if (key in this.arr[this.hash(key)]) {
                delete this.arr[this.hash(key)][key];
                return true;
            }
        }
        return false;
    }
    clear() {
        for (let i = 0; i < this.arrSize; i = i + 1) {
            this.arr[i] = {};
        }
    }
    values() {
        let ari = [];

        for (let i = 0; i < this.arrSize; i = i + 1) {
            ari = [...ari, ...Object.values(this.arr[i])];
        }

        // ari.push(null);
        return ari;
    }
    entries() {
        let ari = [];

        for (let i = 0; i < this.arrSize; i = i + 1) {
            if (!(Object.keys(this.arr[i]).length === 0)) {
                ari = [...ari, ...Object.entries(this.arr[i])];
            }
        }

        // ari.push(null)
        return ari;
    }
    keys() {
        let ari = [];

        for (let i = 0; i < this.arrSize; i = i + 1) {
            if (!(Object.keys(this.arr[i]).length === 0)) {
                ari = [...ari, ...Object.keys(this.arr[i])];
            }
        }

        // ari.push(null)
        return ari;

    }
    cap_load() {
        if (this.length() / this.arrSize >= this.load_factor) {

            // const ariy = [...this.arr];

            const ArrSize = this.arrSize * 2;
            let ariy = Array.from({ length: ArrSize }, () => ({}));

            for (const [key, value] of this.entries()) {
                if (Object.keys(ariy[this.hash(key)]).length === 0) {
                    ariy[this.hash(key)][key] = value;

                    // this.hash(key)
                    // console.log(this.arr[i]);
                    // break;
                } else {
                    ariy[this.hash(key)][key] = value;

                    // break;
                }
            }
            this.arr = ariy;
            this.arrSize = ArrSize;
        }
        return this.length();
    }
}
const hashMap = new HashMap();

hashMap.set("name", "Bogdan");
hashMap.set("a", "Bogdan");
hashMap.set("sadasd", "Bogdan");
hashMap.set("asdada", "Bogdan");
hashMap.set("namei", "Salut");
hashMap.set("name", "Abhinav");

// hashMap.set("age", 25);
// hashMap.set("city", "New York");
// hashMap.set("job", "Engineer");
// hashMap.set("hobby", "Reading");
// hashMap.set("language", "JavaScript");
// hashMap.set("color", "Blue");
// hashMap.set("fruit", "Banana");
// hashMap.set("car", "Tesla");
// hashMap.set("animal", "Lion");
// hashMap.set("sport", "Soccer");
// hashMap.set("music", "Classical");
// hashMap.set("movie", "Inception");
// hashMap.set("book", "The Great Gatsby");
// hashMap.set("country", "Japan");
// hashMap.set("drink", "Coffee");
// hashMap.set("programming", "Python");
// hashMap.set("school", "MIT");
// hashMap.set("subject", "Physics");
// hashMap.set("team", "Lakers");
// hashMap.set("computer", "MacBook");
// hashMap.set("game", "Chess");
// hashMap.set("holiday", "Christmas");
// hashMap.set("weather", "Sunny");
// hashMap.set("food", "Pizza");
// hashMap.set("emotion", "Happy");
// hashMap.set("continent", "Africa");
// hashMap.set("instrument", "Piano");
// hashMap.set("company", "Google");
// hashMap.set("currency", "Euro");
// hashMap.set("planet", "Mars");
// hashMap.set("flower", "Rose");
// hashMap.set("shoe", "Sneaker");
// hashMap.set("constellation", "Orion");
// hashMap.set("element", "Gold");
// hashMap.set("time", "Midnight");
// hashMap.set("city2", "Paris");
// hashMap.set("drink2", "Tea");
// hashMap.set("sport2", "Tennis");
// hashMap.set("subject2", "History");
// hashMap.set("planet2", "Earth");
// hashMap.set("animal2", "Elephant");
// hashMap.set("book2", "To Kill a Mockingbird");
// hashMap.set("city3", "London");
// hashMap.set("food2", "Sushi");
// hashMap.set("emotion2", "Sad");
// hashMap.set("drink3", "Orange Juice");
// hashMap.set("instrument2", "Violin");
// hashMap.set("job2", "Teacher");
// hashMap.set("color2", "Green");
// hashMap.set("subject3", "Mathematics");
// hashMap.set("language2", "Python");
// hashMap.set("company2", "Microsoft");
// hashMap.set("team2", "Yankees");
// hashMap.set("movie2", "The Shawshank Redemption");
// hashMap.set("sport3", "Basketball");
// hashMap.set("holiday2", "Thanksgiving");
// hashMap.set("weather2", "Rainy");
// hashMap.set("time2", "Noon");
// hashMap.set("music2", "Rock");
// hashMap.set("flower2", "Tulip");
// hashMap.set("shoe2", "High Heels");
// hashMap.set("element2", "Silver");
// hashMap.set("currency2", "Dollar");
// hashMap.set("fruit2", "Apple");
// hashMap.set("game2", "Monopoly");
// hashMap.set("car2", "Ford");
// hashMap.set("constellation2", "Ursa Major");
// hashMap.set("school2", "Harvard");
// hashMap.set("country2", "Australia");
// hashMap.set("continent2", "Antarctica");
// hashMap.set("job3", "Doctor");
// hashMap.set("music3", "Hip Hop");
// hashMap.set("drink4", "Coca Cola");
// hashMap.set("animal3", "Kangaroo");
// hashMap.set("book3", "1984");
// hashMap.set("city4", "Tokyo");
// hashMap.set("food3", "Pasta");
// hashMap.set("emotion3", "Excited");
// hashMap.set("element3", "Platinum");
// hashMap.set("team3", "Red Sox");
// hashMap.set("movie3", "The Godfather");
// hashMap.set("subject4", "Chemistry");
// hashMap.set("color3", "Purple");
// hashMap.set("language3", "Java");

// console.log(hashMap.get(2131));
console.log("get(40):", hashMap.get(40));
console.log("get(22):", hashMap.get(22));

// console.log("has(2131):", hashMap.has(2131));
console.log("has(22):", hashMap.has(22));
hashMap.remove(7);
console.log("length:", hashMap.length());

// hashMap.clear();
console.log("values:", hashMap.values());
console.log("entries:", hashMap.entries());

// hashMap.cap_load();
console.log("arr:", hashMap.arr);
console.log(hashMap.arrSize);
