const auth = localStorage.getItem("auth");
const current_user = localStorage.getItem("current_user");

if (!auth || !current_user) {
    window.open("login.html", "_self");
}

// this will get the data on reload, it will fetch new data
async function get_data(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Basic " + auth,
            "Content-Type": "application/json; charset=utf-8"
        },
    });

    let data = await response.json();

    if (response.status === 200) {
        return data["Ok"];
    } else {
        // Todo: Error handling
        return data["Err"];
    }
}

async function UserList() {
    let all_roles = await get_data("/user/all_roles");
    var list = document.getElementById("rolelist");
    var activeElement = null;

    for (i = 0; i < all_roles.length; i++) {
        var node = document.createElement("li");
        var data = document.createTextNode(all_roles[i]);
        node.className = "role";
        node.appendChild(data);
        list.appendChild(node);
        
        node.addEventListener("click", async function() {
            var role = this.textContent;
            
            if (activeElement !== null) {
                activeElement.classList.remove("active");
            }
            this.classList.add("active");
            activeElement = this;

            let data = await get_data("/user/search?role=" + role);
            console.log("Clicked, data:" + JSON.stringify(data));
        });
    }
}

function logout() {
    localStorage.clear()
    window.open("login.html", "_self");
}

function absence() {
    document.getElementById("error-main").textContent = "Missing Permissions for Absence!";
}

function criminal() {
    document.getElementById("error-main").textContent = "Missing Permissions for Criminal!";
}

UserList();