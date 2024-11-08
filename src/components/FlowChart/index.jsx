import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import Sidebar from "./Sidebar";
import NodeWithToolbar from "./NodeWithToolbar";
import { setMockData } from "../../store/item";
import NodeEditComponentModal from "./NodeEditComponentModal";
import ButtonEdge from "./ButtonEdge";
import EdgeEditComponentModal from "./EdgeEditComponentModal";
import DownloadButton from "./DownloadButton";

import "./index.css";

const DnDFlow = ({ data, isEditMode }) => {
  const reactFlowWrapper = useRef(null);
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState(
    data?.originalData?.nodes || []
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    data?.originalData?.edges || []
  );
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [editedID, setEditedID] = useState(null);
  const [isNodeEditOpen, setisNodeEditOpen] = useState(null);

  const [editedEdgeID, setEditeEdgedID] = useState(null);
  const [isEdgeEditOpen, setisEdgeEditOpen] = useState(null);

  const [target, setTarget] = useState(null);
  const dragRef = useRef(null);

  const onNodeDragStart = (evt, node) => {
    dragRef.current = node;
  };

  const nodeTypes = useMemo(() => {
    return {
      "custom-start": (props) => (
        <NodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "custom-middle": (props) => (
        <NodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "custom-end": (props) => (
        <NodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "parent-node": (props) => (
        <NodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
    };
  }, [isEditMode]);

  const edgeTypes = useMemo(() => {
    return {
      buttonedge: (props) => <ButtonEdge isEditMode={isEditMode} {...props} />,
    };
  }, [isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: {
              nodes,
              edges,
            },
          })
        )
      );
    }
  }, [nodes, edges, isEditMode]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        params.data = {
          handleClick: setEditeEdgedID,
          type: "bezier",
          isEditMode,
        };
        params.animated = true;
        params.type = "buttonedge";
        params.style = {
          strokeWidth: 1,
          stroke: "#FF0072",
        };
        return addEdge(params, eds);
      }),
    []
  );

  const onNodeDrag = (_evt, node) => {
    const centerX = node.position.x + node.width / 2;
    const centerY = node.position.y + node.height / 2;

    const targetNode = nodes.find(
      (n) =>
        centerX > n.position.x &&
        centerX < n.position.x + n.width &&
        centerY > n.position.y &&
        centerY < n.position.y + n.height &&
        n.id !== node.id
    );

    setTarget(targetNode);
  };

  const handlNodeChange = (data) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === data.nodeId) {
          node.data = { ...node.data, label: data.newData.label };
          node.style = {
            ...node.style,
            backgroundColor: data.newData.backgroundColor,
          };
        }

        return node;
      })
    );
  };

  const handlEdgeChange = (data) => {
    setEdges((edges) =>
      edges.map((edge) => {
        if (edge.id === data.edgeId) {
          edge.data = {
            ...edge.data,
            type: data.newData.type,
          };

          edge.style = {
            ...edge.style,
            strokeWidth: data.newData.width,
            stroke: data.newData.color,
          };

          edge.animated = data.newData.animated;
        }

        return edge;
      })
    );
  };

  useEffect(() => {
    if (editedID) {
      setisNodeEditOpen(true);
    } else {
      setisNodeEditOpen(false);
    }
  }, [editedID]);

  useEffect(() => {
    if (editedEdgeID) {
      setisEdgeEditOpen(true);
    } else {
      setisEdgeEditOpen(false);
    }
  }, [editedEdgeID]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: uuidv4(),
        type,
        position,
        data: {
          label: type === "parent-node" ? " " : `${type} node`,
          handleEdit: (id) => setEditedID(id),
          isEditMode,
        },
        style: {
          borderRadius: "3px",
          backgroundColor:
            type === "parent-node" ? "rgba(239, 51, 51, 0.41)" : "#FFFFFF",
        },
        zIndex: type === "parent-node" ? 1 : 1002,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeDragStop = useCallback(
    (_evt, node) => {
      if (node.type === "parent-node") {
        return;
      }

      nodes.forEach((nd) => {
        if (nd.type === "parent-node") {
          if (nd.height && nd.width) {
            if (target?.type === "parent-node") {
              if (!node.parentNode) {
                node.parentNode = target?.id;

                node.position = {
                  x: node.positionAbsolute.x - target.position.x,
                  y: node.positionAbsolute.y - target.position.y,
                };
                setNodes((nodes) =>
                  nodes.map((n) => {
                    if (n.id === node.id) {
                      n = node;
                    }
                    return n;
                  })
                );
              }
            } else {
              if (node?.parentNode) {
                node.parentNode = undefined;
                node.position = {
                  x: node.positionAbsolute.x,
                  y: node.positionAbsolute.y,
                };
                setNodes((nodes) =>
                  nodes.map((n) => {
                    if (n.id === node.id) {
                      n = node;
                    }
                    return n;
                  })
                );
              }
            }
          }
        }
      });

      setTarget(null);
      dragRef.current = null;
    },
    [nodes, target]
  );

  return (
    <>
      <NodeEditComponentModal
        isNodeEditOpen={isNodeEditOpen}
        setEditedID={setEditedID}
        editedID={editedID}
        nodes={nodes}
        handlNodeChange={handlNodeChange}
      />
      <EdgeEditComponentModal
        isEdgeEditOpen={isEdgeEditOpen}
        setEditeEdgedID={setEditeEdgedID}
        editedID={editedEdgeID}
        edges={edges}
        handlEdgeChange={handlEdgeChange}
      />
      {isEditMode ? <Sidebar /> : <></>}
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDrag={onNodeDrag}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          onNodeDragStart={onNodeDragStart}
          onNodeDragStop={onNodeDragStop}
        >
          <MiniMap />
          <Background />
          <Controls />
          <DownloadButton />
        </ReactFlow>
      </div>
    </>
  );
};

export default function FlowChart({ data, isEditMode }) {
  return (
    <div
      className="dndflow"
      style={{
        height: "100vh",
      }}
    >
      <ReactFlowProvider>
        <DnDFlow data={data} isEditMode={isEditMode} />
      </ReactFlowProvider>
    </div>
  );
}
