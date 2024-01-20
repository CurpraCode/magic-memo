import { FC, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  loading?: boolean;
  color?: "primary" | "secondary" | "success" | "danger";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  href,
  onClick,
  icon,
  loading,
  color = "primary",
  className = "",
}: ButtonProps) => {
  const buttonClasses = `inline-flex items-center justify-center gap-x-2 px-4 py-2 border border-transparent rounded-md font-semibold text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ${
    color === "primary" ? "bg-blue-500 hover:bg-blue-600" : ""
  } ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600" : ""} ${
    color === "success" ? "bg-green-500 hover:bg-green-600" : ""
  } ${color === "danger" ? "bg-red-500 hover:bg-red-600" : ""} ${className}`;

  return (
    <div>
      {href ? (
        <Link
          href={href}
          className={buttonClasses}
          onClick={onClick}
          style={{ pointerEvents: loading ? "none" : "auto" }}
        >
          {loading && (
            <span className="animate-spin mr-2">
              {/* You can replace this with your loading spinner component */}
              &#9696;
            </span>
          )}

          <span>{children}</span>
          {icon && <span>{icon}</span>}
        </Link>
      ) : (
        <button
          className={buttonClasses}
          onClick={onClick}
          disabled={loading}
          style={{ cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading && (
            <span className="animate-spin mr-2">
              {/* You can replace this with your loading spinner component */}
              &#9696;
            </span>
          )}

          <span>{children}</span>
          {icon && <span>{icon}</span>}
        </button>
      )}
    </div>
  );
};

export default Button;
