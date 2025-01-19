import clientPromise from "@/lib/mongoDB";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Invalid JSON input",
        success: false,
        error: true,
      })
    );
  }
  console.log(body);

  const client = await clientPromise;
  const db = client.db("URL_Shrotner");
  const collection = db.collection("URL");

  const doc = await collection.findOne({ shortUrl: body.shortUrl });
  if (doc) {
    return new Response(
      JSON.stringify({
        message: "Shortener has already been declared",
        success: false,
        error: true,
      }),
      { status: 400 }
    );
  } else {
    await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });
  }

  return new Response(
    JSON.stringify({
      message: "Shotern added successfully",
      success: true,
      error: false,
    }),
    { status: 200 }
  );
}
