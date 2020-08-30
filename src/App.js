import React from "react";
import UserPage from "./pages/user/user";
import NotFoundPage from "./pages/404/404";
import NavBar from "./components/navbar/navbar";
import UsersPage from "./pages/users/users-page";
import ProjectPage from "./pages/project/project";
import ArticlePage from "./pages/article/article";
import NewsPage from "./pages/news-page/news-page";
import AddNewsPage from "./pages/add-news/add-news";
import AddUserPage from "./pages/add-user/add-user";
import ProjectsPage from "./pages/projects/projects";
import LoginPage from "./pages/login-page/login-page";
import EditUserPage from "./pages/edit-user/edit-user";
import DepartmentPage from "./pages/department/department";
import AddProjectPage from "./pages/add-project/add-project";
import DepartmentsPage from "./pages/departments/departments";
import PersonalPage from "./pages/personal-area/personal-area";
import EditProjectPage from "./pages/edit-project/edit-project";
import EditArticlePage from "./pages/edit-article/edit-article";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PersonalEditPage from "./pages/personal-edit/personal-edit";
import AddDepartmentPage from "./pages/add-department/add-department";
import ChangePasswordPage from "./pages/change-password/change-password";
import EditDepartmentPage from "./pages/edit-department/edit-department";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="app-wrapper">
          {localStorage.getItem("neobisHUBDate") ? <NavBar /> : null}
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/news/" exact component={NewsPage} />
            <Route path="/users/" exact component={UsersPage} />
            <Route path="/user/:id/" exact component={UserPage} />
            <Route path="/add-user/" exact component={AddUserPage} />
            <Route path="/add-news/" exact component={AddNewsPage} />
            <Route path="/projects/" exact component={ProjectsPage} />
            <Route path="/project/:id/" exact component={ProjectPage} />
            <Route path="/article/:id/" exact component={ArticlePage} />
            <Route path="/personal/:id/" exact component={PersonalPage} />
            <Route path="/add-project/" exact component={AddProjectPage} />
            <Route path="/edit-user/:id/" exact component={EditUserPage} />
            <Route path="/departments/" exact component={DepartmentsPage} />
            <Route path="/department/:id/" exact component={DepartmentPage} />
            <Route
              path="/add-department/"
              exact
              component={AddDepartmentPage}
            />
            <Route
              path="/edit-project/:id/"
              exact
              component={EditProjectPage}
            />
            <Route
              path="/edit-article/:id/"
              exact
              component={EditArticlePage}
            />
            <Route
              path="/personal-edit/:id/"
              exact
              component={PersonalEditPage}
            />
            <Route
              path="/change-password/:id/"
              exact
              component={ChangePasswordPage}
            />
            <Route
              path="/edit-department/:id/"
              exact
              component={EditDepartmentPage}
            />
            <Route path="*" exact component={NotFoundPage} />

          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
