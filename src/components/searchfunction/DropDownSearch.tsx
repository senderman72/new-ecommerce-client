import { IProduct } from "../../models/IProducts";
import {
  NotinStock,
  ResultImage,
  ResultText,
  StyledDropdownContainer,
  StyledResultItem,
} from "../styled/styledsearch/StyledDropdownContainer";

interface GoogleSearchResult {
  title: string;
  link: string;
  snippet?: string;
  image?: string;
}

interface DropDownSearchProps {
  products: IProduct[];
  results: GoogleSearchResult[];
  query: string;
  closeDropdown: () => void;
}

const DropDownSearch = ({
  products,
  results,
  query,
  closeDropdown,
}: DropDownSearchProps) => {
  if (results.length === 0 && products.length === 0) return null;

  const handleProductClick = (productId: number) => {
    closeDropdown();

    window.location.href = `/products/${productId}`;
  };

  return (
    <StyledDropdownContainer>
      {products.length > 0 && (
        <div>
          {products
            .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
            .map((product) => (
              <StyledResultItem
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                {product.image && (
                  <ResultImage src={product.image} alt={product.name} />
                )}

                <ResultText>
                  {product.name}
                  {product.description && <small>{product.description}</small>}
                </ResultText>
              </StyledResultItem>
            ))}

          {results.length > 0 && (
            <div>
              {results.map((result) => (
                <StyledResultItem
                  key={result.link}
                  style={{
                    cursor: "not-allowed",
                    opacity: 0.5,
                    pointerEvents: "none",
                  }}
                >
                  {result.image && (
                    <ResultImage src={result.image} alt={result.title} />
                  )}
                  <ResultText>
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{result.title}</strong>
                      <NotinStock> tillfälligt slut</NotinStock>
                    </a>
                    {result.snippet && <small>{result.snippet}</small>}
                  </ResultText>
                </StyledResultItem>
              ))}
            </div>
          )}
        </div>
      )}
    </StyledDropdownContainer>
  );
};

export default DropDownSearch;
