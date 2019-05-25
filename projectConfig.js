var config = {
    GEN_folderName: "test2018", //项目文件夹名称
    GEN_projectName: "test", //项目名称
    GEN_projectPort: "8080", //端口号
    GEN_publicPath: "akg123",
    GEN_app: [
        {
            GEN_name: "akg",
            GEN_pages: [
                { name: "login" },
                { name: "detail" },
                { name: "premium" },
                { name: "info" },
                { name: "health" },
                { name: "confirm" },
                { name: "myOrder" },
                { name: "preview" },
                { name: "upload" }
            ]
        }
        
    ],
    GEN_globalProperties: ""
};

module.exports = { config };
