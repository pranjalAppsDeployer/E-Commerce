import React from "react";

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import {auth , createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName :'',
            email : "",
            password : "",
            confirmPassword : "",
        }
    }

    handleSubmit =async e =>{
        e.preventDefault();
        const {displayName ,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword)
        {
            alert("passwprds don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName :'',
                email : "",
                password : "",
                confirmPassword : "", 
            })
        }catch(err)
        {
            console.log(err);
        }
    }

    handleChange = event =>{
        const {name, value} =event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="'sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                     type='text'
                     name='displayName'
                     value={displayName}
                     onChange={this.handleChange}
                     label='Display Name'
                     required
                     />
                      <FormInput
                     type='email'
                     name='email'
                     value={email}
                     onChange={this.handleChange}
                     label='Email'
                     required
                     />
                     <FormInput
                     type='password'
                     name='password'
                     value={password}
                     onChange={this.handleChange}
                     label='Password'
                     required
                     />
                     <FormInput
                     type='password'
                     name='confirmPassword'
                     value={confirmPassword}
                     onChange={this.handleChange}
                     label='Confirm Password'
                     required
                     />
                     <div style={{marginBottom:20}}>
                        NOTE: Password Length should be atleast 6 digit
                    </div>
                     <CustomButtom type='submit'>SIGN UP</CustomButtom>
                </form>
            </div>
        )
    }
}
export default SignUp;