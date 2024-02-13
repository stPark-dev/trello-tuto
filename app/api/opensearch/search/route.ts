// import { client } from "@/lib/opensearch";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(
    req: NextRequest,
) => {
    if (req.method !== 'GET') {
        return NextResponse.json({ message: 'Only GET requests are allowed' });
    }
    try {
        // const response = await client.search({
        //   index: 'teamvolt',
        //   // match_all 쿼리를 사용하여 모든 문서 검색
        //   body: {
        //     query: {
        //       match_all: {}
        //     }
        //   }
        // });
        // return NextResponse.json(response.body.hits.hits)
      } catch (error) {
        console.error('Search error:', error);
      }
}