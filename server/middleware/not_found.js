//Simple function which triggers when a route in backend is called but doesnt exist
const notFound=(req,res)=>res.status(404).send('Route does not exist')

module.exports=notFound