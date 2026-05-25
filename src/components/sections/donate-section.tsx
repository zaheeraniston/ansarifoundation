"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Shield, CreditCard, Smartphone, QrCode, CheckCircle2, ArrowRight, GraduationCap, TreePine, Building2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG } from "@/lib/constants";

const donationCategories = [
  { label: "Education Fund", Icon: GraduationCap, description: "Support literacy programs and educational infrastructure" },
  { label: "Health Fund", Icon: Heart, description: "Fund health camps, blood donation, and sanitation programs" },
  { label: "Environment Fund", Icon: TreePine, description: "Support tree plantation and clean water initiatives" },
  { label: "General Fund", Icon: Shield, description: "Support all foundation programs and operations" },
];

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

export function DonateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const bankDetails = [
    { label: "Bank Name", value: "Axis Bank", icon: Building2 },
    { label: "Branch", value: "Abhayapuri AS, Bongaigaon, 783384", icon: Building2 },
    { label: "Account No", value: "926010016329058", icon: CreditCard },
    { label: "IFSC Code", value: "UTIB0003763", icon: Shield },
  ];

  return (
    <section
      id="donate"
      className="section-padding bg-gradient-to-br from-royal via-royal-dark to-[#061a40] relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      </div>

      <div className="container-premium mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4 border border-gold/30">
            <Heart className="w-4 h-4 inline mr-1" />
            Support Our Cause
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            Your Donation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Changes Lives
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            Every rupee you donate goes directly toward empowering communities,
            educating children, and building a better future for the people of Assam.
            Your generosity makes our work possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8"
          >
            <h3 className="font-heading font-bold text-xl text-white mb-6">
              Choose Donation Amount
            </h3>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
                    selectedAmount === amount
                      ? "bg-gold text-gray-900 shadow-lg shadow-gold/25"
                      : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20"
                  }`}
                >
                  ₹{amount.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <Input
                type="number"
                placeholder="Enter custom amount (₹)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12"
              />
            </div>

            {/* Donation Categories */}
            <h4 className="text-white/80 text-sm font-medium mb-3">Select Category</h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
              {donationCategories.map((cat, i) => (
                <button
                  key={cat.label}
                  className={`p-2.5 sm:p-3 rounded-xl text-left transition-all min-h-[44px] ${
                    i === 0
                      ? "bg-gold/20 border border-gold/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <cat.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <p className="text-white text-[10px] sm:text-xs font-medium mt-1">{cat.label}</p>
                </button>
              ))}
            </div>

            {/* Donate Button */}
            <Button className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-gray-900 font-bold text-lg py-6 rounded-xl shadow-xl shadow-gold/25 hover:shadow-gold/40 transition-all">
              <Heart className="w-5 h-5 mr-2" />
              Donate ₹{selectedAmount ? selectedAmount.toLocaleString() : customAmount || "0"} Now
            </Button>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-4 mt-4 text-white/50 text-xs">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                Secure Payment
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5" />
                Encrypted
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Tax Deductible
              </span>
            </div>
          </motion.div>

          {/* Right - Payment Methods & Impact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* UPI / QR Section */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Donate via UPI
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Scan the QR code or use the UPI ID to make a direct donation. All
                transactions are secure and you will receive a confirmation receipt.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* QR Code Placeholder */}
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-xs">Scan to Donate</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 w-full text-center sm:text-left">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                      UPI ID
                    </p>
                    <div className="inline-flex sm:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <Smartphone className="w-4 h-4 text-gold" />
                      <span className="text-white text-xs sm:text-sm font-mono">
                        ansari@upi
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                      Bank Transfer
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm">
                      See bank details below
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Account Details */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Bank Account Details
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm mb-5">
                Transfer your donation directly to our bank account. Use the account number and IFSC code below for NEFT/RTGS/IMPS transfers.
              </p>

              <div className="space-y-3">
                {bankDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <detail.icon className="w-4 h-4 text-gold flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="text-white text-xs sm:text-sm font-semibold font-mono truncate">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                    {(detail.label === "Account No" || detail.label === "IFSC Code") && (
                      <button
                        onClick={() => copyToClipboard(detail.value, detail.label)}
                        className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 active:bg-gold/30 transition-all min-w-[36px] min-h-[36px]"
                        aria-label={`Copy ${detail.label}`}
                      >
                        {copiedField === detail.label ? (
                          <Check className="w-3.5 h-3.5 text-emerald" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Account holder info */}
              <div className="mt-4 p-3 rounded-xl bg-emerald/10 border border-emerald/20">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-xs sm:text-sm font-medium">
                      Account Holder: Ansari Foundation Assam
                    </p>
                    <p className="text-white/50 text-[10px] sm:text-xs mt-0.5">
                      Registered under Societies Registration Act XXI of 1860
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Cards */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">
                Your Impact
              </h3>
              <div className="space-y-4">
                {[
                  { amount: "₹500", impact: "Provides school supplies for 2 children for a month" },
                  { amount: "₹1,000", impact: "Funds a health check-up for 5 community members" },
                  { amount: "₹2,500", impact: "Plants 25 trees in a village plantation drive" },
                  { amount: "₹5,000", impact: "Sponsors a child's education for 3 months" },
                  { amount: "₹10,000", impact: "Funds a complete community health camp" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5">
                    <div className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-gold/20 text-gold text-xs sm:text-sm font-bold flex-shrink-0">
                      {item.amount}
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Statement */}
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm italic">
                &ldquo;Ansari Foundation Assam is a registered NGO. All donations are
                used transparently for our programs and initiatives. Receipts are
                provided for all contributions.&rdquo;
              </p>
              <p className="text-gold text-xs mt-2">
                Reg. No: {SITE_CONFIG.registration.number}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
