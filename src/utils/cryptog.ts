import crypto from 'crypto';


const saltRounds = 10

interface PasswordHash {
    salt: string;
    hashedPassword: string;
}

export function hashPassword(password: string): PasswordHash {
    const salt = process.env.MONGODB_SALT || crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto
        .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');

    return { salt, hashedPassword };
}
export function verifyPassword(password: string, salt: string, hashedPassword: string): boolean {
    const testHashedPassword = crypto
        .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');

    return hashedPassword === testHashedPassword;
}
