import database from '../config/database.js';

const handleLogin = (req , res) =>{
    try{
        database(async (accounts)=>{
            const dataLogin = req.body;

            console.log(dataLogin.userName);
            const dataloginFindUserName = await accounts.findOne({userName:dataLogin.userName});
            const dataloginFindPassword = await accounts.findOne({password:dataLogin.password});
            if(dataloginFindUserName === null || dataloginFindPassword === null){
                res.json({loginSuccess:false,errorReason:"Not Found"})
            }else{
                res.json({loginSuccess:true})
            }
        })
    }catch{
        res.json({loginSuccess:false,errorReason:"Server Error"})
    }
}

export default handleLogin;