const userJSON = `{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}`;

const user = JSON.parse(userJSON);

console.log(user.name);
console.log(user.email);
console.log(typeof user);

/***************************************************** */

const post = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati",
  body: "quia et suscipit suscipit recusandae"
};

const postJSON = JSON.stringify(post);

console.log(postJSON);
console.log(typeof postJSON); // "string"

/***************************************************** */

const todoJSON = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

const todo = JSON.parse(todoJSON);
todo.completed = true;

const updatedTodoJSON = JSON.stringify(todo);

console.log(updatedTodoJSON);