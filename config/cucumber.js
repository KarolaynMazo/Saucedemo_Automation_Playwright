module.exports ={
    default: {
        paths: [
          //  "src/features/*.feature"
         "src/features/saucedemo.feature",
         "src/features/json_place.feature"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json", // Generates a JSON report
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/stepDefinitions/*.ts",
            "src/setupHook/setup.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
     
    }
}

