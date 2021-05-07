class AppPopup extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }


    
    set initPopup(_content) {
        // this.shadow.innerHTML = 'dfdf'

        this.shadow.appendChild(_content);

    //     const style = document.createElement('style');
    //     style.textContent = '.wrapper {}'
    //   this.shadowRoot.appendChild(_content);
    //     <div>Hello World</div> _content
    //   `
    };


    // initPopup() {
    //     this.innerHTML = `
    //     <div>Hello World</div>
    //   `
    // }
}

customElements.define('app-popup', AppPopup);