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
