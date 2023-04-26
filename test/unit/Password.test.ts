import Password from "../../src/domain/entity/Password";

test("should create password", async function () {
    const password = await Password.create("Change@123", "salt");
    expect(password.value).toBe("b2840f33aa1115988eafb6b519e8cbeba3d944a79752cd0e334ee19d8dce81561dc68526711f47c381a3f18e0e888f9135f3d20008c0bb0cf22bf6782522a761");
    expect(password.salt).toBe("salt");
});
