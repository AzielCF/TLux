const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_ACTIVE = "active";

class Navbar {
    navbar = document.querySelector("header.nav");
    navbarbrand = this.navbar.querySelector(".brand");
    navbarToggle = this.navbar.querySelector(".toggle");
    navbarMenu = this.navbar.querySelector(".menu");
    body = document.querySelector("body");
    animating = false;

    constructor() {
        this.initNavbar();
    }

    #createNavbarContainer() {
        const bgColor = this.navbar.getAttribute("bg-color");

        const newDiv = document.createElement("div");
        this.navbarMenu.parentNode.insertBefore(newDiv, this.navbarMenu);
        newDiv.appendChild(this.navbarbrand);
        newDiv.appendChild(this.navbarToggle);
        newDiv.appendChild(this.navbarMenu);
        newDiv.classList.add("nav-main");

        if (bgColor) {
            newDiv.classList.add("bg-" + bgColor);
        } else {
            newDiv.classList.add("bg-primary");
        }
    }

    #handleNavbarToggle() {
        this.navbarToggle.addEventListener("click", () => {
            if (this.animating) {
                return;
            }

            this.animating = true;
            this.navbarToggle.classList.toggle(CLASS_NAME_ACTIVE);

            if (!this.navbarMenu.classList.contains(CLASS_NAME_SHOW)) {
                this.#showNavbarMenu();
            } else {
                this.#hideNavbarMenu();
            }
        });
    }

    #showNavbarMenu() {
        this.#createBackdrop();
        
        this.navbarMenu.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

        setTimeout(() => {
            this.navbarMenu.classList.remove(CLASS_NAME_SHOWING);
            this.animating = false;
        }, 300);

        const toggleTypes = this.navbar.getAttribute("data-toggle");

        if(toggleTypes == "start"){
            this.body.style.overflow = "hidden";
            this.body.style.paddingRight = "15px";
        }else if (toggleTypes == "end"){
            this.body.style.overflow = "hidden";
            const scrollBar = this.navbar.getAttribute("scroll");
            this.body.style.paddingRight = "15px";
        }

    }

    #hideNavbarMenu() {
        this.#removeBackdrop();
        this.navbarMenu.classList.add(CLASS_NAME_HIDING);

        setTimeout(() => {
            this.body.removeAttribute("style");
            this.navbarMenu.classList.remove(
                CLASS_NAME_HIDING,
                CLASS_NAME_SHOW
            );
            this.animating = false;
        }, 300);
    }

    #handleOutsideClick() {
        document.addEventListener("click", (event) => {
            const target = event.target;
            const navMain = document.querySelector(".nav-main");
            if (this.navbarMenu.classList.contains(CLASS_NAME_SHOW)) {
                if (!navMain.contains(target)) {
                    this.navbarToggle.classList.remove(CLASS_NAME_ACTIVE);
                    this.#removeBackdrop();
                    this.navbarMenu.classList.add(CLASS_NAME_HIDING);
                    setTimeout(() => {
                        this.body.removeAttribute("style");
                        this.navbarMenu.classList.remove(
                            CLASS_NAME_HIDING,
                            CLASS_NAME_SHOW
                        );
                    }, 300);
                }
            }
        });
    }

    #handleWindowResize() {
        window.addEventListener("resize", () => {
            const documentWidth = document.documentElement.clientWidth;
            if (documentWidth >= 769) {
                const navMain = document.querySelector(".nav-main");
                if (this.navbarMenu.classList.contains(CLASS_NAME_SHOW)) {
                    this.navbarToggle.classList.remove(CLASS_NAME_ACTIVE);
                    this.#removeBackdrop();
                    this.navbarMenu.classList.add(CLASS_NAME_HIDING);
                    setTimeout(() => {
                        this.body.removeAttribute("style");
                        this.navbarMenu.classList.remove(
                            CLASS_NAME_HIDING,
                            CLASS_NAME_SHOW
                        );
                    }, 300);
                }
            }
        });
    }

    #createBackdrop() {
        const newDiv = document.createElement("div");
        newDiv.classList.add("backdrop");
        const backdropType = this.navbar.getAttribute("backdrop");

        if (backdropType === "none") {
            return;
        } else if (backdropType) {
            newDiv.classList.add(backdropType);
        } else {
            newDiv.classList.add("opacity");
        }

        this.navbar.insertBefore(newDiv, this.navbar.firstChild);
    }

    #removeBackdrop() {
        const backdrop = this.navbar.querySelector(".backdrop");
        if (backdrop) {
            backdrop.remove();
        }
    }

    initNavbar() {
        this.#createNavbarContainer();
        this.#handleNavbarToggle();
        this.#handleOutsideClick();
        this.#handleWindowResize();

        const toggleType = this.navbar.getAttribute("data-toggle");

        if (toggleType === CLASS_NAME_SHOW) {
            this.navbarToggle.addEventListener("click", () => {
                this.body.style.overflow = this.navbarMenu.classList.contains(
                    CLASS_NAME_SHOW
                )
                    ? "hidden"
                    : "";
            });
        } else if (["start", "end"].includes(toggleType)) {
            this.navbarMenu.classList.add("toggle-" + toggleType);
        }
    }
}

export default Navbar;