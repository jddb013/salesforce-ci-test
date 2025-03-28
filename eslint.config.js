module.exports = [
  {
    // Ignore node_modules and static resources
    ignores: ["node_modules/**", "force-app/main/default/staticresources/**"],
  },
  {
    // Apply rules to all LWC JavaScript files
    files: ["force-app/main/default/lwc/**/*.js"],

    // Define language options
    languageOptions: {
      sourceType: "module", // Ensures ES6+ module support
      ecmaVersion: 2020, // Allows modern JavaScript features
    },

    // Add ESLint plugins
    plugins: {
      lwc: require("eslint-plugin-lwc"), // Enables LWC linting
    },

    // Extend recommended LWC rules
    rules: {
      ...require("eslint-plugin-lwc").configs.recommended.rules, // Use LWC best practices
      "no-unused-vars": "warn", // Warns about unused variables instead of failing
      "no-console": "off" // Allows console.log() for debugging
    },
  },
];
