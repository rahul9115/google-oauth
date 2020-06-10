const passport=require('passport');
module.exports = (app)=>{
app.get('/auth/google',passport.authenticate('google',{
    scope:['email','profile']
}))
app.get('/auth/google/callback',passport.authenticate('google')

);
app.get('/api/output',(req,res)=>{
res.send(req.user);
});
}