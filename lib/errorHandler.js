class ErrorHandler {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }
  static badRequest = () =>
    new ErrorHandler(400, "request failed, please try again later");
  static userAlreadyExists = () =>
    new ErrorHandler(409, "User Already Exists with this email");

  static EmailNotFound = () =>
    new ErrorHandler(
      404,
      "Couldn’t find a LinkedIn account associated with this email. Please try again"
    );
  static IncorrectPassword = () =>
    new ErrorHandler(403, "That's not the right password");
  static loginFailed = () => new ErrorHandler(403, "Login Failed");
  static tokenNotFound = () =>
    new ErrorHandler(404, "No user exists with this token");
  static invalidToken = () =>
    new ErrorHandler(404, "The token you have provided is invalid");
  static needLogin = () => new ErrorHandler(401, "You need to login");
}

module.exports = ErrorHandler;
