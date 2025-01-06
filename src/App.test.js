import { render, screen } from "@testing-library/react";
import { BookingPage } from './components/BookingPage.jsx';
import { FormContext } from "./App.js";
import { BookingForm } from './components/subcomponents/BookingForm.jsx';
import { updateTimes, initializeTimes } from "./App.js";
import { fetchAPI } from "./fetchFunctions.js";
import { BrowserRouter } from "react-router";

const contextMockState = {
  date: '2025-01-17',
  setDate: () => {},
  time: '17:00',
  setTime: () => {},
  guests: '1',
  setGuests: () => {},
  occasion: 'Birthday',
  setOccasion: () => {},
  availableTimes: ['17:00', '18:00'],
  dispathAvailableTimes: () => {},
  submitForm: () => {}
}

test('TextEncoder is globally defined in Jest', () => {
  expect(global.TextEncoder).toBeDefined();
});

test('TextDecoder decodes byte arrays', () => {
  const bytes = new Uint8Array([84, 101, 115, 116]);
  const decoder = new TextDecoder('utf-8');
  const result = decoder.decode(bytes);
  expect(result).toBe('Test');
});

test('Renders the BookingPage heading', () => {

    render(
      <BrowserRouter>
        <FormContext.Provider value={contextMockState}>
          <BookingPage />
        </FormContext.Provider>
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm first label', () => {
    render(
      <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
          <BookingForm />
        </FormContext.Provider>
      </BrowserRouter>
    );
    const formElement = screen.getByText("Choose date");
    expect(formElement).toBeInTheDocument();
})

test('BookingForm can be submitted', () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
);
  const submitHelement = screen.getByText("Make your reservation");
  expect(submitHelement).toBeInTheDocument();
  expect(submitHelement.type).toBe('submit')
})

test('updateTimes returns the state after an action call', () => {
  expect(updateTimes('', 'TEST')).toBe('TEST')
})

const mockCallback = jest.fn(x => fetchAPI(new Date()));
test('initializeTimes returns an array of more than one', () => {
  initializeTimes(mockCallback)
  expect(mockCallback.mock.calls[0][0].length).toBeGreaterThan(1)
})

test('Can write to and read from local storage', () => {
  localStorage.setItem('test', 'test1')
  expect(localStorage.getItem('test')).toBe('test1')
})

test('BookingForm submit button is enabled when there are times available for the selected day', () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const submitHelement = screen.getByText("Make your reservation")
  expect(submitHelement.disabled).toBe(false)
})

test('BookingForm submit button is disabled when there are no times available for the selected day', () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={{...contextMockState, availableTimes: []}}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const submitHelement = screen.getByText("Make your reservation")
  expect(submitHelement.disabled).not.toBe(false)
})

test('BookingForm submit button is enabled when there is a date selected', () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const submitHelement = screen.getByText("Make your reservation")
  expect(submitHelement.disabled).toBe(false)
})

test('BookingForm submit button is disabled when there is no date selected', () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={{...contextMockState, date: ''}}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const submitHelement = screen.getByText("Make your reservation")
  expect(submitHelement.disabled).toBe(true)
})

test("can't select a date from the past", () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const guestsEelement = screen.getByLabelText('Choose date')
  expect(guestsEelement.min).toBe(new Date().toISOString().slice(0, 10))
})

test("can't select less than 1 guest", () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const guestsEelement = screen.getByLabelText('Number of guests')
  expect(guestsEelement.min).toBe('1')
})

test("BookingForm button has type 'submit'", () => {
  render(
    <BrowserRouter>
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    </BrowserRouter>
)

  const submitEelement = screen.getByText('Make your reservation')
  expect(submitEelement.type).toBe('submit')
})