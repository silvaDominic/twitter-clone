import { HomePage } from "./HomePage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { JSXElementConstructor, ReactElement } from "react";

const renderWithRouter = (ui: ReactElement<any, string | JSXElementConstructor<any>>, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, {wrapper: BrowserRouter});
};

it('Will initialize the HomePage component', () => {
  renderWithRouter(<HomePage/>);

  expect(screen.getByText("Twitter Clone")).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});