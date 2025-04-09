import { expect, describe, it, beforeEach } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./erros/user-already-exists-error";

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe("Register use case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });
  it("should be able to register", async () => {
    const { user } = await sut.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });
  it("should hash user password upon register", async () => {
    const { user } = await sut.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const isPasswordCorreclyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorreclyHashed).toBe(true);
  });

  it("should not be able to register with same email", async () => {
    const email = "johndoe@example.com";

    await sut.execute({
      name: "John Doe",
      email: email,
      password: "123456",
    });

    await expect(() => {
      return sut.execute({
        name: "John Doe",
        email: email,
        password: "123456",
      });
    }).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
