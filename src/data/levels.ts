import { loc, type Loc } from "@/lib/i18n";

export type LevelDef = { n: number; title: Loc; focus: Loc };

export const LEVELS: LevelDef[] = [
  {
    n: 1,
    title: loc("Absolute Beginner", "একেবারে নতুন"),
    focus: loc("Install, open, explore. Learn the vocabulary.", "ইনস্টল, ওপেন, ঘুরে দেখা। শব্দভাণ্ডার শেখা।"),
  },
  {
    n: 2,
    title: loc("Beginner", "বিগিনার"),
    focus: loc("Core tools and daily-use panels.", "মূল টুল ও প্রতিদিন ব্যবহৃত প্যানেল।"),
  },
  {
    n: 3,
    title: loc("Basic", "বেসিক"),
    focus: loc("Finish small real tasks without help.", "সাহায্য ছাড়া ছোট বাস্তব কাজ শেষ করা।"),
  },
  {
    n: 4,
    title: loc("Intermediate", "ইন্টারমিডিয়েট"),
    focus: loc("Combine features, build full projects.", "ফিচার একসাথে ব্যবহার করে পূর্ণ প্রজেক্ট।"),
  },
  {
    n: 5,
    title: loc("Advanced", "অ্যাডভান্সড"),
    focus: loc("Speed, precision, non-destructive habits.", "গতি, নিখুঁততা, নন-ডেস্ট্রাক্টিভ অভ্যাস।"),
  },
  {
    n: 6,
    title: loc("Professional", "প্রফেশনাল"),
    focus: loc("Client-ready workflow, delivery, standards.", "ক্লায়েন্ট-রেডি ওয়ার্কফ্লো, ডেলিভারি, স্ট্যান্ডার্ড।"),
  },
  {
    n: 7,
    title: loc("Expert", "এক্সপার্ট"),
    focus: loc("Teach it, systemize it, lead projects.", "শেখানো, সিস্টেম বানানো, প্রজেক্ট লিড করা।"),
  },
];
