export function isValidishUkPostcode(postCode: string): boolean {
    if (!postCode) return false;
    if (!/([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})/.test(postCode)) return false;
    return true;
}
