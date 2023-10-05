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

export const GuardiansOfCyber = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            The Guardians 
            <br />
            of Cyberspace
          </>
        }
        image="/team.png"
        imageSize="large"
        text="Meet our community of ethical hackers, dedicated to safeguarding your digital assets through responsible vulnerability disclosure."
      />
        <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: "Digital Defenders",
              text: "Shielding cyberspace from relentless threats.",
            },
            {
              icon: AutomatedBacklogIcon,
              title: "Vigilant Watchdogs",
              text: "Constantly monitoring the digital frontier.",
            },
            {
              icon: WorkflowsIcon,
              title: "Threat Mitigation",
              text: "Swift response to neutralize cyber adversaries.",
            },
            {
              icon: CustomViewsIcon,
              title: "Security Collaboration",
              text: "Uniting forces for stronger cyber defenses.",
            },
            {
              icon: DiscussionIcon,
              title: "Cyber Resilience",
              text: "Ensuring digital infrastructure remains resilient.",
            },
            {
              icon: IssuesIcon,
              title: "Ethical Guardians",
              text: "Upholding principles in the digital domain.",
            },
          ]}
        />

      <Features.Cards
        features={[
          {
            image: "/exports.png",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Cybersecurity Experts",
            text: "Meet the guardians protecting digital frontiers.",
          },
          {
            image: "/exports.png",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Digital Watchdogs",
            text: "Vigilant sentinels guarding against cyber threats.",
          },
        ]}
      />
    </Features>
  );
};
