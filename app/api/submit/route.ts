import { NextResponse } from "next/server";
import { checkDay1 } from "@/lib/checkRepo";
import { checkDay2 } from "@/lib/checkDay2";
import { checkDay3 } from "@/lib/checkDay3";

const checkers: Record<number, (repo: string) => Promise<import("@/lib/checkRepo").Check[]>> = {
  1: checkDay1,
  2: checkDay2,
  3: checkDay3,
};

export async function POST(req: Request) {
  const { day, repo } = await req.json();
  const check = checkers[day];
  if (!check || typeof repo !== "string") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
  try {
    const checks = await check(repo);
    const passed = checks.filter((c) => !c.manual).every((c) => c.pass);
    return NextResponse.json({ passed, checks });
  } catch {
    return NextResponse.json({ error: "Could not check this repository right now. Try again in a minute." }, { status: 502 });
  }
}
