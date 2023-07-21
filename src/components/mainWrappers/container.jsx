import { StyledContainer } from "../styles/wrappers/containerStyles";

export function Container({children}) {
  return (
    <StyledContainer className="wrapper">
       <div className="container">{children}</div>
    </StyledContainer>
  );
}
