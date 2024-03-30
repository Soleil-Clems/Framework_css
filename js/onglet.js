document.addEventListener("DOMContentLoaded", function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

      
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });

       
            const targetPane = document.querySelector(targetId);
            targetPane.classList.add('active');

          
            tabItems.forEach(item => {
                item.classList.remove('active');
            });

       
            this.classList.add('active');
        });
    });



});

