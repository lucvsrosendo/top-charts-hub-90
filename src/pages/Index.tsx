import { Music, Film, Tv, Gamepad2 } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { topMusic, topMovies, topSeries, topGames } from "@/data/mockData";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Music Section */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Billboard Hot 100"
          icon={Music}
          description="As músicas mais tocadas da semana nos EUA"
          linkTo="/music"
          linkText="Ver todos"
          gradient="cool"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topMusic.slice(0, 4).map((item) => (
            <MediaCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              subtitle={item.artist}
              image={item.image}
              trend={item.trend}
              category="music"
            />
          ))}
        </div>
      </section>

      {/* Movies Section */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Top Filmes"
          icon={Film}
          description="Os filmes mais populares segundo o IMDB"
          linkTo="/movies"
          linkText="Ver todos"
          gradient="warm"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topMovies.slice(0, 4).map((item) => (
            <MediaCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              subtitle={String(item.year)}
              image={item.image}
              rating={item.rating}
              trend={item.trend}
              category="movie"
            />
          ))}
        </div>
      </section>

      {/* Series Section */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Top Séries"
          icon={Tv}
          description="As séries mais assistidas do momento"
          linkTo="/series"
          linkText="Ver todos"
          gradient="accent"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topSeries.slice(0, 4).map((item) => (
            <MediaCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              subtitle={item.year}
              image={item.image}
              rating={item.rating}
              trend={item.trend}
              category="series"
            />
          ))}
        </div>
      </section>

      {/* Games Section */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Top Games"
          icon={Gamepad2}
          description="Os jogos mais bem avaliados do ano"
          linkTo="/games"
          linkText="Ver todos"
          gradient="primary"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topGames.slice(0, 4).map((item) => (
            <MediaCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              subtitle={String(item.year)}
              image={item.image}
              rating={item.rating}
              trend={item.trend}
              category="game"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
