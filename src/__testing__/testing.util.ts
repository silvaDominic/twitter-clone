import { JSXElementConstructor, ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export function renderWithRouter(ui: ReactElement<any, string | JSXElementConstructor<any>>, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter })
  };
}