function node (value, next){
    this.value = value;
    this.next = next ?? null;
}





const head = new node(4);
const node1 = new node(6);
const node2 = new node(10);
const node3 = new node(15);
const node4 = new node(14);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

function iterate (node){
    while(node){
        console.log(node.value);
        node = node.next;
    }
}

iterate(head)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         // Al principio, la estación está vacía
//         this.head = null;
//     }

//     // MÉTODO MÁGICO: Agrega un vagón al final automáticamente
//     append(value) {
//         const newNode = new Node(value);

//         // Si el tren no existe, el nuevo vagón es la cabeza
//         if (this.head === null) {
//             this.head = newNode;
//             return;
//         }

//         // Si ya hay tren, caminamos hasta el último vagón
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }

//         // Enganchamos el nuevo vagón al final
//         current.next = newNode;
//     }
// }

