"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ChevronRight, ChevronLeft, AlertCircle, Clock, Shield, Zap } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { formatCurrency, getTimeSlots, getAvailableDates } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  serviceSlug: string;
  isEmergency: boolean;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  scheduledDate: string;
  scheduledTime: string;
  serviceNotes: string;
}

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const inputStyle: React.CSSProperties = {
  width: "100%", border: "1.5px solid #e2e8f0", borderRadius: "10px",
  padding: "11px 14px", fontSize: "0.9rem", color: "#111827",
  outline: "none", background: "#fff", transition: "border-color 0.15s",
  fontFamily: "inherit",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "#374151", marginBottom: "6px" }}>
      {children}
    </label>
  );
}

function Input({ value, onChange, placeholder, type = "text", maxLength }: {
  value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; maxLength?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      style={{ ...inputStyle, borderColor: focused ? "#f59e0b" : "#e2e8f0", boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.1)" : "none" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function Select({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ ...inputStyle, borderColor: focused ? "#f59e0b" : "#e2e8f0", boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.1)" : "none" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  );
}

function Textarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      style={{ ...inputStyle, borderColor: focused ? "#f59e0b" : "#e2e8f0", boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.1)" : "none", resize: "none" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function BookingFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";

  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<{ bookingNumber: string } | null>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    serviceSlug: preselected, isEmergency: false, fullName: "", email: "",
    phone: "", address: "", apartment: "", city: "", state: "", zip: "",
    scheduledDate: "", scheduledTime: "", serviceNotes: "",
  });

  const set = (field: keyof FormData, value: string | boolean) => {
    setForm((p) => ({ ...p, [field]: value }));
    setError("");
  };

  const selectedService = SERVICES.find((s) => s.slug === form.serviceSlug);
  const timeSlots = getTimeSlots();
  const availableDates = getAvailableDates(14);
  const emergencyFee = form.isEmergency ? (selectedService?.emergencyFee || 0) : 0;
  const totalPrice = (selectedService?.basePrice || 0) + emergencyFee;
  const deposit = selectedService?.depositAmount || 0;
  const remaining = totalPrice - deposit;

  const validate = () => {
    if (step === 1 && !form.serviceSlug) { setError("Please select a service."); return false; }
    if (step === 2) {
      if (!form.fullName.trim()) { setError("Full name is required."); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Valid email required."); return false; }
      if (form.phone.replace(/\D/g, "").length < 10) { setError("Valid 10-digit phone required."); return false; }
      if (!form.address.trim()) { setError("Service address required."); return false; }
      if (!form.city.trim()) { setError("City required."); return false; }
      if (!form.state) { setError("State required."); return false; }
      if (!/^\d{5}$/.test(form.zip)) { setError("Valid 5-digit ZIP required."); return false; }
    }
    if (step === 3) {
      if (!form.scheduledDate) { setError("Please select a date."); return false; }
      if (!form.scheduledTime) { setError("Please select a time."); return false; }
    }
    return true;
  };

  const next = () => { if (validate()) { setStep((p) => Math.min(4, p + 1) as Step); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  const back = () => { setStep((p) => Math.max(1, p - 1) as Step); setError(""); };

  const submit = async () => {
    setIsSubmitting(true); setError("");
    try {
      const res = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Server error: ${res.status}`);
      if (data.checkoutUrl) { window.location.href = data.checkoutUrl; }
      else { setBookingResult(data); setStep(4); }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong. Please try again.";
      setError(msg);
      console.error("Booking error:", msg);
    } finally { setIsSubmitting(false); }
  };

  const stepLabels = ["Service", "Your Info", "Schedule", "Review"];

  return (
    <div>
      {/* Progress */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
        {stepLabels.map((label, idx) => {
          const n = (idx + 1) as Step;
          const done = step > n;
          const active = step === n;
          return (
            <div key={label} style={{ display: "flex", flex: 1, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.8125rem", fontWeight: 700,
                  background: done ? "#f59e0b" : active ? "#0f172a" : "#f1f5f9",
                  color: done || active ? "#fff" : "#9ca3af",
                  transition: "all 0.2s",
                }}>
                  {done ? <CheckCircle style={{ width: "16px", height: "16px" }} /> : n}
                </div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: active ? "#111827" : "#9ca3af", marginTop: "4px" }}>
                  {label}
                </span>
              </div>
              {idx < stepLabels.length - 1 && (
                <div style={{ flex: 1, height: "2px", background: step > n ? "#f59e0b" : "#e2e8f0", margin: "0 6px", marginBottom: "16px", transition: "background 0.3s" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <div style={{ display: "flex", gap: "10px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "20px" }}>
          <AlertCircle style={{ width: "18px", height: "18px", color: "#ef4444", flexShrink: 0, marginTop: "1px" }} />
          <p style={{ color: "#dc2626", fontSize: "0.875rem" }}>{error}</p>
        </div>
      )}

      {/* Card */}
      <div style={{ background: "#fff", borderRadius: "20px", border: "1.5px solid #e2e8f0", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>

        {/* STEP 1: Service */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>Select a Service</h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "20px" }}>Choose the service you need below.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "20px" }}>
              {SERVICES.map((s) => {
                const selected = form.serviceSlug === s.slug;
                return (
                  <button key={s.slug} type="button" onClick={() => set("serviceSlug", s.slug)} style={{
                    textAlign: "left", padding: "14px", borderRadius: "12px",
                    border: `2px solid ${selected ? "#f59e0b" : "#e2e8f0"}`,
                    background: selected ? "#fffbeb" : "#fff",
                    cursor: "pointer", transition: "all 0.15s",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: selected ? "#92400e" : "#111827" }}>{s.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#f59e0b", fontWeight: 600, marginTop: "2px" }}>From {formatCurrency(s.basePrice)}</div>
                    </div>
                    {selected && <CheckCircle style={{ width: "18px", height: "18px", color: "#f59e0b", flexShrink: 0 }} />}
                  </button>
                );
              })}
            </div>
            {selectedService && (
              <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "14px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontWeight: 700, color: "#92400e", fontSize: "0.9375rem" }}>{selectedService.name}</span>
                  <button type="button" onClick={() => set("isEmergency", !form.isEmergency)} style={{
                    fontSize: "0.75rem", fontWeight: 700, padding: "5px 12px", borderRadius: "8px", cursor: "pointer",
                    border: `1.5px solid ${form.isEmergency ? "#ef4444" : "#e2e8f0"}`,
                    background: form.isEmergency ? "#fef2f2" : "#fff",
                    color: form.isEmergency ? "#dc2626" : "#6b7280",
                  }}>
                    {form.isEmergency ? "Emergency ON" : "+ Emergency Service"}
                  </button>
                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  {[
                    { label: "Base Price", val: `${formatCurrency(selectedService.basePrice)}+` },
                    ...(form.isEmergency ? [{ label: "Emergency Fee", val: `+${formatCurrency(selectedService.emergencyFee)}` }] : []),
                    { label: "Deposit Due Now", val: formatCurrency(deposit) },
                    { label: "Duration", val: selectedService.durationEstimate },
                  ].map((item) => (
                    <div key={item.label}>
                      <div style={{ fontSize: "0.6875rem", color: "#92400e", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "#78350f", marginTop: "2px" }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: Contact info */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>Your Information</h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "24px" }}>No account needed — just your contact and service address.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Full Name *</Label>
                <Input value={form.fullName} onChange={(v) => set("fullName", v)} placeholder="John Smith" />
              </div>
              <div>
                <Label>Email Address *</Label>
                <Input value={form.email} onChange={(v) => set("email", v)} placeholder="john@example.com" type="email" />
              </div>
              <div>
                <Label>Phone Number *</Label>
                <Input value={form.phone} onChange={(v) => set("phone", v)} placeholder="(555) 555-5555" type="tel" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Service Address *</Label>
                <Input value={form.address} onChange={(v) => set("address", v)} placeholder="123 Main Street" />
              </div>
              <div>
                <Label>Apt / Unit</Label>
                <Input value={form.apartment} onChange={(v) => set("apartment", v)} placeholder="Apt 4B" />
              </div>
              <div>
                <Label>City *</Label>
                <Input value={form.city} onChange={(v) => set("city", v)} placeholder="Chicago" />
              </div>
              <div>
                <Label>State *</Label>
                <Select value={form.state} onChange={(v) => set("state", v)}>
                  <option value="">Select state</option>
                  {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </Select>
              </div>
              <div>
                <Label>ZIP Code *</Label>
                <Input value={form.zip} onChange={(v) => set("zip", v)} placeholder="60601" maxLength={5} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Service Notes</Label>
                <Textarea value={form.serviceNotes} onChange={(v) => set("serviceNotes", v)} placeholder="Describe the issue or any access instructions..." />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Schedule */}
        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>Select Schedule</h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "24px" }}>Choose your preferred date and arrival window.</p>
            <div style={{ marginBottom: "24px" }}>
              <Label>Preferred Date *</Label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px", marginTop: "8px" }}>
                {availableDates.slice(0, 14).map((date) => {
                  const iso = date.toISOString().split("T")[0];
                  const sel = form.scheduledDate === iso;
                  return (
                    <button key={iso} type="button" onClick={() => set("scheduledDate", iso)} style={{
                      display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 6px",
                      borderRadius: "10px", border: `2px solid ${sel ? "#f59e0b" : "#e2e8f0"}`,
                      background: sel ? "#fffbeb" : "#fff", cursor: "pointer", transition: "all 0.15s",
                    }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: sel ? "#92400e" : "#6b7280" }}>
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </span>
                      <span style={{ fontSize: "1.125rem", fontWeight: 900, color: sel ? "#78350f" : "#111827", lineHeight: 1, margin: "4px 0" }}>
                        {date.getDate()}
                      </span>
                      <span style={{ fontSize: "0.625rem", fontWeight: 600, color: sel ? "#92400e" : "#9ca3af" }}>
                        {date.toLocaleDateString("en-US", { month: "short" })}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <Label>Preferred Time *</Label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginTop: "8px" }}>
                {timeSlots.map((slot) => {
                  const sel = form.scheduledTime === slot;
                  return (
                    <button key={slot} type="button" onClick={() => set("scheduledTime", slot)} style={{
                      padding: "10px 8px", borderRadius: "10px", border: `2px solid ${sel ? "#f59e0b" : "#e2e8f0"}`,
                      background: sel ? "#fffbeb" : "#fff", cursor: "pointer",
                      fontSize: "0.8125rem", fontWeight: 700, color: sel ? "#92400e" : "#374151",
                      transition: "all 0.15s",
                    }}>
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Review */}
        {step === 4 && !bookingResult && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: "20px" }}>Review & Pay Deposit</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
              {[
                {
                  label: "Service",
                  content: (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, color: "#111827" }}>{selectedService?.name}</span>
                      <span style={{ fontWeight: 700, color: "#111827" }}>{formatCurrency(totalPrice)}+</span>
                    </div>
                  ),
                },
                {
                  label: "Contact",
                  content: (
                    <div style={{ fontSize: "0.875rem", color: "#374151", display: "flex", flexDirection: "column" as const, gap: "3px" }}>
                      <span><b>Name:</b> {form.fullName}</span>
                      <span><b>Email:</b> {form.email}</span>
                      <span><b>Phone:</b> {form.phone}</span>
                      <span><b>Address:</b> {form.address}{form.apartment ? `, ${form.apartment}` : ""}, {form.city}, {form.state} {form.zip}</span>
                    </div>
                  ),
                },
                {
                  label: "Schedule",
                  content: (
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#374151" }}>
                      <span>{new Date(form.scheduledDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                      <span style={{ fontWeight: 700 }}>{form.scheduledTime}</span>
                    </div>
                  ),
                },
              ].map((row) => (
                <div key={row.label} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{row.label}</div>
                  {row.content}
                </div>
              ))}
              {/* Payment breakdown */}
              <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "12px", padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#6b7280", marginBottom: "8px" }}>
                  <span>Estimated Total</span><span style={{ fontWeight: 600, color: "#111827" }}>{formatCurrency(totalPrice)}+</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#6b7280", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #fde68a" }}>
                  <span>Remaining (after service)</span><span style={{ fontWeight: 600, color: "#111827" }}>{formatCurrency(remaining)}+</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 800, color: "#92400e" }}>Deposit Due Now</span>
                  <span style={{ fontWeight: 900, fontSize: "1.375rem", color: "#d97706" }}>{formatCurrency(deposit)}</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginBottom: "16px", lineHeight: 1.6 }}>
              By clicking &quot;Pay Deposit&quot; you agree to our Terms of Service. Remaining balance is collected after service completion.
            </p>
          </div>
        )}

        {/* Success */}
        {bookingResult && (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{ width: "72px", height: "72px", background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <CheckCircle style={{ width: "36px", height: "36px", color: "#16a34a" }} />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#111827", marginBottom: "8px" }}>Booking Confirmed!</h2>
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>
              Your booking number: <strong style={{ fontFamily: "monospace", color: "#111827" }}>{bookingResult.bookingNumber}</strong>
            </p>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>A confirmation email has been sent to {form.email}.</p>
          </div>
        )}

        {/* Nav buttons */}
        {!bookingResult && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "24px", borderTop: "1px solid #f1f5f9", marginTop: "24px" }}>
            {step > 1 ? (
              <button type="button" onClick={back} style={{
                display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, fontSize: "0.9rem",
                color: "#6b7280", background: "none", border: "none", cursor: "pointer", padding: "10px 0",
              }}>
                <ChevronLeft style={{ width: "16px", height: "16px" }} /> Back
              </button>
            ) : <div />}
            {step < 4 ? (
              <button type="button" onClick={next} disabled={step === 1 && !form.serviceSlug} style={{
                display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9375rem",
                color: "#fff", background: step === 1 && !form.serviceSlug ? "#d1d5db" : "#f59e0b",
                border: "none", cursor: step === 1 && !form.serviceSlug ? "not-allowed" : "pointer",
                padding: "12px 28px", borderRadius: "12px", transition: "background 0.15s",
              }}>
                Continue <ChevronRight style={{ width: "16px", height: "16px" }} />
              </button>
            ) : (
              <button type="button" onClick={submit} disabled={isSubmitting} style={{
                display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9375rem",
                color: "#fff", background: isSubmitting ? "#d1d5db" : "#f59e0b",
                border: "none", cursor: isSubmitting ? "not-allowed" : "pointer",
                padding: "12px 28px", borderRadius: "12px", transition: "background 0.15s",
                boxShadow: isSubmitting ? "none" : "0 4px 16px rgba(245,158,11,0.3)",
              }}>
                {isSubmitting ? "Processing..." : `Pay Deposit — ${formatCurrency(deposit)}`}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Trust badges */}
      {!bookingResult && (
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "20px", flexWrap: "wrap" }}>
          {[
            { icon: Shield, text: "Secure Checkout" },
            { icon: Clock, text: "Balance After Service" },
            { icon: Zap, text: "Same-Day Available" },
          ].map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "0.8125rem", fontWeight: 500 }}>
              <item.icon style={{ width: "14px", height: "14px", color: "#9ca3af" }} />
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div style={{ height: "500px", background: "#f8fafc", borderRadius: "20px" }} />}>
      <BookingFormInner />
    </Suspense>
  );
}
