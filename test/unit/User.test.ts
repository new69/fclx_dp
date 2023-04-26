import User from "../../src/domain/entity/User";

test("should create a user", async () => {
    const user = await User.create("John Doe", "john.doe@gmail.com", "Change@123", 30);
    expect(user.name.getValue()).toBe("John Doe");
    expect(user.email.getValue()).toBe("john.doe@gmail.com");
    expect(user.password.value).toBe("b2840f33aa1115988eafb6b519e8cbeba3d944a79752cd0e334ee19d8dce81561dc68526711f47c381a3f18e0e888f9135f3d20008c0bb0cf22bf6782522a761");
    expect(user.age).toBe(30);
});

test("should not create a user with invalid name", () => {
    expect(() => User.create("John", "john.doe@gmail.com", "Change@123", 30)).rejects.toThrow(new Error("Invalid name"));
});

test("should not create a user with invalid email", () => {
    expect(() => User.create("John Doe", "john.doe@gmail", "Change@123", 30)).rejects.toThrow(new Error("Invalid email"));
});

test("should not create a user with invalid password", () => {
    expect(() => User.create("John Doe", "john.doe@gmail.com", "123456", 30)).rejects.toThrow(new Error("Invalid password"));
});

test("should not create a user with invalid age", () => {
    expect(() => User.create("John Doe", "john.doe@gmail.com", "Change@123", 17)).rejects.toThrow(new Error("Invalid age"));
});
