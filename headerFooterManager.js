class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <special-header></special-header>

  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1><span>S</span>pin<span>M</span>asterz <span>A</span>cademy</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="index.html" data-after="Home">Home</a></li>
            <li><a href="about.html" data-after="Service">About</a></li>
            <li><a href="#projects" data-after="Projects">Programs <i class="fas fa-caret-down"></i></a>
              <div class="dropdown-menu">
                <ul>
                    <li><a href="highperformance.html">High Performance</a></li>
                    <li><a href="OneOn.html">One on One</a></li>
                    <li><a href="group.html">Group Training</a></li>
                    <li><a href="vacation.html">Vacation Training</a></li>
                    <li><a href="extramu.html">Extra Murals</a></li>
                    <li><a href="tournaments.html">Tournaments</a></li>
                </ul>
            </div>
            <li><a href="#about" data-after="About">Gallery <i class="fas fa-caret-down"></i></a>
              <div class="dropdown-menu">
                <ul>
                    <li><a href="pictures.html">Pictures</a></li>
                    <li><a href="videos.html">Videos</a></li>
                    
                </ul>
            </div>
            <li><a href="testimonials.html" data-after="Contact">Testimonials</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
        `;
  }
}

class SpecialContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+27 81 349 4025</h2>
            <h2>+27 61 519 6357</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <p><a href="mailto: kudacoach@gmail.com">kudacoach@gmail.com</a></p>
            <p><a href="mailto: kudakwashe914@gmail.com">kudakwashe914@gmail.com</a></p>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>1120 Haarhoff St, Waverley, Pretoria, 0186</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            
    <footer class=" footer-distributed">
    <div class="footer-left">
    <h3> SpinMasterz <span>Academy</span></h3>
    <p class="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="#">Contact</a>
        <a href="testimonials.html">Testimonial</a>
    </p>
    <p class="footer-company-name">Copyright @ 2024 <strong>SpinMasterz Academy</strong>All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p><span>Hoërskool </span>OOS MOOT</p>
    </div>
    <div>
        <i class="fa fa-phone"></i>
        <p>+27 81 349 4025</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto: kudacoach@gmail.com">kudacoach@gmail.com</a></p>
    </div> 
</div>
<div class="footer-right">
<p class="footer-company-about">
    <span>About the Academy</span>
    <strong>SpinMasterz Academy</strong> Where players develop into Champions
</p>
<div class="footer-icons">
    <a href="http://wa.me/+27615196357"><i class="fa fa-whatsapp"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="https://linkedin.com/Kuda mhurure/url"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-youtube"></i></a>
    <a href="https://www.facebook.com/groups/Spinmasterz Academy"><i class="fa fa-facebook"></i></a>
</div>
</div>

   </footer> 
   <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
customElements.define("special-contact", SpecialContact);
