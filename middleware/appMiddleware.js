

 const appMiddleware = (req,res,next) =>{
    //logic
    console.log('inside application specific middleware');
    next()//it gives controllers to the next component in the req-res cycle
}

module.exports = appMiddleware