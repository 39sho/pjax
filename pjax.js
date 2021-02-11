const $a, $content;

const init = () => {
  $a = document.querySelector("a");
  $content = document.querySelector("#content");
};

$a.addEventListener("click", async (e) => {
  e.preventDefault();
  
  console.log(e.target.href);
  
  const response = await fetch(e.target.href);
  const text = await response.text();
  
  const html = new DOMParser().parseFromString(text, "text/html");
  
  $content.replaceWith(html.querySelector("#content"));
  
  init();
});

init();
