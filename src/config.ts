import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://blog.jarema.me/", // replace this with your deployed domain
  author: "Jarema",
  profile: "https://jar.tf/",
  desc: "This is Jarema's blog page.",
  title: "Jarema",
  ogImage: "cover.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: ["en", "vi", "ru"],
  langTag: ["en-EN", "vi-VN", "ru-RU"],
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 46,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Website",
    href: "https://jar.tf",
    linkTitle: ` ${SITE.title}'s website`,
    active: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/jartf",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jarema.says",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:hi@jar.tf",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/jartf_",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/444078929314185217",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/jartf",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/jarema_me",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://toot.io/@jar",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const GISCUS: GiscusProps = {
  repo: "jartf/talk",
  repoId: "R_kgDOMOKAOA",
  category: "Announcements",
  categoryId: "DIC_kwDOMOKAOM4CgYcc",
  mapping: "pathname",
  strict: "1",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "en",
  loading: "lazy",
};
