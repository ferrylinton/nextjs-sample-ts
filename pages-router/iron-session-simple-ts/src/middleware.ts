import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import { sessionOptions } from "./libs/session";


export const middleware = async (req: NextRequest) => {
    const res = NextResponse.next();
    const session = await getIronSession(req, res, sessionOptions);

    // do anything with session here:
    const { user } = session;

    // like mutate user:
    // user.something = someOtherThing;
    // or:
    // session.user = someoneElse;

    // uncomment next line to commit changes:
    // await session.save();
    // or maybe you want to destroy session:
    // await session.destroy();

    console.log("from middleware", { user });

    // demo:
    if (!user?.username) {
        if (req.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({ message: 'Auth required' }, { status: 401 })
        } else {
            return NextResponse.redirect(new URL(`/login`, req.url));
        }
    }

    return res;
};

export const config = {
    matcher: ['/profile', '/changepassword'],
};