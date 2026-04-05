import Image from "next/image";
import { brand } from "@/theme/brand";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/brand/logo.svg"
        alt={`${brand.name} logo`}
        width={compact ? 30 : 38}
        height={compact ? 30 : 38}
        priority
        className="rounded-md"
      />

      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-ink sm:text-base">
          {brand.name}
        </div>

        {!compact && (
          <div className="hidden text-[11px] font-semibold text-muted sm:block">
            {brand.tagline}
          </div>
        )}
      </div>
    </div>
  );
}