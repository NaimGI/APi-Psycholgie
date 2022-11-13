export const userInputs = [
    {
      id: "username",
      label: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      type: "text",
      placeholder: "john_doe",
      required: true,
    },
    {
      id: "password",
      label: "Your Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      type: "text",
      placeholder: "********",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      type: "mail",
      placeholder: "john_doe@gmail.com",
      required: true,
    },
    {
      id: "phone",
      errorMessage:"phone number must be only Number",
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
      required: true,
    },


  ];

  export const ChildrenInputs=[
    {
      id:"first_name",
      label: "First_name",
      type: "text",
      placeholder: "Enter Your first_name",
      required:true
    },
    {
      id: "last_name",
      label: "last_name",
      type: "text",
      required:true,
      placeholder: "Enter Your last_name",
    },
    {
      id: "birthday_date",
      label: "birthday_date",
      type: "date",
      placeholder: "100",
    },
  ]
  
  export const parentsInputs = [
    {
      id:"first_name",
      label: "First_name",
      type: "text",
      required:true,
      placeholder: "Enter Your first_name",
    },
    {
      id: "last_name",
      label: "last_name",
      type: "text",
      required:true,
      placeholder: "Enter Your last_name",
    },
    {
      id:"password",
      label:"pass",
      type:"password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      placeholder:"Enter Your Password !",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "email",
      label: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      placeholder: "Enter your email",
      required: true
    },
    {
      id: "birthday_date",
      label: "birthday_date",
      type: "date",
      placeholder: "100",
    },
    {
      id:"phone",
      label:"phone number",
      errorMessage:"phone number must be only Number",
      type:"text",
      placeholder:"Enter Your phone number",
      required: true,
    }
 ]
  