class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer { 
          background: #004d29; 
          color: white; 
          padding: 2.5rem 1rem; 
          text-align: center; 
          margin-top: 3rem; 
          border-top: 5px solid #c6a15a; 
          font-family: 'Cairo', sans-serif; 
        }
        .content { max-width: 1200px; margin: 0 auto; }
        .whatsapp-float {
          position: fixed; 
          width: 60px; 
          height: 60px; 
          bottom: 20px; 
          left: 20px;
          background-color: #25d366; 
          color: #FFF; 
          border-radius: 50px; 
          text-align: center;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.3); 
          z-index: 9999;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          text-decoration: none;
        }
      </style>
      <footer>
        <div class="content">
          <h2 style="margin-bottom: 5px;">البنك الزراعي المصري</h2>
          <p style="font-weight: bold; font-size: 1.1rem;">المدير / محمد حفني</p>
          <p>للتواصل المباشر: 01129383896</p>
          <p style="margin-top: 1.5rem; font-size: 0.8rem; opacity: 0.7;">© 2026 جميع الحقوق محفوظة لفرع الإدارة</p>
        </div>
      </footer>
      <a href="https://wa.me/201129383896" class="whatsapp-float" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="width:35px" alt="WhatsApp">
      </a>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);