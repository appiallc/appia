import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newContact = await Contact.create(data);
    return NextResponse.json({ success: true, newContact });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to submit contact" }, { status: 500 });
  }
}
