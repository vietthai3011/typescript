interface Authentication {
    email: string;
    password: string;

    login();

    logout();
}