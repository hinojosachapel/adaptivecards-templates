import {
  ChangePageAction,
  TemplateNameModalAction,
  NAVIGATION,
  EDIT_TEMPLATE_NAME_TOGGLE_MODAL,
} from "./types";

export function setPage(currentPageTitle: string, currentPage: string): ChangePageAction {
  return {
    type: NAVIGATION,
    text: "The user has changed the page",
    currentPageTitle: currentPageTitle,
    currentPage: currentPage
  }
}

export function toggleEditTemplateNameModal(isOpen: boolean): TemplateNameModalAction {
  return {
    type: EDIT_TEMPLATE_NAME_TOGGLE_MODAL,
    isEditingTemplateName: isOpen,
  }
}
