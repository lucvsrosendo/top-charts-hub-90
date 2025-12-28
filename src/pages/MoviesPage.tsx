import { Film, Clapperboard } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { topMovies } from "@/data/mockData";

const MoviesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-warm">
              <Clapperboard className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl mb-4">
            <span className="text-foreground">Top</span>
            <span className="bg-gradient-warm bg-clip-text text-transparent"> Filmes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Os filmes mais populares e bem avaliados segundo o IMDB. 
            Descubra os blockbusters e clássicos do cinema.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Em Alta no Cinema"
          icon={Film}
          gradient="warm"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topMovies.map((item) => (
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
    </Layout>
  );
};

export default MoviesPage;
