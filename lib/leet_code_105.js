// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if(preorder.length === 0 && inorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);
  let rootIndex = inorder.indexOf(root.val);

  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  let leftPreorder = preorder.filter(el => leftInorder.includes(el));
  let rightPreorder = preorder.filter(el => rightInorder.includes(el));

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}



preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder));

// newPreOrder = [9,20,15,7]
// leftTree = [9]
// rightTree = [15,20,7]
