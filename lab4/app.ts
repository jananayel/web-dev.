// gets elem. from html
const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;
const countText = document.getElementById("count") as HTMLSpanElement;
const clearCompletedBtn = document.getElementById("clearCompleted") as HTMLButtonElement;
const clearAllBtn = document.getElementById("clearAll") as HTMLButtonElement;
const filterBtns = document.querySelectorAll<HTMLButtonElement>(".filter");

let currentFilter: string = "all";

// counts odos that arent done
function updateCount(): void {
  const left: number = list.querySelectorAll("li:not(.done)").length;
  countText.textContent = `${left} items left`;
}

function showTodos(filter: string): void {
  list.querySelectorAll("li").forEach(li => {
    const isDone: boolean = li.classList.contains("done");

    if (filter === "active" && isDone) {
      li.style.display = "none";
    } else if (filter === "completed" && !isDone) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  });
}

// new todo
function addTodo(): void {
  const text: string = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
    updateCount();
    showTodos(currentFilter);
  });

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;
  span.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo:", span.textContent || "");
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.className = "delete";
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  // put it all together
  li.append(checkbox, span, delBtn);
  list.appendChild(li);

  input.value = "";
  updateCount();
  showTodos(currentFilter);
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") addTodo();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    currentFilter = btn.dataset.filter || "all";
    showTodos(currentFilter);
  });
});

// clear buttons
clearCompletedBtn.addEventListener("click", () => {
  list.querySelectorAll("li.done").forEach(li => li.remove());
  updateCount();
});

clearAllBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCount();
});