import Spinner from "react-bootstrap/Spinner";
import "./SpinnerLoader.scss";

interface SpinnerProps {
  color?: string;
  size?: number;
}

export const SpinnerLoader = (props: SpinnerProps) => {
  const { color = "#007acc", size } = props;
  return (
    <Spinner
      animation="border"
      className="spinner-loader"
      style={{ color, width: size, height: size }}
    />
  );
};
