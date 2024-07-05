$(document).ready(function () {
    handleDropdown();
    function handleDropdown() {
        let dropdowns = $(".dropdown");

        dropdowns.each(function (index, dropdown) {
            $(dropdown).on("click", function () {
                $(".dropdown-content").hide();
                $(this).find(".dropdown-content").show();
            });
        });
    }
    let dropdownItem = $(".dropdown-item");
    dropdownItem.on("click", function (event) {
        event.stopPropagation();
        let _this = $(this);
        let dropdown = _this.closest(".dropdown");
        let value = _this.text();
        dropdown.find(".dropbtn").text(value);
        dropdown.find(".dropdown-content").hide();
    });
    //Close dropdown
    $(document).click(function () {
        $(".dropdown .dropdown-content").hide();
    });
    $(".dropdown").click(function (e) {
        e.stopPropagation();
    });
    //Menu accordion
    $('.accordion-heading').on('click', function () {
        let _this = $(this);
        item = _this.closest('.accordion-item');
        item.toggleClass('open');
        item.find('.accordion-content').slideToggle();
    });
    //Open, close menu
    let menu = $('#menu_mobile');
    let overlay = $('.mb-menu-overlay');
    $('.sidebar-menu-btn').on('click', function () {
        menu.toggleClass('active');
        if (menu.hasClass('active')) {
            overlay.show();
        }
    });
    $('.mb-menu .close-button').on('click', function () {
        $('#menu_mobile').removeClass('active');
        overlay.hide();
    });
    overlay.on('click', function (e) {
        e.preventDefault;
        overlay.hide();
        menu.removeClass('active');
    })
});


