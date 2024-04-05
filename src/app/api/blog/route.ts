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
