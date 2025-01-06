import { render, screen } from "@testing-library/react";
import { BookingPage } from './components/BookingPage.jsx';
import { FormContext } from "./App.js";
import { BookingForm } from './components/subcomponents/BookingForm.jsx';
import { updateTimes, initializeTimes } from "./App.js";
import { fetchAPI } from "./fetchFunctions.js";

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
  success: false,
  setSuccess: () => {}
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
      <FormContext.Provider value={contextMockState}>
        <BookingPage />
      </FormContext.Provider>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm first label', () => {
    render(
      <FormContext.Provider value={contextMockState}>
        <BookingForm />
      </FormContext.Provider>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('BookingForm can be submitted', () => {
  render(
    <FormContext.Provider value={contextMockState}>
      <BookingForm />
    </FormContext.Provider>
  );
  const headingElement = screen.getByText("Make your reservation");
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.type).toBe('submit')
})

test('updateTimes returns the state after an action call', () => {
  expect(updateTimes('', 'TEST')).toBe('TEST')
})

const mockCallback = jest.fn(x => fetchAPI(new Date()));
test('initializeTimes returns an array of more than one', () => {
  initializeTimes(mockCallback)
  expect(mockCallback.mock.calls[0][0].length).toBeGreaterThan(1)
})