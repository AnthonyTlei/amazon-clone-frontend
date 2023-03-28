import { validateEmail } from "./email";

describe("Email validation", () => {
  let email = "";
  test("an empty inpout should not be valid", () => {
    expect(validateEmail(email)).toEqual(false);
  });
  test("it should have an @ symbol", () => {
    email = 'abc@def.com'
    expect(email.includes('@')).toEqual(true);
  });
  test("it should have a .", () => {
    expect(email.includes('.')).toEqual(true);
  });
  test("a valid email should pass", () => {
    expect(validateEmail(email)).toEqual(true);
  });
  test("an invalid email should fail", () => {
    email = 'abc@def'
    expect(validateEmail(email)).toEqual(false);
  });
});
