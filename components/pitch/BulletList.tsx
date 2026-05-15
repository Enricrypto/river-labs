import Badge, { type BadgeVariant } from "./Badge";

interface BulletItem {
  text: string;
  badge?: { label: string; variant: BadgeVariant };
}

interface BulletListProps {
  items: BulletItem[];
  variant?: "light" | "dark";
}

export default function BulletList({ items, variant = "light" }: BulletListProps) {
  const isDark = variant === "dark";

  return (
    <ul className="flex flex-col gap-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <span
            className={`mt-[0.4rem] w-1 h-1 rounded-full flex-shrink-0 ${isDark ? "bg-white/35" : "bg-[#0F1D56]/30"}`}
          />
          <div className="flex-1 flex items-start gap-2 flex-wrap">
            <span
              className={`text-base leading-snug ${isDark ? "text-white/75" : "text-gray-600"}`}
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {item.text}
            </span>
            {item.badge && (
              <Badge variant={item.badge.variant}>{item.badge.label}</Badge>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
