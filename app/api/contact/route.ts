import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({ message: `Form is submit`, body }, { status: 200 });
}