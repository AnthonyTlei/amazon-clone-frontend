import { reducer, screen } from "../../../shared/utils/test-utils";

import SigninFormComponent from "./SigninForm.component";

describe("Sign-in Form", () => {
  let signInButton = null;
  beforeEach(() => {
    reducer(<SigninFormComponent />);
    signInButton = screen.getByRole("button", { name: /sign-in/i });
  });
  test("Login Button should be in document", () => {
    expect(signInButton).toBeInTheDocument();
  });
  test("Login Button should be disabled initially", () => {
    expect(signInButton).toBeDisabled();
  });
});
