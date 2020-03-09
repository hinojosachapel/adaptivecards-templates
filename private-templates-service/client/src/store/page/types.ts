export interface PageState {
  currentPageTitle: string;
  currentPage: string;
  isEditingTemplateName: boolean;
}

// Action Types
export const NAVIGATION = "NAVIGATION";

export const EDIT_TEMPLATE_NAME_TOGGLE_MODAL = 'EDIT_TEMPLATE_NAME_TOGGLE_MODAL';

// Actions 
export interface ChangePageAction {
  type: typeof NAVIGATION;
  text: string;
  currentPageTitle: string;
  currentPage: string;
}

export interface TemplateNameModalAction {
  type: typeof EDIT_TEMPLATE_NAME_TOGGLE_MODAL;
  isEditingTemplateName: boolean;
}

export type PageActions = ChangePageAction | TemplateNameModalAction;
