const  expreso  =  requerir ( "expreso" ) ;
const  bcrypt  =  require ( "bcrypt" ) ;
const  jwt  =  require ( "jsonwebtoken" ) ;
const  { verificarRefreshToken , generarToken }  =  require ( " ../lib/utils " ) ;
const  Model  =  require ( "../Model/loginModel" ) ;
const  enrutador  =  expreso . Enrutador ( ) ;