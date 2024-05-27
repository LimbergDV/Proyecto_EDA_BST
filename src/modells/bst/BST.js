import Node from "./node.js";
class BST {
  #root;
  constructor() {
    this.#root = null;
  }

  add(value) {
    if (this.#root == null) {
      this.#root = new Node(value);
      return true;
    } else return this.insertNode(this.#root, value);
  }

  insertNode(node, value) {
    if (value.name < node.value.name) {
      if (node.left == null) {
        node.left = new Node(value);
        return true;
      } else {
        return this.insertNode(node.left, value);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(value);
        return true;
      } else return this.insertNode(node.right, value);
    }
  }

  search(name, category, supplier, price){
    return this.searchNode(this.#root, name, category, supplier, price);
  }
  
  searchNode(node, name, category, supplier, price){
    if(node == null ||(node.value.name == name && node.value.category == category && node.value.supplier == supplier && node.value.price == price)){
        return node;
    } else if(name < node.value.name){
        return this.searchNode(node.left, name, category, supplier, price);
    } else{
        return this.searchNode(node.right, name, category, supplier, price);
    }
  }








}
export default BST;
