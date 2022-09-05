import { Routes as Wrapper, Route, BrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfile from "../pages/UserProfile";
import RequireAuth from "./RequiredAuth";

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <Wrapper>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/feed" element={
                    <RequireAuth>
                        <Feed />
                    </RequireAuth>
                } />
                <Route path="/userprofile" element={<UserProfile />} />
            </Wrapper>
        </BrowserRouter>
    );
}

export default Routes;
