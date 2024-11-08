import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Button,
  Drawer,
  Input,
  Layout,
  Modal,
  notification,
  theme,
} from "antd";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PreviewPage from "./PreviewPage";

import CreatedList from "./CreatedList";

import SubHeader from "./SubHeader";
import MainHeader from "./MainHeader";

import "./styles.css";
import { customizeConfig, initialLayouts, initialPages } from "./constants";
import EditMenuItemsModal from "./EditMenuItems";
import FloatButtonGroup from "./FloatButtonGroup";
import CustomizeDrawer from "./CustomizeDrawer";
import { useSelector } from "react-redux";
import { editItem, publishItem } from "../../store/list";
import { useDispatch } from "react-redux";
import { getItemBySlug } from "../../store/item";

const { Content } = Layout;

const DashboardCreatPage = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const { status, published, error } = useSelector(({ list }) => list);
  const { data: editData } = useSelector((state) => state.item);
  const { slug } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const ref1 = useRef(null);
  const ref3 = useRef(null);

  const [openName, setOpenName] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [current, setCurrent] = useState("preview");
  const [layouts, setLayouts] = useState(initialLayouts);
  const [screenMode, setScreenMode] = useState("lg");
  const [pagesData, setPagesData] = useState(initialPages);
  const [visName, setVisName] = useState("");
  const [isEditMenuItemsModalOpen, setIsEditMenuItemsModalOpen] =
    useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = () => {
    api["error"]({
      message: "The URL is not valid",
      description: "Please check the puted Google doc URL",
    });
  };

  const onTopNavClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (status === "failed") {
      const message = error?.payload?.error?.message || error?.error?.message;
      api["error"]({
        message: message,
      });
    }
    if (published === "succeeded") {
      api["success"]({
        message: "Success",
      });
    }
  }, [status, error, , published]);

  const customizeSettings = useMemo(() => {
    return pagesData[selectedPage - 1].macro_panel.customizeSettings;
  }, [pagesData, selectedPage]);

  const onCustomizeSettingsChange = useCallback(
    (values) => {
      setPagesData((prevState) => {
        const temp = JSON.parse(JSON.stringify(prevState));

        temp[selectedPage - 1].macro_panel.customizeSettings = values;
        return temp;
      });
    },
    [pagesData, selectedPage]
  );

  const renderSwitch = useMemo(() => {
    switch (current) {
      case "preview":
        return (
          <PreviewPage
            jsonData={{
              originalData: {
                layouts,
                pagesData,
              },
            }}
            setLayouts={setLayouts}
            setPagesData={setPagesData}
            setSelectedPage={setSelectedPage}
          />
        );
      case "createdList":
        return <CreatedList diagramType={"dashboardConstructorNoCode"} />;
    }
  }, [current, layouts, pagesData]);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    if (slug) {
      dispatch(getItemBySlug(slug));
    }
  }, [slug]);

  useEffect(() => {
    if (editData && slug) {
      setLayouts(editData?.originalData?.layouts);
      setPagesData(editData?.originalData?.pagesData);
    }
  }, [slug, editData]);

  const onSave = () => {
    if (slug || published) {
      dispatch(
        editItem({
          is_staff: name ? true : false,
          title: name,
          slug: slug,
          diagram_type: "dashboardConstructorNoCode",
          source: {
            originalData: {
              layouts,
              pagesData,
            },
          },
        })
      );

      return;
    }
    dispatch(
      publishItem({
        title: visName,
        slug: uuidv4(),
        is_staff: name ? true : false,
        diagram_type: "dashboardConstructorNoCode",
        source: {
          originalData: {
            layouts,
            pagesData,
          },
        },
      })
    );
  };

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      {contextHolder}
      <Modal
        title="VISUALISATION NAME"
        open={openName}
        onOk={() => {
          onSave();
          setOpenName(false);
        }}
        onCancel={() => {
          setOpenName(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setOpenName(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              onSave();
              setOpenName(false);
            }}
          >
            PUBLISH
          </Button>,
        ]}
      >
        <Input
          placeholder="Name"
          value={visName}
          onChange={(e) => setVisName(e?.target?.value)}
        />
      </Modal>
      <FloatButtonGroup showDrawer={showDrawer} />
      <EditMenuItemsModal
        isEditMenuItemsModalOpen={isEditMenuItemsModalOpen}
        setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpen}
        setPagesData={setPagesData}
        pagesData={pagesData}
        selectedPage={selectedPage}
      />
      <MainHeader
        ref1={ref1}
        ref3={ref3}
        onTopNavClick={onTopNavClick}
        current={current}
      />
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <SubHeader
            setCurrentBreakpoint={setScreenMode}
            currentBreakpoint={screenMode}
            published={published}
            onSave={onSave}
            setOpenName={setOpenName}
            slug={slug}
          />

          <Content
            style={{
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "scroll",
              width: screenMode === "sm" ? "430px" : undefined,
              height: screenMode === "sm" ? "932px" : undefined,
              alignSelf: screenMode === "sm" ? "center" : undefined,
            }}
          >
            {renderSwitch}
          </Content>
        </Layout>
      </Layout>
      <Drawer
        title="Customize"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        key={`selected-${selectedPage}`}
      >
        <Button
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
          onClick={() => {
            setOpenDrawer(false);
            setIsEditMenuItemsModalOpen(true);
          }}
        >
          Edit Macro Items
        </Button>
        <CustomizeDrawer
          customizeSettings={customizeSettings}
          customizeConfig={customizeConfig}
          setCustomizeSettings={onCustomizeSettingsChange}
        />
      </Drawer>
    </Layout>
  );
};
export default DashboardCreatPage;
