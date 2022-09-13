import { AppBodyWrapper } from "./AppBody.styles";

type Props = {
  children: JSX.Element[];
};
const AppBody = ({ children }: Props) => {
  return <AppBodyWrapper>{children}</AppBodyWrapper>;
};

export default AppBody;
