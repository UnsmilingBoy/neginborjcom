"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Step2Props {
  data: {
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    timeline: string;
  };
  onChange: (data: Partial<Step2Props["data"]>) => void;
}

export function Step2Details({ data, onChange }: Step2Props) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="companyName" className="text-base font-semibold">
          نام شرکت *
        </Label>
        <Input
          id="companyName"
          placeholder="نام شرکت یا سازمان"
          value={data.companyName}
          onChange={(e) => onChange({ companyName: e.target.value })}
          className="mt-2"
          required
        />
      </div>

      <div>
        <Label htmlFor="contactPerson" className="text-base font-semibold">
          نام و نام خانوادگی تماس‌گیرنده *
        </Label>
        <Input
          id="contactPerson"
          placeholder="نام کامل"
          value={data.contactPerson}
          onChange={(e) => onChange({ contactPerson: e.target.value })}
          className="mt-2"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-base font-semibold">
            شماره تماس *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className="mt-2"
            dir="ltr"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-base font-semibold">
            ایمیل
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="mt-2"
            dir="ltr"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="timeline" className="text-base font-semibold">
          زمان‌بندی مورد نظر
        </Label>
        <Input
          id="timeline"
          placeholder="مثلاً ۳ ماهه"
          value={data.timeline}
          onChange={(e) => onChange({ timeline: e.target.value })}
          className="mt-2"
        />
      </div>
    </div>
  );
}
