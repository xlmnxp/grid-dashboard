import { GridLayout, GridLayoutItem } from './components/GridLayout/GridLayout';
import Header from './components/Header/Header';
import "./App.css"

export default () => (
  <>
    <Header></Header>
    <GridLayout columns={3} columnGap="5px" rowGap="5px">
      <GridLayoutItem column={1}>Hello 1</GridLayoutItem>
      <GridLayoutItem column={2} priority={2}>Hello 2</GridLayoutItem>
      <GridLayoutItem column={3} priority={1}>Hello 3</GridLayoutItem>
    </GridLayout>
  </>
);
