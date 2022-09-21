const postForm = document.getElementById("postForm");
const showCreatePost = () => {
  if (postForm.style.display == "flex") {
    postForm.style.display = "none";
  }
  postForm.style.display = "flex";
};

const newPostHandler = async (event) => {
  if (document.getElementById("postTitle").value) {
    const response = await fetch(`/api/dashboard`, {
      method: "POST",
      body: JSON.stringify({
        title: document.getElementById("postTitle").value,
        description: document.getElementById("postContent").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create event");
    }
  }
};

const deletePost = async (event) => {
  // event.preventDefault();
  const id = document.getElementById("delete").getAttribute("data-postid");
  console.log(id);

  const response = await fetch(`/api/dashboard/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert("Failed to delete the post!");
  }
};

const updatePost = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();

  const id = document.getElementById("delete").getAttribute("data-postid");

  const response = await fetch(`/api/dashboard/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_id: id,
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to edit post");
  }
};
