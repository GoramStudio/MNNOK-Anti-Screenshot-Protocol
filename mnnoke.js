class mnnok extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "closed" });
  
      // Style et message d'overlay
      const style = document.createElement("style");
      style.textContent = `
        :host {
          display: block;
          position: relative;
          user-select: none;
          pointer-events: none;
        }
  
        .overlay {
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
  
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      shadow.appendChild(style);
      shadow.appendChild(overlay);
  
      // Crée un slot pour l'insertion de contenu personnalisé
      const slot = document.createElement("slot");
      shadow.appendChild(slot);
  
      // Empêcher la capture d'écran
      this.preventScreenshot(overlay);
    }
  
    preventScreenshot(overlay) {
      // Désactiver le clic droit
      this.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Clic droit désactivé sur cet élément.");
      });
  
      // Désactiver certaines captures d'écran
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "PrintScreen" || // Capture d'écran
          (e.ctrlKey && e.key === "p") ||  // Ctrl+P
          (e.metaKey && e.shiftKey && e.key === "4")  // Commande macOS pour Capture d'écran
        ) {
          alert("Action de capture désactivée !");
          e.preventDefault();
  
          // Afficher l'overlay
          overlay.style.opacity = 1;
          setTimeout(() => {
            overlay.style.opacity = 0;
          }, 1000);
        }
      });
    }
  }
  
  customElements.define("mnnok-element", mnnok);
  