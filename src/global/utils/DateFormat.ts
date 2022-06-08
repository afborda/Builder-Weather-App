import { format } from "date-fns";

export const DateFormat = (date: string) => {
  return format(new Date(date), "dd/MM/yyyy");
};
