import { brand } from "@/theme/brand";

function LogoMark({ compact = false }: { compact?: boolean }) {
  const size = compact ? 40 : 44; // ⬅️ increase compact size
  const fontSize = compact ? 18 : 20;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="0" y="0" width="44" height="44" rx="12" fill="#2563EB" />
      <text
        x="22"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={fontSize}
        fontWeight="800"
      >
        PP
      </text>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <LogoMark compact={compact} />

      <div className="min-w-0 leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-ink sm:text-base">
          {brand.name}
        </div>

        {!compact && (
          <div className="hidden text-[11px] font-medium text-muted/80 sm:block">
            Premium UK research peptide supplier
          </div>
        )}
      </div>
    </div>
  );
}