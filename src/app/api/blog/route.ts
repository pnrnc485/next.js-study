import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  let { data: posts, error } = await supabase.from("posts").select("*");
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(posts, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content, imageId } = await req.json();

  const { data: post, error } = await supabase
    .from("posts")
    .insert([
      { id, title, content, imageId, createdAt: new Date().toISOString() },
    ]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(post, { status: 201 });
}
