import { Input } from "antd";
import { useRouter } from "next/navigation";
import "./index.css";

interface Props {}

/**
 * 搜索条组件
 * 导航栏全局就一个组件，别的地方还不确定用不用，所以暂时不放到 components 里
 * @constructor
 */
const SearchInput = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className="search-input"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
    >
      <Input.Search
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        placeholder="搜索题目"
        onSearch={(value) => {
          router.push(`/questions?q=${value}`);
        }}
      />
    </div>
  );
};

export default SearchInput;
