// variable declaration

// username input is assigned to username
const username = document.getElementById("username");

// user entered password is assigned to password
const password = document.getElementById("password");
const wrapper = document.getElementById("wrapper");
const logout = document.getElementById("logout");
// user click on signup
const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
const p = document.getElementById("signmsg")
const a = document.getElementById("redirect")

// user entered input is stored array
let data = [];


// function to store the entered input user name and password
function storesignup(){
    let items = {
                name: username.value,
                pass: password.value
                 };
    let isUnique = true
    data.forEach(
        (e) => {
            if(e.name === username.value){
                isUnique = false;
            }
        }
    )
    if(isUnique){
        data.push(items);  
        p.innerText = "Sucessfully registred";       
    } else {
        p.innerText = "Already username is registered withus";
    }
}

// function to check the signin
function checksignin(){
    data.forEach((e) => {
                            if (e.name == username.value && e.pass == password.value) {
                            wrapper.style.display = "none";
                            a.setAttribute("href","file:///Users/chaduvulaprasanth/Documents/altcampus/asapcss/index.html")    
                            }
                            else{
                                p.innerText = "Incorrect username or password"
                            }
                        }
                    
                )
}

function showsignupsignin(){
    wrapper.style.display = "";
    logout.style.display = "none";
    username.value = "";
    password.value = "";
    p.innerText = "";

}

// adding event listners 
signup.addEventListener("click", storesignup)
signin.addEventListener("click", checksignin)
logout.addEventListener("click",showsignupsignin)