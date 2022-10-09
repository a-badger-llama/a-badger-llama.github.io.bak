document.addEventListener("DOMContentLoaded", () => {
  let projectLinks = document.getElementsByClassName("link-on-page")

  for (i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener("click", (e) => {
      let targetId = e.target.hash.replace("#", "")
      let postLists = document.getElementsByClassName("post-list")

      for (i = 0; i < postLists.length; i++) {
        if (postLists[i].id == targetId)
          postLists[i].classList.remove("hidden")
        else {
          postLists[i].classList.add("hidden")
        }
      }
    })
  }
});
