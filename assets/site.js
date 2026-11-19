// Language switch keeps the section you're on (#madrid etc. exist on both pages).
document.querySelectorAll("[data-lang-switch]").forEach((link) => {
  link.addEventListener("click", () => {
    if (location.hash) link.href = link.getAttribute("href").split("#")[0] + location.hash;
  });
});

// Copy buttons appear only when JS & clipboard work and the value is filled in.
document.querySelectorAll("button[data-copy]").forEach((button) => {
  const value = button.dataset.copy.trim();
  if (!value || !navigator.clipboard) return;
  const label = button.querySelector("span");
  const idle = label.textContent;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(value);
      label.textContent = button.dataset.done;
      button.dataset.state = "done";
    } catch (error) {
      console.error("Copy failed", error);
      label.textContent = button.dataset.failed;
    }
    setTimeout(() => {
      label.textContent = idle;
      delete button.dataset.state;
    }, 2200);
  });
});
