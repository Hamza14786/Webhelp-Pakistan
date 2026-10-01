export function LogoMark({ className = "h-9 w-auto" }: { className?: string | undefined }) {
  return (
    <img
      src="/images/webhelp-logo-mark-small.png"
      alt="Webhelp Pakistan"
      width={256}
      height={128}
      className={`object-contain ${className}`}
    />
  );
}

export function Logo({
  className = "",
  markClassName,
  showText = true,
}: {
  className?: string;
  markClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      {showText && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Webhelp Pakistan
        </span>
      )}
    </span>
  );
}
