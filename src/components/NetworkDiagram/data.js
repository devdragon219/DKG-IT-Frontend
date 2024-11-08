export const nodes = [
  // Central nodes connecting clusters
  { id: 1001, label: "Central1", shape: "diamond", size: 20 },
  { id: 1002, label: "Central2", shape: "diamond", size: 20 },
  { id: 1003, label: "Central3", shape: "diamond", size: 20 },
  { id: 1004, label: "Central4", shape: "diamond", size: 20 },

  // Main nodes for clusters
  { id: 1, label: "Cluster1", shape: "dot", size: 30, group: "cluster" },
  { id: 2, label: "Cluster2", shape: "dot", size: 30, group: "cluster" },
  { id: 3, label: "Cluster3", shape: "dot", size: 30, group: "cluster" },
  { id: 4, label: "Cluster4", shape: "dot", size: 30, group: "cluster" },

  // Nodes for Cluster1
  { id: 101, label: "Node1-1", group: "1" },
  { id: 102, label: "Node1-2", group: "1" },
  { id: 103, label: "Node1-3", group: "1" },

  // Nodes for Cluster2
  { id: 201, label: "Node2-1", group: "2" },
  { id: 202, label: "Node2-2", group: "2" },
  { id: 203, label: "Node2-3", group: "2" },

  // Nodes for Cluster3
  { id: 301, label: "Node3-1", group: "3" },
  { id: 302, label: "Node3-2", group: "3" },
  { id: 303, label: "Node3-3", group: "3" },

  // Nodes for Cluster4
  { id: 401, label: "Node4-1", group: "4" },
  { id: 402, label: "Node4-2", group: "4" },
  { id: 403, label: "Node4-3", group: "4" },
];

// Define edges
export const edges = [
  // Edges within Cluster1
  { from: 1, to: 101 },
  { from: 1, to: 102 },
  { from: 1, to: 103 },

  // Edges within Cluster2
  { from: 2, to: 201 },
  { from: 2, to: 202 },
  { from: 2, to: 203 },

  // Edges within Cluster3
  { from: 3, to: 301 },
  { from: 3, to: 302 },
  { from: 3, to: 303 },

  // Edges within Cluster4
  { from: 4, to: 401 },
  { from: 4, to: 402 },
  { from: 4, to: 403 },

  // Inter-cluster connections via central nodes
  { from: 1001, to: 1 },
  { from: 1001, to: 2 },
  { from: 1002, to: 2 },
  { from: 1002, to: 3 },
  { from: 1003, to: 3 },
  { from: 1003, to: 4 },
  { from: 1004, to: 4 },
  { from: 1004, to: 1 },
  { from: 1001, to: 1002 },
  { from: 1002, to: 1003 },
  { from: 1003, to: 1004 },
  { from: 1004, to: 1001 },
];
