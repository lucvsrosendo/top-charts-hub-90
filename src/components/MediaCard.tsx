import { Star, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MediaCardProps {
  rank: number;
  title: string;
  subtitle?: string;
  image: string;
  rating?: number;
  trend?: "up" | "down" | "same";
  category: "music" | "movie" | "series" | "game";
}

const categoryGradients = {
  music: "from-cyan-500/20 to-purple-500/20",
  movie: "from-orange-500/20 to-red-500/20",
  series: "from-purple-500/20 to-pink-500/20",
  game: "from-green-500/20 to-cyan-500/20",
};

const categoryBorders = {
  music: "hover:border-cyan-500/50",
  movie: "hover:border-orange-500/50",
  series: "hover:border-purple-500/50",
  game: "hover:border-green-500/50",
};

const MediaCard = ({ rank, title, subtitle, image, rating, trend, category }: MediaCardProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-muted-foreground";

  return (
    <div
      className={`group relative bg-gradient-card rounded-xl overflow-hidden border border-border ${categoryBorders[category]} card-hover cursor-pointer`}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Rank Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg shadow-lg">
          {rank}
        </div>
      </div>

      {/* Trend Indicator */}
      {trend && (
        <div className={`absolute top-3 right-3 z-10 ${trendColor}`}>
          <TrendIcon className="w-5 h-5" />
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-4 -mt-16 z-10">
        <h3 className="font-display font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-1 line-clamp-1">{subtitle}</p>
        )}
        {rating && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-foreground font-medium">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
