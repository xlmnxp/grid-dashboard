import { GridLayout, GridLayoutItem } from './components/GridLayout';

export default () => (
  <GridLayout columns={2}>
    <GridLayoutItem style={{
      backgroundColor: 'red'
    }} column={1} columnSpan={2}>Hello 1</GridLayoutItem>
    <GridLayoutItem style={{
      backgroundColor: 'red'
    }} column={1} columnSpan={2} priority={2}>Hello 2</GridLayoutItem>
    <GridLayoutItem style={{
      backgroundColor: 'red'
    }} column={1} columnSpan={2} priority={1}>Hello 3</GridLayoutItem>
  </GridLayout>
);
