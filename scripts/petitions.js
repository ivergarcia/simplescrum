const API_URL =
  "https://my-json-server.typicode.com/ivergarcia/simplescrum/tasks";

axios
  .get(API_URL)
  .then((resp) => fillTasks(resp.data))
  .catch((err) => console.err(err));

function fillTasks(data) {
  data.map((d) => {
    let newTask = document.createElement("article");

    newTask.classList.add("task");

    let titleTask = document.createElement("h3");
    titleTask.innerText = d.title;

    let descriptionTask = document.createElement("p");
    descriptionTask.innerText = d.description;

    let personTask = document.createElement("p");
    personTask.innerHTML = `Responsable: <span>${d.person}</span>`;

    let deadlineTask = document.createElement("p");
    deadlineTask.innerHTML = `Plazo: <span>${unixToDate(d.deadline)}</span>`;

    newTask.appendChild(titleTask);
    newTask.appendChild(descriptionTask);
    newTask.appendChild(personTask);
    newTask.appendChild(deadlineTask);

    let columTodo = document.getElementById("todoTasks");
    let columInProcess = document.getElementById("inprocessTasks");
    let columDone = document.getElementById("doneTasks");

    if (d.state === "to-do") columTodo.appendChild(newTask);
    if (d.state === "in-process") columInProcess.appendChild(newTask);
    if (d.state === "done") columDone.appendChild(newTask);
  });
}

function createData() {
  let titleTask = document.getElementById("titleTask").value;
  let descriptionTask = document.getElementById("descriptionTask").value;
  let seleccion = document.getElementById("personTask");
  let index = seleccion.selectedIndex;
  let personTask = seleccion[index].text;
  let seleccionar = document.getElementById("deadlineTask");
  let indexs = seleccionar.selectedIndex;
  let deadlineTask = seleccionar[indexs].text;
  switch (deadlineTask) {
    case "1 dia":
      deadlineTask = 1;
      break;
    case "2 dias":
      deadlineTask = 2;
      break;
    case "1 semana":
      deadlineTask = 7;
    default:
      break;
  }
  let data = {
    title: titleTask,
    description: descriptionTask,
    person: personTask,
    state: "to-do",
    deadline: numToUnix(deadlineTask),
    created: numToUnix(),
  };
  return data;
}
function post() {
  axios
    .post(API_URL, createData())
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err));
}
