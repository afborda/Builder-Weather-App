import { format } from "date-fns";

export const DateFormat = (date: any) => {
  const response = format(new Date(date), "dd/MM/yyyy");
  return response;
};
