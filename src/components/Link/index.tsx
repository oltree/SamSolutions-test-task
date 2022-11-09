import { ReactNode } from "react";

import styled from "styled-components";

const AppLink = styled.a``;

interface LinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const Link = ({ href, className, children }: LinkProps): JSX.Element => (
  <AppLink href={href} className={className}>
    {children}
  </AppLink>
);

Link.defaultProps = {
  className: "",
};

export default Link;
