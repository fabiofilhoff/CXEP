"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (integrar com backend real posteriormente)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", instagram: "", city: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-blue-900/30 border border-fuchsia-500/30 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center animate-pulse">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
            ACESSO SOLICITADO
          </h3>
          <p className="text-gray-300">
            Você está na lista. Aguarde instruções.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-6 p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-fuchsia-900/20 to-blue-900/30 border border-fuchsia-500/30 backdrop-blur-sm"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-fuchsia-400 uppercase tracking-wider">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold text-fuchsia-400 uppercase tracking-wider">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="instagram" className="block text-sm font-bold text-gray-400 uppercase tracking-wider">
            Instagram <span className="text-xs text-gray-500">(opcional)</span>
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
            placeholder="@seuinstagram"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-bold text-fuchsia-400 uppercase tracking-wider">
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
            placeholder="São Paulo"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-blue-500 text-white font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            PROCESSANDO...
          </span>
        ) : (
          "SOLICITAR ACESSO"
        )}
      </button>

      <p className="text-xs text-center text-gray-400 leading-relaxed">
        O acesso será liberado por fases.<br />
        Estar na lista não garante entrada.
      </p>
    </form>
  );
}
