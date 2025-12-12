type Props = {
  score: number;
};

// Small reusable badge that reflects score strength
// - >69: green, label "Strong"
// - >49: yellow, label "Need Work"
// - else: red, label "Need Work"
const ScoreBadge = ({ score }: Props) => {
  const isStrong = score > 69;
  const isMedium = !isStrong && score > 49;



  const bgClass = isStrong
    ? "bg-badge-green"
    : isMedium
    ? "bg-badge-yellow"
    : "bg-badge-red";

  const textClass = isStrong
    ? "text-green-600"
    : isMedium
    ? "text-yellow-600"
    : "text-red-600";

  const label = isStrong ? "Strong" : "Need Work";

  return (
    <div className={`score-badge ${bgClass} ${textClass}`}>
      <p className="text-xs font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;