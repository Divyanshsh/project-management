import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

// const healthCheck = (req, res) => {
//   try {
//     return res
//       .status(200)
//       .json(new ApiResponse(200, { message: "API is running fine" }));
//   } catch (error) {}
// };

const healthCheck = asyncHandler((req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { message: "API is running fine" }));
});

export default healthCheck;
