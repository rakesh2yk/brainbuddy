"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const result = await response.json();

  alert(result.message);
};
  return (
     <>
      <Navbar />
    <div className="max-w-4xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2">Full Name</label>

          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>
<div>
  <label className="block mb-2">Email</label>

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />
</div>
<div>
  <label className="block mb-2">Mobile</label>

  <input
    type="text"
    name="mobile"
    value={form.mobile}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />
</div>
<div>
  <label className="block mb-2">Message</label>

  <textarea
    rows="5"
    name="message"
    value={form.message}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />
</div>
<button
  type="submit"
  className="bg-blue-700 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-blue-800 transition"
>
  Submit
</button>
      </form>

    </div>
    </>
  );
}