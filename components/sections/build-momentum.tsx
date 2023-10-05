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

export const UnleashWhiteHat = () => {
  return (
    <Features color="40,87,255" colorDark="209,249,8">
      <Features.Main
        title={
          <>
            Unleash the Power 
            <br />
            of WhiteHat
          </>
        }
        image="/leaderboard.png"
        imageSize="large"
        text="Discover how our platform empowers WhiteHat hackers to safeguard digital ecosystems."
      />
        <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: "Ethical Hacking Expertise",
              text: "Unleash WhiteHat skills for robust security.",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Threat Identification",
              text: "Detect vulnerabilities before malicious actors.",
            },
            {
              icon: WorkflowsIcon,
              title: "Vulnerability Remediation",
              text: "Swiftly address security weaknesses.",
            },
            {
              icon: CustomViewsIcon,
              title: "Security Collaboration",
              text: "Team up with ethical hackers for protection.",
            },
            {
              icon: DiscussionIcon,
              title: "Real-Time Threat Mitigation",
              text: "Defend against evolving cyber threats.",
            },
            {
              icon: IssuesIcon,
              title: "Comprehensive Security Testing",
              text: "Ensure a resilient digital infrastructure.",
            },
          ]}
        />
    </Features>
  );
};
