import { Clock, Dumbbell, Zap, ArrowRight } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  muscles: string[];
  description?: string;
  imageColor?: string; // Optional prop to add some color variety if needed, defaults to primary
}

export default function WorkoutCard({
  title,
  duration,
  level,
  muscles,
  description,
}: WorkoutCardProps) {
  // Level badge color logic
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${getLevelColor(level)}`}>
            {level}
          </div>
          <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <div className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
          <Dumbbell className="h-5 w-5" />
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {/* Details */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-primary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap className="h-4 w-4 text-primary" />
          <span>{muscles.join(", ")}</span>
        </div>
      </div>

      {/* Action */}
      <button className="w-full rounded-xl bg-secondary py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground group-hover:translate-y-0 active:scale-95">
        Start Workout
      </button>
    </div>
  );
}
