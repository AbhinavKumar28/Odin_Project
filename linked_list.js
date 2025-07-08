class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    append(value) {

        let last = new Node(value);

        if (this.head === null) {
            this.head = last;
            this.tail = last;
        } else {
            this.tail.nextNode = last;
            this.tail = last;
        }

    }

    prepend(value) {
        let last = new Node(value);

        if (this.head === null) {
            this.head = last;
            this.tail = last;
        } else {
            last.nextNode = this.head;
            this.head = last;
        }

    }
    size() {
        let size = 0;

        if (this.head === null) {
            return 0;
        } else {
            let pointer = this.head;

            while (!(pointer === null)) {
                size = size + 1;
                pointer = pointer.nextNode;
            }
            return size;
        }
    }
    headFun() {
        if (this.head === null) {
            return "linked list is empty";
        }
        return this.head;
    }
    tailFun() {
        if (this.head === null) {
            return "linked list is empty";
        }
        return this.tail;
    }
    at(index) {
        let count = 0;
        let pointer = this.head;

        if (index >= this.size()) {
            return "index out of range";
        } else {
            while (!(pointer === null)) {
                if (index === count) {
                    return pointer;
                } else {
                    count = count + 1;
                    pointer = pointer.nextNode;
                }
            }
        }
    }
    pop() {
        let pointer = this.head;

        if (pointer.nextNode === null) {
            this.head = null;
            this.tail = null;
        }
        while (!(pointer.nextNode.nextNode === null)) {
            pointer = pointer.nextNode;
        }
        this.tail = pointer;
        pointer.nextNode = null;
    }
    contains(value) {
        let pointer = this.head;

        while (!(pointer === null)) {
            if (pointer.value === value) {
                return true;
            } else {
                pointer = pointer.nextNode;
            }
        }
        return false;
    }
    find(value) {
        let pointer = this.head;
        let count = 0;

        while (!(pointer === null)) {
            if (pointer.value === value) {
                return count;
            } else {
                pointer = pointer.nextNode;
            }
            count = count + 1;
        }
        return null;
    }
    toString() {
        let pointer = this.head;
        let stri = "";

        if (pointer == null) {
            return "null";
        } else {
            while (!(pointer === null)) {
                stri = `${stri}${pointer.value} -> `;
                pointer = pointer.nextNode;
            }
            stri = stri + "null";
            return stri;
        }
    }
    insertAt(value, index) {
        let pointer = this.head;
        let count = 0;
        let pre = new Node("dummy");

        pre.nextNode = this.head;

        while (!(pointer === null)) {

            // pre = pointer;
            if ((index === count) && (pointer === this.head)) {
                let a = new Node(value);

                a.nextNode = pointer;
                this.head = a;
                return null;
            } else if (index === count) {
                let a = new Node(value);

                a.nextNode = pointer;
                pre.nextNode = a;
                return null;
            } else {
                count = count + 1;
                pre = pre.nextNode;
                pointer = pointer.nextNode;

            }
        }
        return null;
    }
    removeAt(index) {
        let pointer = this.head;
        let count = 0;
        let pre = new Node("dummy");

        pre.nextNode = this.head;

        while (!(pointer === null)) {

            // pre = pointer;
            if ((index === count) && (pointer === this.head)) {
                this.head = pointer.nextNode;
                return null;
            } else if (index === count) {
                pre.nextNode = pointer.nextNode;
                return null;
            } else {
                count = count + 1;
                pre = pre.nextNode;
                pointer = pointer.nextNode;

            }
        }
        return null;
    }
}
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
