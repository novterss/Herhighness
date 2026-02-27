import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    try {
        // We use facebookexternalhit user-agent which Facebook typically allows for rich previews (og tags)
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
                'Accept': 'text/html',
                'Accept-Language': 'en-US,en;q=0.9',
            },
            next: { revalidate: 86400 } // Cache response for 24 hours to avoid rate limits
        });

        if (!response.ok) {
            return NextResponse.json({ error: `Failed to fetch URL: ${response.status}` }, { status: response.status });
        }

        const html = await response.text();

        // Extract the og:image meta tag content
        const ogImageRegex = /<meta\s+(?:[^>]*?\s+)?property=["']og:image["']\s+(?:[^>]*?\s+)?content=["']([^"']+)["']/i;
        const match = html.match(ogImageRegex);

        if (match && match[1]) {
            // Decode HTML entities (like &amp;)
            let imageUrl = match[1].replace(/&amp;/g, '&');

            return NextResponse.json({ imageUrl });
        }

        return NextResponse.json({ error: 'og:image not found in HTML' }, { status: 404 });
    } catch (error: any) {
        console.error('Error fetching Facebook profile image:', error.message);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
