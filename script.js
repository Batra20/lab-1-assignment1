function addEvent() {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let cat = document.getElementById("category").value;
  let desc = document.getElementById("desc").value;

  if (title === "") return;

  document.getElementById("events").innerHTML += `
    <div class="event-card">
      <div class="close" onclick="this.parentElement.remove()">×</div>
      <h3>${title}</h3>
      📅 ${date}<br>
      <div class="category">${cat}</div>
      <p>${desc}</p>
    </div>
  `;
}

function clearEvents() {
  document.getElementById("events").innerHTML = "";
}

function sampleEvent() {
  document.getElementById("events").innerHTML = `
    <div class="event-card">
      <div class="close" onclick="this.parentElement.remove()">×</div>
      <h3>Web Development Conference</h3>
      📅 2026-03-15<br>
      <div class="category">Conference</div>
      <p>Annual conference on modern web technologies.</p>
    </div>
  `;
}