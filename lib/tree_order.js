const {TreeNode} = require('../lib/tree_node.js');

function inOrderArray(root) {
  // if the root is null, return an empty array
  if(root === null) return [];
  // console.log(root.val);
  // get the array for visiting the left node
  let leftArr = inOrderArray(root.left);
  // get the array for visiting the right node
  let rightArr = inOrderArray(root.right);

  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...leftArr, root.val, ...rightArr];
}


function postOrderArray(root) {
  // if the root is null, return an empty array
  if (root === null) return [];

  // get the array for visiting the left node
  let leftArr = postOrderArray(root.left);
  // get the array for visiting the right node
  let rightArr = postOrderArray(root.right);

  // return the left array concatenated with the right array
  return [...leftArr, ...rightArr, root.val];
  //   concatenated with the root value
}

root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;
//['d', 'b', 'e', 'a', 'c', 'f']
console.log(inOrderArray(root));
module.exports = {
  inOrderArray,
  postOrderArray
};
