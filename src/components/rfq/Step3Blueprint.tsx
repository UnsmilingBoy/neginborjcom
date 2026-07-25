"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, X } from "lucide-react";
import { useRef, useState } from "react";

interface Step3Props {
  data: {
    notes: string;
    blueprintFileName: string;
  };
  onChange: (data: Partial<Step3Props["data"]>) => void;
}

export function Step3Blueprint({ data, onChange }: Step3Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    onChange({ blueprintFileName: file.name });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold mb-3 block">
          فایل نقشه / بلوپرینت (اختیاری)
        </Label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
            dragOver
              ? "border-amber-brand bg-amber-brand/5"
              : "border-border hover:border-slate-300"
          }`}
        >
          {data.blueprintFileName ? (
            <div className="flex items-center justify-center gap-3">
              <FileText className="h-8 w-8 text-amber-brand" />
              <div>
                <p className="text-sm font-medium text-charcoal">
                  {data.blueprintFileName}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange({ blueprintFileName: "" });
                  }}
                  className="text-xs text-red-500 hover:underline flex items-center gap-1 mt-1"
                >
                  <X className="h-3 w-3" />
                  حذف فایل
                </button>
              </div>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-custom mb-1">
                فایل را اینجا رها کنید یا کلیک کنید
              </p>
              <p className="text-xs text-slate-400">
                فرمت‌های مجاز: PDF, DWG, DXF, RAR, ZIP — حداکثر ۵۰ مگابایت
              </p>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.dwg,.dxf,.rar,.zip"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileSelect(file);
          }}
        />
      </div>

      <div>
        <Label htmlFor="notes" className="text-base font-semibold">
          توضیحات اضافی
        </Label>
        <Textarea
          id="notes"
          placeholder="هرگونه توضیحات تکمیلی درباره پروژه..."
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          className="mt-2 min-h-[120px]"
        />
      </div>
    </div>
  );
}
