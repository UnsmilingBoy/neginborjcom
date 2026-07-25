"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FormProgress } from "./FormProgress";
import { Step1ProjectType } from "./Step1ProjectType";
import { Step2Details } from "./Step2Details";
import { Step3Blueprint } from "./Step3Blueprint";
import { Step4Review } from "./Step4Review";
import { submitRFQ } from "@/app/actions/submitRFQ";
import { CheckCircle, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

const steps = ["نوع پروژه", "اطلاعات تماس", "فایل و توضیحات", "بررسی نهایی"];

export function RFQForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    estimatedTonnage: "",
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    timeline: "",
    notes: "",
    blueprintFileName: "",
  });

  const updateData = (partial: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
  };

  const canNext = () => {
    switch (currentStep) {
      case 0:
        return !!formData.projectType;
      case 1:
        return !!formData.companyName && !!formData.contactPerson && !!formData.phone;
      case 2:
        return true;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitRFQ(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submit error:", error);
      alert("خطا در ارسال فرم. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-charcoal mb-2">
          درخواست شما با موفقیت ارسال شد!
        </h3>
        <p className="text-slate-custom max-w-md mx-auto">
          کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت. شماره پیگیری شما
          از طریق ایمیل ارسال خواهد شد.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <FormProgress currentStep={currentStep} steps={steps} />

      <Card>
        <CardContent className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <Step1ProjectType data={formData} onChange={updateData} />
              )}
              {currentStep === 1 && (
                <Step2Details data={formData} onChange={updateData} />
              )}
              {currentStep === 2 && (
                <Step3Blueprint data={formData} onChange={updateData} />
              )}
              {currentStep === 3 && <Step4Review data={formData} />}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep((s) => s - 1)}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              مرحله قبل
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep((s) => s + 1)}
                disabled={!canNext()}
                className="gap-2 bg-amber-brand text-charcoal hover:bg-amber-dark"
              >
                مرحله بعد
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="gap-2 bg-amber-brand text-charcoal hover:bg-amber-dark"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  "ارسال درخواست"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
