const input=document.querySelector(".todo-input"),button=document.querySelector(".todo-button"),list=document.querySelector(".todo-list");function addTodo(t){t.preventDefault();const e=document.createElement("div");e.classList.add("todo");const n=document.createElement("li");n.innerText=input.value,e.appendChild(n);const d=document.createElement("button");d.innerHTML='<i class="fas fa-check"></i>',d.classList.add("completed-btn"),e.appendChild(d);const o=document.createElement("button");o.innerHTML='<i class="fas fa-trash"></i>',o.classList.add("trash-btn"),e.appendChild(o),list.appendChild(e)}button.addEventListener("click",addTodo);
//# sourceMappingURL=script.js.map