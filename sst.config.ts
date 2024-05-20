/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    if (input.stage !== "prod") throw new Error("Invalid stage");
    return {
      name: "elmelech-website",
      removal: "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        }
      }
    };
  },
  async run() {
    new sst.aws.Nextjs("NextjsSite", {
      domain: {
        name: "elmelech.com",
        aliases: ["www.elmelech.com"],
      }
    });
  },
});
