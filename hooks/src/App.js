import { useClick } from "./useClick";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";
import { useTitle } from "./useTitle";

function App() {
  const maxLen = (value) => value.length < 10;
  const includeWord = (value) => !value.includes("@");
  const name = useInput("Ms..", maxLen);
  const id = useInput("", includeWord);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of Section 1 ",
    },
    {
      tab: "Section 2",
      content: "I'm the content of Section 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  const click = () => {
    console.log("click");
  };
  const title = useClick(click);

  return (
    <div className="App">
      {/* useInput */}
      <h1>useInput Study</h1>
      <input placeholder="입력하세요" {...name} />
      <input placeholder="@입력은 안되는 칸" {...id} />
      <hr />

      {/* useTabs */}
      <h1>useTabs Study</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={section.tab}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>

      {/* useClick */}
      <h1 ref={title}>useClick Test</h1>
    </div>
  );
}

export default App;
