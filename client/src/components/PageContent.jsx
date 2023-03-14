import ChildList from "../pages/ChildList";
import NGOList from "../pages/NGOList";

const PageContent = (props) => {
  return <div>{props.NGOList ? <NGOList /> : <ChildList />}</div>;
};
export default PageContent;
