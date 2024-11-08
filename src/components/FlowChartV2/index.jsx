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
  MarkerType,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

import { v4 as uuidv4 } from "uuid";

import Sidebar from "./Sidebar";
import NodeWithToolbar from "./Nodes/NodeWithToolbar";
import { setMockData } from "../../store/item";
import NodeEditComponentModal from "./NodeEditComponentModal";
import ButtonEdge from "./ButtonEdge";
import EdgeEditComponentModal from "./EdgeEditComponentModal";
import DownloadButton from "./DownloadButton";

import "./index.css";
import TextNodeWithToolbar from "./Nodes/TextNodeWithToolbar";
import ImgNodeWithToolbar from "./Nodes/ImgNodeWithToolbar";
import DiamondShapeWithToolbar from "./Nodes/DiamondShapeWithToolbar";
import CylinderShapeWithToolbar from "./Nodes/CylinderShapeWithToolbar";
import CircleShapeWithToolbar from "./Nodes/CircleShapeWithToolbar";
import RectShapeWithToolbar from "./Nodes/RectShapeWithToolbar";
import HexShapeWithToolbar from "./Nodes/HexShapeWithToolbar";
import ArrowShapeWithToolbar from "./Nodes/ArrowShapeWithToolbar";
import TriangleShapeWithToolbar from "./Nodes/TriangleShapeWithToolbar";
import ParallelogramShapeWithToolbar from "./Nodes/ParallelogramShapeWithToolbar";
import PlusShapeWithToolbar from "./Nodes/PlusShapeWithToolbar";
import TextNodeEditComponentModal from "./TextNodeEditComponentModal";
import ImgEditComponentModal from "./ImgEditComponentModal";
import { getNodeByID } from "./utils";
import DescriptionModal from "./DescriptionModal";

const DnDFlow = ({ data, isEditMode, setLiveData }) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    data?.originalData?.nodes || []
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    data?.originalData?.edges || []
  );
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [editedID, setEditedID] = useState(null);
  const [descriptionID, setDescriptionID] = useState(null);
  const [editedTextID, setEditedTextID] = useState(null);
  const [editedImgID, setEditedImgID] = useState(null);
  const [isNodeEditOpen, setisNodeEditOpen] = useState(null);
  const [isTextNodeEditOpen, setIsTextNodeEditOpen] = useState(null);
  const [isImgNodeEditOpen, setIsImgNodeEditOpen] = useState(null);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);

  const [editedEdgeID, setEditeEdgedID] = useState(null);
  const [isEdgeEditOpen, setisEdgeEditOpen] = useState(null);

  const [target, setTarget] = useState(null);
  const dragRef = useRef(null);

  const customizeSettings = data?.originalData?.customizeSettings;

  const onNodeDragStart = (evt, node) => {
    dragRef.current = node;
  };

  const nodeTypes = useMemo(() => {
    return {
      node: (props) => <NodeWithToolbar isEditMode={isEditMode} {...props} />,
      "parent-node": (props) => (
        <NodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "text-node": (props) => (
        <TextNodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "img-node": (props) => (
        <ImgNodeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "circle-shape": (props) => (
        <CircleShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "rect-shape": (props) => (
        <RectShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "hex-shape": (props) => (
        <HexShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "diamond-shape": (props) => (
        <DiamondShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "arrow-shape": (props) => (
        <ArrowShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "cylinder-shape": (props) => (
        <CylinderShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "triangle-shape": (props) => (
        <TriangleShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "parallelogram-shape": (props) => (
        <ParallelogramShapeWithToolbar isEditMode={isEditMode} {...props} />
      ),
      "plus-shape": (props) => (
        <PlusShapeWithToolbar isEditMode={isEditMode} {...props} />
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
      setLiveData({ nodes, edges });
    }
  }, [nodes, edges, isEditMode]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        params.data = {
          handleClick: setEditeEdgedID,
          type: "straight",
          floating: false,
          arrowStart: false,
          arrowEnd: true,
          isEditMode,
        };

        params.markerEnd = {
          type: MarkerType.Arrow,
          width: 20,
          height: 20,
          color: "#FF0072",
          display: "none",
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
          node.data = {
            ...node.data,
            label: data.newData.label,
            color: data.newData.color,
            backgroundColor: data.newData.backgroundColor,
            text: data.newData.text,
            imglink: data?.newData?.imglink,
            hasDescription: data?.newData?.hasDescription,
            nodeDescription: data?.newData?.nodeDescription,
          };
          node.style = {
            ...node.style,
            backgroundColor: node.type.includes("shape")
              ? "transparent"
              : data.newData.backgroundColor,
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
            floating: data.newData.floating,
            arrowStart: data.newData.arrowStart,
            arrowEnd: data.newData.arrowEnd,
          };

          edge.style = {
            ...edge.style,
            strokeWidth: data.newData.width,
            stroke: data.newData.color,
          };
          edge.markerEnd = {
            ...edge.markerEnd,
            color: data.newData.color,
          };

          if (data.newData.arrowStart) {
            edge.markerStart = {
              type: MarkerType.Arrow,
              width: 20,
              height: 20,
              orient: "auto-start-reverse",
              color: data.newData.color,
            };
          } else {
            edge.markerStart = undefined;
          }

          if (data.newData.arrowEnd) {
            edge.markerEnd = {
              type: MarkerType.Arrow,
              width: 20,
              height: 20,
              color: data.newData.color,
            };
          } else {
            edge.markerEnd = undefined;
          }

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
    if (editedTextID) {
      setIsTextNodeEditOpen(true);
    } else {
      setIsTextNodeEditOpen(false);
    }
  }, [editedTextID]);

  useEffect(() => {
    if (editedImgID) {
      setIsImgNodeEditOpen(true);
    } else {
      setIsImgNodeEditOpen(false);
    }
  }, [editedImgID]);

  useEffect(() => {
    if (editedEdgeID) {
      setisEdgeEditOpen(true);
    } else {
      setisEdgeEditOpen(false);
    }
  }, [editedEdgeID]);

  useEffect(() => {
    const node = getNodeByID(nodes, descriptionID);

    if (node?.data?.hasDescription && descriptionID) {
      setIsDescriptionModalOpen(true);
    } else {
      setIsDescriptionModalOpen(false);
    }
  }, [descriptionID, nodes]);

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

      const getItitBackground = (type) => {
        if (type === "parent-node") {
          return {
            colorData: "rgba(239, 51, 51, 0.41)",
            backColor: "rgba(239, 51, 51, 0.41)",
          };
        }
        if (type.includes("shape")) {
          if (type.includes("circle") || type.includes("rect")) {
            return { colorData: "#408455", backColor: "transparent" };
          }
          if (type.includes("hex") || type.includes("plus")) {
            return { colorData: "#cf4c2b", backColor: "transparent" };
          }
          if (type.includes("diamond")) {
            return { colorData: "#ea9b41", backColor: "transparent" };
          }
          if (type.includes("arrow") || type.includes("parallelogram")) {
            return { colorData: "#654ca4", backColor: "transparent" };
          }
          if (type.includes("cylinder")) {
            return { colorData: "#ebc247", backColor: "transparent" };
          }

          if (type.includes("triangle")) {
            return { colorData: "#3f89e1", backColor: "transparent" };
          }

          return { colorData: "#398bbc", backColor: "transparent" };
        } else {
          return { colorData: "transparent", backColor: "transparent" };
        }
      };

      const newNode = {
        id: uuidv4(),
        type,
        position,
        data: {
          label: type === "parent-node" ? " " : `${type} node`,
          handleEdit: (id, type) => {
            if (type === "text-node") {
              setEditedTextID(id);
              return;
            }

            if (type === "img-node") {
              setEditedImgID(id);
              return;
            }

            setEditedID(id);
          },
          handleOpenDescription: (id) => {
            setDescriptionID(id);
          },
          isEditMode,
          color: "#222",
          backgroundColor: getItitBackground(type).colorData,
          text: "<div><strong>Text</strong></div>",
          imglink:
            type === "img-node"
              ? "https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
              : undefined,
          nodeDescription: "",
          hasDescription: false,
        },
        style: {
          width:
            type === "img-node" ||
            type === "parent-node" ||
            type.includes("shape")
              ? "100px"
              : undefined,
          height:
            type === "img-node" ||
            type === "parent-node" ||
            type.includes("shape")
              ? "100px"
              : undefined,
          borderRadius: "3px",
          backgroundColor: getItitBackground(type).backColor,
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
  const nodeClassName = (node) => node.type;
  return (
    <>
      <NodeEditComponentModal
        isNodeEditOpen={isNodeEditOpen}
        setEditedID={setEditedID}
        editedID={editedID}
        nodes={nodes}
        handlNodeChange={handlNodeChange}
      />
      <TextNodeEditComponentModal
        isTextNodeEditOpen={isTextNodeEditOpen}
        setEditedID={setEditedTextID}
        editedID={editedTextID}
        nodes={nodes}
        handlNodeChange={handlNodeChange}
      />
      <ImgEditComponentModal
        isImgNodeEditOpen={isImgNodeEditOpen}
        setEditedID={setEditedImgID}
        editedID={editedImgID}
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
      <DescriptionModal
        setOpen={setIsDescriptionModalOpen}
        open={isDescriptionModalOpen}
        setDescriptionID={setDescriptionID}
        descriptionID={descriptionID}
        nodes={nodes}
      />

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
          style={{
            backgroundColor: customizeSettings?.BackgroundColor,
          }}
        >
          <Panel position="top-left">{isEditMode ? <Sidebar /> : <></>}</Panel>
          {customizeSettings?.MiniMap && (
            <MiniMap zoomable pannable nodeClassName={nodeClassName} />
          )}
          <Background
            id="Background-flow"
            variant={customizeSettings?.BackgroundVariant}
          />
          {customizeSettings?.Controls && <Controls />}
          {customizeSettings?.DownloadButton && (
            <DownloadButton color={customizeSettings?.BackgroundColor} />
          )}
        </ReactFlow>
      </div>
    </>
  );
};

export default function FlowChartV2({
  data,
  isEditMode,
  setLiveData,
  isPreviewMode,
}) {
  return (
    <div
      className="dndflow"
      style={{
        height: isEditMode || isPreviewMode ? "100%" : "100vh",
      }}
    >
      <ReactFlowProvider>
        <DnDFlow
          data={data}
          isEditMode={isEditMode}
          setLiveData={setLiveData}
        />
      </ReactFlowProvider>
    </div>
  );
}
