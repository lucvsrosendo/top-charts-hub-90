import { Music, Disc3 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { topMusic } from "@/data/mockData";

const MusicPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-cool">
              <Disc3 className="w-12 h-12 text-primary-foreground animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl mb-4">
            <span className="text-foreground">Billboard</span>
            <span className="text-gradient-primary"> Hot 100</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            As músicas mais tocadas da semana nos Estados Unidos. 
            Atualizado semanalmente com dados oficiais do Billboard.
          </p>
        </div>
      </section>

      {/* Rankings */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Top 8 da Semana"
          icon={Music}
          gradient="cool"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {topMusic.map((item) => (
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
    </Layout>
  );
};

export default MusicPage;
