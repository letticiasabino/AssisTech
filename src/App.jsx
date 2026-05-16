
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Clock3, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="bg-ice text-charcoal">
      <header className="bg-charcoal text-white px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-electric">AssisTech</h1>
        <a
          href="#contato"
          className="bg-electric px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Falar no WhatsApp
        </a>
      </header>

      <section className="bg-charcoal text-white min-h-screen flex flex-col justify-center px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="uppercase tracking-widest text-electric mb-4">
            Assistência Técnica Especializada
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Soluções rápidas
            <span className="text-electric"> para o seu dia a dia</span>
          </h2>

          <p className="mt-6 text-techgray text-lg max-w-2xl">
            Consertamos geladeiras, micro-ondas, máquinas de lavar,
            eletrônicos e muito mais com qualidade e agilidade.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-electric px-8 py-4 rounded-2xl font-bold glow">
              <a
                href="#contato"
                className="bg-electric px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
              Solicitar orçamento
              </a>
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold">
              <a
                href="#servicos">Nossos serviços</a>
            </button>
          </div>
        </motion.div>
      </section>

      <section className="px-8 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-black mb-4">
            Soluções completas
          </h3>
          <p className="text-techgray">
            Atendimento profissional para sua casa e seus aparelhos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Wrench size={40} />,
              title: "Manutenção Completa",
              text: "Consertos rápidos e seguros."
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Garantia",
              text: "Serviços com total confiança."
            },
            {
              icon: <Clock3 size={40} />,
              title: "Atendimento Ágil",
              text: "Resolução eficiente no mesmo dia."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="text-electric mb-6">{item.icon}</div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-techgray">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-white px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-black mb-6">
            Precisa de assistência técnica?
          </h3>

          <p className="text-techgray mb-10">
            Atendimento rápido, transparente e profissional.
          </p>

          <a
            id="contato"
            href="https://wa.me/5500000000000"
            className="inline-flex items-center gap-3 bg-electric px-8 py-4 rounded-2xl font-bold text-lg glow"
          >
            <Phone />
            Chamar no WhatsApp
          </a>

          <a 
          id="servicos"
          href="https://wa.me/5500000000000"></a>
        </div>
      </section>

      <footer className="bg-black text-techgray text-center py-8">
        © 2026 AssisTech - Assistência Técnica
      </footer>
    </div>
  );
}
