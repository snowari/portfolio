const randomChar = () => {
  const chars =
    "!@#$%^&*()_+-=[]{}|;<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

export default randomChar;
