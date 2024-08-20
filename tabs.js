// assets/js/tabs.js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');

      buttons.forEach(btn => btn.classList.remove('active'));
      panes.forEach(pane => pane.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});
