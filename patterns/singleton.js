const User = (() => {
  let user;

  class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.loginDate = Date.now();
    }
  }

  function createInstance() {
    const user = new User('iman', 'iman313');
    return user;
  }

  return {
    getUser: function () {
      if (!user) {
        user = createInstance();
      }

      return user;
    }
  }
})();

const userA = User.getUser();
const userB = User.getUser();
console.log(userA, userB, userA === userB) // true