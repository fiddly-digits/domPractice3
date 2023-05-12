let fillUsersList = (userList) => {
  userList.forEach((user, index) => {
    appendList(createList(user, index));
    //showDetailButton(user);
  });
};

let createList = (user, index) => {
  let listElement = document.createElement("li");
  let listTextNode = document.createTextNode(
    `${user.name.title} ${user.name.first} ${user.name.last}`
  );
  listElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  listElement.append(listTextNode, createButton(index));
  return listElement;
};

let createButton = (index) => {
  let detailButton = document.createElement("button");
  let buttonTextNode = document.createTextNode("Detail");
  detailButton.classList.add("btn", "btn-info");
  detailButton.appendChild(buttonTextNode);
  detailButton.setAttribute("user-identifier", index);
  detailButton.setAttribute("onclick", "sendInfo(event)");
  return detailButton;
};

let appendList = (nodeList) => {
  let listContainer = document.querySelector(".user-list");
  listContainer.append(nodeList);
};

function sendInfo(event) {
  cleanUserList();
  let userIdentifier = event.target.getAttribute("user-identifier");
  let userCard = createCard(mock[userIdentifier]);
  let userData = document.querySelector(".user-data");
  userData.appendChild(userCard);
}

const createCard = (user) => {
  let { name, location, gender, dob, email, picture } = user;
  let { age } = dob;
  let { title, first, last } = name;
  let { country } = location;
  let { large } = picture;
  let card = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardBody = document.createElement("div");
  let userTitle = document.createElement("h5");
  let userMail = document.createElement("p");
  let listGroup = document.createElement("ul");
  let listAge = document.createElement("li");
  let listGender = document.createElement("li");
  let listNat = document.createElement("li");
  card.classList.add("card");
  cardImg.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  userTitle.classList.add("card-title");
  userMail.classList.add("card-text");
  listGroup.classList.add("list-group", "list-group-flush");
  listAge.classList.add("list-group-item");
  listGender.classList.add("list-group-item");
  listNat.classList.add("list-group-item");
  let nameTextNode = document.createTextNode(`${title} ${first} ${last}`);
  let mailTextNode = document.createTextNode(email);
  let ageTextNode = document.createTextNode(`Age: ${age}`);
  let genderTextNode = document.createTextNode(`Gender: ${gender}`);
  let natTextNode = document.createTextNode(`Country: ${country}`);
  cardImg.setAttribute("src", large);
  userTitle.appendChild(nameTextNode);
  userMail.appendChild(mailTextNode);
  listAge.appendChild(ageTextNode);
  listGender.appendChild(genderTextNode);
  listNat.appendChild(natTextNode);
  card.append(cardImg, cardBody, listGroup);
  cardBody.append(userTitle, userMail);
  listGroup.append(listAge, listGender, listNat);
  return card;
};

const cleanUserList = () => {
  let userData = document.querySelector(".user-data");
  while (userData.firstChild) {
    userData.removeChild(userData.lastChild);
  }
};

fillUsersList(mock);
