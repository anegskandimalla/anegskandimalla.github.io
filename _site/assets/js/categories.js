const categories = { Science: [{ url: `/posts/toshiba/`, date: `24 May 2023`, title: `Toshiba Exploravision - The PlastiCan`},{ url: `/posts/rubegoldberg/`, date: `24 May 2023`, title: `Roll With It - A Rube Goldberg Machine`},{ url: `/posts/co2/`, date: `24 May 2023`, title: `CO2 Breaks the World - A Month-Long Project`},{ url: `/posts/labreports/`, date: `24 May 2023`, title: `A Life of Lab Reports`},{ url: `/posts/conceptmap/`, date: `24 May 2023`, title: `A Few Science Concept Maps`},],First_Post: [{ url: `/posts/labreports/`, date: `24 May 2023`, title: `A Life of Lab Reports`},],Software: [{ url: `/posts/co2/`, date: `24 May 2023`, title: `CO2 Breaks the World - A Month-Long Project`},{ url: `/posts/aclhacks23/`, date: `24 May 2023`, title: `Academies Hacks 2023 - Cyanide Cinema`},{ url: `/posts/likewiselearn/`, date: `24 May 2023`, title: `Likewise, Learn - A Twitter Optimizer`},],AI: [{ url: `/posts/aclhacks23/`, date: `24 May 2023`, title: `Academies Hacks 2023 - Cyanide Cinema`},{ url: `/posts/likewiselearn/`, date: `24 May 2023`, title: `Likewise, Learn - A Twitter Optimizer`},],Games: [{ url: `/posts/co2/`, date: `24 May 2023`, title: `CO2 Breaks the World - A Month-Long Project`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};