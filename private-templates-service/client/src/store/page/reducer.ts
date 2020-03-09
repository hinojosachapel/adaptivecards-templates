import {
  PageState,
  NAVIGATION,
  EDIT_TEMPLATE_NAME_TOGGLE_MODAL,
  PageActions
} from './types';

const initalState: PageState = {
  currentPageTitle: "",
  currentPage: "",
  isEditingTemplateName: false,
}

export function pageReducer(state = initalState, action: PageActions): PageState {
  switch (action.type) {
    case NAVIGATION:
      return {
        ...state,
        currentPageTitle: action.currentPageTitle,
        currentPage: action.currentPage
      }
    case EDIT_TEMPLATE_NAME_TOGGLE_MODAL:
      return {
        ...state,
        isEditingTemplateName: action.isEditingTemplateName
      }
    default:
      return state;
  }
}
