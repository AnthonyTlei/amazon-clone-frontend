import { validateNameLength, validatePasswordLength } from "./length";

describe("Length validation", () => {
  describe("Name Field", () => {
    let name = "";
    test("fail if empty", () => {
      expect(validateNameLength(name)).toEqual(false);
    });
    test("fail if less than 2 characters", () => {
      name = 'A'
      expect(validateNameLength(name)).toEqual(false);
    });
    test("pass if equal 2 characters", () => {
      name = 'AB'
      expect(validateNameLength(name)).toEqual(true);
    });
    test("pass if greater than 2 characters", () => {
      name = 'ABCDE'
      expect(validateNameLength(name)).toEqual(true);
    });
  });
  describe("Password Field", () => {
    let password = "";
    test("fail if empty", () => {
      expect(validatePasswordLength(password)).toEqual(false);
    });
    test("fail if less than 6 characters", () => {
      password = '12345'
      expect(validatePasswordLength(password)).toEqual(false);
    });
    test("pass if equal 6 characters", () => {
      password = '123456'
      expect(validatePasswordLength(password)).toEqual(true);
    });
    test("pass if equal 20 characters", () => {
      password = '123456789abcdefghijk'
      expect(validatePasswordLength(password)).toEqual(true);
    });
    test("fail if greater than 20 characters", () => {
      password = '123456789abcdefghijkl'
      expect(validatePasswordLength(password)).toEqual(false);
    });
  });
});
