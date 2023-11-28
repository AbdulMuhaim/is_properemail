function is_properemail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    return isValid;
  }
  module.exports = is_properemail

  