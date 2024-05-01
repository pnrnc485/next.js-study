import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { notFound, usePathname } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  // const id = usePathname()!.split("/").pop();
  const id = req.url.split("/blog/")[1];
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(post, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  // const id = usePathname()!.split("/").pop();
  const id = req.url.split("/blog/")[1];
  const { data: deleteError, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  return NextResponse.json({ status: 200 });
}
