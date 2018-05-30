document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.notepad) document.querySelector("textarea").value = localStorage.notepad;
  else document.querySelector("textarea").value = "This notepad is where you can unleash whatever is on your mind.\n\nFeatures:\n- Saves automatically\n- Resize-able pad\n- Word check\n- Multi-line\n- Minimalistic"
  
  document.querySelector("textarea").addEventListener("keyup", function() {
    setTimeout(function() {
      localStorage.notepad = document.querySelector("textarea").value;
    }, 10);
  });
});
