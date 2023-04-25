import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatter = (dateParam: string | undefined) => {
  const date = dateParam == undefined ? new Date() : new Date(dateParam);

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  });
};