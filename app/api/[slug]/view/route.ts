import { NextRequest, NextResponse } from "next/server";
import store from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { data: views, error } = await store
    .from("view")
    .select()
    .eq("slug", params?.slug)
    .single();

  if (error) {
    return NextResponse.json({ data: null, error: error });
  }
  return NextResponse.json({ data: views, error: null });
}
export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const views = Number(req?.headers?.get("views"));
  const { data: row } = await store
    .from("view")
    .select()
    .eq("slug", params?.slug)
    .single();

  if (!row) {
    const { error } = await store
      .from("view")
      .insert({ slug: params?.slug, count: 1 });
  }

  const { error } = await store
    .from("view")
    .update({ count: views + 1 })
    .eq("slug", params?.slug);
  if (error) {
    return NextResponse.json({ error: error });
  }
  return NextResponse.json({ error: null });
}
