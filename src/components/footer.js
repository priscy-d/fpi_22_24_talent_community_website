customElements.define(
    "footer",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("footer");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    }
  );
  