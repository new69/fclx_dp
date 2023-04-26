import CheckAuth from "../../src/application/usercase/CheckAuth";

test("Deve verificar se está autenticado", async function () {
    const checkAuth = new CheckAuth();
    const input = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTY3NzY3NTYwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDAwMH0.uZKynqDRWDYj9xPnt6SkqzPta3O--W1nryUhSSUjQow"
    const output = await checkAuth.execute(input);
    expect(output.email).toBe("john.doe@gmail.com");
});