const basicValidateFields = (fields) => {

  
    const errors = {};
    console.log(fields);
    for (let field in fields) {
      fields[field] = String(fields[field])
      if (fields[field].trim() === "" || fields[field] === null) {
        {
          errors[field] = `${field} is required`;
        }
        if (field === "email" && fields[field]) {
          const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!emailRegEx.test(fields[field])) {
            errors[field] = "Invalid email";
          }
        }
        if (field === "password" && fields[field]) {
          if (fields[field].length < 6) {
            errors[field] = "Password must be at least 6 characters";
          }
        }
      }
    
    }
    return errors;
  };
  module.exports =  basicValidateFields  ;