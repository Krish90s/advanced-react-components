export const getIds = (data) => {
  let result = [];

  function traverseTree(tree) {
    if (Array.isArray(tree)) {
      // Handle case where tree is an array of nodes
      tree.forEach((node) => traverseTree(node));
    } else if (typeof tree === "object" && tree !== null) {
      // Handle case where tree is a single node
      result.push(tree.id);
      if (tree.children) {
        tree.children.forEach((child) => traverseTree(child));
      }
    }
  }

  traverseTree(data);

  let newArr = [];
  result.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
