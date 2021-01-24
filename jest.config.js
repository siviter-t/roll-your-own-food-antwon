module.exports = async () => {
    return {
        verbose: true,
        rootDir: ".",
        testMatch: ["<rootDir>/tests/**/*.(ts|tsx)"],
        moduleDirectories: [
            "node_modules",
            "."
        ],
        testPathIgnorePatterns: [
            "<rootDir>/.next/",
            "<rootDir>/node_modules/"
        ],
    };
};
