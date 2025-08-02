class ListNode<T> {
    next?: ListNode<T>;

    constructor(public value: T) {
    }
}

class LinkedList<T> {
    public root?: ListNode<T>;
    public tail?: ListNode<T>;
    public length = 0;

    add(value: T) {
        const node = new ListNode(value);

        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    getSize() {
        return this.length;
    }

    print() {
        let currNode = this.root;

        while (currNode) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
}

const list = new LinkedList<number>();
list.add(10);
list.add(5);
list.add(-3);

console.log(list.getSize());

list.print();