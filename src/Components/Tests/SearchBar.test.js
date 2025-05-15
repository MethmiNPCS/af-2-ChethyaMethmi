import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';  

test('SearchBar updates value and calls handleSearchChange', () => {
  const mockHandleSearchChange = jest.fn();  // Mock function to track calls
  
  // Render the SearchBar component and pass the mock function
  render(<SearchBar searchQuery="" handleSearchChange={mockHandleSearchChange} />);
  
  // Find the input field by its placeholder text
  const input = screen.getByPlaceholderText(/search for a country/i);
  
  // Simulate a change event (user typing 'USA')
  fireEvent.change(input, { target: { value: 'USA' } });
  
  // Assert that the mock function was called once
  expect(mockHandleSearchChange).toHaveBeenCalledTimes(1);
  
  // Assert that the input field value is 'USA'
  expect(input.value).toBe('USA');
});
