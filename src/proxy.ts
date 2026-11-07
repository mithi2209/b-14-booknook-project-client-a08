
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    
    const session = await auth.api.getSession({
        headers: request.headers,
        // headers : await headers()
    })

    

    const user = session?.user

    if(!user){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();

}


// return NextResponse.redirect(new URL('/home', request.url))}

export const config = {

  matcher:  [
    "/add-books/:path*",
    "/my-books/:path*",
    "/my-borrowed-books/:path*",
    "/my-profile/:path*",
    "/book-details/:path*",
  ],
}