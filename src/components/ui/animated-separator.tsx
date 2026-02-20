/**
 * Minimal animated separator with running light effect.
 * Usage: <AnimatedSeparator className="w-2/3 my-12" />
 */
export const AnimatedSeparator = ({
  className = "",
}: {
  className?: string;
}) => (
  <div className={`relative h-px ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    <span className="about-section-separator-light" />
  </div>
);
