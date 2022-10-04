const listElement = document.querySelector(".posts");
const postTemplate = document.querySelector("#single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  //--------------
  // with XHR
  //--------------
  //   const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject(new Error("Something went wrong.... :<"));
  //       }
  //     };
  //     xhr.send();
  //   });
  //   return promise;
  //--------------
  //with fetch function
  //--------------
  //   return fetch(url).then((data) => data.json());
  //--------------
  //with axios
  //--------------
  //   return axios.get(url);

  //example of fetch with optional object as 2nd argument
  return fetch(url, {
    method: method,
    headers: { Accept: "application/json" },
    body: JSON.stringify(data)
  }).then((data) => {
    if(method === "DELETE" && data.status === 200){
        return "Delete successfully"
    }

    return data.json()
  });
}

////////////////////////
// ASYNC CONTROLLERS
////////////////////////
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (responseData.length > 0) {
      for (const post of responseData) {
        const postElClone = document.importNode(postTemplate.content, true);
        postElClone.querySelector("h2").textContent = post.title.toUpperCase();
        postElClone.querySelector("p").textContent = post.body;
        postElClone.querySelector("li").id = post.id;
        listElement.appendChild(postElClone);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function createPost(title, content) {
  try {
    const post = {
      title: title,
      body: content,
      userId: Math.random()
    };

    const result = await sendHttpRequest(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(event){
    if(event.target.tagName === "BUTTON"){

        event.target.style.backgroundColor = "gray"
        event.target.style.borderColor = "gray"
        event.target.textContent = "Loading..."
        event.target.disabled = true

        const postToDelete = event.target.closest("li")
        console.log(postToDelete);

        const result = await sendHttpRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/" + postToDelete.id)

        if(result === "Delete successfully"){
            this.removeChild(postToDelete)
        }
    }
}

//READ
fetchButton.addEventListener("click", fetchPosts);

//CREATE
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

//DELETE
postList.addEventListener("click", deletePost);
