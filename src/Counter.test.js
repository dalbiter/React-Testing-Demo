import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

//smoke test
test('it redners without crashing', () => {
    render(<Counter />)
});

//snapshot test
it('should match snapshot', () => {
  const {asFragment} = render(<Counter />)
  expect(asFragment()).toMatchSnapshot()
})

//playing with querying
test('playing with queries', () => {
const { getAllByText, 
        getByText, 
        queryByText,
        getByPlaceholderText,
        getAllByLabelText } = render(<Counter />)
// console.log(getAllByText("Count", {exact: false}))
// console.log(getByText('Cake'))
// console.log(queryByText('Cake'))
// console.log(getByPlaceholderText('username'))
// console.log(getAllByLabelText('Username'))
});

it('button increments counter', () => {
  const { getByText, debug } = render(<Counter />) 
  const h2 = getByText('Current Count: 0')
  const btn = getByText('Add')
  fireEvent.click(btn)
  debug();
  expect(h2).toHaveTextContent('1')// This tests if it goes from 0 to one but it may be good idea to add a test like the one below
  expect(h2).not.toHaveTextContent('0')
})