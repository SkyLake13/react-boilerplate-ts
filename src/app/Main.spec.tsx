import renderer from "react-test-renderer";
import { Main } from "./main";

it("Main renders correctly", () => {
  const tree = renderer.create(<Main />).toJSON();
  
  expect(tree).toMatchSnapshot();
});