import { loc, type Loc } from "@/lib/i18n";

export type Shortcut = { keys: string; action: Loc };
export type Faq = { q: Loc; a: Loc };
export type MindBranch = { branch: Loc; leaves: string[] };

export type Skill = {
  slug: string;
  name: string;
  nameBn: string;
  icon: string;
  category: "graphic-design" | "web-development";
  tagline: Loc;
  overview: Loc;
  time: Loc;
  difficulty: Loc;
  prerequisites: Loc[];
  careers: Loc[];
  topics: string[];
  roadmap: Loc[];
  workflow: Loc[];
  best: Loc[];
  mistakes: Loc[];
  shortcuts: Shortcut[];
  cheatsheet: { label: string; value: Loc }[];
  mindmap: MindBranch[];
  revision: { s30: Loc; m2: Loc[]; m10: Loc[] };
  faq: Faq[];
};

export type Category = {
  slug: "graphic-design" | "web-development";
  icon: string;
  name: Loc;
  description: Loc;
};

export const CATEGORIES: Category[] = [
  {
    slug: "graphic-design",
    icon: "🎨",
    name: loc("Graphic Design", "গ্রাফিক ডিজাইন"),
    description: loc(
      "Image editing, vector art, video, motion and audio — the full Adobe-centred creative stack.",
      "ইমেজ এডিটিং, ভেক্টর, ভিডিও, মোশন ও অডিও — সম্পূর্ণ অ্যাডোবি-কেন্দ্রিক ক্রিয়েটিভ স্ট্যাক।",
    ),
  },
  {
    slug: "web-development",
    icon: "💻",
    name: loc("Web Development", "ওয়েব ডেভেলপমেন্ট"),
    description: loc(
      "From your first HTML tag to interactive JavaScript interfaces, structured level by level.",
      "প্রথম HTML ট্যাগ থেকে ইন্টার‌্যাক্টিভ জাভাস্ক্রিপ্ট ইন্টারফেস — লেভেল অনুযায়ী সাজানো।",
    ),
  },
];

const genericBest = (s: string, sBn: string): Loc[] => [
  loc(`Keep every ${s} file organised and clearly named before you start working.`, `কাজ শুরুর আগে প্রতিটি ${sBn} ফাইল গুছিয়ে ও স্পষ্ট নাম দিয়ে রাখুন।`),
  loc("Work non-destructively — always keep an untouched original.", "নন-ডেস্ট্রাক্টিভভাবে কাজ করুন — অরিজিনাল সবসময় অক্ষত রাখুন।"),
  loc("Learn shortcuts for the ten actions you repeat most.", "যে দশটি কাজ সবচেয়ে বেশি করেন, তার শর্টকাট শিখে নিন।"),
  loc("Save versions (v1, v2, final) instead of overwriting.", "ওভাররাইট না করে ভার্সন সেভ করুন (v1, v2, final)।"),
  loc("Review the final output at real size before delivery.", "ডেলিভারির আগে ফাইনাল আউটপুট আসল সাইজে যাচাই করুন।"),
];

const genericMistakes = (s: string, sBn: string): Loc[] => [
  loc("Watching tutorials without rebuilding the project yourself.", "নিজে প্রজেক্ট না বানিয়ে শুধু টিউটোরিয়াল দেখা।"),
  loc(`Jumping to advanced ${s} tricks before the basics are automatic.`, `বেসিক আয়ত্তে আসার আগেই অ্যাডভান্সড ${sBn} ট্রিকে চলে যাওয়া।`),
  loc("Editing the original file with no backup.", "ব্যাকআপ ছাড়া অরিজিনাল ফাইলে এডিট করা।"),
  loc("Ignoring naming, folders and export settings.", "নাম, ফোল্ডার ও এক্সপোর্ট সেটিং অবহেলা করা।"),
  loc("Collecting resources instead of finishing one project.", "একটি প্রজেক্ট শেষ না করে শুধু রিসোর্স জমানো।"),
];

const s = (skill: Skill) => skill;

export const SKILLS: Skill[] = [
  s({
    slug: "photoshop",
    name: "Adobe Photoshop",
    nameBn: "অ্যাডোবি ফটোশপ",
    icon: "🖼️",
    category: "graphic-design",
    tagline: loc("The industry standard for image editing and design", "ইমেজ এডিটিং ও ডিজাইনের ইন্ডাস্ট্রি স্ট্যান্ডার্ড"),
    overview: loc(
      "Photoshop is a pixel-based editor used for retouching, photo manipulation, compositing, mockups, social media design and print artwork. Master layers, masks and smart objects and everything else becomes easy.",
      "ফটোশপ একটি পিক্সেল-ভিত্তিক এডিটর — রিটাচিং, ফটো ম্যানিপুলেশন, কম্পোজিটিং, মকআপ, সোশ্যাল মিডিয়া ডিজাইন ও প্রিন্ট আর্টওয়ার্কের জন্য ব্যবহৃত হয়। লেয়ার, মাস্ক ও স্মার্ট অবজেক্ট আয়ত্তে এলে বাকি সব সহজ।",
    ),
    time: loc("90–120 hours", "৯০–১২০ ঘণ্টা"),
    difficulty: loc("Beginner friendly → Professional", "নতুনদের জন্য সহজ → প্রফেশনাল"),
    prerequisites: [
      loc("A computer with 8GB RAM or more", "৮ জিবি র‍্যাম বা বেশি সহ একটি কম্পিউটার"),
      loc("Basic file and folder handling", "ফাইল ও ফোল্ডার ব্যবহারের প্রাথমিক ধারণা"),
      loc("Patience for practice — no drawing skill needed", "প্র্যাকটিসের ধৈর্য — আঁকার দক্ষতা লাগবে না"),
    ],
    careers: [
      loc("Photo Retoucher", "ফটো রিটাচার"),
      loc("Graphic Designer", "গ্রাফিক ডিজাইনার"),
      loc("Social Media Designer", "সোশ্যাল মিডিয়া ডিজাইনার"),
      loc("E-commerce Product Editor", "ই-কমার্স প্রোডাক্ট এডিটর"),
      loc("Freelance Creative on Fiverr / Upwork", "ফাইভার / আপওয়ার্কে ফ্রিল্যান্স ক্রিয়েটিভ"),
    ],
    topics: [
      "Introduction", "Installation", "Workspace", "Preferences", "Keyboard Shortcuts",
      "Move Tool", "Selection Tools", "Crop Tool", "Brush Tool", "Healing Brush",
      "Clone Stamp", "Gradient", "Text Tool", "Shape Tool", "Pen Tool",
      "Layers", "Layer Groups", "Masks", "Clipping Mask", "Adjustment Layers",
      "Smart Objects", "Blend Modes", "Filters", "Camera Raw", "Color Correction",
      "Retouching", "Photo Manipulation", "Compositing", "Mockup Design", "Automation",
      "Export", "Print", "Professional Workflow", "Portfolio Tips", "Freelancing Tips",
    ],
    roadmap: [
      loc("Install, set preferences, learn the workspace", "ইনস্টল, প্রেফারেন্স সেট, ওয়ার্কস্পেস শেখা"),
      loc("Selections, crop, brush and basic retouching", "সিলেকশন, ক্রপ, ব্রাশ ও বেসিক রিটাচিং"),
      loc("Layers, masks and clipping masks", "লেয়ার, মাস্ক ও ক্লিপিং মাস্ক"),
      loc("Adjustment layers, blend modes, colour correction", "অ্যাডজাস্টমেন্ট লেয়ার, ব্লেন্ড মোড, কালার কারেকশন"),
      loc("Smart objects, filters, Camera Raw, compositing", "স্মার্ট অবজেক্ট, ফিল্টার, ক্যামেরা র, কম্পোজিটিং"),
      loc("Mockups, automation, export and print setup", "মকআপ, অটোমেশন, এক্সপোর্ট ও প্রিন্ট সেটআপ"),
      loc("Portfolio, client workflow, freelancing", "পোর্টফোলিও, ক্লায়েন্ট ওয়ার্কফ্লো, ফ্রিল্যান্সিং"),
    ],
    workflow: [
      loc("Collect brief, references and raw files", "ব্রিফ, রেফারেন্স ও র ফাইল সংগ্রহ"),
      loc("Set up document: size, resolution, colour mode", "ডকুমেন্ট সেটআপ: সাইজ, রেজোলিউশন, কালার মোড"),
      loc("Build with layers, groups and smart objects", "লেয়ার, গ্রুপ ও স্মার্ট অবজেক্ট দিয়ে তৈরি"),
      loc("Retouch, then colour grade with adjustment layers", "রিটাচ, তারপর অ্যাডজাস্টমেন্ট লেয়ারে কালার গ্রেড"),
      loc("Client review round with flattened JPG preview", "ফ্ল্যাট JPG প্রিভিউ দিয়ে ক্লায়েন্ট রিভিউ"),
      loc("Export web + print versions, archive the PSD", "ওয়েব ও প্রিন্ট ভার্সন এক্সপোর্ট, PSD আর্কাইভ"),
    ],
    best: genericBest("Photoshop", "ফটোশপ"),
    mistakes: genericMistakes("Photoshop", "ফটোশপ"),
    shortcuts: [
      { keys: "V", action: loc("Move tool", "মুভ টুল") },
      { keys: "M / L / W", action: loc("Marquee / Lasso / Quick selection", "মার্কি / ল্যাসো / কুইক সিলেকশন") },
      { keys: "Ctrl + J", action: loc("Duplicate layer", "লেয়ার ডুপ্লিকেট") },
      { keys: "Ctrl + T", action: loc("Free transform", "ফ্রি ট্রান্সফর্ম") },
      { keys: "Ctrl + Alt + Z", action: loc("Step backward", "এক ধাপ পিছনে") },
      { keys: "Ctrl + Shift + S", action: loc("Save as", "সেভ অ্যাজ") },
      { keys: "[ / ]", action: loc("Brush size down / up", "ব্রাশ সাইজ কম / বেশি") },
      { keys: "X / D", action: loc("Swap / reset colours", "কালার সোয়াপ / রিসেট") },
    ],
    cheatsheet: [
      { label: "Web export", value: loc("72 PPI, sRGB, PNG or JPG", "৭২ PPI, sRGB, PNG বা JPG") },
      { label: "Print export", value: loc("300 PPI, CMYK, PDF/X-1a", "৩০০ PPI, CMYK, PDF/X-1a") },
      { label: "Non-destructive", value: loc("Smart object + mask + adjustment layer", "স্মার্ট অবজেক্ট + মাস্ক + অ্যাডজাস্টমেন্ট লেয়ার") },
      { label: "Mask rule", value: loc("Black hides, white reveals", "কালো লুকায়, সাদা দেখায়") },
    ],
    mindmap: [
      { branch: loc("Setup", "সেটআপ"), leaves: ["Install", "Workspace", "Preferences", "Shortcuts"] },
      { branch: loc("Tools", "টুলস"), leaves: ["Move", "Selection", "Brush", "Pen", "Text", "Shape"] },
      { branch: loc("Structure", "স্ট্রাকচার"), leaves: ["Layers", "Groups", "Masks", "Smart Objects"] },
      { branch: loc("Colour", "কালার"), leaves: ["Adjustments", "Blend Modes", "Camera Raw"] },
      { branch: loc("Delivery", "ডেলিভারি"), leaves: ["Export", "Print", "Mockup", "Portfolio"] },
    ],
    revision: {
      s30: loc(
        "Photoshop = pixels. Layers hold content, masks hide it, adjustment layers colour it, smart objects protect it. Export web at 72 PPI, print at 300 PPI.",
        "ফটোশপ = পিক্সেল। লেয়ারে কনটেন্ট, মাস্কে লুকানো, অ্যাডজাস্টমেন্ট লেয়ারে কালার, স্মার্ট অবজেক্টে সুরক্ষা। ওয়েব ৭২ PPI, প্রিন্ট ৩০০ PPI।",
      ),
      m2: [
        loc("Selections isolate an area; masks make that isolation editable.", "সিলেকশন এলাকা আলাদা করে; মাস্ক সেই আলাদা করাকে এডিটযোগ্য রাখে।"),
        loc("Healing brush and clone stamp remove blemishes and objects.", "হিলিং ব্রাশ ও ক্লোন স্ট্যাম্প দাগ ও অবজেক্ট সরায়।"),
        loc("Blend modes change how a layer mixes with the one below.", "ব্লেন্ড মোড নিচের লেয়ারের সাথে মেশার ধরন বদলায়।"),
        loc("Camera Raw is the fastest full-image colour fix.", "পুরো ছবির কালার দ্রুত ঠিক করার সবচেয়ে ভালো উপায় ক্যামেরা র।"),
      ],
      m10: [
        loc("Rebuild a poster using only shapes, text and layer styles.", "শুধু শেপ, টেক্সট ও লেয়ার স্টাইল দিয়ে একটি পোস্টার আবার বানান।"),
        loc("Retouch one portrait: skin, teeth, eyes, then dodge & burn.", "একটি পোর্ট্রেট রিটাচ করুন: স্কিন, দাঁত, চোখ, তারপর ডজ ও বার্ন।"),
        loc("Composite two photos with masks and matching colour grade.", "মাস্ক ও ম্যাচিং কালার গ্রেড দিয়ে দুটি ছবি কম্পোজিট করুন।"),
        loc("Place your design in a mockup with a smart object.", "স্মার্ট অবজেক্ট দিয়ে ডিজাইনটি একটি মকআপে বসান।"),
        loc("Export the same file for Instagram, web and print.", "একই ফাইল ইনস্টাগ্রাম, ওয়েব ও প্রিন্টের জন্য এক্সপোর্ট করুন।"),
      ],
    },
    faq: [
      {
        q: loc("Do I need a drawing tablet?", "ড্রয়িং ট্যাবলেট কি লাগবে?"),
        a: loc("No. A mouse is enough for 90% of professional retouching and design work.", "না। ৯০% প্রফেশনাল রিটাচিং ও ডিজাইনের কাজে মাউসই যথেষ্ট।"),
      },
      {
        q: loc("Photoshop or Illustrator first?", "আগে ফটোশপ না ইলাস্ট্রেটর?"),
        a: loc("Photoshop first — it teaches layers and colour, which help everywhere else.", "আগে ফটোশপ — এটি লেয়ার ও কালার শেখায়, যা সব জায়গায় কাজে লাগে।"),
      },
      {
        q: loc("How long until I can take clients?", "কত দিনে ক্লায়েন্ট নিতে পারব?"),
        a: loc("With 2 focused hours a day, most learners reach Level 5 in about 3 months.", "প্রতিদিন ২ ঘণ্টা মনোযোগী প্র্যাকটিসে অধিকাংশ শিক্ষার্থী প্রায় ৩ মাসে লেভেল ৫-এ পৌঁছায়।"),
      },
    ],
  }),
  s({
    slug: "illustrator",
    name: "Adobe Illustrator",
    nameBn: "অ্যাডোবি ইলাস্ট্রেটর",
    icon: "✒️",
    category: "graphic-design",
    tagline: loc("Vector design, logos and infinite scalability", "ভেক্টর ডিজাইন, লোগো ও সীমাহীন স্কেলেবিলিটি"),
    overview: loc(
      "Illustrator builds artwork from maths, not pixels, so a logo drawn once works on a business card and a billboard. It is the tool of choice for logos, icons, illustration, packaging and print-ready vector art.",
      "ইলাস্ট্রেটর পিক্সেল নয়, গণিত দিয়ে আর্টওয়ার্ক বানায় — একবার আঁকা লোগো বিজনেস কার্ড থেকে বিলবোর্ড পর্যন্ত ব্যবহারযোগ্য। লোগো, আইকন, ইলাস্ট্রেশন, প্যাকেজিং ও প্রিন্ট-রেডি ভেক্টরের প্রধান টুল।",
    ),
    time: loc("70–100 hours", "৭০–১০০ ঘণ্টা"),
    difficulty: loc("Beginner → Professional", "বিগিনার → প্রফেশনাল"),
    prerequisites: [
      loc("Basic computer skills", "প্রাথমিক কম্পিউটার দক্ষতা"),
      loc("Photoshop basics help but are optional", "ফটোশপের বেসিক থাকলে সুবিধা, তবে বাধ্যতামূলক নয়"),
    ],
    careers: [
      loc("Logo & Brand Designer", "লোগো ও ব্র্যান্ড ডিজাইনার"),
      loc("Vector Illustrator", "ভেক্টর ইলাস্ট্রেটর"),
      loc("Packaging Designer", "প্যাকেজিং ডিজাইনার"),
      loc("Print Production Artist", "প্রিন্ট প্রোডাকশন আর্টিস্ট"),
    ],
    topics: [
      "Introduction", "Workspace", "Artboards", "Shapes", "Pen Tool", "Pathfinder",
      "Typography", "Vector", "Color", "Gradient", "Pattern", "Brushes",
      "Logo Design", "Illustration", "Tracing", "Mockup", "Packaging",
      "Export", "Print Setup", "Professional Workflow",
    ],
    roadmap: [
      loc("Workspace, artboards and shape building", "ওয়ার্কস্পেস, আর্টবোর্ড ও শেপ তৈরি"),
      loc("Pen tool mastery and path editing", "পেন টুল দক্ষতা ও পাথ এডিটিং"),
      loc("Pathfinder, alignment and grids", "পাথফাইন্ডার, অ্যালাইনমেন্ট ও গ্রিড"),
      loc("Typography and colour systems", "টাইপোগ্রাফি ও কালার সিস্টেম"),
      loc("Gradients, patterns and brushes", "গ্রেডিয়েন্ট, প্যাটার্ন ও ব্রাশ"),
      loc("Logo, illustration and packaging projects", "লোগো, ইলাস্ট্রেশন ও প্যাকেজিং প্রজেক্ট"),
      loc("Print setup, handoff and brand guidelines", "প্রিন্ট সেটআপ, হ্যান্ডঅফ ও ব্র্যান্ড গাইডলাইন"),
    ],
    workflow: [
      loc("Sketch on paper before touching the pen tool", "পেন টুল ধরার আগে কাগজে স্কেচ"),
      loc("Build with basic shapes, refine with Pathfinder", "বেসিক শেপে বানান, পাথফাইন্ডারে পরিমার্জন"),
      loc("Lock a grid and keep everything aligned", "গ্রিড লক করে সব অ্যালাইন রাখুন"),
      loc("Deliver AI + SVG + PDF + PNG in one folder", "একই ফোল্ডারে AI + SVG + PDF + PNG ডেলিভারি"),
    ],
    best: genericBest("Illustrator", "ইলাস্ট্রেটর"),
    mistakes: genericMistakes("Illustrator", "ইলাস্ট্রেটর"),
    shortcuts: [
      { keys: "P", action: loc("Pen tool", "পেন টুল") },
      { keys: "A", action: loc("Direct selection", "ডাইরেক্ট সিলেকশন") },
      { keys: "Ctrl + G", action: loc("Group", "গ্রুপ") },
      { keys: "Ctrl + 8", action: loc("Make compound path", "কম্পাউন্ড পাথ") },
      { keys: "Ctrl + Shift + O", action: loc("Create outlines from text", "টেক্সট আউটলাইন") },
      { keys: "Ctrl + Y", action: loc("Outline preview", "আউটলাইন প্রিভিউ") },
    ],
    cheatsheet: [
      { label: "Logo delivery", value: loc("AI, SVG, EPS, PDF, PNG + brand sheet", "AI, SVG, EPS, PDF, PNG + ব্র্যান্ড শিট") },
      { label: "Before print", value: loc("Outline text, CMYK, 3mm bleed", "টেক্সট আউটলাইন, CMYK, ৩মিমি ব্লিড") },
      { label: "Clean shapes", value: loc("Pathfinder + align + even anchor points", "পাথফাইন্ডার + অ্যালাইন + সমান অ্যাংকর পয়েন্ট") },
    ],
    mindmap: [
      { branch: loc("Draw", "ড্র"), leaves: ["Shapes", "Pen Tool", "Pathfinder", "Tracing"] },
      { branch: loc("Style", "স্টাইল"), leaves: ["Color", "Gradient", "Pattern", "Brushes"] },
      { branch: loc("Apply", "প্রয়োগ"), leaves: ["Logo", "Illustration", "Packaging", "Mockup"] },
      { branch: loc("Deliver", "ডেলিভারি"), leaves: ["Export", "Print Setup", "Workflow"] },
    ],
    revision: {
      s30: loc(
        "Illustrator = vectors. Shapes + pen + Pathfinder build the form; colour, gradient and type finish it; export AI/SVG/PDF for any size.",
        "ইলাস্ট্রেটর = ভেক্টর। শেপ + পেন + পাথফাইন্ডারে গঠন; কালার, গ্রেডিয়েন্ট ও টাইপে সমাপ্তি; যেকোনো সাইজের জন্য AI/SVG/PDF এক্সপোর্ট।",
      ),
      m2: [
        loc("Anchor points and handles control every curve.", "প্রতিটি কার্ভ নিয়ন্ত্রণ করে অ্যাংকর পয়েন্ট ও হ্যান্ডেল।"),
        loc("Fewer anchor points = cleaner, more professional shapes.", "কম অ্যাংকর পয়েন্ট = পরিচ্ছন্ন, প্রফেশনাল শেপ।"),
        loc("Always outline text before sending to print.", "প্রিন্টে পাঠানোর আগে টেক্সট সবসময় আউটলাইন করুন।"),
      ],
      m10: [
        loc("Trace a simple logo using only the pen tool.", "শুধু পেন টুল দিয়ে একটি সাধারণ লোগো ট্রেস করুন।"),
        loc("Design a 3-colour logo with a grid and alignment.", "গ্রিড ও অ্যালাইনমেন্ট ব্যবহার করে ৩ কালারের লোগো ডিজাইন করুন।"),
        loc("Create a seamless pattern and apply it to packaging.", "সিমলেস প্যাটার্ন বানিয়ে প্যাকেজিংয়ে প্রয়োগ করুন।"),
      ],
    },
    faq: [
      {
        q: loc("Can I design logos in Photoshop?", "ফটোশপে কি লোগো ডিজাইন করা যায়?"),
        a: loc("You can, but you shouldn't — pixel logos break when scaled. Use Illustrator.", "করা যায়, তবে উচিত নয় — পিক্সেল লোগো বড় করলে ভেঙে যায়। ইলাস্ট্রেটর ব্যবহার করুন।"),
      },
      {
        q: loc("Is the pen tool really that hard?", "পেন টুল কি সত্যিই কঠিন?"),
        a: loc("It takes about a week of daily 20-minute practice. Then it feels natural.", "প্রতিদিন ২০ মিনিট প্র্যাকটিসে প্রায় এক সপ্তাহ লাগে। এরপর সহজ লাগে।"),
      },
    ],
  }),
  s({
    slug: "premiere-pro",
    name: "Adobe Premiere Pro",
    nameBn: "অ্যাডোবি প্রিমিয়ার প্রো",
    icon: "🎬",
    category: "graphic-design",
    tagline: loc("Professional video editing, start to export", "প্রফেশনাল ভিডিও এডিটিং, শুরু থেকে এক্সপোর্ট"),
    overview: loc(
      "Premiere Pro is a timeline-based video editor for YouTube content, reels, documentaries, ads and film. Learn cutting rhythm first, then effects, colour and audio.",
      "প্রিমিয়ার প্রো একটি টাইমলাইন-ভিত্তিক ভিডিও এডিটর — ইউটিউব কনটেন্ট, রিলস, ডকুমেন্টারি, বিজ্ঞাপন ও ফিল্মের জন্য। আগে কাটিং রিদম, তারপর ইফেক্ট, কালার ও অডিও শিখুন।",
    ),
    time: loc("60–90 hours", "৬০–৯০ ঘণ্টা"),
    difficulty: loc("Beginner → Professional", "বিগিনার → প্রফেশনাল"),
    prerequisites: [
      loc("A machine with SSD storage", "SSD স্টোরেজসহ একটি কম্পিউটার"),
      loc("Sample footage to practise with", "প্র্যাকটিসের জন্য কিছু স্যাম্পল ফুটেজ"),
    ],
    careers: [
      loc("Video Editor", "ভিডিও এডিটর"),
      loc("YouTube / Content Editor", "ইউটিউব / কনটেন্ট এডিটর"),
      loc("Ad & Promo Editor", "বিজ্ঞাপন ও প্রোমো এডিটর"),
      loc("Wedding & Event Editor", "ওয়েডিং ও ইভেন্ট এডিটর"),
    ],
    topics: [
      "Introduction", "Workspace", "Project Setup", "Import", "Timeline", "Cutting",
      "Transitions", "Effects", "Text", "Audio", "Color Grading", "Motion Graphics",
      "Speed & Time Remap", "Multicam", "Export", "Professional Workflow",
    ],
    roadmap: [
      loc("Workspace, project and media import", "ওয়ার্কস্পেস, প্রজেক্ট ও মিডিয়া ইমপোর্ট"),
      loc("Timeline navigation and clean cutting", "টাইমলাইন নেভিগেশন ও পরিচ্ছন্ন কাটিং"),
      loc("Transitions, text and titles", "ট্রানজিশন, টেক্সট ও টাইটেল"),
      loc("Audio levels, music and noise clean-up", "অডিও লেভেল, মিউজিক ও নয়েজ ক্লিন-আপ"),
      loc("Colour correction and grading with Lumetri", "লুমেট্রি দিয়ে কালার কারেকশন ও গ্রেডিং"),
      loc("Motion graphics, speed ramps, multicam", "মোশন গ্রাফিক্স, স্পিড র‍্যাম্প, মাল্টিক্যাম"),
      loc("Export presets and client delivery", "এক্সপোর্ট প্রিসেট ও ক্লায়েন্ট ডেলিভারি"),
    ],
    workflow: [
      loc("Organise bins: video, audio, graphics, exports", "বিন গোছান: ভিডিও, অডিও, গ্রাফিক্স, এক্সপোর্ট"),
      loc("Rough cut first — story before polish", "আগে রাফ কাট — পলিশের আগে গল্প"),
      loc("Lock the edit, then grade and mix audio", "এডিট লক করুন, তারপর গ্রেড ও অডিও মিক্স"),
      loc("Export H.264 for web, ProRes for archive", "ওয়েবের জন্য H.264, আর্কাইভের জন্য ProRes"),
    ],
    best: genericBest("Premiere Pro", "প্রিমিয়ার প্রো"),
    mistakes: genericMistakes("Premiere Pro", "প্রিমিয়ার প্রো"),
    shortcuts: [
      { keys: "C", action: loc("Razor / cut tool", "রেজর / কাট টুল") },
      { keys: "V", action: loc("Selection tool", "সিলেকশন টুল") },
      { keys: "Space", action: loc("Play / pause", "প্লে / পজ") },
      { keys: "Ctrl + K", action: loc("Cut at playhead", "প্লেহেডে কাট") },
      { keys: "Ctrl + M", action: loc("Export media", "মিডিয়া এক্সপোর্ট") },
      { keys: "J K L", action: loc("Shuttle backward / stop / forward", "পিছনে / থামা / সামনে") },
    ],
    cheatsheet: [
      { label: "YouTube export", value: loc("H.264, 1080p, 10–16 Mbps, AAC 320kbps", "H.264, ১০৮০p, ১০–১৬ Mbps, AAC ৩২০kbps") },
      { label: "Dialogue level", value: loc("-12 dB average, peaks under -6 dB", "গড় -১২ dB, পিক -৬ dB-এর নিচে") },
      { label: "Reel format", value: loc("1080x1920, 30fps, captions burned in", "১০৮০x১৯২০, ৩০fps, ক্যাপশন বার্ন-ইন") },
    ],
    mindmap: [
      { branch: loc("Prepare", "প্রস্তুতি"), leaves: ["Project Setup", "Import", "Bins"] },
      { branch: loc("Edit", "এডিট"), leaves: ["Timeline", "Cutting", "Transitions", "Speed"] },
      { branch: loc("Polish", "পলিশ"), leaves: ["Text", "Effects", "Color Grading", "Audio"] },
      { branch: loc("Deliver", "ডেলিভারি"), leaves: ["Export", "Workflow"] },
    ],
    revision: {
      s30: loc(
        "Import → organise → rough cut → fine cut → text → audio → colour → export. Story first, effects last.",
        "ইমপোর্ট → গোছানো → রাফ কাট → ফাইন কাট → টেক্সট → অডিও → কালার → এক্সপোর্ট। আগে গল্প, শেষে ইফেক্ট।",
      ),
      m2: [
        loc("Sequence settings should match your footage.", "সিকোয়েন্স সেটিং ফুটেজের সাথে মিলতে হবে।"),
        loc("Cut on motion and on sound to hide the edit.", "মোশন ও সাউন্ডে কাট দিলে এডিট চোখে পড়ে না।"),
        loc("Lumetri: correct exposure and white balance before creative grade.", "লুমেট্রি: ক্রিয়েটিভ গ্রেডের আগে এক্সপোজার ও হোয়াইট ব্যালেন্স ঠিক করুন।"),
      ],
      m10: [
        loc("Edit a 60-second reel with music-synced cuts.", "মিউজিক-সিঙ্ক কাট দিয়ে ৬০ সেকেন্ডের রিল বানান।"),
        loc("Add lower-third titles and export for two platforms.", "লোয়ার-থার্ড টাইটেল যোগ করে দুই প্ল্যাটফর্মের জন্য এক্সপোর্ট করুন।"),
      ],
    },
    faq: [
      {
        q: loc("Premiere Pro or DaVinci Resolve?", "প্রিমিয়ার প্রো না ডাভিঞ্চি রিসলভ?"),
        a: loc("Premiere dominates agency and freelance work; Resolve is stronger for colour.", "এজেন্সি ও ফ্রিল্যান্স কাজে প্রিমিয়ার এগিয়ে; কালারের জন্য রিসলভ শক্তিশালী।"),
      },
    ],
  }),
  s({
    slug: "after-effects",
    name: "Adobe After Effects",
    nameBn: "অ্যাডোবি আফটার ইফেক্টস",
    icon: "🌀",
    category: "graphic-design",
    tagline: loc("Motion graphics, VFX and animation", "মোশন গ্রাফিক্স, ভিএফএক্স ও অ্যানিমেশন"),
    overview: loc(
      "After Effects animates layers over time using keyframes. It powers logo animations, explainer videos, titles, UI motion and visual effects.",
      "আফটার ইফেক্টস কীফ্রেম ব্যবহার করে সময় অনুযায়ী লেয়ার অ্যানিমেট করে। লোগো অ্যানিমেশন, এক্সপ্লেইনার ভিডিও, টাইটেল, ইউআই মোশন ও ভিজ্যুয়াল ইফেক্টে এটি ব্যবহৃত হয়।",
    ),
    time: loc("80–120 hours", "৮০–১২০ ঘণ্টা"),
    difficulty: loc("Intermediate → Expert", "ইন্টারমিডিয়েট → এক্সপার্ট"),
    prerequisites: [
      loc("Comfort with layers (Photoshop helps)", "লেয়ারে স্বাচ্ছন্দ্য (ফটোশপ জানা সুবিধাজনক)"),
      loc("Basic video editing knowledge", "বেসিক ভিডিও এডিটিং ধারণা"),
    ],
    careers: [
      loc("Motion Graphics Designer", "মোশন গ্রাফিক্স ডিজাইনার"),
      loc("VFX Artist", "ভিএফএক্স আর্টিস্ট"),
      loc("Explainer Video Animator", "এক্সপ্লেইনার ভিডিও অ্যানিমেটর"),
    ],
    topics: [
      "Interface", "Composition", "Timeline", "Layers", "Keyframes", "Animation",
      "Easing & Graph Editor", "Mask", "Track Matte", "Effects", "Motion Graphics",
      "Shape Layers", "Expressions", "3D Layer", "Camera", "Lighting",
      "Render", "Professional Workflow",
    ],
    roadmap: [
      loc("Interface, compositions and timeline basics", "ইন্টারফেস, কম্পোজিশন ও টাইমলাইন বেসিক"),
      loc("Keyframes, easing and the graph editor", "কীফ্রেম, ইজিং ও গ্রাফ এডিটর"),
      loc("Masks, track mattes and shape layers", "মাস্ক, ট্র্যাক ম্যাট ও শেপ লেয়ার"),
      loc("Effects, text animation, motion graphics", "ইফেক্ট, টেক্সট অ্যানিমেশন, মোশন গ্রাফিক্স"),
      loc("Expressions for automatic motion", "অটোমেটিক মোশনের জন্য এক্সপ্রেশন"),
      loc("3D layers, cameras and lighting", "থ্রিডি লেয়ার, ক্যামেরা ও লাইটিং"),
      loc("Render queue, Media Encoder, delivery", "রেন্ডার কিউ, মিডিয়া এনকোডার, ডেলিভারি"),
    ],
    workflow: [
      loc("Storyboard and time the beats first", "আগে স্টোরিবোর্ড ও টাইমিং ঠিক করুন"),
      loc("Design static frames, then animate", "আগে স্ট্যাটিক ফ্রেম ডিজাইন, তারপর অ্যানিমেট"),
      loc("Pre-compose to keep the timeline readable", "টাইমলাইন পরিষ্কার রাখতে প্রি-কম্পোজ করুন"),
      loc("Render to a mezzanine codec, compress after", "মেজানাইন কোডেকে রেন্ডার, পরে কম্প্রেস"),
    ],
    best: genericBest("After Effects", "আফটার ইফেক্টস"),
    mistakes: genericMistakes("After Effects", "আফটার ইফেক্টস"),
    shortcuts: [
      { keys: "P / S / R / T", action: loc("Position / Scale / Rotation / Opacity", "পজিশন / স্কেল / রোটেশন / অপাসিটি") },
      { keys: "U", action: loc("Show all keyframes", "সব কীফ্রেম দেখান") },
      { keys: "F9", action: loc("Easy ease", "ইজি ইজ") },
      { keys: "Ctrl + Shift + C", action: loc("Pre-compose", "প্রি-কম্পোজ") },
      { keys: "B / N", action: loc("Set work area start / end", "ওয়ার্ক এরিয়া শুরু / শেষ") },
    ],
    cheatsheet: [
      { label: "Smooth motion", value: loc("Easy ease + graph editor curves", "ইজি ইজ + গ্রাফ এডিটর কার্ভ") },
      { label: "Loop expression", value: loc("loopOut('cycle')", "loopOut('cycle')") },
      { label: "Delivery", value: loc("Render ProRes, encode H.264", "ProRes-এ রেন্ডার, H.264-এ এনকোড") },
    ],
    mindmap: [
      { branch: loc("Build", "বিল্ড"), leaves: ["Composition", "Layers", "Shape Layers"] },
      { branch: loc("Animate", "অ্যানিমেট"), leaves: ["Keyframes", "Easing", "Expressions"] },
      { branch: loc("Reveal", "রিভিল"), leaves: ["Mask", "Track Matte", "Effects"] },
      { branch: loc("Space", "স্পেস"), leaves: ["3D Layer", "Camera", "Lighting"] },
    ],
    revision: {
      s30: loc(
        "Comp → layers → keyframes → easing → mattes → effects → render. Timing and easing matter more than effects.",
        "কম্প → লেয়ার → কীফ্রেম → ইজিং → ম্যাট → ইফেক্ট → রেন্ডার। ইফেক্টের চেয়ে টাইমিং ও ইজিং বেশি গুরুত্বপূর্ণ।",
      ),
      m2: [
        loc("Two keyframes make movement; easing makes it feel good.", "দুটি কীফ্রেমে নড়াচড়া হয়; ইজিং সেটিকে সুন্দর করে।"),
        loc("Track mattes let one layer reveal another.", "ট্র্যাক ম্যাট দিয়ে এক লেয়ার আরেকটিকে প্রকাশ করে।"),
      ],
      m10: [
        loc("Animate a logo reveal in 6 seconds.", "৬ সেকেন্ডে একটি লোগো রিভিল অ্যানিমেট করুন।"),
        loc("Build a 3-scene kinetic typography clip.", "৩ সিনের কাইনেটিক টাইপোগ্রাফি ক্লিপ বানান।"),
      ],
    },
    faq: [
      {
        q: loc("Is After Effects a video editor?", "আফটার ইফেক্টস কি ভিডিও এডিটর?"),
        a: loc("No — it animates and composites. Cut long videos in Premiere Pro.", "না — এটি অ্যানিমেট ও কম্পোজিট করে। লম্বা ভিডিও প্রিমিয়ার প্রোতে কাটুন।"),
      },
    ],
  }),
  s({
    slug: "audition",
    name: "Adobe Audition",
    nameBn: "অ্যাডোবি অডিশন",
    icon: "🎚️",
    category: "graphic-design",
    tagline: loc("Broadcast-quality audio cleanup and mixing", "ব্রডকাস্ট মানের অডিও ক্লিনআপ ও মিক্সিং"),
    overview: loc(
      "Audition repairs, edits and mixes audio for podcasts, voice-overs and video. Its noise reduction and spectral repair tools are the industry benchmark.",
      "অডিশন পডকাস্ট, ভয়েস-ওভার ও ভিডিওর অডিও মেরামত, এডিট ও মিক্স করে। এর নয়েজ রিডাকশন ও স্পেকট্রাল রিপেয়ার ইন্ডাস্ট্রি বেঞ্চমার্ক।",
    ),
    time: loc("30–45 hours", "৩০–৪৫ ঘণ্টা"),
    difficulty: loc("Beginner → Professional", "বিগিনার → প্রফেশনাল"),
    prerequisites: [
      loc("A basic microphone or recorded audio files", "একটি সাধারণ মাইক্রোফোন বা রেকর্ড করা অডিও ফাইল"),
      loc("Headphones for accurate listening", "সঠিক শোনার জন্য হেডফোন"),
    ],
    careers: [
      loc("Podcast Editor", "পডকাস্ট এডিটর"),
      loc("Audio Post Engineer", "অডিও পোস্ট ইঞ্জিনিয়ার"),
      loc("Voice-over Editor", "ভয়েস-ওভার এডিটর"),
    ],
    topics: [
      "Workspace", "Recording", "Waveform vs Multitrack", "Noise Reduction",
      "Spectral Repair", "Editing", "Mixing", "Effects", "Loudness Matching",
      "Podcast Editing", "Export", "Professional Workflow",
    ],
    roadmap: [
      loc("Workspace and waveform basics", "ওয়ার্কস্পেস ও ওয়েভফর্ম বেসিক"),
      loc("Recording and gain staging", "রেকর্ডিং ও গেইন স্টেজিং"),
      loc("Noise reduction and spectral repair", "নয়েজ রিডাকশন ও স্পেকট্রাল রিপেয়ার"),
      loc("Editing: cuts, breaths, fillers", "এডিটিং: কাট, শ্বাস, ফিলার"),
      loc("EQ, compression and effects", "ইকিউ, কম্প্রেশন ও ইফেক্ট"),
      loc("Multitrack mixing and loudness", "মাল্টিট্র্যাক মিক্সিং ও লাউডনেস"),
      loc("Podcast delivery workflow", "পডকাস্ট ডেলিভারি ওয়ার্কফ্লো"),
    ],
    workflow: [
      loc("Record clean audio — fix problems at the source", "পরিষ্কার রেকর্ড করুন — সমস্যা উৎসেই ঠিক করুন"),
      loc("Repair → edit → EQ → compress → limit", "রিপেয়ার → এডিট → ইকিউ → কম্প্রেস → লিমিট"),
      loc("Match loudness to the platform standard", "প্ল্যাটফর্ম স্ট্যান্ডার্ড অনুযায়ী লাউডনেস মেলান"),
    ],
    best: genericBest("Audition", "অডিশন"),
    mistakes: genericMistakes("Audition", "অডিশন"),
    shortcuts: [
      { keys: "Ctrl + K", action: loc("Split clip", "ক্লিপ স্প্লিট") },
      { keys: "Shift + D", action: loc("Fade selection", "ফেড সিলেকশন") },
      { keys: "0", action: loc("Record", "রেকর্ড") },
      { keys: "Ctrl + Shift + T", action: loc("Match loudness panel", "ম্যাচ লাউডনেস প্যানেল") },
    ],
    cheatsheet: [
      { label: "Podcast loudness", value: loc("-16 LUFS stereo, -19 LUFS mono", "-১৬ LUFS স্টেরিও, -১৯ LUFS মনো") },
      { label: "Noise reduction", value: loc("Capture print, keep reduction under 12 dB", "নয়েজ প্রিন্ট নিন, রিডাকশন ১২ dB-এর নিচে") },
      { label: "Voice EQ", value: loc("High-pass 80 Hz, gentle 3 kHz lift", "হাই-পাস ৮০ Hz, ৩ kHz-এ হালকা লিফট") },
    ],
    mindmap: [
      { branch: loc("Capture", "ক্যাপচার"), leaves: ["Recording", "Gain", "Workspace"] },
      { branch: loc("Repair", "রিপেয়ার"), leaves: ["Noise Reduction", "Spectral Repair"] },
      { branch: loc("Shape", "শেপ"), leaves: ["EQ", "Compression", "Effects"] },
      { branch: loc("Deliver", "ডেলিভারি"), leaves: ["Loudness", "Export"] },
    ],
    revision: {
      s30: loc(
        "Record clean → remove noise → cut mistakes → EQ and compress → match loudness → export MP3/WAV.",
        "পরিষ্কার রেকর্ড → নয়েজ সরান → ভুল কাটুন → ইকিউ ও কম্প্রেস → লাউডনেস মেলান → MP3/WAV এক্সপোর্ট।",
      ),
      m2: [
        loc("Waveform view edits one file; Multitrack mixes many.", "ওয়েভফর্ম ভিউতে এক ফাইল এডিট; মাল্টিট্র্যাকে অনেক ফাইল মিক্স।"),
        loc("Too much noise reduction makes voices sound robotic.", "অতিরিক্ত নয়েজ রিডাকশনে কণ্ঠ রোবটিক শোনায়।"),
      ],
      m10: [
        loc("Clean and publish a 5-minute podcast segment.", "৫ মিনিটের একটি পডকাস্ট সেগমেন্ট পরিষ্কার করে প্রকাশ করুন।"),
      ],
    },
    faq: [
      {
        q: loc("Audition or Audacity?", "অডিশন না অডাসিটি?"),
        a: loc("Audacity is free and enough to start; Audition is faster for professional repair.", "শুরু করার জন্য ফ্রি অডাসিটিই যথেষ্ট; প্রফেশনাল রিপেয়ারে অডিশন দ্রুত।"),
      },
    ],
  }),
  s({
    slug: "audacity",
    name: "Audacity",
    nameBn: "অডাসিটি",
    icon: "🎙️",
    category: "graphic-design",
    tagline: loc("Free, powerful audio recording and editing", "ফ্রি ও শক্তিশালী অডিও রেকর্ডিং ও এডিটিং"),
    overview: loc(
      "Audacity is a free, open-source audio editor that runs on any computer. It is the fastest way to start recording voice, cleaning noise and publishing podcasts with zero cost.",
      "অডাসিটি একটি ফ্রি ও ওপেন-সোর্স অডিও এডিটর, যেকোনো কম্পিউটারে চলে। কোনো খরচ ছাড়াই ভয়েস রেকর্ড, নয়েজ ক্লিন ও পডকাস্ট প্রকাশের দ্রুততম উপায়।",
    ),
    time: loc("15–25 hours", "১৫–২৫ ঘণ্টা"),
    difficulty: loc("Absolute Beginner friendly", "একেবারে নতুনদের জন্য সহজ"),
    prerequisites: [loc("Any laptop and a microphone", "যেকোনো ল্যাপটপ ও একটি মাইক্রোফোন")],
    careers: [
      loc("Podcaster", "পডকাস্টার"),
      loc("Voice-over Artist", "ভয়েস-ওভার আর্টিস্ট"),
      loc("Audio Assistant", "অডিও অ্যাসিস্ট্যান্ট"),
    ],
    topics: [
      "Introduction", "Installation", "Workspace", "Recording", "Noise Removal",
      "Editing", "Effects", "Amplify & Normalize", "Podcast", "Voice Editing", "Export",
    ],
    roadmap: [
      loc("Install and set input device", "ইনস্টল ও ইনপুট ডিভাইস সেট"),
      loc("First recording and safe levels", "প্রথম রেকর্ডিং ও নিরাপদ লেভেল"),
      loc("Noise removal basics", "নয়েজ রিমুভালের বেসিক"),
      loc("Cutting, trimming and fades", "কাট, ট্রিম ও ফেড"),
      loc("Amplify, normalize, compressor", "অ্যামপ্লিফাই, নরমালাইজ, কম্প্রেসর"),
      loc("Full podcast episode edit", "সম্পূর্ণ পডকাস্ট এপিসোড এডিট"),
      loc("Export MP3 and share", "MP3 এক্সপোর্ট ও শেয়ার"),
    ],
    workflow: [
      loc("Record a few seconds of silence for the noise profile", "নয়েজ প্রোফাইলের জন্য কয়েক সেকেন্ড নীরবতা রেকর্ড করুন"),
      loc("Noise removal → trim → normalize → export", "নয়েজ রিমুভাল → ট্রিম → নরমালাইজ → এক্সপোর্ট"),
    ],
    best: genericBest("Audacity", "অডাসিটি"),
    mistakes: genericMistakes("Audacity", "অডাসিটি"),
    shortcuts: [
      { keys: "R", action: loc("Record", "রেকর্ড") },
      { keys: "Space", action: loc("Play / stop", "প্লে / স্টপ") },
      { keys: "Ctrl + L", action: loc("Silence selection", "সিলেকশন নীরব করা") },
      { keys: "Ctrl + T", action: loc("Trim to selection", "সিলেকশনে ট্রিম") },
    ],
    cheatsheet: [
      { label: "Recording level", value: loc("Peaks around -6 dB, never touching 0", "পিক প্রায় -৬ dB, ০ ছোঁয়া যাবে না") },
      { label: "Noise profile", value: loc("Select silence → Effect → Noise Reduction", "নীরবতা সিলেক্ট → Effect → Noise Reduction") },
      { label: "Export", value: loc("MP3 128–192 kbps for voice", "ভয়েসের জন্য MP3 ১২৮–১৯২ kbps") },
    ],
    mindmap: [
      { branch: loc("Setup", "সেটআপ"), leaves: ["Install", "Workspace", "Device"] },
      { branch: loc("Capture", "ক্যাপচার"), leaves: ["Recording", "Levels"] },
      { branch: loc("Clean", "ক্লিন"), leaves: ["Noise Removal", "Editing", "Effects"] },
      { branch: loc("Publish", "প্রকাশ"), leaves: ["Podcast", "Export"] },
    ],
    revision: {
      s30: loc(
        "Set device → record → noise removal → trim → normalize → export MP3. Free tool, professional result.",
        "ডিভাইস সেট → রেকর্ড → নয়েজ রিমুভাল → ট্রিম → নরমালাইজ → MP3 এক্সপোর্ট। ফ্রি টুল, প্রফেশনাল ফল।",
      ),
      m2: [
        loc("Always capture room silence before speaking.", "কথা বলার আগে ঘরের নীরবতা রেকর্ড করুন।"),
        loc("Normalize sets a consistent final volume.", "নরমালাইজ ফাইনাল ভলিউম সামঞ্জস্যপূর্ণ করে।"),
      ],
      m10: [loc("Record, clean and export a 3-minute voice-over.", "৩ মিনিটের ভয়েস-ওভার রেকর্ড, ক্লিন ও এক্সপোর্ট করুন।")],
    },
    faq: [
      {
        q: loc("Is Audacity really free?", "অডাসিটি কি সত্যিই ফ্রি?"),
        a: loc("Yes — free and open source, with no watermark or time limit.", "হ্যাঁ — ফ্রি ও ওপেন সোর্স, কোনো ওয়াটারমার্ক বা সময়সীমা নেই।"),
      },
    ],
  }),
  s({
    slug: "html",
    name: "HTML",
    nameBn: "এইচটিএমএল",
    icon: "🧱",
    category: "web-development",
    tagline: loc("The structure of every website on earth", "পৃথিবীর প্রতিটি ওয়েবসাইটের কাঠামো"),
    overview: loc(
      "HTML defines the content and meaning of a web page: headings, paragraphs, links, images, lists, tables and forms. Good HTML makes a site accessible and SEO-friendly before any CSS is written.",
      "HTML একটি ওয়েব পেজের কনটেন্ট ও অর্থ নির্ধারণ করে: হেডিং, প্যারাগ্রাফ, লিংক, ইমেজ, লিস্ট, টেবিল ও ফর্ম। ভালো HTML সিএসএস লেখার আগেই সাইটকে অ্যাক্সেসিবল ও SEO-বান্ধব করে।",
    ),
    time: loc("20–30 hours", "২০–৩০ ঘণ্টা"),
    difficulty: loc("Absolute Beginner", "একেবারে নতুন"),
    prerequisites: [loc("A browser and a free code editor", "একটি ব্রাউজার ও একটি ফ্রি কোড এডিটর")],
    careers: [
      loc("Frontend Developer (entry step)", "ফ্রন্টএন্ড ডেভেলপার (প্রথম ধাপ)"),
      loc("Email Template Developer", "ইমেইল টেমপ্লেট ডেভেলপার"),
      loc("WordPress Customiser", "ওয়ার্ডপ্রেস কাস্টমাইজার"),
    ],
    topics: [
      "Introduction", "HTML Structure", "Tags", "Elements", "Attributes", "Head",
      "Body", "Text", "Links", "Images", "Lists", "Tables", "Forms",
      "Semantic HTML", "SEO Basics", "Accessibility", "Mini Projects",
    ],
    roadmap: [
      loc("Page skeleton: doctype, head, body", "পেজ স্কেলিটন: doctype, head, body"),
      loc("Text, links and images", "টেক্সট, লিংক ও ইমেজ"),
      loc("Lists and tables", "লিস্ট ও টেবিল"),
      loc("Forms and inputs", "ফর্ম ও ইনপুট"),
      loc("Semantic tags and document outline", "সিমান্টিক ট্যাগ ও ডকুমেন্ট আউটলাইন"),
      loc("SEO basics and accessibility", "SEO বেসিক ও অ্যাক্সেসিবিলিটি"),
      loc("Build 3 mini projects from scratch", "শূন্য থেকে ৩টি মিনি প্রজেক্ট"),
    ],
    workflow: [
      loc("Write the content outline before any tag", "ট্যাগ লেখার আগে কনটেন্ট আউটলাইন লিখুন"),
      loc("Use semantic tags, then style with CSS", "সিমান্টিক ট্যাগ ব্যবহার করে পরে CSS দিন"),
      loc("Validate the markup and check with a screen reader", "মার্কআপ ভ্যালিডেট ও স্ক্রিন রিডারে যাচাই করুন"),
    ],
    best: genericBest("HTML", "এইচটিএমএল"),
    mistakes: genericMistakes("HTML", "এইচটিএমএল"),
    shortcuts: [
      { keys: "! + Tab", action: loc("Emmet HTML5 boilerplate", "Emmet HTML5 বয়লারপ্লেট") },
      { keys: "ul>li*5", action: loc("Emmet: list with 5 items", "Emmet: ৫ আইটেমের লিস্ট") },
      { keys: "F12", action: loc("Open browser DevTools", "ব্রাউজার DevTools খুলুন") },
    ],
    cheatsheet: [
      { label: "Skeleton", value: loc("<!DOCTYPE html><html><head></head><body></body></html>", "<!DOCTYPE html><html><head></head><body></body></html>") },
      { label: "One H1", value: loc("Exactly one <h1> per page", "প্রতি পেজে ঠিক একটি <h1>") },
      { label: "Image", value: loc("Always add descriptive alt text", "ইমেজে সবসময় বর্ণনামূলক alt দিন") },
      { label: "Semantic", value: loc("header, nav, main, section, article, footer", "header, nav, main, section, article, footer") },
    ],
    mindmap: [
      { branch: loc("Structure", "স্ট্রাকচার"), leaves: ["Doctype", "Head", "Body", "Semantic"] },
      { branch: loc("Content", "কনটেন্ট"), leaves: ["Text", "Links", "Images", "Lists", "Tables"] },
      { branch: loc("Input", "ইনপুট"), leaves: ["Forms", "Labels", "Validation"] },
      { branch: loc("Quality", "কোয়ালিটি"), leaves: ["SEO", "Accessibility", "Projects"] },
    ],
    revision: {
      s30: loc(
        "HTML = meaning. Tags describe content, attributes configure it, semantic tags help SEO and screen readers.",
        "HTML = অর্থ। ট্যাগ কনটেন্ট বোঝায়, অ্যাট্রিবিউট কনফিগার করে, সিমান্টিক ট্যাগ SEO ও স্ক্রিন রিডারে সাহায্য করে।",
      ),
      m2: [
        loc("Block elements stack; inline elements sit in a line.", "ব্লক এলিমেন্ট উপর-নিচে বসে; ইনলাইন এলিমেন্ট এক লাইনে থাকে।"),
        loc("Every input needs a matching <label>.", "প্রতিটি ইনপুটের জন্য একটি <label> দরকার।"),
        loc("Use <main>, not a soup of <div> tags.", "শুধু <div> নয়, <main> ব্যবহার করুন।"),
      ],
      m10: [
        loc("Build a personal profile page with semantic tags.", "সিমান্টিক ট্যাগ দিয়ে একটি প্রোফাইল পেজ বানান।"),
        loc("Create a contact form with proper labels and types.", "সঠিক লেবেল ও টাইপসহ একটি কন্টাক্ট ফর্ম বানান।"),
      ],
    },
    faq: [
      {
        q: loc("Is HTML a programming language?", "HTML কি প্রোগ্রামিং ল্যাঙ্গুয়েজ?"),
        a: loc("No — it is a markup language that describes structure, not logic.", "না — এটি একটি মার্কআপ ল্যাঙ্গুয়েজ, যা লজিক নয় কাঠামো বর্ণনা করে।"),
      },
    ],
  }),
  s({
    slug: "css",
    name: "CSS",
    nameBn: "সিএসএস",
    icon: "🎯",
    category: "web-development",
    tagline: loc("Turn plain markup into beautiful layouts", "সাধারণ মার্কআপকে সুন্দর লেআউটে রূপান্তর"),
    overview: loc(
      "CSS controls colour, typography, spacing, layout and motion. Flexbox and Grid are the two layout systems you must own; everything else is refinement.",
      "CSS কালার, টাইপোগ্রাফি, স্পেসিং, লেআউট ও মোশন নিয়ন্ত্রণ করে। ফ্লেক্সবক্স ও গ্রিড — এই দুটি লেআউট সিস্টেম অবশ্যই আয়ত্ত করতে হবে; বাকি সব পরিমার্জন।",
    ),
    time: loc("40–60 hours", "৪০–৬০ ঘণ্টা"),
    difficulty: loc("Beginner → Advanced", "বিগিনার → অ্যাডভান্সড"),
    prerequisites: [loc("HTML basics", "HTML-এর বেসিক")],
    careers: [
      loc("Frontend Developer", "ফ্রন্টএন্ড ডেভেলপার"),
      loc("UI Developer", "ইউআই ডেভেলপার"),
      loc("Landing Page Specialist", "ল্যান্ডিং পেজ স্পেশালিস্ট"),
    ],
    topics: [
      "Introduction", "Selectors", "Colors", "Background", "Typography", "Spacing",
      "Margin", "Padding", "Box Model", "Display", "Position", "Flexbox", "Grid",
      "Transition", "Animation", "Responsive Design", "Media Queries", "Mini Projects",
    ],
    roadmap: [
      loc("Selectors, colours and typography", "সিলেক্টর, কালার ও টাইপোগ্রাফি"),
      loc("Box model: margin, padding, border", "বক্স মডেল: মার্জিন, প্যাডিং, বর্ডার"),
      loc("Display and position", "ডিসপ্লে ও পজিশন"),
      loc("Flexbox for one-dimensional layout", "এক-মাত্রিক লেআউটের জন্য ফ্লেক্সবক্স"),
      loc("Grid for two-dimensional layout", "দ্বি-মাত্রিক লেআউটের জন্য গ্রিড"),
      loc("Transitions, animations and hover states", "ট্রানজিশন, অ্যানিমেশন ও হোভার স্টেট"),
      loc("Responsive design and media queries", "রেসপন্সিভ ডিজাইন ও মিডিয়া কুয়েরি"),
    ],
    workflow: [
      loc("Mobile first, then scale up with min-width queries", "মোবাইল ফার্স্ট, তারপর min-width কুয়েরিতে বড় করুন"),
      loc("Define variables for colour and spacing once", "কালার ও স্পেসিংয়ের ভ্যারিয়েবল একবারেই ঠিক করুন"),
      loc("Layout with Grid, alignment with Flexbox", "লেআউটে গ্রিড, অ্যালাইনমেন্টে ফ্লেক্সবক্স"),
    ],
    best: genericBest("CSS", "সিএসএস"),
    mistakes: genericMistakes("CSS", "সিএসএস"),
    shortcuts: [
      { keys: "Ctrl + Shift + C", action: loc("Inspect element", "ইনস্পেক্ট এলিমেন্ট") },
      { keys: "m10 + Tab", action: loc("Emmet: margin: 10px", "Emmet: margin: 10px") },
      { keys: "df + Tab", action: loc("Emmet: display: flex", "Emmet: display: flex") },
    ],
    cheatsheet: [
      { label: "Center anything", value: loc("display:flex; align-items:center; justify-content:center", "display:flex; align-items:center; justify-content:center") },
      { label: "Responsive grid", value: loc("grid-template-columns: repeat(auto-fit, minmax(240px,1fr))", "grid-template-columns: repeat(auto-fit, minmax(240px,1fr))") },
      { label: "Box sizing", value: loc("*{box-sizing:border-box}", "*{box-sizing:border-box}") },
      { label: "Breakpoints", value: loc("640 / 768 / 1024 / 1280 px", "৬৪০ / ৭৬৮ / ১০২৪ / ১২৮০ px") },
    ],
    mindmap: [
      { branch: loc("Look", "লুক"), leaves: ["Colors", "Typography", "Background"] },
      { branch: loc("Space", "স্পেস"), leaves: ["Margin", "Padding", "Box Model"] },
      { branch: loc("Layout", "লেআউট"), leaves: ["Display", "Position", "Flexbox", "Grid"] },
      { branch: loc("Motion", "মোশন"), leaves: ["Transition", "Animation"] },
      { branch: loc("Adapt", "অ্যাডাপ্ট"), leaves: ["Responsive", "Media Queries"] },
    ],
    revision: {
      s30: loc(
        "Select → style → space → lay out → animate → adapt. Flexbox for a line, Grid for a plane, media queries for screens.",
        "সিলেক্ট → স্টাইল → স্পেস → লেআউট → অ্যানিমেট → অ্যাডাপ্ট। লাইনের জন্য ফ্লেক্সবক্স, প্লেনের জন্য গ্রিড, স্ক্রিনের জন্য মিডিয়া কুয়েরি।",
      ),
      m2: [
        loc("Specificity: inline > id > class > tag.", "স্পেসিফিসিটি: ইনলাইন > আইডি > ক্লাস > ট্যাগ।"),
        loc("Margin collapses vertically; padding never does.", "মার্জিন উল্লম্বভাবে কলাপস করে; প্যাডিং করে না।"),
        loc("position: absolute is relative to the nearest positioned parent.", "position: absolute নিকটতম পজিশনড প্যারেন্টের সাপেক্ষে কাজ করে।"),
      ],
      m10: [
        loc("Rebuild a pricing section with Grid, mobile first.", "মোবাইল ফার্স্ট গ্রিড দিয়ে একটি প্রাইসিং সেকশন বানান।"),
        loc("Animate a card hover with transition and transform.", "transition ও transform দিয়ে কার্ড হোভার অ্যানিমেট করুন।"),
      ],
    },
    faq: [
      {
        q: loc("Flexbox or Grid?", "ফ্লেক্সবক্স না গ্রিড?"),
        a: loc("Grid for page layout in rows and columns; Flexbox for aligning items in one direction.", "সারি-কলামের পেজ লেআউটে গ্রিড; এক দিকে আইটেম সাজাতে ফ্লেক্সবক্স।"),
      },
    ],
  }),
  s({
    slug: "bootstrap",
    name: "Bootstrap",
    nameBn: "বুটস্ট্র্যাপ",
    icon: "📦",
    category: "web-development",
    tagline: loc("Ship responsive layouts fast with ready components", "রেডি কম্পোনেন্ট দিয়ে দ্রুত রেসপন্সিভ লেআউট"),
    overview: loc(
      "Bootstrap gives you a 12-column responsive grid plus tested components — navbars, cards, modals, forms. Ideal for admin panels, client sites and rapid prototypes.",
      "বুটস্ট্র্যাপ দেয় ১২-কলামের রেসপন্সিভ গ্রিড ও পরীক্ষিত কম্পোনেন্ট — নেভবার, কার্ড, মোডাল, ফর্ম। অ্যাডমিন প্যানেল, ক্লায়েন্ট সাইট ও দ্রুত প্রোটোটাইপের জন্য আদর্শ।",
    ),
    time: loc("15–25 hours", "১৫–২৫ ঘণ্টা"),
    difficulty: loc("Beginner", "বিগিনার"),
    prerequisites: [loc("HTML and basic CSS", "HTML ও বেসিক CSS")],
    careers: [
      loc("Web Developer", "ওয়েব ডেভেলপার"),
      loc("Template Developer", "টেমপ্লেট ডেভেলপার"),
      loc("Freelance Site Builder", "ফ্রিল্যান্স সাইট বিল্ডার"),
    ],
    topics: [
      "Introduction", "Installation", "Container", "Grid System", "Breakpoints",
      "Typography", "Buttons", "Cards", "Navbar", "Forms", "Modal",
      "Utilities", "Responsive Layout", "Customisation", "Projects",
    ],
    roadmap: [
      loc("Add Bootstrap via CDN", "CDN দিয়ে বুটস্ট্র্যাপ যোগ করুন"),
      loc("Container, row, column mental model", "কন্টেইনার, রো, কলামের ধারণা"),
      loc("Breakpoints and responsive columns", "ব্রেকপয়েন্ট ও রেসপন্সিভ কলাম"),
      loc("Buttons, cards and navbar", "বাটন, কার্ড ও নেভবার"),
      loc("Forms and modals", "ফর্ম ও মোডাল"),
      loc("Spacing and utility classes", "স্পেসিং ও ইউটিলিটি ক্লাস"),
      loc("Customise with your own CSS", "নিজের CSS দিয়ে কাস্টমাইজ"),
    ],
    workflow: [
      loc("Sketch the grid before writing markup", "মার্কআপ লেখার আগে গ্রিড স্কেচ করুন"),
      loc("Use utilities before writing custom CSS", "কাস্টম CSS লেখার আগে ইউটিলিটি ব্যবহার করুন"),
      loc("Override with one custom stylesheet loaded last", "শেষে লোড হওয়া একটি কাস্টম স্টাইলশিটে ওভাররাইড করুন"),
    ],
    best: genericBest("Bootstrap", "বুটস্ট্র্যাপ"),
    mistakes: genericMistakes("Bootstrap", "বুটস্ট্র্যাপ"),
    shortcuts: [
      { keys: ".row>.col-md-4*3", action: loc("Emmet: three responsive columns", "Emmet: তিনটি রেসপন্সিভ কলাম") },
      { keys: "d-flex", action: loc("Flex container utility", "ফ্লেক্স কন্টেইনার ইউটিলিটি") },
      { keys: "mt-3 / py-5", action: loc("Margin top / vertical padding", "মার্জিন টপ / ভার্টিকাল প্যাডিং") },
    ],
    cheatsheet: [
      { label: "Grid", value: loc("container > row > col-* (12 columns)", "container > row > col-* (১২ কলাম)") },
      { label: "Breakpoints", value: loc("sm 576, md 768, lg 992, xl 1200", "sm ৫৭৬, md ৭৬৮, lg ৯৯২, xl ১২০০") },
      { label: "Spacing", value: loc("m/p + t,b,s,e,x,y + 0–5", "m/p + t,b,s,e,x,y + ০–৫") },
    ],
    mindmap: [
      { branch: loc("Layout", "লেআউট"), leaves: ["Container", "Grid", "Breakpoints"] },
      { branch: loc("Components", "কম্পোনেন্ট"), leaves: ["Buttons", "Cards", "Navbar", "Forms", "Modal"] },
      { branch: loc("Utilities", "ইউটিলিটি"), leaves: ["Spacing", "Flex", "Colors"] },
    ],
    revision: {
      s30: loc(
        "container → row → col. 12 columns, 5 breakpoints, utility classes for spacing. Components are copy-paste ready.",
        "container → row → col। ১২ কলাম, ৫ ব্রেকপয়েন্ট, স্পেসিংয়ের জন্য ইউটিলিটি ক্লাস। কম্পোনেন্ট কপি-পেস্ট রেডি।",
      ),
      m2: [
        loc("Columns must live inside a row, rows inside a container.", "কলাম রো-এর ভেতরে, রো কন্টেইনারের ভেতরে থাকতে হবে।"),
        loc("col-md-* applies from medium screens upward.", "col-md-* মিডিয়াম স্ক্রিন থেকে উপরের দিকে প্রযোজ্য।"),
      ],
      m10: [loc("Build a responsive landing page using only Bootstrap classes.", "শুধু বুটস্ট্র্যাপ ক্লাস দিয়ে একটি রেসপন্সিভ ল্যান্ডিং পেজ বানান।")],
    },
    faq: [
      {
        q: loc("Bootstrap or Tailwind?", "বুটস্ট্র্যাপ না টেইলউইন্ড?"),
        a: loc("Bootstrap for speed with ready components; Tailwind for full custom design control.", "রেডি কম্পোনেন্টে দ্রুততার জন্য বুটস্ট্র্যাপ; সম্পূর্ণ কাস্টম ডিজাইনের জন্য টেইলউইন্ড।"),
      },
    ],
  }),
  s({
    slug: "tailwind-css",
    name: "Tailwind CSS",
    nameBn: "টেইলউইন্ড সিএসএস",
    icon: "🌬️",
    category: "web-development",
    tagline: loc("Utility-first CSS for custom design systems", "কাস্টম ডিজাইন সিস্টেমের জন্য ইউটিলিটি-ফার্স্ট CSS"),
    overview: loc(
      "Tailwind replaces custom stylesheets with small utility classes written directly in your markup. You get design-system consistency, dark mode and responsiveness without naming a single class.",
      "টেইলউইন্ড কাস্টম স্টাইলশিটের বদলে মার্কআপেই ছোট ইউটিলিটি ক্লাস ব্যবহার করে। একটি ক্লাসের নাম না দিয়েই ডিজাইন সিস্টেম কনসিস্টেন্সি, ডার্ক মোড ও রেসপন্সিভনেস পাওয়া যায়।",
    ),
    time: loc("20–35 hours", "২০–৩৫ ঘণ্টা"),
    difficulty: loc("Beginner → Advanced", "বিগিনার → অ্যাডভান্সড"),
    prerequisites: [loc("Solid CSS fundamentals", "CSS-এর মজবুত ভিত্তি")],
    careers: [
      loc("Frontend Developer", "ফ্রন্টএন্ড ডেভেলপার"),
      loc("UI Engineer", "ইউআই ইঞ্জিনিয়ার"),
      loc("Design System Developer", "ডিজাইন সিস্টেম ডেভেলপার"),
    ],
    topics: [
      "Introduction", "Installation", "Configuration", "Utility Classes", "Spacing",
      "Typography", "Colors", "Flexbox", "Grid", "States & Variants",
      "Dark Mode", "Responsive Design", "Components & Reuse", "Projects",
    ],
    roadmap: [
      loc("Install and understand the build step", "ইনস্টল ও বিল্ড স্টেপ বোঝা"),
      loc("Design tokens and configuration", "ডিজাইন টোকেন ও কনফিগারেশন"),
      loc("Spacing, typography and colour utilities", "স্পেসিং, টাইপোগ্রাফি ও কালার ইউটিলিটি"),
      loc("Flexbox and Grid utilities", "ফ্লেক্সবক্স ও গ্রিড ইউটিলিটি"),
      loc("States: hover, focus, group, peer", "স্টেট: hover, focus, group, peer"),
      loc("Dark mode and responsive prefixes", "ডার্ক মোড ও রেসপন্সিভ প্রিফিক্স"),
      loc("Extract components and ship a project", "কম্পোনেন্ট আলাদা করে প্রজেক্ট ডেলিভার"),
    ],
    workflow: [
      loc("Define tokens first, then build with utilities", "আগে টোকেন ঠিক করুন, তারপর ইউটিলিটি দিয়ে বানান"),
      loc("Repeat 3 times → extract a component", "একই জিনিস ৩ বার হলে → কম্পোনেন্ট বানান"),
      loc("Use semantic token names, never raw hex in markup", "মার্কআপে র হেক্স নয়, সিমান্টিক টোকেন নাম ব্যবহার করুন"),
    ],
    best: genericBest("Tailwind", "টেইলউইন্ড"),
    mistakes: genericMistakes("Tailwind", "টেইলউইন্ড"),
    shortcuts: [
      { keys: "sm: md: lg:", action: loc("Responsive prefixes (min-width)", "রেসপন্সিভ প্রিফিক্স (min-width)") },
      { keys: "hover: focus:", action: loc("State variants", "স্টেট ভ্যারিয়েন্ট") },
      { keys: "dark:", action: loc("Dark mode variant", "ডার্ক মোড ভ্যারিয়েন্ট") },
      { keys: "[..]", action: loc("Arbitrary value, e.g. w-[42px]", "আরবিট্রারি ভ্যালু, যেমন w-[42px]") },
    ],
    cheatsheet: [
      { label: "Center", value: loc("flex items-center justify-center", "flex items-center justify-center") },
      { label: "Card", value: loc("rounded-2xl border p-6 shadow-sm", "rounded-2xl border p-6 shadow-sm") },
      { label: "Auto grid", value: loc("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", "grid gap-6 sm:grid-cols-2 lg:grid-cols-3") },
      { label: "Mobile first", value: loc("Base = mobile, prefixes scale up", "বেস = মোবাইল, প্রিফিক্সে বড় স্ক্রিন") },
    ],
    mindmap: [
      { branch: loc("Setup", "সেটআপ"), leaves: ["Installation", "Configuration", "Tokens"] },
      { branch: loc("Utilities", "ইউটিলিটি"), leaves: ["Spacing", "Typography", "Colors"] },
      { branch: loc("Layout", "লেআউট"), leaves: ["Flexbox", "Grid"] },
      { branch: loc("Adapt", "অ্যাডাপ্ট"), leaves: ["Responsive", "Dark Mode", "Variants"] },
    ],
    revision: {
      s30: loc(
        "Utilities in markup, tokens in config. Mobile first, prefixes for screens and states, dark: for dark mode.",
        "মার্কআপে ইউটিলিটি, কনফিগে টোকেন। মোবাইল ফার্স্ট, স্ক্রিন ও স্টেটের জন্য প্রিফিক্স, ডার্ক মোডে dark:।",
      ),
      m2: [
        loc("Every utility maps to one CSS declaration.", "প্রতিটি ইউটিলিটি একটি CSS ডিক্লারেশনের সমান।"),
        loc("Long class lists are fine — repetition is the real problem.", "লম্বা ক্লাস লিস্ট ঠিক আছে — সমস্যা হলো পুনরাবৃত্তি।"),
      ],
      m10: [loc("Rebuild a hero + feature grid with utilities only.", "শুধু ইউটিলিটি দিয়ে একটি হিরো ও ফিচার গ্রিড বানান।")],
    },
    faq: [
      {
        q: loc("Do I still need to learn CSS?", "তাহলে কি CSS শেখা লাগবে?"),
        a: loc("Yes — Tailwind is CSS with a shorter syntax. Fundamentals still decide your quality.", "হ্যাঁ — টেইলউইন্ড আসলে সংক্ষিপ্ত সিনট্যাক্সের CSS। মান নির্ভর করে ফান্ডামেন্টালসের উপর।"),
      },
    ],
  }),
  s({
    slug: "javascript",
    name: "JavaScript",
    nameBn: "জাভাস্ক্রিপ্ট",
    icon: "⚡",
    category: "web-development",
    tagline: loc("Make pages think, react and move", "পেজকে ভাবতে, সাড়া দিতে ও নড়তে শেখান"),
    overview: loc(
      "JavaScript adds logic and interactivity: menus, sliders, validation, calculators and data fetching. It is the language every browser speaks natively.",
      "জাভাস্ক্রিপ্ট পেজে লজিক ও ইন্টার‌্যাক্টিভিটি যোগ করে: মেনু, স্লাইডার, ভ্যালিডেশন, ক্যালকুলেটর ও ডেটা ফেচ। প্রতিটি ব্রাউজার নিজে থেকেই এই ভাষা বোঝে।",
    ),
    time: loc("80–120 hours", "৮০–১২০ ঘণ্টা"),
    difficulty: loc("Beginner → Expert", "বিগিনার → এক্সপার্ট"),
    prerequisites: [
      loc("HTML and CSS basics", "HTML ও CSS-এর বেসিক"),
      loc("Willingness to debug patiently", "ধৈর্য নিয়ে ডিবাগ করার মানসিকতা"),
    ],
    careers: [
      loc("Frontend Developer", "ফ্রন্টএন্ড ডেভেলপার"),
      loc("React Developer (next step)", "রিঅ্যাক্ট ডেভেলপার (পরবর্তী ধাপ)"),
      loc("Full-stack Developer", "ফুল-স্ট্যাক ডেভেলপার"),
    ],
    topics: [
      "Introduction", "Variables", "Data Types", "Operators", "Conditions", "Loops",
      "Functions", "Arrays", "Objects", "Array Methods", "DOM", "Events",
      "Timing", "ES6", "Modules", "Fetch API", "Error Handling", "Mini Projects",
    ],
    roadmap: [
      loc("Variables, data types and operators", "ভ্যারিয়েবল, ডেটা টাইপ ও অপারেটর"),
      loc("Conditions and loops", "কন্ডিশন ও লুপ"),
      loc("Functions and scope", "ফাংশন ও স্কোপ"),
      loc("Arrays, objects and array methods", "অ্যারে, অবজেক্ট ও অ্যারে মেথড"),
      loc("DOM selection, events and timing", "DOM সিলেকশন, ইভেন্ট ও টাইমিং"),
      loc("ES6 features and modules", "ES6 ফিচার ও মডিউল"),
      loc("Fetch API, error handling, mini projects", "ফেচ API, এরর হ্যান্ডলিং, মিনি প্রজেক্ট"),
    ],
    workflow: [
      loc("Write the logic in plain words first", "আগে সাধারণ ভাষায় লজিক লিখুন"),
      loc("Build small functions, test in the console", "ছোট ফাংশন বানান, কনসোলে পরীক্ষা করুন"),
      loc("Read the error message before searching online", "অনলাইনে খোঁজার আগে এরর মেসেজ পড়ুন"),
    ],
    best: genericBest("JavaScript", "জাভাস্ক্রিপ্ট"),
    mistakes: genericMistakes("JavaScript", "জাভাস্ক্রিপ্ট"),
    shortcuts: [
      { keys: "console.log()", action: loc("Inspect any value", "যেকোনো ভ্যালু দেখুন") },
      { keys: "F12 → Console", action: loc("Browser JavaScript console", "ব্রাউজার জাভাস্ক্রিপ্ট কনসোল") },
      { keys: "debugger", action: loc("Pause execution at this line", "এই লাইনে এক্সিকিউশন থামান") },
    ],
    cheatsheet: [
      { label: "Declare", value: loc("const by default, let when reassigning, never var", "ডিফল্টে const, পরিবর্তন হলে let, var নয়") },
      { label: "Select", value: loc("document.querySelector('.class')", "document.querySelector('.class')") },
      { label: "Listen", value: loc("el.addEventListener('click', fn)", "el.addEventListener('click', fn)") },
      { label: "Fetch", value: loc("const res = await fetch(url); const data = await res.json();", "const res = await fetch(url); const data = await res.json();") },
    ],
    mindmap: [
      { branch: loc("Basics", "বেসিক"), leaves: ["Variables", "Data Types", "Operators"] },
      { branch: loc("Logic", "লজিক"), leaves: ["Conditions", "Loops", "Functions"] },
      { branch: loc("Data", "ডেটা"), leaves: ["Arrays", "Objects", "Array Methods"] },
      { branch: loc("Browser", "ব্রাউজার"), leaves: ["DOM", "Events", "Timing", "Fetch"] },
    ],
    revision: {
      s30: loc(
        "Store data in variables, decide with conditions, repeat with loops, reuse with functions, change the page with the DOM, react with events.",
        "ভ্যারিয়েবলে ডেটা রাখুন, কন্ডিশনে সিদ্ধান্ত, লুপে পুনরাবৃত্তি, ফাংশনে পুনর্ব্যবহার, DOM দিয়ে পেজ বদলান, ইভেন্টে সাড়া দিন।",
      ),
      m2: [
        loc("=== compares value and type; == does not.", "=== ভ্যালু ও টাইপ দুটোই মেলায়; == মেলায় না।"),
        loc("map, filter, reduce replace most manual loops.", "map, filter, reduce বেশিরভাগ ম্যানুয়াল লুপের বিকল্প।"),
        loc("await pauses inside an async function until the promise settles.", "async ফাংশনের ভেতরে await প্রমিজ শেষ না হওয়া পর্যন্ত অপেক্ষা করে।"),
      ],
      m10: [
        loc("Build a to-do list with add, delete and localStorage.", "অ্যাড, ডিলিট ও localStorage সহ একটি টু-ডু লিস্ট বানান।"),
        loc("Build a calculator and a dark-mode toggle.", "একটি ক্যালকুলেটর ও ডার্ক-মোড টগল বানান।"),
        loc("Fetch and display data from a public JSON file.", "একটি পাবলিক JSON ফাইল থেকে ডেটা এনে দেখান।"),
      ],
    },
    faq: [
      {
        q: loc("Should I learn React right away?", "সাথে সাথেই কি রিঅ্যাক্ট শিখব?"),
        a: loc("No. Finish DOM, events, array methods and ES6 first — React assumes all of them.", "না। আগে DOM, ইভেন্ট, অ্যারে মেথড ও ES6 শেষ করুন — রিঅ্যাক্ট এগুলো ধরে নেয়।"),
      },
      {
        q: loc("How many projects before applying for work?", "কাজে আবেদনের আগে কতটি প্রজেক্ট?"),
        a: loc("Five finished, polished projects beat fifty half-done tutorials.", "পঞ্চাশটি অসম্পূর্ণ টিউটোরিয়ালের চেয়ে পাঁচটি সম্পূর্ণ, পরিপাটি প্রজেক্ট ভালো।"),
      },
    ],
  }),
];

export const getSkill = (slug: string) => SKILLS.find((k) => k.slug === slug);
export const skillsByCategory = (cat: string) => SKILLS.filter((k) => k.category === cat);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export function neighbours(slug: string) {
  const i = SKILLS.findIndex((k) => k.slug === slug);
  return { prev: i > 0 ? SKILLS[i - 1] : null, next: i < SKILLS.length - 1 ? SKILLS[i + 1] : null };
}

/** Spread a skill's topics across the 7 SkillVerse levels. */
export function topicLevel(index: number, total: number) {
  return Math.min(7, Math.floor((index / total) * 7) + 1);
}

export type { Loc };
