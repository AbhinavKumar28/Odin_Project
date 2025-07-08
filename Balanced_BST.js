class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(arr = []) {
        this.arr = arr;
        this.root = null;
    }
    buildTree(arr) {
        const new_arr = [...new Set(arr)];

        new_arr.sort((a, b) => a - b);
        this.root = this.helperBuildTree(new_arr, 0, new_arr.length - 1);
        return this.root;
    }
    helperBuildTree(arr, s, e) {
        if (s > e) {
            return null;
        }
        let mid = Math.floor((s + e) / 2);
        const root = new Node(arr[mid]);

        root.left = this.helperBuildTree(arr, s, mid - 1);
        root.right = this.helperBuildTree(arr, mid + 1, e);
        return root;
    }
    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };
    find(value) {
        let curNode = this.root;

        while (curNode !== null) {
            if (value === curNode.data) {
                return curNode;
            } else if (value < curNode.data) {
                curNode = curNode.left;
            } else {
                curNode = curNode.right;
            }
        }
        return null;
    }
    levelOrder(callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }
        let curNode = this.root;
        let queue = [];

        if (this.root !== null) {
            queue.push(curNode);
        }
        while (queue.length !== 0) {
            curNode = queue.shift();
            if (curNode.left !== null) {
                queue.push(curNode.left);
            }
            if (curNode.right !== null) {
                queue.push(curNode.right);
            }
            callback(curNode);
        }
    }
    preOrder(callback, curNode) {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }
        if (curNode === null) {
            return null;
        }
        callback(curNode);
        this.preOrder(callback, curNode.left);
        this.preOrder(callback, curNode.right);
    }
    inOrder(callback, curNode) {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }
        if (curNode === null) {
            return null;
        }
        this.inOrder(callback, curNode.left);
        callback(curNode);
        this.inOrder(callback, curNode.right);
    }
    postOrder(callback, curNode) {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }
        if (curNode === null) {
            return null;
        }
        this.postOrder(callback, curNode.left);
        this.postOrder(callback, curNode.right);
        callback(curNode);
    }
    height(value) {
        let a = this.find(value);

        if (a === null) {
            return null;
        }
        if ((a.left === null) && (a.right === null)) {
            return 0;
        } else if (a.left === null) {

            // let l = this.height(a.left);
            let r = this.height(a.right.data);
            let ans = r + 1;

            return ans;
        } else if (a.right === null) {

            let l = this.height(a.left.data);

            // let r = this.height(a.right.data);
            let ans = l + 1;

            return ans;
        } else {
            let l = this.height(a.left.data);

            let r = this.height(a.right.data);
            let ans = Math.max(l, r) + 1;

            return ans;

        }

        // return ans;
    }
    findDepth(root, targetData, currentDepth = 0) {

        if (root === null) {
            return -1;
        }

        if (root.data === targetData) {
            return currentDepth;
        }

        let leftDepth = this.findDepth(root.left, targetData, currentDepth + 1);

        if (leftDepth !== -1) {
            return leftDepth;
        }

        let rightDepth = this.findDepth(root.right, targetData, currentDepth + 1);

        return rightDepth;
    }
    isBalanced(node = this.root) {

        // if (this.height(node.left.data)-this.height(node.right.data)<=1){
        //     if ()
        // }else
        // if ((a.left === null) && (a.right === null)) {
        //     return 0;
        // }
        if ((node.left === null) && (node.right === null)) {
            return true;
        } else if ((node.left === null)) {
            if (this.height(node.right.data) <= 0) {
                return true;
            } else {
                return false;
            }
        } else if ((node.right === null)) {
            if (this.height(node.left.data) <= 0) {
                return true;
            } else {
                return false;
            }
        } else {
            let l = this.isBalanced(node.left);
            let r = this.isBalanced(node.right);
            let m = this.height(node.left.data) - this.height(node.right.data);

            if (l && r) {
                if (m <= 1) {
                    return true;
                }
            }
            return false;
        }
    }
    inOrder_err(callback, curNode = this.root, output = []) {

        // let callback=[]
        // if (typeof callback !== "function") {
        //     throw new Error("Callback function is required.");
        // }
        if (curNode === null) {
            return;
        }
        this.inOrder_err(callback, curNode.left, output);
        if (typeof callback === "function") output.push(callback(curNode));
        else output.push(curNode.data);
        this.inOrder_err(callback, curNode.right, output);
        return output;
    }
    rebalance() {
        this.root = this.buildTree(this.inOrder_err((c => {
            console.log(c.data);
            return c.data;
        })));
    }
    insert(value, node = this.root) {
        if (this.find(value) !== null) {
            throw new Error(`Cannot insert because ${value} already present in Tree.`);
        }

        // if (node === null) {

        //     // node =
        //     return;
        // }
        if (value < node.data) {
            if (node.left === null) {
                node.left = new Node(value);
                return;
            }
            this.insert(value, node.left);
        } else if (value > node.data) {
            if (node.right === null) {
                node.right = new Node(value);
                return;
            }
            this.insert(value, node.right);
        }
    }

    // deleteItem(value) {
    //     let a = this.find(value);

    //     if (this.find(value) !== null) {
    //         if ((a.left === null) && (a.right === null)) {
    //             a = null;
    //             console.log(this.inOrder_err());
    //         } else if ((a.left !== null) && (a.right === null)) {
    //             a.data = a.left.data;
    //             a.left = null;

    //             // a = a.left;
    //         } else if ((a.left === null) && (a.right !== null)) {
    //             a.data = a.right.data;
    //             a.right = null;
    //         } else {
    //             const b = this.inOrder_err();

    //             a.data = b[b.indexOf(value) + 1];

    //             // this.find(b[b.indexOf(value) + 1])
    //             let d = this.find(b[b.indexOf(value) + 1]);

    //             this.deleteItem(d.data);

    //         }
    //     }
    // }
    deleteItem(value, node = this.root, parent = null) {
        if (node === null) return;

        if (value < node.data) {
            this.deleteItem(value, node.left, node);
        } else if (value > node.data) {
            this.deleteItem(value, node.right, node);
        } else {

            if (node.left === null && node.right === null) {
                if (parent === null) {
                    this.root = null;
                } else if (parent.left === node) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            } else if (node.left === null || node.right === null) {
                const child = node.left !== null ? node.left : node.right;

                if (parent === null) {
                    this.root = child;
                } else if (parent.left === node) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            } else {
                let successorParent = node;
                let successor = node.right;

                while (successor.left !== null) {
                    successorParent = successor;
                    successor = successor.left;
                }

                node.data = successor.data;

                this.deleteItem(successor.data, successor, successorParent);
            }
        }
    }

}
const tr = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tr.buildTree(tr.arr);
tr.prettyPrint(tr.root);
let a = tr.find(67);

// tr.insert(10);
tr.deleteItem(1);

// let b = tr.height(2);

// console.log(tr.isBalanced());
// console.log(tr.rebalance());

// tr.deleteItem()
tr.prettyPrint(tr.root);

// tr.levelOrder(c => {
//     console.log(c.data);
// });
// tr.preOrder((c => {
//     console.log(c.data);
// }), tr.root);
// tr.preOrder((c => {
//     console.log(c.data);
// }), tr.root);
// tr.inOrder((c => {
//     console.log(c.data);
// }), tr.root);
console.log(a.left.data);

// console.log(b);
