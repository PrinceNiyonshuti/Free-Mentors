import db from '../db/db';

class userSignup {
    createUser(req, res) {
        const newUser = {
            userId: db.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            bio: req.body.bio,
            occuoation: req.body.occuoation,
            expertise: req.body.email

        }
        if(!req.body.firstName){
            res.status(400).send({
                success: 'false',
                message: 'first name is empty'
            })

        } else if(!req.body.lastName){
            res.status(400).send({
                success: 'false',
                message: 'lastName is empty'
            })

        } else if(!req.body.email){
            res.status(400).send({
                success: 'false',
                message: ' email is empty'
            })

        } else if(!req.body.password){
            res.status(400).send({
                success: 'false',
                message: 'Password is empty'
            })

        } else if(!req.body.address){
            res.status(400).send({
                success: 'false',
                message: 'Address is empty'
            })

        } else if(!req.body.bio){
            res.status(400).send({
                success: 'false',
                message: 'bio is empty'
            })

        } else if(!req.body.occupation){
            res.status(400).send({
                success: 'false',
                message: 'occupation is empty'
            })

        } else if(!req.body.expertise){
            res.status(400).send({
                success: 'false',
                message: 'Expertise is empty'
            })

        } 

        return res.status(200).send({
            success: 'true',
            message: 'user created successfully',
            details: newUser
        })
    }

}
const usersignup = new userSignup();
export default usersignup;