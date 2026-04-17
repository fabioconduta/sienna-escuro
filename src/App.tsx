import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MapPin, Phone, Quote } from 'lucide-react';

export default function App() {
    return (
          <div className="min-h-screen bg-sienna-950 text-sienna-100 font-sans overflow-x-hidden">
            {/* Navigation */}
                <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center">
                        <div className="font-serif text-2xl tracking-wider font-medium text-sienna-50">Sienna.</div>div>
                        <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase text-sienna-100/70">
                                  <a href="#about" className="hover:text-sienna-50 transition-colors">Sobre</a>a>
                                  <a href="#services" className="hover:text-sienna-50 transition-colors">Especialidades</a>a>
                                  <a href="#method" className="hover:text-sienna-50 transition-colors">Método</a>a>
                        </div>div>
                        <button className="hidden md:block px-6 py-2.5 bg-transparent border border-sienna-100/20 rounded-full text-sm tracking-wider text-sienna-50 hover:bg-sienna-100 hover:text-sienna-950 transition-all duration-300">
                                  Agendar Consulta
                        </button>button>
                </nav>nav>
          
            {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-12 gap-12 items-center">
                                  <motion.div 
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="md:col-span-6 lg:col-span-5 z-10"
                                              >
                                              <span className="block text-sienna-400 tracking-[0.2em] uppercase text-xs mb-6">
                                                            Beleza & Bem-estar
                                              </span>span>
                                              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-sienna-50">
                                                            Refinamento <br />
                                                            <span className="italic font-light text-sienna-300">contemporâneo</span>span> <br />
                                                            para sua essência.
                                              </h1>h1>
                                              <p className="text-lg text-sienna-100/70 mb-10 font-light leading-relaxed max-w-md">
                                                            Um espaço dedicado ao cuidado autêntico, onde a sofisticação encontra o acolhimento para revelar a sua melhor versão.
                                              </p>p>
                                              <button className="group flex items-center space-x-4 bg-sienna-100 text-sienna-950 px-8 py-4 rounded-full hover:bg-sienna-200 transition-all duration-300">
                                                            <span className="tracking-wider text-sm font-medium">Fale no WhatsApp</span>span>
                                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                              </button>button>
                                  </motion.div>motion.div>
                        
                                  <motion.div 
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                                className="md:col-span-6 lg:col-span-7 relative"
                                              >
                                              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-lg mx-auto md:ml-auto md:mr-0">
                                                            <img 
                                                                              src="https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=1000&auto=format&fit=crop" 
                                                              alt="Mulher em momento de cuidado" 
                                                              className="w-full h-full object-cover rounded-t-[12rem] rounded-b-2xl img-editorial shadow-2xl shadow-black/20"
                                                                              referrerPolicy="no-referrer"
                                                                            />
                                                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sienna-800 rounded-full -z-10 blur-2xl opacity-60"></div>div>
                                                            <div className="absolute top-1/4 -right-8 w-40 h-40 bg-sienna-900 rounded-full -z-10 blur-3xl opacity-60"></div>div>
                                              </div>div>
                                  </motion.div>motion.div>
                        </div>div>
                </section>section>
          
            {/* About Section */}
                <section id="about" className="py-24 md:py-32 bg-sienna-900 px-6 md:px-12">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                  <div className="relative">
                                              <motion.div
                                                              initial={{ opacity: 0, x: -30 }}
                                                              whileInView={{ opacity: 1, x: 0 }}
                                                              viewport={{ once: true }}
                                                              transition={{ duration: 1 }}
                                                              className="w-4/5 aspect-[3/4] rounded-t-full overflow-hidden"
                                                            >
                                                            <img 
                                                                              src="https://images.unsplash.com/photo-1552693673-1bf9582989350?q=80&w=800&auto=format&fit=crop" 
                                                              alt="Profissional" 
                                                              className="w-full h-full img-editorial"
                                                                              referrerPolicy="no-referrer"
                                                                            />
                                              </motion.div>motion.div>
                                              <motion.div
                                                              initial={{ opacity: 0, y: 30 }}
                                                              whileInView={{ opacity: 1, y: 0 }}
                                                              viewport={{ once: true }}
                                                              transition={{ duration: 1, delay: 0.3 }}
                                                              className="absolute -bottom-12 -right-4 w-1/2 aspect-square rounded-full overflow-hidden border-8 border-sienna-900"
                                                            >
                                                            <img 
                                                                              src="https://images.unsplash.com/photo-1611077544835-1cb660142b78?q=80&w=600&auto=format&fit=crop" 
                                                              alt="Detalhe ambiente" 
                                                              className="w-full h-full img-editorial"
                                                                              referrerPolicy="no-referrer"
                                                                            />
                                              </motion.div>motion.div>
                                  </div>div>
                        
                                  <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="md:pl-12 pt-12 md:pt-0"
                                              >
                                              <h2 className="font-serif text-4xl md:text-5xl mb-8 text-sienna-50">
                                                            Muito prazer, <br />
                                                            <span className="italic text-sienna-300">sou a Sienna.</span>span>
                                              </h2>h2>
                                              <div className="space-y-6 text-sienna-100/70 font-light leading-relaxed">
                                                            <p>
                                                                            Acredito que a verdadeira beleza nasce do equilíbrio e do cuidado intencional. Minha jornada começou com o desejo de criar um espaço onde cada mulher pudesse se reconectar com sua própria essência.
                                                            </p>p>
                                                            <p>
                                                                            Com mais de uma década de experiência, desenvolvi uma abordagem que une técnicas avançadas a um olhar profundamente humano e acolhedor.
                                                            </p>p>
                                                            <p>
                                                                            Meu propósito é guiar você em um processo de transformação que respeita sua individualidade e realça o que você tem de mais autêntico.
                                                            </p>p>
                                              </div>div>
                                              <div className="mt-12">
                                                            <img 
                                                                              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Stylized_signature_sample.svg" 
                                                              alt="Assinatura" 
                                                              className="h-12 opacity-80 filter invert-[0.9] sepia-[0.2] hue-rotate-[330deg] saturate-[0.5]"
                                                                            />
                                              </div>div>
                                  </motion.div>motion.div>
                        </div>div>
                </section>section>
          
            {/* Services Section */}
                <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                                  <span className="block text-sienna-400 tracking-[0.2em] uppercase text-xs mb-4">
                                              Como posso ajudar
                                  </span>span>
                                  <h2 className="font-serif text-4xl md:text-5xl text-sienna-50">Especialidades</h2>h2>
                        </div>div>
                
                        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                          {[
            {
                            title: "Estética Avançada",
                            desc: "Protocolos faciais e corporais personalizados para realçar sua beleza natural com resultados elegantes e duradouros.",
                            img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
            },
            {
                            title: "Terapias de Bem-estar",
                            desc: "Momentos de pausa e reconexão através de massagens e rituais que equilibram corpo, mente e espírito.",
                            img: "https://images.unsplash.com/photo-1544161615-4ab6ced6b874?q=80&w=800&auto=format&fit=crop"
            },
            {
                            title: "Mentoria Pessoal",
                            desc: "Acompanhamento próximo para desenvolvimento pessoal, posicionamento e construção de uma rotina com propósito.",
                            img: "https://images.unsplash.com/photo-1499209997431-9dddcece7f88?q=80&w=800&auto=format&fit=crop"
            }
                      ].map((service, index) => (
                                    <motion.div 
                                                    key={index}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                                    className="group cursor-pointer"
                                                  >
                                                  <div className="overflow-hidden rounded-t-full rounded-b-xl mb-8 aspect-[3/4]">
                                                                  <img 
                                                                                      src={service.img} 
                                                                    alt={service.title} 
                                                                    className="w-full h-full img-editorial group-hover:scale-105 transition-transform duration-700"
                                                                                      referrerPolicy="no-referrer"
                                                                                    />
                                                  </div>div>
                                                  <h3 className="font-serif text-2xl mb-4 text-sienna-50 group-hover:text-sienna-300 transition-colors">{service.title}</h3>h3>
                                                  <p className="text-sienna-100/70 font-light leading-relaxed mb-6">
                                                    {service.desc}
                                                  </p>p>
                                                  <span className="inline-flex items-center text-sm tracking-wider uppercase text-sienna-400 group-hover:text-sienna-50 transition-colors">
                                                                  Descobrir <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                  </span>span>
                                    </motion.div>motion.div>
                                  ))}
                        </div>div>
                </section>section>
          
            {/* Method Section */}
                <section id="method" className="py-24 md:py-32 bg-sienna-800 px-6 md:px-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-sienna-950/30 rounded-l-full -mr-32 blur-3xl"></div>div>
                        
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                                  <Quote size={48} className="mx-auto text-sienna-100/10 mb-8" />
                                  <h2 className="font-serif text-3xl md:text-5xl leading-tight text-sienna-50 mb-10">
                                              "O verdadeiro luxo é ter tempo para si mesma. Meu método não busca a perfeição, mas sim a <span className="italic text-sienna-300">harmonia absoluta</span>span> entre como você se sente e como você se apresenta ao mundo."
                                  </h2>h2>
                                  <p className="tracking-[0.2em] uppercase text-xs text-sienna-400 font-medium">
                                              O Método Sienna
                                  </p>p>
                        </div>div>
                </section>section>
          
            {/* Social Proof / Testimonials */}
                <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                                  <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                              >
                                              <h2 className="font-serif text-4xl md:text-5xl mb-12 text-sienna-50">
                                                            Histórias de <br />
                                                            <span className="italic text-sienna-300">transformação</span>span>
                                              </h2>h2>
                                              
                                              <div className="space-y-12">
                                                {[
                                                {
                                                                    text: "Encontrar a Sienna foi um divisor de águas. O ambiente é um refúgio e o cuidado é tão personalizado que me senti única desde o primeiro momento.",
                                                                    author: "Mariana Costa",
                                                                    role: "Empresária"
                                                },
                                                {
                                                                    text: "Mais do que estética, encontrei acolhimento. O método respeita meus traços e realça o que eu já tenho de melhor. É um investimento em mim mesma.",
                                                                    author: "Helena Ribeiro",
                                                                    role: "Arquiteta"
                                                }
                                                              ].map((testimonial, index) => (
                                                                                <div key={index} className="relative pl-8 border-l border-sienna-700">
                                                                                                  <p className="font-serif text-xl text-sienna-100/80 italic mb-4 leading-relaxed">
                                                                                                                      "{testimonial.text}"
                                                                                                    </p>p>
                                                                                                  <div>
                                                                                                                      <p className="font-medium text-sienna-50">{testimonial.author}</p>p>
                                                                                                                      <p className="text-sm text-sienna-100/50">{testimonial.role}</p>p>
                                                                                                    </div>div>
                                                                                </div>div>
                                                                              ))}
                                              </div>div>
                                  </motion.div>motion.div>
                        
                                  <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="relative h-[600px] rounded-t-full rounded-b-xl overflow-hidden"
                                              >
                                              <img 
                                                              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                                                              alt="Ambiente acolhedor" 
                                                className="w-full h-full img-editorial"
                                                              referrerPolicy="no-referrer"
                                                            />
                                  </motion.div>motion.div>
                        </div>div>
                </section>section>
          
            {/* CTA Section */}
                <section className="py-24 md:py-32 bg-sienna-900 px-6 md:px-12 text-center">
                        <div className="max-w-3xl mx-auto">
                                  <h2 className="font-serif text-4xl md:text-5xl mb-6 text-sienna-50">
                                              Pronta para iniciar sua jornada?
                                  </h2>h2>
                                  <p className="text-lg text-sienna-100/70 mb-12 font-light leading-relaxed">
                                              Agende uma avaliação e descubra um plano de cuidado desenhado exclusivamente para as suas necessidades.
                                  </p>p>
                                  <button className="bg-sienna-100 text-sienna-950 px-10 py-5 rounded-full hover:bg-sienna-200 transition-all duration-300 text-sm tracking-widest uppercase font-medium shadow-xl shadow-black/10">
                                              Agendar meu momento
                                  </button>button>
                        </div>div>
                </section>section>
          
            {/* Footer */}
                <footer className="bg-sienna-950 text-sienna-100 py-20 px-6 md:px-12 border-t border-sienna-100/5">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-8">
                                  <div className="md:col-span-2">
                                              <div className="font-serif text-3xl tracking-wider font-medium mb-6 text-sienna-50">Sienna.</div>div>
                                              <p className="text-sienna-100/60 font-light max-w-sm mb-8 leading-relaxed">
                                                            Refinamento contemporâneo e cuidado autêntico para revelar a sua melhor versão.
                                              </p>p>
                                              <div className="flex space-x-4">
                                                            <a href="#" className="w-10 h-10 rounded-full border border-sienna-100/20 flex items-center justify-center hover:bg-sienna-100 hover:text-sienna-950 transition-colors">
                                                                            <Instagram size={18} />
                                                            </a>a>
                                                            <a href="#" className="w-10 h-10 rounded-full border border-sienna-100/20 flex items-center justify-center hover:bg-sienna-100 hover:text-sienna-950 transition-colors">
                                                                            <Mail size={18} />
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        
                                  <div>
                                              <h4 className="font-serif text-xl mb-6 text-sienna-50">Contato</h4>h4>
                                              <ul className="space-y-4 text-sienna-100/60 font-light">
                                                            <li className="flex items-start space-x-3">
                                                                            <MapPin size={18} className="mt-1 flex-shrink-0" />
                                                                            <span>Rua Oscar Freire, 1234<br />Jardins, São Paulo - SP</span>span>
                                                            </li>li>
                                                            <li className="flex items-center space-x-3">
                                                                            <Phone size={18} className="flex-shrink-0" />
                                                                            <span>(11) 99999-9999</span>span>
                                                            </li>li>
                                                            <li className="flex items-center space-x-3">
                                                                            <Mail size={18} className="flex-shrink-0" />
                                                                            <span>contato@sienna.com.br</span>span>
                                                            </li>li>
                                              </ul>ul>
                                  </div>div>
                        
                                  <div>
                                              <h4 className="font-serif text-xl mb-6 text-sienna-50">Links</h4>h4>
                                              <ul className="space-y-3 text-sienna-100/60 font-light">
                                                            <li><a href="#about" className="hover:text-sienna-100 transition-colors">Sobre mim</a>a></li>li>
                                                            <li><a href="#services" className="hover:text-sienna-100 transition-colors">Especialidades</a>a></li>li>
                                                            <li><a href="#method" className="hover:text-sienna-100 transition-colors">O Método</a>a></li>li>
                                                            <li><a href="#" className="hover:text-sienna-100 transition-colors">Política de Privacidade</a>a></li>li>
                                              </ul>ul>
                                  </div>div>
                        </div>div>
                        
                        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-sienna-100/10 text-center md:text-left text-sm text-sienna-100/40 font-light flex flex-col md:flex-row justify-between items-center">
                                  <p>© {new Date().getFullYear()} Sienna. Todos os direitos reservados.</p>p>
                                  <p className="mt-2 md:mt-0">Design por Vexxo</p>p>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
