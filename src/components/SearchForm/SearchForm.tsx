import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  );
};
