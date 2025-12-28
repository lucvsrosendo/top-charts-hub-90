import { Gamepad2, Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { topGames } from "@/data/mockData";

const GamesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-primary">
              <Trophy className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl mb-4">
            <span className="text-foreground">Top</span>
            <span className="text-gradient-primary"> Games</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Os jogos mais bem avaliados pelos críticos e jogadores. 
            RPGs, ação, aventura e muito mais.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Melhores de 2024"
          icon={Gamepad2}
          gradient="primary"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topGames.map((item) => (
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

export default GamesPage;
