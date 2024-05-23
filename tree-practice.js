const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  while (rootNode) {
    if (rootNode.left) {
      rootNode = rootNode.left;
    } else {
      return rootNode.val;
    }
  }
}

function findMaxBST(rootNode) {
  while (rootNode) {
    if (rootNode.right) {
      rootNode = rootNode.right;
    } else {
      return rootNode.val;
    }
  }
}

function findMinBT(rootNode) {
  if (!rootNode) return;

  let min = rootNode.val;
  let right = findMinBT(rootNode.right);
  let left = findMinBT(rootNode.left);

  if (left && left < min) {
    min = left;
  }
  if (right && right < min) {
    min = right;
  }
  return min;
}

function findMaxBT(rootNode) {
  if (!rootNode) return;

  let max = rootNode.val;
  let right = findMaxBT(rootNode.right);
  let left = findMaxBT(rootNode.left);

  if (left && left > max) {
    max = left;
  }
  if (right && right > max) {
    max = right;
  }
  return max;
}

function getHeight(rootNode) {
  // let total = 0

  if (rootNode === null) return -1;

  if ((rootNode.left === null) & (rootNode.right === null)) return 0;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
