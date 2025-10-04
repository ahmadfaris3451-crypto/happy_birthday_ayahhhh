function checkPassword() {
  const input = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === "0410") {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Password salah! Cuba lagi.";
  }
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
