
class mnnok extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "closed" });
  
      
      const style = document.createElement("style");
      style.textContent = `
        :host {
          display: block;
          position: relative;
          user-select: none;
          pointer-events: none;
        }
        
        :host::after {
          content: "Capture désactivée";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: red;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          line-height: 2;
          background: rgba(255, 255, 255, 0.8);
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
      `;
  
      
      const slot = document.createElement("slot");
  
      shadow.appendChild(style);
      shadow.appendChild(slot);
  
      
      this.preventScreenshot();
    }
  
    preventScreenshot() {
      
      this.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Clic droit désactivé sur cet élément.");
      });
  
      
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "PrintScreen" ||
          (e.ctrlKey && e.key === "p") || 
          (e.metaKey && e.shiftKey && e.key === "4") 
        ) {
          alert("Action de capture désactivée !");
          e.preventDefault();
  
          
          const overlay = this.shadowRoot.querySelector(":host::after");
          overlay.style.opacity = 1;
          setTimeout(() => (overlay.style.opacity = 0), 1000);
        }
      });
    }
  }
  
  
  customElements.define("mnnok-element", mnnok);

  