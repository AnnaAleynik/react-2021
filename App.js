import React from "react";
import "./styles.css";

const list = [
  { title: "Note1", id: 1 },
  { title: "Notion", id: 2 }
];

const contentList = [{ type: "text", content: "Lalala", id: 1 }];

function Menu(props) {
  const { list } = props;

  return (
    <>
      <div>Note Tree</div>
      <ul>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.title}</li>
        ))}
      </ul>
    </>
  );
}

function Title(props) {
  const { title } = props;

  return <h1>{title}</h1>;
}

// class ContentBlock extends React.Component {
//   render() {
//     return (
//       <div>
//         Very strange logic with checking type and rendering edit&read mode
//       </div>
//     );
//   }
// }

function ContentBlock(props) {
  return (
    <>
      <h1>props.type</h1>
      <div>
        Very strange logic with checking type and rendering edit&read mode
      </div>
    </>
  );
}

function ListBlock(props) {
  const { contentList } = props;

  return (
    <>
      <ul>
        {props.contentList.map((contentBlock) => (
          <li key={contentBlock.id}>
            <ContentBlock
              type={contentBlock.type}
              content={contentBlock.content}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function Note(props) {
  const { title, contentList } = props;

  return (
    <>
      <Title title={title} />
      <ListBlock content={contentList} />
    </>
  );
}

function Page() {
  return (
    <>
      <Menu list={list} />
      <Note title={"Title"} contentList={contentList} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Page />
    </div>
  );
}
