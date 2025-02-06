// graph implementation
class Graph {
  constructor() {
    this.graph = {};
  }

  addVertix(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.graph[vertex1]) {
      this.graph[vertex1].push(vertex2);
    }

    if (this.graph[vertex2]) {
      this.graph[vertex2].push(vertex1);
    }
  }

  print() {
    for (let key in this.graph) {
      console.log(`${key}=> ${this.graph[key].join(", ")}`);
    }
  }

  dfs(start) {
    let visited = new Set();
    let stack = [start];
    while (stack.length > 0) {
      let vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);

        this.graph[vertex].forEach((neigbour) => {
          if (!visited.has(neigbour)) {
            stack.push(neigbour);
          }
        });
      }
    }
  }

  bfs(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
      let vertex = queue.shift();

      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);

        this.graph[vertex].forEach((neigbour) => {
          if (!visited.has(neigbour)) {
            queue.push(neigbour);
          }
        });
      }
    }
  }
}

let graph = new Graph();

graph.addVertix("A");
graph.addVertix("B");
graph.addVertix("C");
graph.addVertix("D");
graph.addVertix("E");

graph.addEdge("A", "E");
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("E", "B");

// graph.print();
console.log("-------BFS-------");
graph.bfs("A");

console.log("-------DFS-------");
graph.dfs("A");
