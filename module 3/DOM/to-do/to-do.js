let todos = [];

function submitItem()
{
    const item = document.getElementById("itemName");
    const itemName = item.value;
    item.value = "";
    addItem(itemName);
}

function addItem(name)
{
    todos.push(name);
    const li = document.createElement("li");
    li.id="listItem"+todos.length;

    const label = document.createElement("label");
    label.id="todo"+todos.length;
    label.style.width="80%";
    label.innerText=name;

    const editBtn = document.createElement("button");
    editBtn.id="eBtn"+todos.length;
    editBtn.innerText="Edit";
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.style.margin="10px";
    editBtn.addEventListener("click",handleEditClick);

    const deleteBtn = document.createElement("button");
    deleteBtn.id="dBtn"+todos.length;
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.addEventListener("click",handleDeleteClick);

    li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    const ul = document.getElementById("itemList");
    ul.appendChild(li);
}

function handleEditClick(event)
{
    button = document.getElementById(event.target.id);

    if(document.getElementById("txtUpdate"))
    {
      handleSaveClick(event);
      button.innerText="Edit";
      return;
    }

    const labelId = event.target.id.replace("eBtn","todo");
    const label = document.getElementById(labelId);
    button.innerText = "Save";
    const txtBox = document.createElement("input");
    txtBox.type="text";
    txtBox.id="txtUpdate";
    txtBox.value=label.innerText;
    txtBox.style.width="80%";
    txtBox.style.display="inline";
    txtBox.classList.add("form-control");

    const liId = event.target.id.replace("eBtn","listItem");
    const li = document.getElementById(liId);
    li.replaceChild(txtBox,label);
}

function handleSaveClick(event)
{
    const textB = document.getElementById("txtUpdate");
    const label = document.createElement("label");
    label.innerText=textB.value;
    label.id=event.target.id.replace("eBtn","todo");
    label.style.width="80%";
    const liId=event.target.id.replace("eBtn","listItem");
    const li = document.getElementById(liId);
    li.replaceChild(label,textB);
}

function handleDeleteClick(event)
{
   const button = document.getElementById(event.target.id);
   const li = button.parentElement;
   document.getElementById("itemList").removeChild(li);
}