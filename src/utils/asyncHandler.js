// const asyncHandler=()=>{}

    const asyncHandler = (requestHandler)=>{
        (req,res,next)=>{
Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
        }
    }

export {asyncHandler}

// aH is higher order function take parameter as functn and return functn
// by using try catch
const asyncHandler=(fn)=>{
      async (req,res,next)=>{
try {

await fn(req,res,next)

} catch (error) {
    res.status(error.code || 500).json({
        success:false,
        message:error.message || "Internal server error"
    })
}
    }
}