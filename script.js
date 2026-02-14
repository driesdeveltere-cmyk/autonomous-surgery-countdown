// Deadline: 6 Jan 2029 00:00 in Europe/Brussels (CET in January).
// Using an explicit UTC time avoids browser timezone quirks:
const TARGET_UTC_ISO = "2029-01-05T23:00:00Z";
const target = new Date(TARGET_UTC_ISO).getTime();

function pad2(n){ return String(n).padStart(2, "0"); }

function update(){
  const el = document.getElementById("countdown");
  if (!el) return;

  const now = Date.now();
  let diff = target - now;

  if (diff <= 0){
    el.textContent = "⏱️ Time’s up.";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  el.textContent = `${days} days ${pad2(hours)}:${pad2(mins)}:${pad2(secs)}`;
}

update();
setInterval(update, 250);

