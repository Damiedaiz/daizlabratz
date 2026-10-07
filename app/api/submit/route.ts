import { NextResponse } from "next/server";
import { checkDay1 } from "@/lib/checkRepo";

export async function POST(req: Request) {
  const { day, repo } = await req.json();
  if (day !== 1 || typeof repo !== "string") return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  const checks = await checkDay1(repo);
  const passed = checks.filter((c) => !c.manual).every((c) => c.pass);
  // TODO: persist { email, day, repo, checks, passed } and fire the "day.passed" event (unlock Day 2, notify mentor).
  return NextResponse.json({ passed, checks });
}
