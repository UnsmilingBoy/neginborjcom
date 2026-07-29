import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/PageHero";
import { RFQForm } from "@/components/rfq/RFQForm";

export default function RFQPage() {
  return (
    <>
      <PageHero
        eyebrow="درخواست پیش‌فاکتور"
        title="درخواست پیش‌فاکتور"
        subtitle="فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند"
      />

      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <RFQForm />
          </div>
        </Container>
      </section>
    </>
  );
}
