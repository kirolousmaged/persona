import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, store_name, category, image_url, source } = body;

    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'Phone number is required' },
        { status: 400 }
      );
    }

    const result = await saveLead({
      name: name || 'Merchant Lead',
      phone,
      store_name,
      category,
      image_url,
      source: source || 'brand_audit',
    });

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      result,
    });
  } catch (error) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead capture' },
      { status: 500 }
    );
  }
}
