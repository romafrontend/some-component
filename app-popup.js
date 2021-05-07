class AppPopup extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    set initPopup(_content) {
        this.shadow.appendChild(_content);
    };
}

customElements.define('app-popup', AppPopup);