import Link from "../Link";
import Logotip from "../Icon";

import { Wrapper, LogotipContainer } from "./StyledCpmponents";

import logotip from "../../static/icons/logotip.png";

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <LogotipContainer>
        <Link href="/">
          <Logotip src={logotip} alt="logotip" />
        </Link>
      </LogotipContainer>
    </Wrapper>
  );
};

export default Header;
