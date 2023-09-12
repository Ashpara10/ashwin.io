import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import store from "@/lib/supabase";

export async function GET  (req: NextApiRequest, { params }: { params: { slug: string } }) {
  const { data:views, error } = await store
    .from("view")
    .select()
    .eq("slug", params?.slug).single();

  if (error) {
    return NextResponse.json({ data: null, error: error });
  }
  return NextResponse.json({ data: views, error: null });
}