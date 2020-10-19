// General Structure
(() => {
  // Private Variables

  // Return Public Variables
  return {
    // Public Variables
  }
})();


const UIControler = (() => {
  // Private Variables
  let content = "Hello World!";
  const domElement = document.querySelector('h1');

  // Public Functions
  function changeText() {
    domElement.textContent = content;
  }

  function setContent(newContent) {
    content = newContent;
    changeText()
  }

  // Return functions that can do extra stuffs out of their primary function
  return {
    changeText: function() {
      changeText()
      console.log(content);
    }, setContent: function (text) {
      setContent(text)
    }
  }
})();

UIControler.changeText()
UIControler.setContent('Hassan')
console.log(UIControler.content) // undefined

// Revaling Module Pattern
const UserContoler = (() => {
  let users = [
    {
      id: 1,
      name: 'Hassan',
      age: 20
    }
  ];

  function addUser(user) {
    users.push(user);
  }

  function getUsers() {
    return [...users]
  }

  function getUser(id) {
    return users.find(user => user.id === id)
  }

  // We just return functions
  return {
    getUser, getUsers, addUser
  }
})();

UserContoler.addUser({ id: 2, name: 'Iman', age: 23 });
console.log(UserContoler.getUsers());
console.log(UserContoler.getUser(2));