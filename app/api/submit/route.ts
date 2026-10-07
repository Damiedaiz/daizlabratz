import { NextResponse } from "next/server";
import { checkDay1 } from "@/lib/checkRepo";
import { checkDay2 } from "@/lib/checkDay2";

export async function POST(req: Request) {
  const { day, repo } = await req.json();
  if (![1, 2].includes(day) || typeof repo !== "string") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
  try {
    const checks = day === 1 ? await checkDay1(repo) : await checkDay2(repo);
    const passed = checks.filter((c) => !c.manual).every((c) => c.pass);
    // TODO: persist { day, repo, checks, passed } if you add one-on-one records later.
    return NextResponse.json({ passed, checks });
  } catch {
    return NextResponse.json({ error: "Could not check this repository right now. Try again in a minute." }, { status: 502 });
  }
}