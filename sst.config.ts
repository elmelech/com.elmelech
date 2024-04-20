import { HostedZone } from "aws-cdk-lib/aws-route53";
import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "elmelech-website",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          hostedZone: "elmelech.com",
          domainName: "elmelech.com",
          domainAlias: "www.elmelech.com",
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
