import { ShieldCheckIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheckIcon,
      label: "Insured & Bonded",
    },
    {
      icon: CheckCircleIcon,
      label: "100% Satisfaction Guarantee",
    },
    {
      icon: ClockIcon,
      label: "Same Day Service Available",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 mb-3">
            <badge.icon className="h-8 w-8 text-blue-800" />
          </div>
          <p className="text-lg font-bold text-white">{badge.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
