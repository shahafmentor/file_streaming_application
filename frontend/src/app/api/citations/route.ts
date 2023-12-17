'use server';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const fileName = req.nextUrl.searchParams.get('file_name');
  const response = await fetch(`http://127.0.0.1:8000/file/${fileName}`);

  if (!response.ok) {
    return new Response('File not found.', {
      status: 404,
    });
  }

  const mimeType = 'application/pdf';
  
  return new Response(response.body, {
    status:200,
    headers: new Headers({
        'content-type':mimeType
    })
  })
}
