import { getPayload } from "payload";
import config from "./payload.config";

async function seed() {
  const payload = await getPayload({ config });

  console.log("🌱 Seeding database...");

  // Create admin user
  try {
    await payload.create({
      collection: "users",
      data: {
        email: "admin@neginborj.com",
        password: "admin123",
        name: "مدیر سیستم",
        role: "admin",
      },
    });
    console.log("✅ Admin user created");
  } catch (e: any) {
    console.log("⚠️ Admin user may already exist");
  }

  // Create media placeholder
  let mediaId: number | string | undefined;
  try {
    const media = await payload.create({
      collection: "media",
      data: {
        alt: "تصویر پروژه نمونه",
      },
    });
    mediaId = media.id;
    console.log("✅ Placeholder media created");
  } catch (e: any) {
    console.log("⚠️ Media creation skipped:", e.message);
  }

  // Seed projects
  const projects = [
    {
      title: "مجتمع صنعتی نفت مرکزی",
      slug: "naft-markazi",
      category: "refinery" as const,
      location: "عسلویه، بوشهر",
      tonnage: 4500,
      client: "شرکت ملی نفت ایران",
      completionDate: "2022-06-15",
    },
    {
      title: "سوله صنعتی کارخانه فولاد",
      slug: "foolad-suleh",
      category: "suleh" as const,
      location: "اصفهان",
      tonnage: 2800,
      client: "فولاد مبارکه",
      completionDate: "2021-03-20",
    },
    {
      title: "پل فلزی بزرگ رودخانه",
      slug: "pol-roodkhane",
      category: "bridge" as const,
      location: "ساری",
      tonnage: 1200,
      client: "سازمان راهداری",
      completionDate: "2023-01-10",
    },
    {
      title: "اسکلت فلزی برج مسکونی",
      slug: "borj-maskooni",
      category: "skeleton" as const,
      location: "تهران",
      tonnage: 3200,
      client: "شرکت ساختمانی پارسیان",
      completionDate: "2022-11-05",
    },
    {
      title: "پالایشگاه گاز طبیعی",
      slug: "palaeshgah-gaz",
      category: "refinery" as const,
      location: "باهنر",
      tonnage: 6200,
      client: "شرکت ملی گاز ایران",
      completionDate: "2023-08-22",
    },
  ];

  for (const project of projects) {
    try {
      await payload.create({
        collection: "projects",
        data: {
          ...project,
          coverImage: mediaId || 1,
        },
      });
      console.log(`✅ Project created: ${project.title}`);
    } catch (e: any) {
      console.log(`⚠️ Project skipped: ${project.title}`);
    }
  }

  // Seed machinery
  const beshelMachines = [
    {
      name: "دستگاه برش CNC",
      factoryLocation: "beshel" as const,
      specifications: [
        { key: "نوع", value: "پلاسما و اکسیژن" },
        { key: "ابعاد برش", value: "۱۲×۳ متر" },
        { key: "دقت", value: "±۰.۵ میلی‌متر" },
      ],
    },
    {
      name: "پرس هیدرولیک ۵۰۰ تن",
      factoryLocation: "beshel" as const,
      specifications: [
        { key: "نیرو", value: "۵۰۰ تن" },
        { key: "کوره", value: "۶ متری" },
        { key: "ظرفیت", value: "۱۶۷ تن/روز" },
      ],
    },
  ];

  const sariMachines = [
    {
      name: "دستگاه برش لیزری فیبری",
      factoryLocation: "sari" as const,
      specifications: [
        { key: "نوع", value: "فیبر لیزری" },
        { key: "توان", value: "۶۰۰۰ وات" },
        { key: "ابعاد", value: "۶×۲.۵ متر" },
      ],
    },
    {
      name: "پرس brake ۳۰۰ تن",
      factoryLocation: "sari" as const,
      specifications: [
        { key: "نیرو", value: "۳۰۰ تن" },
        { key: "طول", value: "۴ متر" },
        { key: "کاربرد", value: "خمکاری ورق" },
      ],
    },
  ];

  for (const machine of [...beshelMachines, ...sariMachines]) {
    try {
      await payload.create({
        collection: "machinery",
        data: {
          ...machine,
          image: mediaId || 1,
        },
      });
      console.log(`✅ Machine created: ${machine.name}`);
    } catch (e: any) {
      console.log(`⚠️ Machine skipped: ${machine.name}`);
    }
  }

  // Seed certifications
  const certs = [
    { title: "ISO 9001:2015", issuer: "سازمان بین‌المللی استاندارد", year: 2018 },
    { title: "ISO 14001:2015", issuer: "سازمان بین‌المللی استاندارد", year: 2019 },
    { title: "ISO 45001:2018", issuer: "سازمان بین‌المللی استاندارد", year: 2020 },
    { title: "گواهینامه صلاحیت پیمانکاری درجه یک", issuer: "وزارت راه و شهرسازی", year: 2017 },
    { title: "گواهینامه ISO 3834", issuer: "TUV", year: 2021 },
    { title: "گواهینامه EN 1090", issuer: "TÜV NORD", year: 2022 },
  ];

  for (const cert of certs) {
    try {
      await payload.create({
        collection: "certifications",
        data: {
          ...cert,
          certificateImage: mediaId || 1,
        },
      });
      console.log(`✅ Certification created: ${cert.title}`);
    } catch (e: any) {
      console.log(`⚠️ Certification skipped: ${cert.title}`);
    }
  }

  console.log("\n🎉 Seed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
