import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  labelEn?: string;
  labelHi?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, labelEn, labelHi, children, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            "relative group transition-colors font-medium",
            isActive ? "text-primary" : "text-foreground hover:text-primary",
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      >
        {labelEn && labelHi ? (
          <>
            <span className="en-text">{labelEn}</span>
            <span className="hi-text hindi-text">{labelHi}</span>
          </>
        ) : (
          children
        )}
      </RouterNavLink>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
