class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar { 
          background: #006837; 
          color: white; 
          padding: 1.2rem; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
          border-bottom: 3px solid #c6a15a;
        }
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
          display: flex; 
          justify-content: center; /* توسيط اللوجو بعد حذف الزر */
          align-items: center; 
        }
        .logo { 
          font-size: 1.3rem; 
          font-weight: bold; 
          display: flex; 
          align-items: center; 
          gap: 10px;
          font-family: 'Cairo', sans-serif;
        }
      </style>
      <nav class="navbar" dir="rtl">
        <div class="container">
          <div class="logo">🏦 البنك الزراعي المصري</div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);