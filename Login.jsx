import React, { useState } from 'react';

const Login = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [uppercaseValid, setUppercaseValid] = useState(false);
  const [lowercaseValid, setLowercaseValid] = useState(false);
  const [symbolValid, setSymbolValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  // Function to handle password strength validation
  const validatePassword = (inputPassword) => {
    // Regular expressions to check password criteria
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const symbolRegex = /[@$!%*?&]/;
    const numberRegex = /\d/;

    // Check if password contains uppercase letter
    if (uppercaseRegex.test(inputPassword)) {
      setUppercaseValid(true);
    } else {
      setUppercaseValid(false);
    }

    // Check if password contains lowercase letter
    if (lowercaseRegex.test(inputPassword)) {
      setLowercaseValid(true);
    } else {
      setLowercaseValid(false);
    }

    // Check if password contains symbol
    if (symbolRegex.test(inputPassword)) {
      setSymbolValid(true);
    } else {
      setSymbolValid(false);
    }

    // Check if password contains number
    if (numberRegex.test(inputPassword)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }

    // Check if password meets all criteria
    if (uppercaseRegex.test(inputPassword) && lowercaseRegex.test(inputPassword) && symbolRegex.test(inputPassword) && numberRegex.test(inputPassword) && inputPassword.length >= 8) {
      setPasswordStrength('strong');
    } else {
      setPasswordStrength('weak');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <h2 style={{ color: 'white' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        Uppercase {uppercaseValid ? <span style={{ color: 'green' }}>&#x2713;</span> : <span style={{ color: 'red' }}>&#x2717;</span>} 
        Lowercase {lowercaseValid ? <span style={{ color: 'green' }}>&#x2713;</span> : <span style={{ color: 'red' }}>&#x2717;</span>} 
        Symbol {symbolValid ? <span style={{ color: 'green' }}>&#x2713;</span> : <span style={{ color: 'red' }}>&#x2717;</span>} 
        Number {numberValid ? <span style={{ color: 'green' }}>&#x2713;</span> : <span style={{ color: 'red' }}>&#x2717;</span>} 
        {/* {passwordStrength === 'strong' ? <span style={{ color: 'green' }}>&#x2713;</span> : <span style={{ color: 'red' }}>&#x2717;</span>} Password Strength */}
        <br/>
        <button type="submit" style={{ width: '10%', padding: '10px', backgroundColor: 'white', color: 'black', marginRight: '10px' }}>Sign In</button>
        <button type="button" style={{ width: '10%', padding: '10px', backgroundColor: 'white', color: 'black' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
