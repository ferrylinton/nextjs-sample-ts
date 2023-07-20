import { sessionOptions } from "@/libs/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";


export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
    if (req.session.user) {
        res.json({
            ...req.session.user,
        });
    } else {
        res.json({
            username: "",
            isLoggedIn: false
        });
    }
}