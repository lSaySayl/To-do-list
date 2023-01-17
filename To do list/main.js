let idContador = 0;
const input = document.querySelector(`input[type = "text"]`);

let userInput = document.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

let addTask = () => {
  idContador++;

  let newValue = input.value;

  list.innerHTML += ` 
    <div id="${idContador}" class="task-container">
        <label for="">
            <input type="checkbox" />
            ${newValue}
        </label>
        <br />
        <img src="img/goma-de-borrar.png" class="closeBtn" />
    </div> `;

  input.value = "";

  updateStats();
};

list.addEventListener("click", (event) => {
  if (event.srcElement.nodeName == `INPUT`){
    updateStats();
  } 

  else if(event.srcElement.nodeName == `IMG`) {
    deleteTask(event.srcElement.parentNode.id);
  }

  
});

let updateStats = () => {
  let element = list.querySelectorAll(`div`);
  let checkbox = list.querySelectorAll(`input[type = "checkbox"]:checked`);
  stats.innerHTML = `Tareas pendientes: ${element.length} Completadas: ${checkbox.length} </p>`;
};

let deleteTask = (id) => {
    let taskToDelete = document.getElementById (id);
    list.removeChild(taskToDelete);
    updateStats ();
}
