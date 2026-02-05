import { cn } from "@/lib/utils";

export interface Player {
  id: string;
  nickname: string;
  realName: string;
  role: string;
  nationality: string;
  image?: string;
}

interface PlayerCardProps {
  player: Player;
  accentColor?: string;
}

export const PlayerCard = ({ player, accentColor = "from-primary/20" }: PlayerCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
      {/* Player Image Area */}
      <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t to-transparent opacity-60",
          accentColor
        )} />
        
        {/* Placeholder Avatar */}
        <div className="absolute inset-0">
          {player.image ? (
            <img
              src={`/players/${player.image}`}
              alt={player.nickname}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-muted-foreground">
                  {player.nickname.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Role Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full">
          <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
            {player.role}
          </span>
        </div>
      </div>
      
      {/* Player Info */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {player.nickname}
        </h3>
        <p className="font-body text-muted-foreground mt-1">
          {player.realName}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg">{player.nationality}</span>
        </div>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
