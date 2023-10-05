"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const SecureZkPayments = () => {
  return (
    <Features color="209,249,8" colorDark="31,49,64"> 
      <Features.Main
        title={
          <>
            Secure ZK  
            <br />
            Payments
          </>
        }
        image="/box.png"
        text="Discover how you can earn rewards by identifying vulnerabilities with our cutting-edge ZK bounty program."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Structured Issue Tracking",
            text: "Organize ZK reward claims efficiently.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated Rewards Handling",
            text: "ZK rewards made hassle-free.",
          },
          {
            icon: WorkflowsIcon,
            title: "Customized Workflows",
            text: "Tailor issue states for ZK.",
          },
          {
            icon: CustomViewsIcon,
            title: "Personalized Task Views",
            text: "Focus on ZK priorities.",
          },
          {
            icon: DiscussionIcon,
            title: "Collaborative Discussions",
            text: "Share insights within ZK teams.",
          },
          {
            icon: IssuesIcon,
            title: "Efficient Issue Creation",
            text: "Simplify vulnerability reporting.",
          },
        ]}
      />

      <Features.Cards
        features={[
          {
            image: "/exports.png",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "List and board",
            text: "Switch between list and board layout to view work from any angle.",
          },
          {
            image: "/exports.png",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Make it yours",
            text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
          },
        ]}
      />
    </Features>
  );
};
