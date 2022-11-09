import styled from "styled-components";

const AppIcon = styled.img``;

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon = ({ src, alt, className }: IconProps): JSX.Element => (
  <AppIcon src={src} alt={alt} className={className} />
);

Icon.defaultProps = {
  className: "",
};

export default Icon;
