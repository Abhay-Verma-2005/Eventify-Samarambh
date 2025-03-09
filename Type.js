
document.addEventListener('DOMContentLoaded', function() {
    function openMenu(sideMenu) {
        sideMenu.style.left = '50%';
    }

    function closeMenu(sideMenu) {
        sideMenu.style.left = '-100%';
    }

    function setupMenu(menuButton, sideMenu) {
        menuButton.addEventListener('mouseover', function() {
            openMenu(sideMenu);
        });

        menuButton.addEventListener('mouseout', function(event) {
            var target = event.relatedTarget;
            if (!sideMenu.contains(target)) {
                closeMenu(sideMenu);
            }
        });

        sideMenu.addEventListener('mouseleave', function(event) {
            var target = event.relatedTarget;
            if (!menuButton.contains(target)) {
                closeMenu(sideMenu);
            }
        });
    }

    var menuButton1 = document.getElementById('menu-button1');
    var sideMenu1 = document.getElementById('side-menu1');
    setupMenu(menuButton1, sideMenu1);

    var menuButton2 = document.getElementById('menu-button2');
    var sideMenu2 = document.getElementById('side-menu2');
    setupMenu(menuButton2, sideMenu2);

    var menuButton3 = document.getElementById('menu-button3');
    var sideMenu3 = document.getElementById('side-menu3');
    setupMenu(menuButton3, sideMenu3);

    var menuButton4 = document.getElementById('menu-button4');
    var sideMenu4 = document.getElementById('side-menu4');
    setupMenu(menuButton4, sideMenu4);

    var menuButton5 = document.getElementById('menu-button5');
    var sideMenu5 = document.getElementById('side-menu5');
    setupMenu(menuButton5, sideMenu5);
});

function showAlert() {
    alert("Service not started!   Page not found #404");
}
let prev = document.querySelector(".prev");
        let next = document.querySelector(".next");
        let box = document.querySelector(".box-x");

        let degrees = 0;

        prev.addEventListener('click', function(){
            degrees += 45%360;
            box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
        })

        next.addEventListener('click', function(){
            degrees -= 45%-360;
            box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
        })
        var currentlyOpenContainerId = null;

        function toggleContainer(containerId, barElement) {
          var container = document.getElementById(containerId);
      
          if (currentlyOpenContainerId !== null && currentlyOpenContainerId !== containerId) {
            var currentlyOpenContainer = document.getElementById(currentlyOpenContainerId);
            currentlyOpenContainer.style.display = "none";
          }
      
          container.style.display = (container.style.display === "none" || container.style.display === "") ? "block" : "none";
      
          if (container.style.display === "block") {
            var barRect = barElement.getBoundingClientRect();
            container.style.top = barRect.bottom + "px";
            container.style.left = barRect.left + "px";
            currentlyOpenContainerId = containerId;
          } else {
            currentlyOpenContainerId = null;
          }
        }