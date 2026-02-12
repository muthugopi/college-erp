import passport from 'passport'
import { Strategy as LocalStrategy } from "passport-local";
import { comparePassword } from '../utils/hash.mjs';
import { User } from '../models/user.model.mjs';

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            done(null, false, { message: 'User Not Found' });
        }

        const compare = await comparePassword(password, user.password);

        if (!compare)
            done(null, false, { message: "Invalid credentials" });

        return done(null, user);
    } catch(e) {
        console.log(`An error occured : ${e}`);
    }
}));

passport.serializeUser((user, done)=> {
    done(null, user._id)
});


passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).select("-password");
        done(null, user);
    } catch(e) {
        console.log(`An error occured : ${e}`);
    }
})

export default passport;