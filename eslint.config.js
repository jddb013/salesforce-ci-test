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

    // Add ESLint plugins correctly
    plugins: {
      lwc: require.resolve("eslint-plugin-lwc"),
    },

    // Extend recommended LWC rules
    extends: ["plugin:lwc/recommended"],

    // Define additional linting rules
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
