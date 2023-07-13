type LoginRequest = {
    email: string,
    password: string,
}

type Credentials = {
    salt: string,
    hashedPassword: string,
};

type User = {
    username: string,
    first_name: string,
    last_name: string,
    credentials: Credentials
};

