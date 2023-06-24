let apiUrl = ""; //установить env.API http://localhost:12001/
if (typeof process.env.API === "string") {
    apiUrl = new URL(process.env.API);
} else if (typeof process.env._API === "string") {
    apiUrl = new URL(process.env._API);
}

if (!["build", "lint"].includes(process.env.npm_lifecycle_event)) {
    console.log(`API url: "${apiUrl}"`);
}

module.exports = {
    devServer: {
        port: 12000,
        proxy: {
            "^/api": {
                target: apiUrl.toString(),
            },
            "^/snp": {
                target: apiUrl.toString(),
            },
        },
    }
    ,
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/styles/styles.scss";',
            }
        }
    }
}