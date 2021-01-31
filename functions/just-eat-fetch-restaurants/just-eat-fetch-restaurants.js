const fetch = require('node-fetch');

function isValidishUkPostcode(postCode) {
    if (!postCode) return false;
    if (!/([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})/.test(postCode)) return false;
    return true;
}

const handler = async function (event) {
    const postCode = event.queryStringParameters.postcode;

    if (!isValidishUkPostcode(postCode)) {
        console.log(postCode ? "'" + postCode + "' is an invalid postcode" : "No postcode specified");
        return {
            statusCode: 400,
            body: "Please enter a valid UK postcode."
        };
    }

    console.log("Getting restaurants for postcode '" + postCode + "'");
    const postCodeEncoded = encodeURIComponent(postCode);
    const uri = "https://uk.api.just-eat.io/restaurants/bypostcode/" + postCodeEncoded;

    try {
        const response = await fetch(uri, {
            insecureHTTPParser: true // unfortunate but required for funky API headers. See v3.0.0-beta.7 of node-fetch
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: response.statusText
            };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

module.exports = { handler };
