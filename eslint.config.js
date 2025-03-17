export default [
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
    },
    
    // Define linting rules
    rules: {
      "no-unused-vars": "warn", // Warns about unused variables instead of failing
      "no-console": "off" // Allows console.log() for debugging
    },
  },
];
