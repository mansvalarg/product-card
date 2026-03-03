const userTemplate = document.getElementById("user-template");
const userList = document.getElementById("user-list");

let users = [];

const savedUsers = localStorage.getItem('users');
if (savedUsers === null) { fetchData() }
else {
  users = JSON.parse(savedUsers);
  document.getElementById('loading-text').innerText = '';
  renderUsers(users);
}

async function fetchData() {
  try {
    const loadingImitation = await new Promise(resolve => {
      setTimeout(resolve, 3000);
    })
    const response = await fetch('./users.json');
    const data = await response.json();
    users = data.users;
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('loading-text').innerText = ''
    renderUsers(users);
  } catch {
    document.getElementById('loading-text').innerText = 'Ошибка при загрузке данных'
  }
}

function renderUsers(usersToRender) {
  userList.innerHTML = "";
  usersToRender.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector(".user-photo").src = `photos/${user.img}.jpg`;
    userClone.querySelector(".user-id").textContent = user.id;
    userClone.querySelector(".user-name").textContent = user.name;
    userClone.querySelector(".user-surname").textContent = user.surname;
    userClone.querySelector(".user-age").textContent = `Возраст: ${user.age}`;
    userClone.querySelector(".user-email").textContent = `Почта: ${user.email}`;
    userClone.querySelector(".user-location").textContent = `Место рождения: ${user.location}`;
    userClone.querySelector(".delete-button").onclick = () => deleteUser(user.id);
    userList.appendChild(userClone);
  });
}

const deleteUserButton = document.querySelector('.delete-user-button');
deleteUserButton.addEventListener('click', () => {
  const idToDelete = Number(document.getElementById('delete-id-input').value);
  deleteUser(idToDelete);
})
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  localStorage.setItem('users', JSON.stringify(users));
  renderUsers(users);
}

const deleteAllButton = document.querySelector('.delete-all-button');
deleteAllButton.addEventListener('click', deleteAll);
function deleteAll() { users =[]; localStorage.removeItem('users'); renderUsers(users) }

const addAllButton = document.querySelector('.add-all-button');
addAllButton.addEventListener('click', getAllUsers);
function getAllUsers() {
  if (users.length === 0) {
    fetchData();
  } else {
    alert('Все пользователи перед тобой, дурень!');
  }
}