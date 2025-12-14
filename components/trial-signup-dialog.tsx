"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

const trialSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  phoneNumber: z.string().regex(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive SMS and phone calls to continue",
  }),
})

type TrialFormData = z.infer<typeof trialSchema>

interface TrialSignupDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TrialSignupDialog({ open, onOpenChange }: TrialSignupDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<TrialFormData>({
    resolver: zodResolver(trialSchema),
    defaultValues: {
      businessName: "",
      phoneNumber: "",
      email: "",
      terms: false,
    },
  })

  const onSubmit = async (data: TrialFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Trial signup submitted:", data)

    toast.success("Trial account created! Check your email.", {
      duration: 5000,
    })

    reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-slate-900">Start Your Free Trial</DialogTitle>
          <DialogDescription className="text-slate-600">Get 7 days free. No credit card required.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-sm font-semibold text-slate-900">
              Business Name
            </Label>
            <Input
              id="businessName"
              placeholder="Your Business Name"
              {...register("businessName")}
              className={errors.businessName ? "border-red-500" : ""}
            />
            {errors.businessName && <p className="text-sm text-red-600">{errors.businessName.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-semibold text-slate-900">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="(555) 123-4567"
              {...register("phoneNumber")}
              className={errors.phoneNumber ? "border-red-500" : ""}
            />
            {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-slate-900">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={watch("terms")}
                onCheckedChange={(checked) => setValue("terms", checked === true)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-slate-700 leading-relaxed cursor-pointer font-normal">
                I agree to receive SMS and phone calls from Relay regarding my inquiry. Message & data rates may apply.
                Frequency varies. Reply STOP to opt out.
              </Label>
            </div>
            {errors.terms && <p className="text-sm text-red-600 ml-8">{errors.terms.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0047AB] hover:bg-[#003a8c] text-white font-semibold py-6 mt-6"
          >
            {isSubmitting ? "Creating Account..." : "Start Free Trial"}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
