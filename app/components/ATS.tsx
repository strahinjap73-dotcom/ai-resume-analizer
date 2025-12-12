type Suggestion = {
  type: "good" | "improve";
  tip: string;
};

type Props = {
  score: number; // 0-100
  suggestions: Suggestion[];
};

const ATS = ({ score, suggestions }: Props) => {
  const isStrong = score > 69;
  const isMedium = !isStrong && score > 49;

  const gradientFrom = isStrong
    ? "from-green-100"
    : isMedium
    ? "from-yellow-100"
    : "from-red-100";

  const headerIcon = isStrong
    ? "/icons/ats-good.svg"
    : isMedium
    ? "/icons/ats/warning.svg"
    : "/icons/ats-bad.svg";

  return (
    <div className={`rounded-2xl p-4 bg-gradient-to-b ${gradientFrom} to-white w-full`}>
      {/* Top section */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={headerIcon} alt="ATS status" className="w-10 h-10" />
          <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 flex flex-col gap-3">
        <p className="text-lg font-semibold">Application Tracking System Review</p>
        <p className="text-sm text-gray-500">
          Here are key insights on how your resume may perform when parsed by common ATS tools.
        </p>

        {/* Suggestions list */}
        <ul className="flex flex-col gap-2">
          {suggestions.map((s, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img
                src={s.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={s.type === "good" ? "Good" : "Improve"}
                className="w-5 h-5 mt-0.5"
              />
              <span className="text-sm text-gray-700">{s.tip}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-600 mt-2">
          Keep refining your resume to improve ATS compatibility and increase your chances of being shortlisted.
        </p>
      </div>
    </div>
  );
};

export default ATS;