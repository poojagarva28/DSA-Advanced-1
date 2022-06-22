class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.enqueue = (ele) => {
      while (this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack1.push(ele);

      while (this.stack2.length != 0) {
        this.stack1.push(this.stack2.pop());
      }
    };
    this.dequeue = () => {
      if (this.stack1.length == 0) {
        console.log("Queue is Empty");
      }

      let x = this.stack1[this.stack1.length - 1];
      this.stack1.pop();
      return x;
    };
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
// console.log(q.stack1);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
