// External packages.
import { withAuth } from "next-auth/middleware";

// Login page address must be assigned to signIn property.
//
export default withAuth({ pages: { signIn: "/" } });
//
//
//
//
//
// Protected routes must be assigned to matcher property as an array.
//
export const config = { matcher: ["/users/:path*", "/chats/:path*"] };
