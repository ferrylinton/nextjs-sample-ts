import { sessionOptions } from "@/libs/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = await req.body;
    try {

        if(username !== '' && username === password){
            const user = { username, isLoggedIn: true } as User;
            req.session.user = user;
            await req.session.save();
            res.status(200).json(user);
        }else{
            res.status(401).json({
                message: "Wrong credentials"
            });
        }
        
    } catch (error) {
        res.status(401).json({ message: (error as Error).message });
    }
}