import Login from "../../src/application/usercase/Login";
import Signup from "../../src/application/usercase/Signup";
import UserRepositoryMemory from "../../src/infra/repository/UserRepositoryMemory";

test("Deve fazer o signup", async function () {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        password: "12345678",
        age: 30
    };
    await signup.execute(inputSignup);
    const login = new Login(userRepository);
    const inputLogin = {
        email: "john.doe@gmail.com",
        password: "12345678",
    };
    const output = await login.execute(inputLogin);
    expect(output.name).toBe(inputSignup.name)
    expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTY3NzY3NTYwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDAwMH0.uZKynqDRWDYj9xPnt6SkqzPta3O--W1nryUhSSUjQow")
});
