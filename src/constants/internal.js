import {
  ACCOUNTING_DEPT,
  ADMIN_TECH_DEPT,
  BIZDEVTECH_DEPT,
  BUSS_INT_DEP,
  DASHBOARDS_TOOLS,
  DATA_SCIENCE_TECH_DEPT,
  DKG_INTERNAL_SECTION,
  DOMAINS_REGISTRY,
  GENERIC_PASSWORDS,
  IT_DEPT,
  LEGAL_TECH_DEPT,
  ORGANISATIONAL_STRUCTURE,
  PHILANTHROPY_DEPT,
  REGISTERIES_MENU,
  REGISTERY_DASHBOARD,
  LONGEVITY_GPT,
  LEGAL_EAGLE_GPT,
  IT_DEPT_GPT,
  DATA_MNGMNT_GPT,
  AI_UK_DATABASE,
  AI_ECOSYSTEM_DATABASE,
  PHILANTRHROPY_INTERNATIONAL,
  HUBSPOT_METRICS,
  GOOGLE_ANALYTICS,
  FEMTECH_ANALYTICS_LINKEDIN,
  AIIA_SOCIAL_MEDIA_ANALYTICS,
  AIIA,
  COMPARATIVE_ANALYSIS_LINKEDIN,
  INVEST_IN_UKRAINE_TECH,
  GLOBAL_AI_ECOSYSTEM,
  DATA_ANALYTICS_PLATFORM,
  ORGANIZATIONS,
  PERSONALITIES,
  CUSTOM_ENTITIES,
  GENERIC_I_FRAMES,
  MINDMAPS,
  DASHBOARDS_MENU,
  DATABOX_DASHBOARDS_SECTION,
  DATABASE_MANAGEMENT_SYSTEM_MENU,
  AI_AGENTS_SECTION,
} from "./diagram";

export const INTERNAL_SECTIONS = {
  [DKG_INTERNAL_SECTION]: [
    ORGANISATIONAL_STRUCTURE,
    BUSS_INT_DEP,
    IT_DEPT,
    ADMIN_TECH_DEPT,
    LEGAL_TECH_DEPT,
    DATA_SCIENCE_TECH_DEPT,
    BIZDEVTECH_DEPT,
    ACCOUNTING_DEPT,
    PHILANTHROPY_DEPT,
  ],
  [REGISTERIES_MENU]: [
    REGISTERY_DASHBOARD,
    GENERIC_PASSWORDS,
    DOMAINS_REGISTRY,
  ],
  [AI_AGENTS_SECTION]: [
    LONGEVITY_GPT,
    LEGAL_EAGLE_GPT,
    IT_DEPT_GPT,
    DATA_MNGMNT_GPT,
  ],
  [DASHBOARDS_MENU]: [DASHBOARDS_MENU],
  [DATABOX_DASHBOARDS_SECTION]: [
    AI_UK_DATABASE,
    AI_ECOSYSTEM_DATABASE,
    PHILANTRHROPY_INTERNATIONAL,
    HUBSPOT_METRICS,
    GOOGLE_ANALYTICS,
    FEMTECH_ANALYTICS_LINKEDIN,
    AIIA_SOCIAL_MEDIA_ANALYTICS,
    AIIA,
    COMPARATIVE_ANALYSIS_LINKEDIN,
    INVEST_IN_UKRAINE_TECH,
    GLOBAL_AI_ECOSYSTEM,
    DATA_ANALYTICS_PLATFORM,
  ],
  [DATABASE_MANAGEMENT_SYSTEM_MENU]: [
    ORGANIZATIONS,
    PERSONALITIES,
    CUSTOM_ENTITIES,
    GENERIC_I_FRAMES,
    MINDMAPS,
    DASHBOARDS_TOOLS,
  ],
};
