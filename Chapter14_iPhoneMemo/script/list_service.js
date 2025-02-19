function loadList(){
  //있으면 가지고 오고, 없으면 빈 배열로
  let boardDatas = localStorage.getItem('boardDatas')
  ? JSON.parse(localStorage.getItem('boardDatas')) : [];

  const boardList = document.querySelector('.board-list-container');
  boardList.innerHTML = boardDatas.map(data => `
    <li class="board-box>
      <header class="board-header">
        <h1>${data.title}(${data.writer})</h1>
      </header>
      <main class="board-main">
        <pre>${data.content}</pre>
      </main>
    </li>
    `).join("");
}

loadList();