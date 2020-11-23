class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Badillo González Feliciano`;
  }
}
customElements.define("mi-footer", MiFooter);
