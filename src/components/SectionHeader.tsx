import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
  description?: string;
  linkTo?: string;
  linkText?: string;
  gradient?: "primary" | "accent" | "warm" | "cool";
}

const gradientClasses = {
  primary: "text-gradient-primary",
  accent: "text-gradient-accent",
  warm: "bg-gradient-warm bg-clip-text text-transparent",
  cool: "bg-gradient-cool bg-clip-text text-transparent",
};

const SectionHeader = ({ title, icon: Icon, description, linkTo, linkText, gradient = "primary" }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-muted">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${gradientClasses[gradient]}`}>
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-muted-foreground max-w-xl">{description}</p>
        )}
      </div>
      {linkTo && linkText && (
        <Link
          to={linkTo}
          className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-1 group"
        >
          {linkText}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
