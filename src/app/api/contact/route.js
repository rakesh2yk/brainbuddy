import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const { fullname, email, mobile, message } = data;

    await db.execute(
      `INSERT INTO contact(fullname,email,mobile,message)
       VALUES (?,?,?,?)`,
      [fullname, email, mobile, message]
    );

    return NextResponse.json({
      success: true,
      message: "Data saved successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Database Error",
    });
  }
}