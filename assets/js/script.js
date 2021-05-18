const $currentDay = $("#currentDay");
$currentDay.text(moment().format("dddd, MMMM Do, YYYY"));

$textAreas = document.querySelectorAll("textarea");
for (let i = 0; i < $textAreas.length; i++) {
    let current = parseInt($textAreas[i].name);
    if (current < parseInt(moment().format("HH"))) {
        $textAreas[i].className = "past col-10";
    } else if (current === parseInt(moment().format("HH"))) {
        $textAreas[i].className = "present col-10";
    } else if (current > parseInt(moment().format("HH"))) {
        $textAreas[i].className = "future col-10";
    }
}

const $saveBtns = $(".saveBtn");
for (let i = 0; i < $saveBtns.length; i++) {
    $saveBtns[i].addEventListener("click", saveData);
}

function saveData() {
    const tasks = $(this).siblings("textarea");
    const hour = tasks.attr("id");
    localStorage.setItem(hour, tasks.val());
}

function getStoredTasks() {
    for (let i = 0; i < $textAreas.length; i++) {
        let storedTasks = localStorage.getItem($textAreas[i].id);
        $textAreas[i].textContent = storedTasks;
    }
}

getStoredTasks();