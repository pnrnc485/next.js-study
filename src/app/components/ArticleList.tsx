import Link from "next/link";
import React from "react";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000×500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="flex flex-col bg-white justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/1/17</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            libero non magnam exercitationem error corrupti neque voluptate
            consequuntur quo officia veritatis illum a veniam blanditiis odit
            animi, deleniti quod maxime.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
