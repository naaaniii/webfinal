let usersInfo = [];
const showcase = document.getElementById("showcase");

(function fetchUsersData() {
    fetch("https://reqres.in/api/users?page=1", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("The fetched data", data);
            usersInfo = data.data;
            appendUsersInfo();
        })
        .catch((error) => console.error);
})();

const appendUsersInfo = () => {
    const user = usersInfo.map(
        (user) => `
        <div class="showcase-container">
        <header class="showcase-header">
        ${user.first_name} ${user.last_name}
        </header>
        <p>${user.email}</p>
    <img src=${user.avatar} />
    </div>  `
    );
    showcase.innerHTML = user.join("");
};


//check form
const check = document.getElementById("checkPhone");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");

function phoneValidation(str) {
    const re = /^\(?(\d{3})\)?[ ]?(\d{3})[-]?(\d{4})$/;

    if (re.test(str)) {
        submit.disabled = false;
        return alert("available");
    } else {
        return alert("please check phone number");
    }
}

(function clickCheck() {
    check.addEventListener("click", () => {
        phoneValidation(phone.value);
    });
})();