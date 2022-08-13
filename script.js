let input = document.querySelector("#entre-list");
let add = document.querySelector(".add-list");
let tache = document.querySelector(".taches");

add.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `<p style="outline: none" ><input type="checkbox" class="coche"> ${input.value}<p><div><img class="trash" src="./trash-can-solid.svg" alt="" width="15px"></div>`;
    tache.appendChild(newItem);
    input.value = "";
  } else {
    alert("Ajouter une tache");
  }
});
tache.addEventListener("click", (e) => {
  if (e.target.classList.contains("coche")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

tache.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    e.target.parentElement.parentElement.remove();
  }
});
