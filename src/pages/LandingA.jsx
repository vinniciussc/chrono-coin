import { useEffect } from "react";

export default function LandingPageA() {
  useEffect(() => {
    // Evento: Visitou Landing A
    if (window.plausible) {
      window.plausible("Visitou Landing A");
    }

    // Evento: Scroll até "Como Funciona"
    const comoFunciona = document.getElementById("como-funciona");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.plausible("Scroll até Como Funciona - A");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (comoFunciona) observer.observe(comoFunciona);
  }, []);

  const handleCTAClick = () => {
    window.plausible("Clique CTA Principal - A");
  };

  const handleDiscordClick = () => {
    window.plausible("Saiu para Discord - A");
  };

  const handleTwitterClick = () => {
    window.plausible("Saiu para Twitter - A");
  };

  return (
    <main>
      <section className="hero">
        <h1>Bem-vindo à Landing Page A</h1>
        <p>Esta é a versão tradicional focada em produtividade e valor do tempo.</p>
        <button onClick={handleCTAClick}>Comece Agora</button>
      </section>

      <section id="como-funciona">
        <h2>Como Funciona</h2>
        {/* conteúdo... */}
      </section>

      <footer>
        <a href="https://discord.gg/seu-link" target="_blank" onClick={handleDiscordClick}>
          Discord
        </a>
        <a href="https://twitter.com/seu-perfil" target="_blank" onClick={handleTwitterClick}>
          Twitter
        </a>
      </footer>
    </main>
  );
}
