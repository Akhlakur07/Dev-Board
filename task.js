document.getElementById("discover").addEventListener("click", function () {
    window.location.href = "blogs.html"
});

document.getElementById("theme-btn").addEventListener("click", function () {
    const colors = ["beige", "silver", "yellow", "aliceblue", "mediumorchid", "mediumpurple", "palegreen", "paleturquoise", "pink", "plum", "powderblue", "	seashell", "skyblue", "slateblue", "snow", "whitesmoke", "black"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


function currentTime() {
  const current = new Date();
  return current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

document.getElementById("btn-2").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-2").disabled = true;
  document.getElementById("btn-2").style.backgroundColor = "silver";
  document.getElementById("btn-2").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("cloud").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("cloud").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("btn-1").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-1").disabled = true;
  document.getElementById("btn-1").style.backgroundColor = "silver";
  document.getElementById("btn-1").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("shop").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("shop").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("btn-3").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-3").disabled = true;
  document.getElementById("btn-3").style.backgroundColor = "silver";
  document.getElementById("btn-3").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("swift").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("swift").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("btn-4").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-4").disabled = true;
  document.getElementById("btn-4").style.backgroundColor = "silver";
  document.getElementById("btn-4").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("meta").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("meta").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("btn-5").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-5").disabled = true;
  document.getElementById("btn-5").style.backgroundColor = "silver";
  document.getElementById("btn-5").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("google").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("google").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("btn-6").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  document.getElementById("btn-6").disabled = true;
  document.getElementById("btn-6").style.backgroundColor = "silver";
  document.getElementById("btn-6").style.color = "gray";
  const navC = document.getElementById("nav-c").innerText;
  const intNavC = parseInt(navC);
  const taskC = document.getElementById("task-c").innerText;
  const intTaskC = parseInt(taskC);

  if (intTaskC === 1) {
    alert("Congrats!!! You have completed all the current tasks");
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;
    const card1 = document.getElementById("glass").innerText;

    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");
    act.appendChild(p);
  } else {
    document.getElementById("nav-c").innerText = intNavC + 1;
    document.getElementById("task-c").innerText = intTaskC - 1;

    const card1 = document.getElementById("glass").innerText;
    const act = document.getElementById("activity");
    const p = document.createElement("p");
    const time = currentTime();
    p.innerText = `You have completed the task ${card1} at ${time}`;
    p.classList.add("bg-gray-100", "p-4", "mb-4", "rounded-lg", "font-medium");

    act.appendChild(p);
  }
});

document.getElementById("clr-hst").addEventListener("click", function () {
  console.log("siuuu");
  document.getElementById("activity").innerText = "";
});
