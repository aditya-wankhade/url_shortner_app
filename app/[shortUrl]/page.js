import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongoDB";
export const page = async (params) => {
  const shortUrl = (await params).shortUrl;
  const client = await clientPromise;
  const db = client.db("URL_Shrotner");
  const collection = db.collection("URL");
  const doc = await collection.findOne({ shortUrl: shortUrl });
  console.log(doc);

  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${NEXT_PUBLIC_HOST}`);
  }
  return <div>my post : {url}</div>;
};
