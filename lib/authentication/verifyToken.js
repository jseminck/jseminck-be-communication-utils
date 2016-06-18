import fetch from 'node-fetch';

/**
 * Helper function to validate a json web token.
 */
export default async function verifyToken(req) {
    const token = parseToken(req);

    try {
        if (!token) {
            throw "Please provide a key: ?key= or ?token=";
        }

        const response = await fetch(`http://pacific-refuge-84094.herokuapp.com/api/login/verify?token=${token}`);
        const json = await response.json();

        if (!json.success) {
            throw "Incorrect key";
        }
    } catch (err) {
        return {
            success: false,
            message: err
        };
    }

    return {
        success: true
    };
}

function parseToken(req) {
    const {key: requestKey, token: requestToken} = req.query;
    const {key: bodyKey, token: bodyToken} = req.body;

    return requestKey || bodyKey || requestToken || bodyToken;
}