import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string()
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  // const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
  //   return context.fetchTransactions;
  // });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const searchPostsHandler = async (data: SearchFormInputs) => {
    // await fetchTransactions(data.query);
  };


  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchFormContainer>
  );
};
