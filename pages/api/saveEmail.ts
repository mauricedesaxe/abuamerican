import { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";

const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const API_KEY = process.env.CONVERTKIT_API_KEY;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (!email || email == "")
    res.status(500).json({ error: "No email received", data: { email } });

  axios
    .post(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      email: email,
      api_key: API_KEY,
    })
    .then(
      (response) => {
        res.status(200).json({
          status: response.status,
          statustText: response.statusText,
        });
      },
      (error) => {
        res.status(500).json({
          status: error.status,
          statustText: error.statusText,
        });
      }
    );
}
