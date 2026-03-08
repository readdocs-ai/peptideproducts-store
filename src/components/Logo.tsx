import Image from "next/image";
import { brand } from "@/theme/brand";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl2 bg-white p-1 shadow-soft border border-line">
        <Image
          src="/brand/logo.svg"
          alt={`${brand.name} logo`}
          width={compact ? 34 : 44}
          height={compact ? 34 : 44}
          priority
        />
      </div>

      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight md:text-base">
          {brand.name}
        </div>
        <div className="text-[11px] font-semibold text-muted">
          {brand.tagline}
        </div>
      </div>
    </div>
  );
}
