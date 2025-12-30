import { User } from "lucide-react";

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  description: string;
  nationality: string;
  image?: string;
}

interface StaffCardProps {
  member: StaffMember;
  accentColor?: string;
}

export const StaffCard = ({ member, accentColor = "from-primary/20" }: StaffCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative p-6">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-10 h-10 text-muted-foreground" />
          )}
        </div>

        {/* Info */}
        <div className="text-center">
          <span className="text-2xl mb-2 block">{member.nationality}</span>
          <h3 className="font-display text-xl font-bold text-foreground mb-1">
            {member.name}
          </h3>
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-3">
            {member.role}
          </span>
          <p className="font-body text-sm text-muted-foreground line-clamp-3">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
};