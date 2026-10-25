const form = document.getElementById("registrationForm");
const statusBox = document.getElementById("formStatus");
const waNumber = "233550564384";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusBox.textContent = "Submitting your registration…";
  const submitButton = form.querySelector("button[type=submit]");
  submitButton.disabled = true;

  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    "🚀 NEW DAMM-B REGISTRATION",
    "",
    "Program: DigiTech Analyst Manuel Mentorship BootCamp (DAMM-B)",
    `👤 Name: ${data.full_name || "-"}`,
    `📱 WhatsApp: ${data.whatsapp || "-"}`,
    `📧 Email: ${data.email || "-"}`,
    `📍 Location: ${data.location || "-"}`,
    `🎂 Age range: ${data.age_range || "-"}`,
    `💻 Coding experience: ${data.coding_experience || "-"}`,
    `📱 Device: ${data.device || "-"}`,
    `🕐 Preferred time: ${data.preferred_time || "-"}`,
    `🎯 Goal: ${data.goal || "-"}`,
    `📝 Reason: ${data.reason || "-"}`,
    `📣 Source: ${data.source || "-"}`,
  ].join("\n");

  // WhatsApp fallback: opens a pre-filled message to the coordinator.
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      showSuccess(waUrl);
    } else {
      statusBox.innerHTML = `The online backup submission could not be completed. <a href="${waUrl}" target="_blank" rel="noopener">Send the registration to WhatsApp instead →</a>`;
    }
  } catch (error) {
    statusBox.innerHTML = `You can still send your registration directly. <a href="${waUrl}" target="_blank" rel="noopener">Open WhatsApp →</a>`;
  } finally {
    submitButton.disabled = false;
  }
});

function showSuccess(waUrl) {
  form.innerHTML = `
    <div class="success-box" style="text-align:center;padding:30px 10px">
      <div style="font-size:54px">🎉</div>
      <h3 style="font-size:28px;margin:8px 0">Registration prepared!</h3>
      <p style="color:#64748b">Your details have been prepared for DAMM-B. Tap the button below to send them directly to the coordinator on WhatsApp.</p>
      <a class="btn primary" style="width:100%;margin-top:12px" href="${waUrl}" target="_blank" rel="noopener">📲 Send Registration on WhatsApp</a>
      <button class="btn secondary" style="width:100%;margin-top:10px;color:#111827;border-color:#d8dee9" onclick="location.reload()">Register another participant</button>
    </div>`;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
