const ol = document.querySelector(".list");
const btn = document.querySelector("#btn");
const inp = document.querySelector("input");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const textArea = document.createElement("div");
  textArea.textContent = inp.value;
  inp.value = "";

  const delBtn = document.createElement("button");
  delBtn.textContent = "x";

  const li_div = document.createElement("div");
  li_div.classList = "li_div";

  const check = document.createElement("input");
  check.type = "checkbox";

  li_div.append(textArea);
  li_div.prepend(check);

  li.prepend(li_div);
  li.append(delBtn);

  check.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("checked");
  });

  delBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  ol.prepend(li);
});
