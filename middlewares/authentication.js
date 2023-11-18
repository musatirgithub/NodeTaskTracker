

const authenticateUser = async (req,res,next)=>{
    const {accessToken, refreshToken} = req.signedCookies;

    try {
        if(accessToken){
            const payload = isTokenValid(accessToken);
            req.user = payload.user;
            return next();
        }

        const payload = isTokenValid(refreshToken)

        const existingToken = await Token.findOne({
            user:payload.user.userId,
            refreshToken:payload.refreshToken
        })

        if(!existingToken || !existingToken?.isValid){
            throw new CustomError.UnauthenticatedError('Authentication invalid!')
        }

        

    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication invalid!')
    }

}