import { memo } from "react";
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
  compact?: boolean;
}

export const PlayerCard = memo(({ player, accentColor = "from-primary/20", compact = false }: PlayerCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
      {/* Player Image Area */}
      <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t to-transparent opacity-60",
          accentColor
        )} />

        <div className="absolute inset-0">
          {player.image ? (
            <img
              src={player.image.startsWith('/') ? player.image : `/players/${player.image}`}
              alt={`${player.nickname} — ${player.role}, WayGaming`}
              loading="lazy"
              decoding="async"
              width={300}
              height={400}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className={cn(
                "rounded-full bg-muted flex items-center justify-center",
                compact ? "w-14 h-14" : "w-24 h-24"
              )}>
                <span className={cn(
                  "font-display font-bold text-muted-foreground",
                  compact ? "text-xl" : "text-3xl"
                )}>
                  {player.nickname.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Role Badge */}
        <div className={cn(
          "absolute bg-background/80 backdrop-blur-sm rounded-full",
          compact ? "top-2 left-2 px-2 py-0.5" : "top-4 left-4 px-3 py-1"
        )}>
          <span className={cn(
            "font-body font-semibold uppercase tracking-wider text-primary",
            compact ? "text-[10px]" : "text-xs"
          )}>
            {player.role}
          </span>
        </div>
      </div>

      {/* Player Info */}
      <div className={compact ? "p-3" : "p-6"}>
        <h3 className={cn(
          "font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate",
          compact ? "text-base" : "text-2xl"
        )}>
          {player.nickname}
        </h3>
        {!compact && (
          <>
            <p className="font-body text-muted-foreground mt-1">
              {player.realName}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-lg">{player.nationality}</span>
            </div>
          </>
        )}
        {compact && (
          <p className="font-body text-muted-foreground text-xs mt-0.5 truncate">
            {player.realName}
          </p>
        )}
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
});
