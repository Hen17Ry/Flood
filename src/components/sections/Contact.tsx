import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    notify: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '', notify: false });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail className="w-8 h-8 text-[#2563EB]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">
              Contactez-nous
            </h2>
          </div>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Une question, une demande de démo ou envie d'être notifié au lancement ?
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-[#2563EB]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Message envoyé avec succès !</h3>
            <p className="text-white/90">
              Nous vous répondrons dans les plus brefs délais. Merci de votre intérêt pour PredictFlood.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#F3F4F6] rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#60A5FA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#60A5FA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="organization" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                Organisation (optionnel)
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#60A5FA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                placeholder="Nom de votre organisation"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#60A5FA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                placeholder="Décrivez votre demande..."
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="notify"
                  checked={formData.notify}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-[#2563EB] border-[#60A5FA]/20 rounded focus:ring-[#2563EB]"
                />
                <span className="text-sm text-[#1E3A8A]">
                  Je veux être notifié au lancement de PredictFlood
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Envoyer le message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
