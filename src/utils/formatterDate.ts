import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatter = (date: Date) => {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  });
};