// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  let root = new TreeNode(preorder[0]);
  let rootIndex = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === preorder[0]) rootIndex = i;
  }
  let leftTree = inorder.slice(0, rootIndex);
  let rightTree = inorder.slice(rootIndex + 1, inorder.length);

  let newPreOrder = preorder.shift();
  root.left = buildTree(newPreOrder, leftTree);
  root.right = buildTree(newPreOrder, rightTree)
}



// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]

// newPreOrder = [9,20,15,7]
// leftTree = [9]
// rightTree = [15,20,7]
