document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion .btn-link');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var collapseElement = document.querySelector(this.dataset.target);
            var isCollapsed = collapseElement.classList.contains('show');

            accordionButtons.forEach(function(btn) {
                var target = document.querySelector(btn.dataset.target);
                if (target !== collapseElement) {
                    target.classList.remove('show');
                }
            });

            if (!isCollapsed) {
                collapseElement.classList.add('show');
            } else {
                collapseElement.classList.remove('show');
            }
        });
    });
});
