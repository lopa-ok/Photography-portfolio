import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
    <header class="site-header">
        <a class="brand" href="#top">LO<span>.</span></a>
        <nav class="main-nav" aria-label="Main Navigation">
            <a href='#work'>Work</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
        </nav>
        <a class="header-availability" href="#contact">Available for 2026</a>
    </header>

    <main id="top">
        <section class="hero" aria-lebelledby="hero-title">
            <div class="hero__topline"><span>Photoghrapher / Deverloper</span><span>Based in Cairo + everywhere</span></div>
            <div class="hero__content">
                <p class="eyebrow hero__eyebrow">A collection of curious moments <span>↓</span></p>
                <h1 class="hero-title">Lopa<span class="hero__dot">.</span></h1>
                <p class="hero__note">I make photographs<br/> with a pusle.</p>
            </div>
            <div class="hero__bottom"><span>( Scroll to explore )</span><span>© 2026</span></div>
        </section>
    </main> 

`;