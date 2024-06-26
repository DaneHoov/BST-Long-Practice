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
  if (!rootNode) return true;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    balancedTree(rootNode.left) &&
    balancedTree(rootNode.right)
  ) {
    return true;
  } else return false;
}

function countNodes(rootNode) {
  let total = 0;

  if (!rootNode) return 0;

  // if (rootNode.left) {
  //   total += countNodes(rootNode.left);
  // }
  // if (rootNode.right) {
  //   total += countNodes(rootNode.right);
  // }
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (!rootNode) return null;
  if (rootNode.val === target) return null;

  let queue = [rootNode];
 
  while (queue.length > 0) {
    let node = queue.shift();

    if (node.right) {
      queue.unshift(node.right)

      if (queue[0].val === target) {
        return node;
      }
    }
    if (node.left) {
      queue.unshift(node.left);

      if (queue[0].val === target) {
        return node;
      }
    }
    
  }
  return;
}

function inOrderPredecessor(rootNode, target) {
  if (target === findMinBT(rootNode)) return null;

  let queue = [rootNode];                              
  let prev = rootNode.val;                             

  while (queue.length > 0) {
    let node = queue.shift();
    let math00 = target - prev;
    let math01 = target - node.val;

    if (math00 <= 0 || (math00 > math01) && (math01 > 0)){
      prev = node.val;
    }

    if (node.right) {
      queue.unshift(node.right);
    }
    if (node.left) {
      queue.unshift(node.left);
    }
  }
  return prev;
}

function deleteNodeBST(rootNode, target) {
  if (!rootNode) return null;

  let current = rootNode
  let parent = null;

  // FIND NODE TO DELETE AND IT'S PARENT
  while (current && current.val !== target) {
    parent = current;

    if (target < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }

  }

  // IF TARGET VALUE DOES NOT EXIST
  if (!current) return;

  // CASE 1, NODE TO DELETE HAS NO CHILDREN
  if (!current.left && !current.right) {
    if (!parent) {
      rootNode = null;
    } else if (current === parent.left) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }

  // CASE 2, NODE TO DELETE HAS ONE CHILD
  else if (!current.right) {
    if (!parent) {
      rootNode = current.left;
    } else if (current === parent.left) {
      parent.left = current.left;
    } else {
      parent.right = current.left;
    }
  }

  else if (!current.left) {
    if (!parent) {
      rootNode = current.right;
    } else if (current === parent.left) {
      parent.left = current.right;
    } else {
      parent.right = current.right;
    }
  }

  // CASE 3, NODE TO DELETE HAS TWO CHILDREN
  else {
    let successor = current.right;
    let successorParent = current;

    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    current.val = successor.val;

    if (successor === successorParent.left) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }
  }
  return rootNode;
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
