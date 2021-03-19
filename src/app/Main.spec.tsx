import { act } from "react-dom/test-utils";
import { render, RenderResult, cleanup } from '@testing-library/react';

import Main from './Main';

describe('Main component ', () => {
  let fixture: RenderResult;

  afterEach(() => {
    cleanup();
  });

  it("Main renders correctly", () => {
    act(() => {
      fixture = render(<Main />)
    });

    const xyz = fixture.container.querySelector('.main');
    
    expect(xyz?.textContent).toBe('This is react typescipt app.');
  });
});