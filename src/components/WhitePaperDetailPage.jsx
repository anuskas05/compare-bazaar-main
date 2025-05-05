import { useParams, useNavigate } from "react-router-dom";
import { whitepapers } from "./whitepaperData";
import WhitepaperDetail from "./WhitepaperDetail";

const WhitePaperDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = whitepapers.find(p => p.id === parseInt(id));

  if (!paper) {
    return <div>Whitepaper not found</div>;
  }

  return (
    <WhitepaperDetail 
      paper={paper} 
      onBack={() => navigate('/whitepapers')}
    />
  );
};

export default WhitePaperDetailPage;