type P5MarqueeHazardProps = {
  items: string[];
  prefix?: string;
  className?: string;
};

export default function P5MarqueeHazard({
  items,
  prefix = "★",
  className = "",
}: P5MarqueeHazardProps) {
  const marquee = [...items, ...items];

  return (
    <div className={`p5-marquee-hazard ${className}`.trim()} aria-hidden>
      <div className="p5-marquee-hazard-inner">
        <div className="p5-marquee-hazard-track">
          {marquee.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-8 whitespace-nowrap"
            >
              {prefix} {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
