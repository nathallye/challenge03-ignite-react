import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PostsContext } from "../../contexts/PostsContext";

import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string()
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { fetchPosts } = useContext(PostsContext);

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  const searchPostsHandler = async (data: SearchFormInputs) => {
    await fetchPosts(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchPostsHandler)}>
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
