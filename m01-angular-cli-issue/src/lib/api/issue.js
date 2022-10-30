import API from "./main";

export const getIssues = async (page) => {
  try {
    const response = await API.get(`/repos/angular/angular-cli/issues`, {
      params: {
        state: 'open',
        sort: "comments",
        per_page: 10,
        page
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getIssuesByNumber = async (number) => {
  try {
    const response = await API.get(
      `/repos/angular/angular-cli/issues/${number}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
