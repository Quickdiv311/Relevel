let items = [];

function submitName()
{
    let item = document.getElementById('itemName');
    let itemName = item.value;
    item.value = '';
    addItem(itemName);
}

function addItem(itemName)
{
    items.push(itemName);
    var li = document.createElement('li');
    li.id = "listItem"+items.length;
    li.style.display = 'flex';
    li.innerText = itemName;

    var label = document.createElement('label');
    label.id = "label"+items.length;
    label.style.width = '80%';

    var edit = document.createElement('button');
    edit.id = "editButton"+items.length;
    edit.innerText = "edit";
    edit.classList.add = "btn";
    edit.classList.add = "btn-primary";
    edit.style.marginRight = "10px";
    edit.addEventListener("click", onEdit);

    var del = document.createElement('button');
    del.id = "delButton"+items.length;
    del.innerText = "del";
    del.classList.add = "btn";
    del.classList.add = "btn-danger";
    del.style.marginRight = "10px";
    del.addEventListener("click", onDelete);

    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(del);

    var ul = document.getElementById('list');
    ul.appendChild(li);

    console.log(items.length);
}