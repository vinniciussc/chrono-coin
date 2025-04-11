export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-bold">Bem-vindo ao ChronoCoin</h1>
        <p className="mt-4 text-lg text-gray-600">
          Transforme seu tempo em valor real.
        </p>
        <button
          onClick={() => window.plausible("Clique CTA Principal - A")}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Comece Agora
        </button>
      </header>

      <section
        id="como-funciona"
        className="py-20 px-4 bg-white text-center"
        onMouseEnter={() => window.plausible("Scroll até Como Funciona - A")}
      >
        <h2 className="text-3xl font-semibold mb-6">Como Funciona</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          O ChronoCoin converte suas horas em tokens digitais, recompensando seu tempo dedicado a projetos, estudos ou trabalho.
        </p>
      </section>

      <footer className="py-10 text-center">
        <div className="space-x-6">
          <a
            href="https://discord.gg/seulink"
            onClick={() => window.plausible("Saiu para Discord - A")}
            className="text-blue-600 hover:underline"
          >
            Nosso Discord
          </a>
          <a
            href="https://twitter.com/seulink"
            onClick={() => window.plausible("Saiu para Twitter - A")}
            className="text-blue-600 hover:underline"
          >
            Twitter Oficial
          </a>
        </div>
      </footer>
    </div>
  );
}
