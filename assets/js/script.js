const $currentDay = $("#currentDay");
$currentDay.text(moment().format("dddd, MMMM Do, YYYY"));

$textAreas = document.querySelectorAll("textarea");
for (let i = 0; i < $textAreas.length; i++) {
    let currentTextarea = parseInt($textAreas[i].name);
    let currentHour = parseInt(moment().format("HH"));
    if (currentTextarea < currentHour) {
        $textAreas[i].className = "past col-10";
    } else if (currentTextarea === currentHour) {
        $textAreas[i].className = "present col-10";
    } else if (currentTextarea > currentHour) {
        $textAreas[i].className = "future col-10";
    }
}

function getStoredTasks() {
    for (let i = 0; i < $textAreas.length; i++) {
        let storedTasks = localStorage.getItem($textAreas[i].id);
        $textAreas[i].textContent = storedTasks;
    }
}

getStoredTasks();

const $saveBtns = $(".saveBtn");
for (let i = 0; i < $saveBtns.length; i++) {
    $saveBtns[i].addEventListener("click", saveData);
}

function saveData() {
    const tasks = $(this).siblings("textarea");
    const hour = tasks.attr("id");
    localStorage.setItem(hour, tasks.val());
    alert("Data saved to localStorage!");
}