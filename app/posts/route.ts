import { NextResponse } from 'next/server'
import { postsData } from '@/data';

export async function GET() {
    return NextResponse.json(postsData);
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);

    return NextResponse.json({ id: "new_post" });
}
