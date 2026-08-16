import { type Loc } from "@/lib/i18n";

export type TopicBlock = { key: string; label: Loc; body: Loc; icon: string };

export type TopicSpec = { name: string; level: number };

/**
 * Every topic in SkillVerse follows the exact same 13-block learning structure.
 * The text below is generated from bilingual templates so the whole library
 * stays consistent, readable and offline-friendly (pure static content).
 */
export function buildTopicBlocks(skill: string, topic: string, level: number): TopicBlock[] {
  const t = topic;
  const s = skill;
  return [
    {
      key: "definition",
      icon: "📘",
      label: { en: "Definition", bn: "সংজ্ঞা" },
      body: {
        en: `${t} is a core part of ${s}. It describes the exact feature, panel or concept you use inside ${s} to control the result of your work — nothing more, nothing less.`,
        bn: `${t} হলো ${s}-এর একটি মূল অংশ। ${s}-এর ভেতরে যে নির্দিষ্ট ফিচার, প্যানেল বা ধারণা দিয়ে আপনি কাজের ফলাফল নিয়ন্ত্রণ করেন, সেটাই ${t}।`,
      },
    },
    {
      key: "purpose",
      icon: "🎯",
      label: { en: "Purpose", bn: "উদ্দেশ্য" },
      body: {
        en: `The purpose of ${t} is to give you a repeatable, controlled way to reach a result instead of guessing. It removes manual work and keeps your project editable later.`,
        bn: `${t}-এর উদ্দেশ্য হলো অনুমান না করে একটি নিয়ন্ত্রিত, পুনরাবৃত্তিযোগ্য উপায়ে ফলাফলে পৌঁছানো। এটি হাতের কাজ কমায় এবং প্রজেক্ট পরে এডিটযোগ্য রাখে।`,
      },
    },
    {
      key: "why",
      icon: "💡",
      label: { en: "Why Learn", bn: "কেন শিখবেন" },
      body: {
        en: `Almost every professional ${s} project touches ${t}. Skipping it is the fastest way to slow, messy work — learning it once pays back on every future project.`,
        bn: `প্রায় প্রতিটি প্রফেশনাল ${s} প্রজেক্টেই ${t} লাগে। এটি বাদ দিলে কাজ ধীর ও অগোছালো হয় — একবার শিখলে ভবিষ্যতের প্রতিটি প্রজেক্টে কাজে লাগে।`,
      },
    },
    {
      key: "when",
      icon: "⏱️",
      label: { en: "When To Use", bn: "কখন ব্যবহার করবেন" },
      body: {
        en: `Use ${t} at the stage of your ${s} workflow where structure matters more than polish: while setting up, while building, and again while reviewing before delivery.`,
        bn: `${s} ওয়ার্কফ্লোর যে ধাপে সাজানো বেশি জরুরি সেখানে ${t} ব্যবহার করুন — সেটআপের সময়, বানানোর সময়, এবং ডেলিভারির আগে রিভিউর সময়।`,
      },
    },
    {
      key: "how",
      icon: "⚙️",
      label: { en: "How It Works", bn: "কীভাবে কাজ করে" },
      body: {
        en: `Open ${s} → locate the ${t} controls → apply the smallest change first → check the result at 100% zoom or in preview → refine values → save a version. Work in small reversible steps.`,
        bn: `${s} খুলুন → ${t}-এর কন্ট্রোল খুঁজুন → আগে সবচেয়ে ছোট পরিবর্তন প্রয়োগ করুন → ১০০% জুম বা প্রিভিউতে ফলাফল দেখুন → ভ্যালু ঠিক করুন → একটি ভার্সন সেভ করুন। ছোট ও রিভার্সিবল ধাপে কাজ করুন।`,
      },
    },
    {
      key: "real",
      icon: "🏠",
      label: { en: "Real Life Example", bn: "বাস্তব উদাহরণ" },
      body: {
        en: `You are fixing a friend's photo or page and something looks slightly off. Instead of starting over, you adjust it with ${t} in under a minute and keep the original safe.`,
        bn: `বন্ধুর একটি ছবি বা পেজ ঠিক করছেন, কিছু একটা বেখাপ্পা লাগছে। নতুন করে শুরু না করে ${t} দিয়ে এক মিনিটেই ঠিক করে ফেলুন, আর অরিজিনালও অক্ষত থাকুক।`,
      },
    },
    {
      key: "pro",
      icon: "💼",
      label: { en: "Professional Example", bn: "প্রফেশনাল উদাহরণ" },
      body: {
        en: `On a paid ${s} job the client asks for a change after approval. Because you built the file with ${t} properly, the revision takes minutes instead of a full rebuild.`,
        bn: `পেইড ${s} কাজে অ্যাপ্রুভালের পর ক্লায়েন্ট পরিবর্তন চাইলেন। ফাইলটি ${t} সঠিকভাবে ব্যবহার করে বানানো ছিল, তাই পুরো কাজ আবার না করে কয়েক মিনিটেই রিভিশন হয়ে গেল।`,
      },
    },
    {
      key: "best",
      icon: "✅",
      label: { en: "Best Practices", bn: "বেস্ট প্র্যাকটিস" },
      body: {
        en: `Name things clearly, keep originals untouched, prefer non-destructive settings, use default values as a starting point, and test on a real device or print size before you deliver.`,
        bn: `স্পষ্ট নাম দিন, অরিজিনাল অপরিবর্তিত রাখুন, নন-ডেস্ট্রাক্টিভ সেটিং বেছে নিন, ডিফল্ট ভ্যালু থেকে শুরু করুন, এবং ডেলিভারির আগে আসল ডিভাইস বা প্রিন্ট সাইজে পরীক্ষা করুন।`,
      },
    },
    {
      key: "mistakes",
      icon: "⚠️",
      label: { en: "Common Mistakes", bn: "সাধারণ ভুল" },
      body: {
        en: `Pushing values too far, editing the original instead of a copy, ignoring units and resolution, and never checking the final output at real size.`,
        bn: `ভ্যালু অতিরিক্ত বাড়ানো, কপির বদলে অরিজিনালে এডিট করা, ইউনিট ও রেজোলিউশন খেয়াল না করা, এবং ফাইনাল আউটপুট আসল সাইজে যাচাই না করা।`,
      },
    },
    {
      key: "tips",
      icon: "✨",
      label: { en: "Tips & Tricks", bn: "টিপস ও ট্রিকস" },
      body: {
        en: `Learn the shortcut for ${t} on day one, save your own preset, and keep a "before/after" copy so you can prove the improvement to a client.`,
        bn: `${t}-এর শর্টকাট প্রথম দিনেই শিখে নিন, নিজের প্রিসেট সেভ করুন, এবং "আগে/পরে" একটি কপি রাখুন যাতে ক্লায়েন্টকে উন্নতি দেখাতে পারেন।`,
      },
    },
    {
      key: "notes",
      icon: "📌",
      label: { en: "Important Notes", bn: "গুরুত্বপূর্ণ নোট" },
      body: {
        en: `This topic sits at Level ${level} of the SkillVerse ladder. Do not rush past it — later levels assume you can use ${t} without thinking about it.`,
        bn: `এই টপিকটি SkillVerse ল্যাডারের লেভেল ${level}-এ পড়ে। তাড়াহুড়ো করবেন না — পরের লেভেলগুলো ধরে নেয় যে ${t} আপনি না ভেবেই ব্যবহার করতে পারেন।`,
      },
    },
    {
      key: "summary",
      icon: "🧾",
      label: { en: "Summary", bn: "সারসংক্ষেপ" },
      body: {
        en: `${t} = controlled, editable results in ${s}. Learn the panel, learn one shortcut, apply it in a tiny project, then reuse it forever.`,
        bn: `${t} = ${s}-এ নিয়ন্ত্রিত ও এডিটযোগ্য ফলাফল। প্যানেলটি শিখুন, একটি শর্টকাট শিখুন, ছোট প্রজেক্টে প্রয়োগ করুন, তারপর সারাজীবন ব্যবহার করুন।`,
      },
    },
    {
      key: "revision",
      icon: "⚡",
      label: { en: "Quick Revision", bn: "দ্রুত রিভিশন" },
      body: {
        en: `What is it? A ${s} feature. Why? Control + editability. How? Small steps, check, save. Mistake to avoid? Overdoing it on the original file.`,
        bn: `কী? একটি ${s} ফিচার। কেন? নিয়ন্ত্রণ ও এডিটযোগ্যতা। কীভাবে? ছোট ধাপে, যাচাই করে, সেভ করে। কোন ভুল এড়াবেন? অরিজিনাল ফাইলে অতিরিক্ত কাজ করা।`,
      },
    },
  ];
}
