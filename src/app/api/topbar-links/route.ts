import { NextResponse } from 'next/server';
import topbarLinks from '../../../lib/topbarLinks';

export async function GET() {
  return NextResponse.json(topbarLinks);
}
