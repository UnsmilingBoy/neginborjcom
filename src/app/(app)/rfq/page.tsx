import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { RFQForm } from "@/components/rfq/RFQForm";

export default function RFQPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="درخواست پیش‌فاکتور"
          subtitle="فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند"
        />
        <div className="max-w-2xl mx-auto mt-12">
          <RFQForm />
        </div>
      </Container>
    </section>
  );
}
