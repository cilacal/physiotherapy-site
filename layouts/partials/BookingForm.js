import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", date: "", time: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Booking failed");
      }
    } catch (err) {
      setError("Booking failed");
    }
    setLoading(false);
  };

  return (
    <form className="booking-form mt-8" onSubmit={handleSubmit}>
      <h3 className="font-bold mb-4">Book an Appointment</h3>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="form-input w-full"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="form-input w-full"
        />
      </div>
      <div className="mb-3 flex gap-2">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="form-input flex-1"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="form-input flex-1"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          className="form-textarea w-full"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full mt-2"
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Appointment"}
      </button>
      {success && <p className="text-green-600 mt-2">Booking successful! Check your email for confirmation.</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
