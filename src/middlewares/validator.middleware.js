import { ApiError } from "../utils/api-error.js";
import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractErrors = [];
  errors.array().map((err) => extractErrors.push({ [err.path]: err.msg }));

  throw new ApiError(422, "Invalid data");
};

export { validate };
