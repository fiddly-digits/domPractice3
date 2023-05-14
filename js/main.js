let fillUsersList = (userList) => {
  userList.forEach((user, index) => {
    appendList(createList(user, index));
  });
  sendUserInfo();
};

function sendUserInfo() {
  let buttons = document.querySelectorAll(".btn-info");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      cleanUserList();
      let userIdentifier = event.target.getAttribute("data-user-identifier");
      let userCard = createUserCard(mock[userIdentifier]);
      let userData = document.querySelector(".user-data");
      userData.appendChild(userCard);
    });
  });
}

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
  detailButton.setAttribute("data-user-identifier", index);
  //detailButton.setAttribute("onclick", "sendInfo(event)");
  return detailButton;
};

let appendList = (nodeList) => {
  let listContainer = document.querySelector(".user-list");
  listContainer.append(nodeList);
};

// function sendInfo(event) {
//   cleanUserList();
//   let userIdentifier = event.target.getAttribute("data-user-identifier");
//   let userCard = createCard(mock[userIdentifier]);
//   let userData = document.querySelector(".user-data");
//   userData.appendChild(userCard);
// }

// const createCard = (user) => {
//   let { name, location, gender, dob, email, picture } = user;
//   let { age } = dob;
//   let { title, first, last } = name;
//   let { country } = location;
//   let { large } = picture;
//   let card = document.createElement("div");
//   let cardImg = document.createElement("img");
//   let cardBody = document.createElement("div");
//   let userTitle = document.createElement("h5");
//   let userMail = document.createElement("p");
//   let listGroup = document.createElement("ul");
//   let listAge = document.createElement("li");
//   let listGender = document.createElement("li");
//   let listNat = document.createElement("li");
//   card.classList.add("card");
//   cardImg.classList.add("card-img-top");
//   cardBody.classList.add("card-body");
//   userTitle.classList.add("card-title");
//   userMail.classList.add("card-text");
//   listGroup.classList.add("list-group", "list-group-flush");
//   listAge.classList.add("list-group-item");
//   listGender.classList.add("list-group-item");
//   listNat.classList.add("list-group-item");
//   let nameTextNode = document.createTextNode(`${title} ${first} ${last}`);
//   let mailTextNode = document.createTextNode(email);
//   let ageTextNode = document.createTextNode(`Age: ${age}`);
//   let genderTextNode = document.createTextNode(`Gender: ${gender}`);
//   let natTextNode = document.createTextNode(`Country: ${country}`);
//   cardImg.setAttribute("src", large);
//   userTitle.appendChild(nameTextNode);
//   userMail.appendChild(mailTextNode);
//   listAge.appendChild(ageTextNode);
//   listGender.appendChild(genderTextNode);
//   listNat.appendChild(natTextNode);
//   card.append(cardImg, cardBody, listGroup);
//   cardBody.append(userTitle, userMail);
//   listGroup.append(listAge, listGender, listNat);
//   return card;
// };

const addImage = (imageUrl) => {
  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.setAttribute("src", imageUrl);
  return cardImg;
};

const createDiv = (elementClass) => {
  let div = document.createElement("div");
  div.classList.add(elementClass);
  return div;
};

const createUserTitle = (userNames) => {
  let { title, first, last } = userNames;
  let userNameTitle = document.createElement("h5");
  let nameTextNode = document.createTextNode(`${title} ${first} ${last}`);
  userNameTitle.classList.add("card-title");
  userNameTitle.appendChild(nameTextNode);
  return userNameTitle;
};

const createTextMail = (userMail) => {
  let paragraph = document.createElement("p");
  let mailTextNode = document.createTextNode(userMail);
  paragraph.classList.add("card-text");
  paragraph.appendChild(mailTextNode);
  return paragraph;
};

const createListGroup = () => {
  let listGroup = document.createElement("ul");
  listGroup.classList.add("list-group", "list-group-flush");
  return listGroup;
};

const createListElement = (listText) => {
  let listElement = document.createElement("li");
  let listTextNode = document.createTextNode(listText);
  listElement.classList.add("list-group-item");
  listElement.appendChild(listTextNode);
  return listElement;
};

const createUserCard = (user) => {
  let { name, location, gender, dob, email, picture } = user;
  let { age } = dob;
  let { country } = location;
  let { large } = picture;
  let card = createDiv("card");
  let img = addImage(large);
  let cardBody = createDiv("card-body");
  let userFullName = createUserTitle(name);
  let userMail = createTextMail(email);
  let listGroup = createListGroup();
  let ageListElement = createListElement(`Age: ${age}`);
  let genderListElement = createListElement(`Gender: ${gender}`);
  let countryListElement = createListElement(`Country: ${country}`);
  listGroup.append(ageListElement, genderListElement, countryListElement);
  cardBody.append(userFullName, userMail);
  card.append(img, cardBody, listGroup);
  return card;
};

const cleanUserList = () => {
  let userData = document.querySelector(".user-data");
  while (userData.firstChild) {
    userData.removeChild(userData.lastChild);
  }
};

fillUsersList(mock);

/* 
Dataset 

let selectedUser = users.find() <- devuelve el elemento coincidente de un array
innerText 
*/
