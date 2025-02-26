const CONFIG = {
    // profile setting (required)
    profile: {
      name: "wowssun",
      image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
      role: "backend developer",
      bio: "If you're praying for a change, you better not wait.",
      email: "first.of.all.je@gmail.com",
      linkedin: "",
      github: "wowssun",
      instagram: "",
    },
    projects: [
      {
        name: `🔒`,
        href: "",
      },
    ],
    // blog setting (required)
    blog: {
      title: "WOW's dev archive",
      description: "welcome to wow's dev archive!",
      theme: "auto", // ['light','dark','auto']
    },
  
    // CONFIG configration (required)
    link: "https://wow-dev-archive.vercel.app/",
    since: 2023, // If leave this empty, current year will be used.
    lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
    seo: {
        keywords: ["Blog", "Website", "Notion"],
      },
  
    // notion configuration (required)
    notionConfig: {
      pageId: "b967e5252eee4c49a69ee0c219ff0697", //process.env.NOTION_PAGE_ID
    },
  
    // plugin configuration (optional)
    googleAnalytics: {
      enable: false,
      config: {
        measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
      },
    },
    googleSearchConsole: {
      enable: false,
      config: {
        siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
      },
    },
    utterances: {
      enable: true,
      config: {
        repo: "wowssun/wow-dev-archive",
        "issue-term": "og:title",
        label: "💬 Utterances",
      },
    },
    cusdis: {
      enable: false,
      config: {
        host: "https://cusdis.com",
        appid: "", // Embed Code -> data-app-id value
      },
    },
    isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
    revalidateTime: 60, // revalidate time for [slug], index 
  }
  
  module.exports = { CONFIG }
