import { useParams } from "react-router-dom";
import articles from "./articles";
import ContentContainer from "./ContentContainer";

const Article = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.id == articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  if (article.tag) return <ContentContainer>{article.tag}</ContentContainer>;
};

export default Article;
