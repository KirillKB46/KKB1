// let saveTask = document.querySelector('#saveTask');

// saveTask.addEventListener('click', () => {
//     console.log('Click')
// })
// let title = document.querySelector('title')
// let description = document.querySelector('description')

// console.log(title.value + ' ' + description.value)

let saveTask = document.querySelector('.save-task');
saveTask.addEventListener('click', () => {
    addTask()
})

function addTask() {
    let titleInputEl = document.querySelector('.title')
    let descriptionInputEl = document.querySelector('.description')
    let obj = {
        title: titleInputEl.value,
        description: descriptionInputEl.value,
    }


    createTask(title.value, description.value)
    titleInputEl.value = ''
    descriptionInputEl.value = ''

}

function createTask(title, description) {
    const taskElement = document.querySelector('.tasks')
    let taskBlock = document.createElement('div')
    taskBlock.classList.add('task')
    let div = document.createElement('div')
    let a = document.createElement('p')
    let b = document.createElement('p')

    a.innerHTML = title
    b.innerHTML = description

    taskBlock.append(a);
    taskBlock.append(b);

    taskElement.append(taskBlock)
}

deleteEntry.addEventListener("click", () => {
    deleteTask(" ")
})

function deleteTask() {
    titleInputEl.value = tasks.title
    descriptionInputEl.value = tasks.description

    deleteEntry.

}



// window.onload = function() {
//     setInterval(setMyTime, 1000);

//     if (document.getElementById("main_block__hello_text").innerHTML == "") {
//         let start_page = document.createElement("div");
//         start_page.innerHTML =
//             "<div id='main_block__text'>Welcome To co:id<br></div><h3 id='main_block__text_mini'>Add New Keep</h3>";
//         document.getElementById("main_block__hello_text").append(start_page);
//     }

//     function setMyTime() {
//         let time = new Date();
//         document.getElementById("time").innerHTML = `${time.toLocaleDateString()}`;
//     }

//     let keepsList = [];
//     if (localStorage.getItem("todo")) {
//         keepsList = JSON.parse(localStorage.getItem("todo"));
//         out();
//     }

//     document.getElementById("add").onclick = function() {
//         let title_block =
//             document.getElementById("title_block__input").value.trim() == "" ?
//             "Non Title" :
//             document.getElementById("title_block__input").value;
//         let progress = {};
//         progress.todo = title_block;
//         progress.delete = false;
//         keepsList.push(progress);
//         out();
//         localStorage.setItem("todo", JSON.stringify(keepsList));
//     };

//     function out() {
//         document.getElementById("main_block").innerHTML = "";
//         for (let item of keepsList) {
//             document
//                 .getElementById("main_block")
//                 .insertAdjacentHTML(
//                     "beforeend",
//                     `<span id='keep_block'>${item.todo}<button class='deleter'>Delete</button></span>`
//                 );
//         }
//     }
//     document.body.addEventListener("click", function(ev) {
//         const deleter = ev.target.closest(".deleter");
//         if (!deleter) {
//             return;
//         }
//         const index = [...document.getElementsByClassName("deleter")].indexOf(
//             deleter
//         );
//         delKeep(index);
//     });

//     function delKeep(index) {
//         keepsList.splice(index, 1);
//         console.log(keepsList);
//         localStorage.setItem("todo", JSON.stringify(keepsList));
//         out();
//     }
// };