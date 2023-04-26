import Email from "../../src/domain/entity/Email";

test("should create an valid email", function () {
    const email = new Email("john.doe@gmail.com");
    expect(email.getValue()).toBe("john.doe@gmail.com")
});

test("should create an invalid email", function () {
    expect(() => new Email("john.doe@gmail")).toThrow(new Error("Invalid email"));
});
