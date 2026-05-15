import Badge from "./Badge";

interface FrequencyBadgeProps {
  label: string;
  className?: string;
}

export default function FrequencyBadge({ label, className = "" }: FrequencyBadgeProps) {
  return (
    <Badge variant="info" className={className}>
      {label}
    </Badge>
  );
}
