"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  className?: string;
}

export function AdSlot({ className = "" }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle && ref.current) {
        adsbygoogle.push({});
      }
    } catch {
      // Ignore ad-loading errors to prevent breaking the app.
    }
  }, []);

  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
