import { Music, Film, Tv, Gamepad2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Music, label: "Música", path: "/music", gradient: "bg-gradient-cool" },
  { icon: Film, label: "Filmes", path: "/movies", gradient: "bg-gradient-warm" },
  { icon: Tv, label: "Séries", path: "/series", gradient: "bg-gradient-accent" },
  { icon: Gamepad2, label: "Jogos", path: "/games", gradient: "bg-gradient-primary" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse animation-delay-200" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6 animate-fade-in">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span>Rankings atualizados em tempo real</span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-fade-in animation-delay-200">
          <span className="text-foreground">Top</span>
          <span className="text-gradient-primary">Rankings</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-400">
          Descubra os melhores rankings de música, filmes, séries e jogos.
          Dados atualizados do Billboard, IMDB e mais.
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.path}
                to={cat.path}
                className="group relative p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${cat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
