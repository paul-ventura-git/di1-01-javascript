function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, 2000);
  });
}

async function run() {
  const result = await waitTwoSeconds();
  console.log(result);
}

run();

/************************************************************* */

async function getPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const post = await response.json();
  console.log(post.title);
}

getPost();

/************************************************************* */

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/9999"
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser();