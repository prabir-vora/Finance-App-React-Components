import React from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #CED3DC;
`

const FormCard = styled.div`

  @media (max-width: 768px) {
      width: 90%;
      min-width: 380px;
      box-shadow: none;
      box-shadow: none;
      overflow: visible;
      margin: 0%
  }

  margin: 5% 0%;
  overflow: visible;
  width: 420px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px #555;
  background-color: white;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const LogoHeader = styled.label`
  text-align: center;
  color: #111;
  font-weight: bold;
  font-size: 50px;
  padding: 20px;
  font-family: 'Merriweather', serif;  
`

const AccountHeader = styled.label`
  text-align: center;
  width: 100%;
  color: #111;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Merriweather', serif;
  margin: 10px;
`

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-right: 15px;
`

const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 0.25em;
  color: #222;
  font-weight: bold;
  font-family: 'Merriweather', serif;
  width: 320px;
  padding: 10px;
`

const FormInput = styled.input`
  padding: 10px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #cfcfcf;
  font-family: 'Merriweather', serif;

  .error {
    border: 1px solid red;
  }

  .errorMessage {
    color: red;
    font-size: 0.75em;
    display: relative;
  }
`

const SubmitButton = styled.button`
  align-items: center;
  background-color: #52B788;
  width: 320px;
  color: white;
  font-size: 16px;
  margin: 1em;
  padding: 10px 10px;
  border: 2px solid #52B788;
  border-radius: 3px;
  font-family: 'Merriweather', serif;  

  &:hover {
    cursor: pointer;
    background-color: #6DBFA3;
    border: 2px solid #6DBFA3;
  }
`;

const LoginLink = styled.small`

  width: 320px;
  text-align: center;

  
  > a {
    color: #0060B6;
    text-decoration: none;
    font-size: 14px;
    
  }

  &:hover {

    color:#00A0C6; 
    text-decoration:underline; 
    cursor: pointer;
    font-size: 14px;
  }
  
`

class SignUp extends React.Component< { [label:string]: any } >{

  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit() {

  }

  public handleChange() {

  }


  render() {
    return (
      <Wrapper>
        <FormCard>
          <LogoHeader>Logo</LogoHeader>
          <AccountHeader>Create Account</AccountHeader>
          <Form onSubmit={this.handleSubmit} noValidate> 
            <FormInputContainer>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormInput 
                type="text" 
                className="" 
                name="firstName" 
                onChange={this.handleChange}
              />
            </FormInputContainer>

            <FormInputContainer>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormInput 
                type="text" 
                className="" 
                name="lastName" 
                onChange={this.handleChange}
              />
            </FormInputContainer>

            <FormInputContainer>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput 
                type="email" 
                className="" 
                name="email" 
                onChange={this.handleChange}
              />
            </FormInputContainer>
          
            <FormInputContainer>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput 
                type="password" 
                className="" 
                name="password" 
                onChange={this.handleChange}
              />
            </FormInputContainer>
            <SubmitButton>
              Sign Up
            </SubmitButton>
            <LoginLink>
              <a href="/">Already have an account?</a>
            </LoginLink>
          </Form>
        </FormCard>
      </Wrapper>
    )
  }
  
}

export default SignUp;
