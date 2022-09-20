const newCommentHandler = async (event) => {
  console.log(document.getElementById("commentInfo").value);
  if (document.getElementById("commentInfo").value) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        comment_info: document.getElementById("commentInfo").value,
        post_id: document.getElementById("stayHere").getAttribute("data-name"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(
        `/posts/${document
          .getElementById("stayHere")
          .getAttribute("data-name")}`
      );
    } else {
      alert("Failed to create event");
    }
  }
};
