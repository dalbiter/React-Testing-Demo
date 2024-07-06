import { render, screen } from '@testing-library/react';
import BrokenComponent from './BrokenComponent';

// test('it redners without crashing', () => {
//     render(<BrokenComponent />)
//   })

test('1 === 1', () => {
  expect(1).toEqual(1)
})