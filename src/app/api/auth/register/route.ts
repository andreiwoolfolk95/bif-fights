import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await axios.post(
      "https://api.conekta.io/customers",
      body,
      {
        headers: {
          accept: "application/vnd.conekta-v2.1.0+json",
          "Accept-Language": "es",
          "content-type": "application/json",
          authorization: `Bearer ${process.env.NEXT_PUBLIC_CONEKTA_PRIVATE_KEY}`,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
