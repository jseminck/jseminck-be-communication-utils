import importedVerifyToken from './authentication/verifyToken';

export async function verifyToken() {
    return await importedVerifyToken(...arguments);
}