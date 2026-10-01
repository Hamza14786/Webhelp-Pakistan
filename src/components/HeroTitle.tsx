export function HeroTitle({ title }: { title: string }) {
  const words = title.trim().split(/\s+/);
  const split = title === "We Turn Your Ideas into Reality" ? 2 : Math.ceil(words.length / 2);

  return (
    <>
      {words.slice(0, split).join(" ")}{" "}
      <span className="subpage-hero-highlight">{words.slice(split).join(" ")}</span>
    </>
  );
}
