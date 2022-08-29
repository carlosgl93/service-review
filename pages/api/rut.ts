import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | {
      data: {
        activities: object[];
        name: string;
        rut: string;
      };
      status: string;
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return validateRut(req, res);
    default:
      res.status(400).json({
        message: "Bad Request, method not found",
      });
  }

  res.status(200).json({ message: "Example" });
}

const api = "https://api.libreapi.cl/rut/activities";

export const validateRut = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { rut } = req.body;

  try {
    const data = await axios.get(api, {
      params: {
        rut: rut,
      },
    });
    console.log(data);

    res.status(200).json(data.data);
  } catch (error) {
    return res.status(400).json({
      message: `Hubo un error checkeando el rut ${error}`,
    });
  }
};
