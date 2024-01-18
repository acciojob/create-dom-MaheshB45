function createDom(root) {
  if (typeof root === 'string') {
    // If the root is a string, create a text node
    return document.createTextNode(root);
  }

  // Otherwise, create an element node
  const element = document.createElement(root.type);

  // Add attributes if they exist
  if (root.attributes) {
    for (const [key, value] of Object.entries(root.attributes)) {
      element.setAttribute(key, value);
    }
  }

  // Add children if they exist
  if (root.children) {
    for (const child of root.children) {
      const childNode = createDom(child);
      element.appendChild(childNode);
    }
  }

  return element;
}

// Example usage
const inputElement = createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your password',
  },
});

const pElement = createDom({
  type: 'p',
  children: [
    'Hello',
    {
      type: 'strong',
      children: ['World'],
    },
  ],
});

document.body.appendChild(inputElement);
document.body.appendChild(pElement);

