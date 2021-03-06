import { render, screen , fireEvent  } from '@testing-library/react';
import App from './App';

test('button has correct inital color', () => {
  render(<App />);
  // "button has correct initial text"
  const button = screen.getByRole("button",{name : "Change to blue"});
  expect(button).toHaveStyle('background-color : red')  
});

test('button has correct inital color' , () => {
  render(<App/>);
  const button = screen.getByRole("button",{name : "Change to red"});
  expect(button).toHaveStyle('background-color : blue');
})

test("button turns blue when clicked",() => {
  render(<App />);
  const button = screen.getByRole("button",{name : "Change to blue"});
  fireEvent.click(button);
  expect(button).toHaveStyle('background-color : blue');
  expect(button).toHaveStyle({name : "Change to red"});
})

test("button turns red when clicked", () => {
  render(<App/>)
  const button = screen.getByRole("button",{name : "Change to red"});
  fireEvent.click(button);
  expect(button).toHaveStyle('background-color : red');
  expect(button).toHaveStyle({name : "Change to blue"})
})

