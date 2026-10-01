export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({
  items,
  idPrefix = "faq",
}: {
  items: readonly FaqItem[] | FaqItem[];
  idPrefix?: string;
}) {
  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => (
        <details
          key={`${idPrefix}-${index}`}
          className="group rounded-2xl border border-border/80 bg-secondary/15 px-5 transition-colors hover:border-primary/50 hover:bg-secondary/35 open:border-primary/60 open:bg-secondary/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span aria-hidden="true" className="text-xl leading-none text-primary group-open:rotate-45">+</span>
          </summary>
          <p className="pb-5 pt-1 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
