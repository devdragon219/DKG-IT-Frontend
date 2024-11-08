import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AreaChartOutlined,
  OrderedListOutlined,
  TableOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Drawer,
  FloatButton,
  Input,
  Layout,
  Menu,
  Modal,
  Tour,
  notification,
  theme,
} from "antd";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { getName } from "../../constants/names";
import { CREATE_ROUTE, ROOT } from "../../constants/routes";

import UserName from "../../components/layout/UserName";
import { LoginButton } from "../../components/layout/LoginButton";
import LogoutButton from "../../components/layout/LogoutButton";
import PreviewPage from "./PreviewPage";
import DataPage from "./DataPage";
import CreatedList from "./CreatedList";
import CustomizeDrawer from "./CustomizeDrawer";

import diagrams from "./dataCallbacks";

import "./styles.css";
import axios from "axios";
import { csvToJson } from "./utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editItem, publishItem } from "../../store/list";
import { getItemBySlug } from "../../store/item";
import { LINKS_CONSTS } from "../../constants/links";
import CustomButton from "../../components/CustomButton";
import FloatButtonGroup from "./FloatButtonGroup";
import { PreviewModal } from "./PreviewModal/index.jsx";

const { Header, Content } = Layout;

const CreateDiagramPageV2 = () => {
  const { name } = useSelector((state) => state.user);
  const { data: editData } = useSelector((state) => state.item);
  const { diagramType, slug } = useParams();
  const dispatch = useDispatch();
  const { status, published, error } = useSelector(({ list }) => list);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [isDashMode, setIsDashMode] = useState(false);
  const [isPrevModalOpen, setIsPrevModalOpen] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [openTour, setOpenTour] = useState(false);

  useEffect(() => {
    if (slug) {
      dispatch(getItemBySlug(slug));
    }
  }, [diagramType, slug]);

  const steps = [
    {
      title: "Preview",
      description: "Preview your visualisation",
      cover: <img alt="tour.png" src="/assets/prevVis.webp" />,
      target: () => ref1.current?.parentElement,
    },
    {
      title: "Data",
      description: "Add your data",
      cover: <img alt="tour.png" src="/assets/DataVis.webp" />,
      target: () => ref2.current?.parentElement,
    },
    {
      title: "Created List",
      description: "Check your Created List",
      cover: <img alt="tour.png" src="/assets/listVis.webp" />,
      target: () => ref3.current?.parentElement,
    },
    {
      title: "Customize",
      description: "Customize the visualisation",
      cover: <img alt="tour.png" src="/assets/CustomizeVis.webp" />,
      target: () => ref4.current,
    },
  ];

  const noDataSteps = [
    {
      title: "Preview",
      description: "Preview your visualisation",
      cover: <img alt="tour.png" src="/assets/prevVis.webp" />,
      target: () => ref1.current?.parentElement,
    },
    {
      title: "Created List",
      description: "Check your Created List",
      cover: <img alt="tour.png" src="/assets/listVis.webp" />,
      target: () => ref3.current?.parentElement,
    },
    {
      title: "Customize",
      description: "Customize the visualisation",
      cover: <img alt="tour.png" src="/assets/CustomizeVis.webp" />,
      target: () => ref4.current,
    },
  ];

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

  useEffect(() => {
    setTimeout(() => {
      if (ref1?.current && !isDashMode) {
        setOpenTour(true);
      }
    }, [1500]);
  }, [ref1, isDashMode]);

  const items = [
    {
      key: "preview",
      label: "Preview",
      icon: <AreaChartOutlined ref={ref1} />,
    },
    {
      key: "data",
      label: "Data",
      icon: <TableOutlined ref={ref2} />,
    },
    {
      key: "createdList",
      label: "Created List",
      icon: <OrderedListOutlined ref={ref3} />,
    },
  ];

  const itemsNoData = [
    {
      key: "preview",
      label: "Preview",
      icon: <AreaChartOutlined ref={ref1} />,
    },
    {
      key: "createdList",
      label: "Created List",
      icon: <OrderedListOutlined ref={ref3} />,
    },
  ];

  const itemsDash = [
    {
      key: "preview",
      label: "Preview",
      icon: <AreaChartOutlined ref={ref1} />,
    },
    {
      key: "data",
      label: "Data",
      icon: <TableOutlined ref={ref2} />,
    },
  ];

  const [isMultiple, setIsMultiple] = useState(false);
  const [isWithoutData, setIsWithoutData] = useState(false);
  const [liveData, setLiveData] = useState(null);
  const [data, setData] = useState(null);
  const [docURL, setDocURL] = useState(null);
  const [dataSettings, setDataSettings] = useState(null);
  const [customizeSettings, setCustomizeSettings] = useState(null);
  const [dataSettingsConfig, setDataSettingsConfig] = useState(null);
  const [customizeConfig, setCustomizeConfig] = useState(null);
  const [isDOCConnected, setIsDOCConnected] = useState(null);
  const [visName, setVisName] = useState("");
  const [selectedKey, setSelectedKey] = useState("key1");
  const [customizeSettingsKey, setCustomizeSettingsKey] = useState("main");
  const [customizeConfigMain, setCustomizeConfigMain] = useState(null);

  const getJSONData = useCallback(diagrams[diagramType].callback, [
    data,
    dataSettings,
    customizeSettings,
    liveData,
  ]);

  const setLiveDataCallback = (values) => {
    if (diagrams[diagramType].liveDataCallback) {
      diagrams[diagramType].liveDataCallback(values, liveData, setLiveData);
    }
  };

  const getItemsNav = () => {
    if (isDashMode) {
      return itemsDash;
    }

    if (isWithoutData) {
      return itemsNoData;
    }

    return items;
  };

  useEffect(() => {
    if (editData && slug) {
      setData(editData?.configs?.data);
      setDocURL(editData?.configs?.docURL);
      setDataSettings(editData?.configs?.dataSettings);
      setCustomizeSettings(editData?.configs?.customizeSettings);
      setDataSettingsConfig(editData?.configs?.dataSettingsConfig);
      setCustomizeConfig(editData?.configs?.customizeConfig);
      setIsDOCConnected(editData?.configs?.isDOCConnected);
      setVisName(editData?.configs?.visName);
      setCustomizeConfigMain(editData?.configs?.customizeConfigMain);
      setIsMultiple(editData?.configs?.isMultiple);
      setIsWithoutData(editData?.configs?.withoutData);
      setLiveData(editData?.configs?.liveData);
    }
  }, [slug, editData]);

  const onSave = () => {
    if (slug || published) {
      dispatch(
        editItem({
          is_staff: name ? true : false,
          title: name,
          slug: slug,
          diagram_type: diagramType,
          source: {
            ...getJSONData(data, dataSettings, customizeSettings, liveData),
            configs: {
              data,
              docURL,
              dataSettings,
              customizeSettings,
              dataSettingsConfig,
              customizeConfig,
              isDOCConnected,
              isMultiple,
              customizeConfigMain,
              liveData,
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
        diagram_type: diagramType,
        source: {
          ...getJSONData(data, dataSettings, customizeSettings, liveData),
          configs: {
            data,
            docURL,
            dataSettings,
            customizeSettings,
            dataSettingsConfig,
            customizeConfig,
            isDOCConnected,
            customizeConfigMain,
            isMultiple,
            liveData,
          },
        },
      })
    );
  };

  useEffect(() => {
    if (diagramType && !slug) {
      const config = diagrams[diagramType].data;

      setIsWithoutData(config.withoutData);
      setIsMultiple(config.isMultiple);
      setCustomizeConfigMain(config.customizeConfigMain);
      setData(config.data);
      setDataSettings(config.dataSettings);
      setCustomizeSettings(config.customizeSettings);
      setDataSettingsConfig(config.dataSettingsConfig);
      setCustomizeConfig(config.customizeConfig);
    }
  }, [diagramType]);

  const [open, setOpen] = useState(false);
  const [openName, setOpenName] = useState(false);
  const [current, setCurrent] = useState("preview");
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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (docURL && isDOCConnected) {
      axios
        .get(docURL)
        .then((response) => {
          setData(csvToJson(response.data, true));
        })
        .catch((error) => {
          openNotificationWithIcon();
        });
    }
  }, [docURL, isDOCConnected]);

  const renderSwitch = useMemo(() => {
    switch (current) {
      case "preview":
        return (
          <PreviewPage
            setLiveData={setLiveDataCallback}
            path={LINKS_CONSTS?.[diagramType]?.lazyImport}
            jsonData={
              data
                ? getJSONData(data, dataSettings, customizeSettings, liveData)
                : {}
            }
            diagramType={diagramType}
            isEditMode={true}
          />
        );
      case "data":
        return (
          <DataPage
            dataSettingsConfig={dataSettingsConfig}
            data={data}
            setData={setData}
            setDataSettings={setDataSettings}
            dataSettings={dataSettings}
            isDOCConnected={isDOCConnected}
            setIsDOCConnected={setIsDOCConnected}
            docURL={docURL}
            setDocURL={setDocURL}
            isMultiple={isMultiple}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            setCustomizeSettings={setCustomizeSettings}
            customizeSettings={customizeSettings}
          />
        );
      case "createdList":
        return <CreatedList diagramType={diagramType} />;
    }
  }, [
    current,
    diagramType,
    data,
    customizeSettings,
    isDOCConnected,
    isMultiple,
    selectedKey,
    customizeConfig,
  ]);

  const selectedCustomizeSettings = useMemo(() => {
    if (isMultiple && customizeSettings?.[customizeSettingsKey]) {
      return customizeSettings?.[customizeSettingsKey];
    }

    return customizeSettings;
  }, [customizeSettings, customizeSettingsKey, isMultiple]);

  const selectedCustomizeConfig = useMemo(() => {
    if (isMultiple && customizeSettingsKey === "main") {
      return customizeConfigMain;
    }

    return customizeConfig;
  }, [customizeConfig, customizeSettingsKey, isMultiple, customizeConfigMain]);

  const onCustomizeSettingsChange = (values) => {
    if (isMultiple && customizeSettingsKey) {
      const datas = {
        ...customizeSettings,
        [customizeSettingsKey]: values,
      };
      setCustomizeSettings(datas);
      return;
    }

    setCustomizeSettings(values);
  };

  useEffect(() => {
    window.onmessage = function (e) {
      if (e.data.type === "DASH_MODE") {
        setIsDashMode(true);
      }

      if (e.data.type === "DASH_EDIT_MODE") {
        setIsDashMode(true);
        setData(e?.data?.data?.configs?.data);
        setDocURL(e?.data?.data?.configs?.docURL);
        setDataSettings(e?.data?.data?.configs?.dataSettings);
        setCustomizeSettings(e?.data?.data?.configs?.customizeSettings);
        setDataSettingsConfig(e?.data?.data?.configs?.dataSettingsConfig);
        setCustomizeConfig(e?.data?.data?.configs?.customizeConfig);
        setIsDOCConnected(e?.data?.data?.configs?.isDOCConnected);
        setVisName(e?.data?.data?.configs?.visName);
        setCustomizeConfigMain(e?.data?.data?.configs?.customizeConfigMain);
        setIsMultiple(e?.data?.data?.configs?.isMultiple);
        setIsWithoutData(e?.data?.data?.configs?.withoutData);
        setLiveData(e?.data?.data?.configs?.liveData);
      }

      if (e.data.type === "SAVE_MESSAGE") {
        window.top.postMessage(
          {
            data: {
              ...getJSONData(data, dataSettings, customizeSettings, liveData),
              configs: {
                data,
                docURL,
                dataSettings,
                customizeSettings,
                dataSettingsConfig,
                customizeConfig,
                isDOCConnected,
                isMultiple,
                customizeConfigMain,
                liveData,
              },
            },
            diagramType: diagramType,
            type: "SAVE_MESSAGE",
          },
          "*"
        );
      }
    };
  }, [
    data,
    docURL,
    dataSettings,
    customizeSettings,
    dataSettingsConfig,
    customizeConfig,
    isDOCConnected,
    isMultiple,
    customizeConfigMain,
    liveData,
    slug,
  ]);

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
      {isDashMode ? (
        <></>
      ) : (
        <Tour
          open={openTour}
          onClose={() => setOpenTour(false)}
          steps={isWithoutData ? noDataSteps : steps}
        />
      )}

      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to={isDashMode ? undefined : ROOT}
          style={{
            background: "#fff",
            padding: "2px 8px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={"/assets/Logo.webp"}
            alt="Logo"
            height={46}
            style={{ display: "block" }}
          />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["preview"]}
          onClick={onTopNavClick}
          selectedKeys={[current]}
          items={getItemsNav()}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "center",
          }}
        />
        {isDashMode ? (
          <></>
        ) : (
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              marginLeft: "auto",
              textAlign: "right",
            }}
          >
            <UserName />
            <LoginButton />
            <LogoutButton />
          </div>
        )}
      </Header>
      <Layout>
        {customizeSettings && (
          <FloatButtonGroup
            showDrawer={showDrawer}
            ref4={ref4}
            isMultiple={isMultiple}
            setCustomizeSettingsKey={setCustomizeSettingsKey}
            customizeSettings={customizeSettings}
          />
        )}

        <Drawer
          title="Customize"
          onClose={onClose}
          open={open}
          key={customizeSettingsKey}
        >
          <CustomizeDrawer
            customizeSettings={selectedCustomizeSettings}
            customizeConfig={selectedCustomizeConfig}
            setCustomizeSettings={onCustomizeSettingsChange}
            dataSettings={dataSettings}
            data={data}
          />
        </Drawer>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                {getName(diagramType)} Creation Page.
              </Breadcrumb.Item>
            </Breadcrumb>

            {isDashMode ? (
              <></>
            ) : (
              <div>
                <Button
                  onClick={() => {
                    setIsPrevModalOpen(true);
                  }}
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Preview
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  disabled={slug || published}
                  onClick={() => {
                    setOpenName(true);
                  }}
                  style={{
                    marginRight: "10px",
                  }}
                >
                  {slug || published ? "PUBLISHED" : "PUBLISH"}
                </Button>
                {slug || published ? (
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    onClick={() => {
                      onSave();
                    }}
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    SAVE
                  </Button>
                ) : (
                  <></>
                )}

                <CustomButton
                  variant="contained"
                  href={`${CREATE_ROUTE}${diagramType}`}
                  target="_blank"
                  underline="none"
                >
                  Open Old Version
                </CustomButton>
              </div>
            )}
          </div>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "scroll",
            }}
          >
            {data ? renderSwitch : <></>}
          </Content>
        </Layout>
      </Layout>
      <PreviewModal
        isVisible={isPrevModalOpen}
        setIsVisible={setIsPrevModalOpen}
        setLiveData={setLiveDataCallback}
        path={LINKS_CONSTS?.[diagramType]?.lazyImport}
        jsonData={
          data
            ? getJSONData(data, dataSettings, customizeSettings, liveData)
            : {}
        }
        diagramType={diagramType}
        isEditMode={true}
      />
    </Layout>
  );
};
export default CreateDiagramPageV2;
