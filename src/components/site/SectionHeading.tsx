export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-[0.95] tracking-tight text-foreground uppercase sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
